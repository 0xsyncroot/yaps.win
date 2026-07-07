'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';

const languages = [
  { code: 'en', name: 'English', flag: 'US' },
  { code: 'vi', name: 'Tiếng Việt', flag: 'VN' },
];

const FlagIcon = ({ code }: { code: string }) => (
  <span className="inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-slate-200 shadow-sm">
    <img
      src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
      width="20"
      alt={code}
      className="h-full w-full object-cover"
    />
  </span>
);

// ── Language persistence + content cache ─────────────────────────────────────
// Remember the reader's language across visits, and cache fetched markdown so
// switching language (or revisiting a doc) is instant — no spinner, no reload.
const LANG_STORAGE_KEY = 'rg-docs-lang';

function getStoredLang(): string | null {
  try {
    return typeof window !== 'undefined' ? window.localStorage.getItem(LANG_STORAGE_KEY) : null;
  } catch {
    return null;
  }
}

function storeLang(lang: string) {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* storage disabled (private mode) — language still works for this session */
  }
}

const docCache = new Map<string, string>();

async function fetchDoc(doc: string, lang: string): Promise<string> {
  const key = `${doc}-${lang}`;
  const cached = docCache.get(key);
  if (cached !== undefined) return cached;

  const res = await fetch(`/docs/${doc}-${lang}.md`);
  if (!res.ok) throw new Error(`Document not found: ${res.status}`);
  const text = await res.text();
  docCache.set(key, text);
  return text;
}

// Warm the cache for a doc/lang in the background; failures are harmless.
function prefetchDoc(doc: string, lang: string) {
  fetchDoc(doc, lang).catch(() => {});
}

function DocsTOC({ currentLang, currentDoc }: { currentLang: string; currentDoc: string }) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);

  useEffect(() => {
    async function loadTOC() {
      try {
        const text = await fetchDoc(currentDoc, currentLang);
        const headingRegex = /^(#{1,4})\s+(.+)$/gm;
        const extractedHeadings: Array<{ id: string; text: string; level: number }> = [];
        let match;

        while ((match = headingRegex.exec(text)) !== null) {
          const level = match[1].length;
          const text = match[2];
          const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          extractedHeadings.push({ id, text, level });
        }

        setHeadings(extractedHeadings);
      } catch (err) {
        console.error('Failed to load TOC:', err);
      }
    }

    loadTOC();
  }, [currentLang, currentDoc]);

  if (headings.length === 0) return null;

  return (
    <div>
      <h2 className="mb-4 text-sm font-bold text-slate-900">{uiText(currentLang).toc}</h2>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(heading.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className={`block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-brand-50 hover:text-brand-700 ${
              heading.level === 1 ? 'pl-3 font-semibold' :
              heading.level === 2 ? 'pl-5' :
              heading.level === 3 ? 'pl-7' :
              'pl-9'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}

function DocsContent({ doc, lang }: { doc: string; lang: string }) {
  const cacheKey = `${doc}-${lang}`;
  // Seed straight from the cache when we already have this doc — no spinner, no flash.
  const [content, setContent] = useState<string>(() => docCache.get(cacheKey) ?? '');
  const [pending, setPending] = useState<boolean>(() => !docCache.has(cacheKey));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const key = `${doc}-${lang}`;
    const otherLang = lang === 'en' ? 'vi' : 'en';
    const cached = docCache.get(key);

    if (cached !== undefined) {
      // Already cached → swap in instantly, then warm the other language so the
      // language toggle is instant too.
      setContent(cached);
      setPending(false);
      setError(null);
      prefetchDoc(doc, otherLang);
      return;
    }

    let cancelled = false;
    setPending(true);
    setError(null);

    fetchDoc(doc, lang)
      .then((text) => {
        if (cancelled) return;
        setContent(text);
        setPending(false);
        prefetchDoc(doc, otherLang);
      })
      .catch((err) => {
        if (cancelled) return;
        setError('Failed to load documentation');
        setPending(false);
        console.error('Failed to load doc:', doc, lang, err);
      });

    return () => {
      cancelled = true;
    };
  }, [doc, lang]);

  // Full spinner only on the very first load, when there's nothing to show yet.
  if (pending && !content) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-brand-600"></div>
          <p className="mt-4 text-sm text-slate-600">Loading documentation...</p>
        </div>
      </div>
    );
  }

  if (error && !content) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="prose prose-base relative max-w-none overflow-hidden rounded-2xl bg-white p-8 shadow-soft ring-1 ring-slate-200/70 md:p-10">
      {/* Keep the current text on screen while the next language/doc loads —
          just a thin brand bar up top instead of a jarring spinner swap. */}
      {pending && <span className="absolute inset-x-0 top-0 block h-0.5 animate-pulse bg-brand-600" />}
      <ReactMarkdown
        key={`${doc}-${lang}-${content.substring(0, 50)}`}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <h1 id={id} className="mb-6 scroll-mt-24 border-b-2 border-slate-200 pb-4 font-display text-3xl font-bold text-slate-900">
                {children}
              </h1>
            );
          },
          h2: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <h2 id={id} className="mb-4 mt-10 scroll-mt-24 border-b border-slate-200 pb-3 font-display text-2xl font-bold text-slate-900">
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <h3 id={id} className="mb-3 mt-8 scroll-mt-24 text-xl font-bold text-slate-800">
                {children}
              </h3>
            );
          },
          h4: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <h4 id={id} className="mb-2 mt-6 scroll-mt-24 text-lg font-bold text-slate-800">
                {children}
              </h4>
            );
          },
          p: ({ children }) => (
            <p className="mb-4 text-base leading-7 text-slate-700">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-slate-700 marker:text-brand-400">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 list-decimal space-y-2 pl-6 text-base text-slate-700 marker:text-brand-500 marker:font-semibold">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          code: ({ children, className, ...props }: any) => {
            const inline = !className;
            if (inline) {
              return (
                <code className="rounded border border-brand-100 bg-brand-50 px-1.5 py-0.5 font-mono text-sm text-brand-700">
                  {children}
                </code>
              );
            }
            return (
              <code className={className}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="mb-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm ring-1 ring-slate-800">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-4 rounded-r-lg border-l-4 border-brand-400 bg-brand-50 py-2 pl-4 text-base text-slate-700">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => {
            const isAnchor = href?.startsWith('#');
            return (
              <a
                href={href}
                className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:text-brand-800 hover:decoration-brand-400"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={isAnchor ? (e) => {
                  e.preventDefault();
                  const targetId = href?.substring(1);
                  if (targetId) {
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                } : undefined}
              >
                {children}
              </a>
            );
          },
          strong: ({ children }) => (
            <strong className="font-bold text-slate-900">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-700">
              {children}
            </em>
          ),
          img: ({ src, alt }) => (
            <img
              src={src as string}
              alt={alt || ''}
              className="my-6 w-full max-w-2xl rounded-xl border border-slate-200 bg-slate-50 shadow-soft"
              loading="lazy"
            />
          ),
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-50">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="border border-slate-200 px-4 py-3 text-left text-sm font-bold text-slate-900">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Reply Guys home">
              <img src="/logo.png" alt="" className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-tight text-slate-900">Reply Guys</span>
            </Link>

            <div className="flex items-center gap-4">
              <Suspense fallback={<div className="h-10 w-32 animate-pulse rounded-lg bg-slate-100"></div>}>
                <DocsLanguageSelector />
              </Suspense>

              <Link
                href="/"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="flex h-64 items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-brand-600"></div>
              <p className="mt-4 text-sm text-slate-600">Loading...</p>
            </div>
          </div>
        }>
          <DocsPageContentWrapper />
        </Suspense>
      </div>
    </div>
  );
}

const docsList = [
  { id: 'getting-started', title: { en: 'Getting Started', vi: 'Bắt đầu' } },
  { id: 'installation', title: { en: 'Installation', vi: 'Cài đặt' } },
  { id: 'usage-guide', title: { en: 'Usage Guide', vi: 'Hướng dẫn sử dụng' } },
  { id: 'settings', title: { en: 'Settings', vi: 'Cài đặt & Bộ lọc' } },
];

// Small UI labels that should follow the reader's language.
const UI_TEXT: Record<string, { docs: string; toc: string }> = {
  en: { docs: 'Documentation', toc: 'Table of Contents' },
  vi: { docs: 'Tài liệu', toc: 'Mục lục' },
};
const uiText = (lang: string) => UI_TEXT[lang] ?? UI_TEXT.en;

function DocsLanguageSelector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const currentLang = searchParams.get('lang') || getStoredLang() || 'en';
  const currentDoc = searchParams.get('doc') || 'getting-started';
  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.lang-selector')) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setIsLangOpen(false);
    storeLang(langCode);
    // Client-side nav only — no router.refresh(), and the content cache keeps the
    // switch instant with no full-page spinner.
    router.push(`/docs?doc=${currentDoc}&lang=${langCode}`, { scroll: false });
  };

  return (
    <div className="lang-selector relative">
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-100"
        aria-label="Select language"
      >
        <FlagIcon code={currentLanguage.flag} />
        <span className="hidden lg:inline">{currentLanguage.name}</span>
        <svg
          className={`h-4 w-4 text-slate-500 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isLangOpen && (
        <div className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition ${
                currentLang === lang.code
                  ? 'bg-brand-600 text-white'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <FlagIcon code={lang.flag} />
              <span className="flex-1 text-left">{lang.name}</span>
              {currentLang === lang.code && (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function DocsPageContentWrapper() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlLang = searchParams.get('lang');
  const currentDoc = searchParams.get('doc') || 'getting-started';
  // URL wins; otherwise fall back to the reader's saved choice; otherwise English.
  const currentLang = urlLang || getStoredLang() || 'en';

  // Arrived at /docs with no ?lang but a saved preference → reflect it in the URL
  // (keeps links shareable + the selector in sync) via client-side replace, no reload.
  useEffect(() => {
    if (!urlLang && currentLang !== 'en') {
      router.replace(`/docs?doc=${currentDoc}&lang=${currentLang}`, { scroll: false });
    }
  }, [urlLang, currentLang, currentDoc, router]);

  return <DocsPageContent currentDoc={currentDoc} currentLang={currentLang} />;
}

function DocsPageContent({ currentDoc, currentLang }: { currentDoc: string; currentLang: string }) {
  return (
    <div className="grid gap-8 lg:grid-cols-4">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200/70">
          {/* Docs Navigation */}
          <div className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-slate-900">{uiText(currentLang).docs}</h2>
            <nav className="space-y-1">
              {docsList.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/docs?doc=${doc.id}&lang=${currentLang}`}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${
                    currentDoc === doc.id
                      ? 'bg-brand-600 font-medium text-white shadow-soft'
                      : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700'
                  }`}
                >
                  {doc.title[currentLang as 'en' | 'vi'] ?? doc.title.en}
                </Link>
              ))}
            </nav>
          </div>

          {/* Table of Contents */}
          <div className="border-t border-slate-200 pt-6">
            <DocsTOC currentLang={currentLang} currentDoc={currentDoc} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-3">
        <DocsContent doc={currentDoc} lang={currentLang} />
      </div>
    </div>
  );
}
