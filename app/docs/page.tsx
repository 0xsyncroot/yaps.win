'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';

interface DocItem {
  id: string;
  title: string;
  path: string;
  lang?: string;
}

const languages = [
  { code: 'en', name: 'English', flag: 'US' },
  { code: 'vi', name: 'Tiếng Việt', flag: 'VN' },
];

const FlagIcon = ({ code }: { code: string }) => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full overflow-hidden border border-gray-200 shadow-sm">
    <img 
      src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
      width="20"
      alt={code}
      className="object-cover w-full h-full"
    />
  </span>
);

function DocsTOC({ currentLang, currentDoc }: { currentLang: string; currentDoc: string }) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);

  useEffect(() => {
    async function loadTOC() {
      try {
        const response = await fetch(`/docs/${currentDoc}-${currentLang}.md`);
        if (!response.ok) return;
        
        const text = await response.text();
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
      <h2 className="text-sm font-bold mb-4 text-gray-900">Table of Contents</h2>
      <nav className="space-y-2">
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
            className={`block text-sm rounded-lg px-3 py-2 hover:bg-blue-50 text-gray-600 hover:text-blue-700 transition-all ${
              heading.level === 1 ? 'font-bold pl-3' :
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
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDoc() {
      setLoading(true);
      setError(null);
      try {
        const url = `/docs/${doc}-${lang}.md`;
        console.log('Loading doc:', url);
        const response = await fetch(url, { cache: 'no-store' });
        
        if (!response.ok) {
          throw new Error(`Document not found: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('Loaded doc:', url, 'length:', text.length);
        console.log('Content preview:', text.substring(0, 100));
        setContent(text);
        console.log('Content state updated for:', doc, lang);
      } catch (err) {
        setError('Failed to load documentation');
        console.error('Failed to load doc:', doc, lang, err);
      } finally {
        setLoading(false);
      }
    }

    loadDoc();
  }, [doc, lang]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-sm text-gray-600">Loading documentation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-10 prose prose-base max-w-none">
      <ReactMarkdown
        key={`${doc}-${lang}-${content.substring(0, 50)}`}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <h1 id={id} className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-4 scroll-mt-24">
                {children}
              </h1>
            );
          },
          h2: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <h2 id={id} className="text-2xl font-bold mt-10 mb-4 text-gray-900 border-b border-gray-200 pb-3 scroll-mt-24">
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <h3 id={id} className="text-xl font-bold mt-8 mb-3 text-gray-800 scroll-mt-24">
                {children}
              </h3>
            );
          },
          h4: ({ children }) => {
            const text = String(children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <h4 id={id} className="text-lg font-bold mt-6 mb-2 text-gray-800 scroll-mt-24">
                {children}
              </h4>
            );
          },
          p: ({ children }) => (
            <p className="mb-4 text-base text-gray-700 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2 text-base text-gray-700">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2 text-base text-gray-700">
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
                <code className="bg-blue-50 px-2 py-1 rounded text-sm text-blue-700 font-mono border border-blue-200">
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
            <pre className="bg-gray-900 rounded-xl p-4 overflow-x-auto mb-4 text-sm shadow-lg">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-4 py-2 my-4 text-base text-gray-700 rounded-r-lg">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => {
            const isAnchor = href?.startsWith('#');
            return (
              <a
                href={href}
                className={`text-base ${isAnchor ? 'text-blue-600 hover:text-blue-800 font-medium' : 'text-blue-600 hover:text-blue-800 underline font-medium'}`}
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
            <strong className="font-bold text-gray-900">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-700">
              {children}
            </em>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4 rounded-lg border border-gray-200">
              <table className="min-w-full text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-sm text-gray-900">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Yaps
              </span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Suspense fallback={<div className="w-32 h-10 bg-gray-100 rounded-lg animate-pulse"></div>}>
                <DocsLanguageSelector />
              </Suspense>
              
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Suspense fallback={
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-sm text-gray-600">Loading...</p>
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
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'installation', title: 'Installation' },
  { id: 'usage-guide', title: 'Usage Guide' },
  { id: 'settings', title: 'Settings' },
];

function DocsLanguageSelector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const currentLang = searchParams.get('lang') || 'en';
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
    const newUrl = `/docs?doc=${currentDoc}&lang=${langCode}`;
    console.log('Changing language to:', langCode, 'URL:', newUrl);
    router.push(newUrl);
    router.refresh();
  };

  return (
    <div className="relative lang-selector">
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
        aria-label="Select language"
      >
        <FlagIcon code={currentLanguage.flag} />
        <span className="hidden lg:inline">{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isLangOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                currentLang === lang.code 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FlagIcon code={lang.flag} />
              <span className="flex-1 text-left">{lang.name}</span>
              {currentLang === lang.code && (
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
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
  const currentLang = searchParams.get('lang') || 'en';
  const currentDoc = searchParams.get('doc') || 'getting-started';
  
  return <DocsPageContent key={`${currentDoc}-${currentLang}`} />;
}

function DocsPageContent() {
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') || 'en';
  const currentDoc = searchParams.get('doc') || 'getting-started';

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24 shadow-sm">
          {/* Docs Navigation */}
          <div className="mb-6">
            <h2 className="text-sm font-bold text-gray-900 mb-3">Documentation</h2>
            <nav className="space-y-1">
              {docsList.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/docs?doc=${doc.id}&lang=${currentLang}`}
                  className={`block text-sm px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-all ${
                    currentDoc === doc.id
                      ? 'bg-gradient-to-r from-blue-50 to-blue-50 text-blue-700 font-bold border-l-4 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {doc.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Table of Contents */}
          <div className="border-t border-gray-200 pt-6">
            <DocsTOC currentLang={currentLang} currentDoc={currentDoc} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-3">
        <DocsContent doc={currentDoc} lang={currentLang} key={`${currentDoc}-${currentLang}`} />
      </div>
    </div>
  );
}
