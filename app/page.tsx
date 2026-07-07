import Link from 'next/link';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Sparkle from './components/Sparkle';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd';

const features = [
  {
    title: 'Five Ways to Engage',
    description:
      'Post List, List Reply, Newfeed, Reply Repliers, and KOL Monitor — pick whichever flow fits the way you work today.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
  {
    title: 'X, Farcaster & Binance Square',
    description:
      'One side panel that replies for you across all three — no tab-hopping, no copy-paste, no missed moments.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    ),
  },
  {
    title: 'Your Choice of AI',
    description: 'OpenAI, Grok, or DeepSeek — bring the model you already trust and let it do the writing.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 7h10v10H7V7z"
      />
    ),
  },
  {
    title: 'Reply to the Right People',
    description: 'Focus on quality authors with InfoFi score filters — Ethos, Wallchain, Kaito Yaps, and Moni.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4 6h16M4 10h16M4 14h10M4 18h10"
      />
    ),
  },
  {
    title: 'Always Know Where You Stand',
    description: 'Watch your reply quota and success rate update in real time — no guessing, no surprises.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 19v-6m4 6V5m4 14v-9M4 21h16"
      />
    ),
  },
  {
    title: 'Sounds Just Like You',
    description: 'Replies shaped by your own voice, tone, and length — with custom prompts whenever you want them.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    ),
  },
];

const steps = [
  {
    title: 'Add It to Chrome',
    description: 'Grab Reply Guys from the Chrome Web Store, then open X, Farcaster, or Binance Square.',
  },
  {
    title: 'Sign In & Pick a Plan',
    description: 'Log in with Telegram or Discord, then grab a plan from @reply_guys_bot — free to start.',
  },
  {
    title: 'Let AI Take Over',
    description: 'Open the side panel, choose a mode, and watch your replies go out while you get on with your day.',
  },
];

const trustPoints = ['Free to start', 'Ready in 3 minutes', 'Works right in Chrome'];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-dot-grid" aria-hidden="true" />
        <Sparkle className="pointer-events-none absolute -right-10 top-24 hidden h-72 w-72 text-brand-100 motion-safe:animate-float sm:block" />

        <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-24 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-soft backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent-400" />
            AI reply automation for X, Farcaster &amp; Binance Square
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 text-balance md:text-6xl">
            Stay in the Conversation <span className="brand-text-gradient">with AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty md:text-xl">
            Reply Guys is a Chrome extension that replies for you on X, Farcaster, and Binance Square
            — in your own voice. Set it up once, and let AI keep you showing up everywhere.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-colors hover:bg-brand-700"
            >
              Install Extension
            </a>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              Documentation
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            {trustPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2">
                <Sparkle className="h-3.5 w-3.5 text-brand-500" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              See How It Works
            </h2>
            <p className="mt-3 text-lg text-slate-600">A quick look at Reply Guys doing the work for you</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl bg-white p-2 shadow-card ring-1 ring-slate-200/70">
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-100" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/PL_9YJxDuW0"
                title="Reply Guys Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Features
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Everything you need to stay active — without the daily grind
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200/70 transition-all hover:-translate-y-1 hover:shadow-card hover:ring-brand-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Getting Started
            </h2>
            <p className="mt-3 text-lg text-slate-600">You&apos;ll be up and running in 3 simple steps</p>
          </div>

          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((item, index) => (
              <li
                key={item.title}
                className="relative rounded-2xl bg-white p-7 text-center shadow-soft ring-1 ring-slate-200/70"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-soft">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-16 text-center shadow-lift sm:px-12">
            <Sparkle className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 text-white/10" />
            <Sparkle className="pointer-events-none absolute -bottom-10 right-4 h-32 w-32 text-white/10" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready When You Are
              </h2>
              <p className="mt-4 text-lg text-brand-100">
                Bring Reply Guys along on X, Farcaster, and Binance Square — free to start, ready in minutes.
              </p>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent-400 px-8 py-3.5 text-base font-semibold text-slate-900 shadow-soft transition-transform hover:scale-[1.03] hover:bg-accent-300"
              >
                Install Extension
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
