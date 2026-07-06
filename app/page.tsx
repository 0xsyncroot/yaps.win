import Link from 'next/link';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Sparkle from './components/Sparkle';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd';

const features = [
  {
    title: 'Multi-Mode Automation',
    description: 'Five ways to engage — Post List, List Reply, Newfeed, Reply Repliers, and KOL Monitor',
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
    title: 'X + Farcaster',
    description: 'A side panel that automates replies on both x.com and farcaster.xyz',
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
    title: 'Multi-AI Support',
    description: 'Works with OpenAI, Grok, and DeepSeek — choose your preferred provider',
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
    title: 'InfoFi Score Filters',
    description: 'Target quality authors by Ethos, Wallchain, Kaito Yaps, and Moni scores',
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
    title: 'Quota Tracking',
    description: 'Monitor your reply quota and success rate in real time',
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
    title: 'Your Writing Style',
    description: 'Personalized replies from your own writing style, custom prompts, tone, and length',
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
    title: 'Install Extension',
    description: 'Add Reply Guys from the Chrome Web Store, then open x.com or farcaster.xyz',
  },
  {
    title: 'Connect Your Account',
    description: 'Sign in with Telegram or Discord, and grab a plan from @reply_guys_bot',
  },
  {
    title: 'Start Automating',
    description: 'Open the side panel, pick a mode, and let AI handle your replies',
  },
];

const trustPoints = ['Free to start', '3-minute setup', 'Chrome only'];

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
            AI reply automation for X &amp; Farcaster
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 text-balance md:text-6xl">
            Automate Your X Engagement <span className="brand-text-gradient">with AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty md:text-xl">
            Chrome extension that helps you reply on X and Farcaster automatically using AI. Simple,
            fast, effective.
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
            <p className="mt-3 text-lg text-slate-600">Watch the extension in action</p>
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
              Everything you need to automate X engagement
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
            <p className="mt-3 text-lg text-slate-600">Start automating in 3 simple steps</p>
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
                Ready to Automate?
              </h2>
              <p className="mt-4 text-lg text-brand-100">
                Start automating your X engagement with AI today
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
