'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd';

const navLinks = [
  { label: 'Docs', href: '/docs' },
  { label: 'Tools', href: '/tools' },
  { label: 'Support', href: 'https://t.me/reply_guys_bot', external: true },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-brand-600"
          aria-label="Reply Guys home"
        >
          <img src="/logo.png" alt="" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Reply Guys</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const active = !link.external && pathname?.startsWith(link.href);
            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:inline-block"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'text-brand-700'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-brand-700"
          >
            Install
          </a>
        </nav>
      </div>
    </header>
  );
}
