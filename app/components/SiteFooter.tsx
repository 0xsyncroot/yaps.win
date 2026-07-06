import Link from 'next/link';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd';

export default function SiteFooter() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="" className="h-8 w-8" />
              <span className="text-base font-semibold text-white">Reply Guys</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              AI-powered engagement for X. Reply and post smarter, right from your browser.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/docs" className="text-slate-400 transition-colors hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs?doc=getting-started" className="text-slate-400 transition-colors hover:text-white">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-slate-400 transition-colors hover:text-white">
                  Tools
                </Link>
              </li>
              <li>
                <a href={CHROME_STORE_URL} className="text-slate-400 transition-colors hover:text-white">
                  Chrome Store
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="https://t.me/reply_guys_bot" className="text-slate-400 transition-colors hover:text-white">
                  Telegram Bot
                </a>
              </li>
              <li>
                <a href="https://t.me/yapssupport" className="text-slate-400 transition-colors hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Reply Guys. All rights reserved.</p>
          <div className="flex gap-3">
            <a
              href="https://twitter.com/yapswin"
              aria-label="Reply Guys on X"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://t.me/reply_guys_bot"
              aria-label="Reply Guys on Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
