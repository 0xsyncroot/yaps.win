import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Header band */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-slate-50">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-slate-600">Last updated: July 7, 2026</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-12 px-6 py-16 text-[15px] leading-7 text-slate-600">
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">1. Who We Are</h2>
          <p>
            Yaps ("we", "our", or "us") operates Reply Guys, a Chrome extension and Telegram/Discord bot
            that helps you draft and post AI-generated replies on X (Twitter), Farcaster, and Binance
            Square (the "Service"). By installing the extension, logging in, or using the bot, you agree
            to these Terms of Service ("Terms"). If you don't agree, please don't use the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">2. What the Service Does</h2>
          <p>Reply Guys is a convenience tool, not a guarantee of results. In plain terms:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li>We generate reply text using third-party AI providers (OpenAI, Grok, or DeepSeek) based on your settings and the post you're replying to.</li>
            <li>The Extension posts on your behalf using your own logged-in browser session — we never ask for or store your platform password.</li>
            <li>AI-generated content can be wrong, repetitive, or occasionally inappropriate. You are responsible for reviewing what gets posted under your account.</li>
            <li>We do not guarantee any particular level of engagement, follower growth, or earnings from using the Service.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">3. Platform Rules Are Not Ours to Waive</h2>
          <p>
            X, Farcaster, and Binance Square each have their own terms of service, and some of them
            restrict or prohibit automation. Using Reply Guys to post automatically may put your account
            on those platforms at risk of warnings, rate limits, or suspension — that risk is between you
            and the platform, not something we control or can promise won't happen. Use automation
            features at a pace and in a manner you're comfortable defending to the platform if asked.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">4. Account &amp; Access</h2>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li>You log in via Telegram or Discord. You're responsible for keeping that account secure — anyone with access to it can access your Reply Guys session.</li>
            <li>You must be old enough to use Telegram or Discord and X/Farcaster/Binance Square under their own terms, and to hold and spend cryptocurrency where required.</li>
            <li>One person, one account. Don't share licenses or create multiple accounts to get around quota limits.</li>
            <li>We can suspend or terminate access if we reasonably believe you're abusing the Service, violating these Terms, or using it for unlawful purposes.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">5. Plans, Quotas &amp; Payment</h2>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li>Reply Guys offers a free tier with limited reply quota and paid plans with higher quotas, purchased through the Telegram bot.</li>
            <li>Paid plans are billed in USDC on the Base network. Blockchain transactions are final once confirmed — we cannot reverse a transaction after it's been sent.</li>
            <li>Because quota is consumed as you use the Service, purchases are generally non-refundable. If something goes wrong on our end (e.g. a payment didn't credit your account), contact support and we'll make it right.</li>
            <li>We may change pricing or plan quotas going forward; changes apply to new purchases, not quota you've already paid for.</li>
            <li>Referral rewards, vouchers, and partner codes are provided at our discretion and may be adjusted or discontinued if abused.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">6. Your Content</h2>
          <p>
            You own the posts and replies you send through the Service. By using Reply Guys, you give us
            permission to send that content (and the post you're replying to) to our servers and to
            third-party AI providers solely to generate and deliver your reply. See our{' '}
            <Link href="/privacy" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">
              Privacy Policy
            </Link>{' '}
            for details on what we collect and share.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">7. Acceptable Use</h2>
          <p>Please don't use Reply Guys to:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li>Post spam, scams, harassment, or illegal content.</li>
            <li>Impersonate someone else or misrepresent who is posting.</li>
            <li>Attempt to reverse-engineer, resell, or bypass the licensing/quota system.</li>
            <li>Interfere with the Service's infrastructure (e.g. excessive automated requests, attempts to breach our servers).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">8. No Warranty</h2>
          <p>
            The Service is provided "as is." We're a small team building this in active development —
            expect occasional bugs, downtime, or AI providers behaving unpredictably. We don't warrant
            that the Service will be uninterrupted, error-free, or fit for any particular purpose.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for indirect, incidental, or
            consequential damages arising from your use of the Service — including account suspensions
            by third-party platforms, lost engagement, or lost cryptocurrency due to blockchain errors
            outside our control. Our total liability for any claim is limited to the amount you paid us
            in the 3 months before the claim arose.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">10. Changes to the Service or Terms</h2>
          <p>
            We may update these Terms as the Service evolves. We'll update the "Last updated" date above
            and, for material changes, try to notify you through the bot or extension. Continuing to use
            the Service after changes take effect means you accept the updated Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">11. Termination</h2>
          <p>
            You can stop using the Service at any time by uninstalling the extension and/or messaging the
            bot to close your account. We may suspend or terminate your access for violating these Terms.
            Unused quota is not refunded on termination unless required by law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Contact Us</h2>
          <p>Questions about these Terms? Reach out:</p>
          <div className="space-y-2 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
            <p><strong className="text-slate-900">Email:</strong> <a href="mailto:privacy@yaps.win" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">privacy@yaps.win</a></p>
            <p><strong className="text-slate-900">Telegram:</strong> <a href="https://t.me/reply_guys_bot" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">@reply_guys_bot</a></p>
            <p><strong className="text-slate-900">Support:</strong> <a href="https://t.me/yapssupport" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">@yapssupport</a></p>
          </div>
        </section>

        <section className="border-t border-slate-200 pt-10">
          <div className="rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
            <h3 className="text-lg font-semibold text-brand-900">Summary</h3>
            <p className="mt-2 leading-relaxed text-slate-700">
              Reply Guys helps you draft and post AI replies on X, Farcaster, and Binance Square using
              your own account. Review what it posts — AI isn't perfect and automation can carry platform
              risk we don't control. Paid plans are billed in USDC and are generally non-refundable once
              quota is purchased. The Service is provided as-is by a small, actively-developing team.
            </p>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium text-brand-700 transition-colors hover:text-brand-800"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
