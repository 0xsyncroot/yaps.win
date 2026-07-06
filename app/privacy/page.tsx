import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Header band */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-slate-50">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-slate-600">Last updated: November 1, 2025</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl space-y-12 px-6 py-16 text-[15px] leading-7 text-slate-600">
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Introduction</h2>
          <p>
            Yaps ("we", "our", or "us") operates the Reply Guys Chrome Extension (the "Extension"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Extension. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Extension.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Information We Collect</h2>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">1. Personal Information</h3>
          <p>When you use our Extension, we may collect the following personal information:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li><strong className="text-slate-900">Authentication Data:</strong> Telegram user ID, username, and authentication tokens when you log in via Telegram</li>
            <li><strong className="text-slate-900">X (Twitter) Account Data:</strong> Your X username and session information to enable auto-reply functionality</li>
            <li><strong className="text-slate-900">User Preferences:</strong> Settings such as AI model selection (OpenAI, Grok, DeepSeek), reply tone, delay preferences, and retry counts</li>
            <li><strong className="text-slate-900">License Information:</strong> License key, subscription plan, quota usage, and expiration dates</li>
          </ul>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">2. Usage Data</h3>
          <p>We collect information about how you interact with the Extension:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li><strong className="text-slate-900">Reply Activity:</strong> URLs of posts you reply to, reply content generated, timestamp of replies, success/failure status</li>
            <li><strong className="text-slate-900">KOL Management:</strong> List of Key Opinion Leaders (KOLs) you monitor, statistics about KOL engagement</li>
            <li><strong className="text-slate-900">Quota Usage:</strong> Number of replies generated, remaining quota, usage patterns</li>
            <li><strong className="text-slate-900">Error Logs:</strong> Error messages, failed operations, and debugging information</li>
          </ul>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">3. Technical Data</h3>
          <p>We automatically collect certain technical information:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li><strong className="text-slate-900">Browser Information:</strong> Browser type, version, and extension version</li>
            <li><strong className="text-slate-900">Device Information:</strong> Operating system, screen resolution</li>
            <li><strong className="text-slate-900">Performance Data:</strong> Response times, API call durations, success rates</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li><strong className="text-slate-900">Service Delivery:</strong> To provide and maintain the auto-reply functionality, generate AI-powered responses, and manage your subscription</li>
            <li><strong className="text-slate-900">Authentication:</strong> To verify your identity and manage your account access via Telegram</li>
            <li><strong className="text-slate-900">Personalization:</strong> To remember your preferences and settings across sessions</li>
            <li><strong className="text-slate-900">Analytics:</strong> To understand usage patterns and improve the Extension's performance</li>
            <li><strong className="text-slate-900">Quota Management:</strong> To track your usage and enforce subscription limits</li>
            <li><strong className="text-slate-900">Customer Support:</strong> To respond to your inquiries and provide technical support</li>
            <li><strong className="text-slate-900">Error Monitoring:</strong> To identify and fix bugs, improve stability and performance</li>
            <li><strong className="text-slate-900">Security:</strong> To detect and prevent fraudulent activities, abuse, and security threats</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">How We Share Your Information</h2>
          <p>We may share your information with the following third parties:</p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">1. AI Service Providers</h3>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li><strong className="text-slate-900">OpenAI:</strong> We send post content and user prompts to OpenAI's API to generate replies when you select OpenAI as your AI provider</li>
            <li><strong className="text-slate-900">Grok (xAI):</strong> We send post content and user prompts to Grok's API to generate replies when you select Grok as your AI provider</li>
            <li><strong className="text-slate-900">DeepSeek:</strong> We send post content and user prompts to DeepSeek's API to generate replies when you select DeepSeek as your AI provider</li>
            <li>Note: Each AI provider has their own privacy policy. We recommend reviewing:
              <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-brand-400">
                <li><a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">OpenAI Privacy Policy</a></li>
                <li><a href="https://x.ai/privacy" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">xAI Privacy Policy</a></li>
                <li><a href="https://www.deepseek.com/privacy" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">DeepSeek Privacy Policy</a></li>
              </ul>
            </li>
          </ul>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">2. Telegram</h3>
          <p>
            We use Telegram Bot API for user authentication and license management. Your Telegram user ID and username are shared with Telegram's services. Review <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">Telegram's Privacy Policy</a>.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">3. X (Twitter)</h3>
          <p>
            The Extension interacts with X (formerly Twitter) to post replies on your behalf. We do not share your data with X beyond what is necessary to perform the auto-reply function through your authenticated session. Review <a href="https://twitter.com/privacy" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">X's Privacy Policy</a>.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">4. Service Providers</h3>
          <p>
            We may share information with service providers who assist us in operating the Extension, such as hosting providers, database services, and analytics tools. These providers are contractually obligated to protect your information and only use it for specified purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Data Storage and Security</h2>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">1. Data Storage</h3>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li><strong className="text-slate-900">Local Storage:</strong> User preferences, settings, and cached data are stored locally in your browser using Chrome's storage API</li>
            <li><strong className="text-slate-900">Server Storage:</strong> Authentication tokens, license information, usage statistics, and reply history are stored on our secure servers</li>
            <li><strong className="text-slate-900">Data Retention:</strong> We retain your data for as long as your account is active or as needed to provide services. Account data is deleted within 30 days of account closure</li>
          </ul>

          <h3 className="pt-2 text-lg font-semibold text-slate-900">2. Security Measures</h3>
          <p>We implement industry-standard security measures to protect your information:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li>Encryption of sensitive data in transit using HTTPS/TLS</li>
            <li>Encrypted storage of authentication tokens</li>
            <li>Regular security audits and updates</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Secure API communication with authentication</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Permissions Explanation</h2>
          <p>Our Extension requires certain Chrome permissions to function. Here's why we need each permission:</p>
          <ul className="list-disc space-y-3 pl-6 marker:text-brand-400">
            <li><strong className="text-slate-900">storage:</strong> To save your preferences, settings, authentication tokens, and cached data locally in your browser</li>
            <li><strong className="text-slate-900">activeTab:</strong> To interact with the current X/Twitter tab and post replies on your behalf</li>
            <li><strong className="text-slate-900">scripting:</strong> To inject content scripts into X/Twitter pages to enable auto-reply functionality</li>
            <li><strong className="text-slate-900">notifications:</strong> To show you notifications about reply status, quota usage, and errors</li>
            <li><strong className="text-slate-900">sidePanel:</strong> To display the Extension's interface in Chrome's side panel</li>
            <li><strong className="text-slate-900">windows &amp; tabs:</strong> To manage the Extension window and tabs for better user experience</li>
            <li><strong className="text-slate-900">system.display:</strong> To optimize the Extension's UI for your screen resolution</li>
            <li><strong className="text-slate-900">Host permissions for twitter.com and x.com:</strong> To access and interact with X/Twitter pages for posting replies</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Your Privacy Rights</h2>
          <p>
            Depending on your location and applicable privacy laws, you have certain rights regarding your personal information. We are committed to facilitating the exercise of these rights in accordance with applicable data protection regulations.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <h3 className="text-base font-semibold text-slate-900">1. Right to Access</h3>
              <p className="mt-3">
                You have the right to request confirmation of whether we process your personal data and to obtain a copy of your personal information.
              </p>
              <p className="mt-3">
                <strong className="text-slate-900">What you can request:</strong> User account details, authentication data, reply history, KOL lists, usage statistics, settings and preferences, stored tokens and license information.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <h3 className="text-base font-semibold text-slate-900">2. Right to Rectification</h3>
              <p className="mt-3">
                You have the right to request correction of inaccurate, incomplete, or outdated personal information.
              </p>
              <p className="mt-3">
                <strong className="text-slate-900">How to correct:</strong> Most settings and preferences can be updated directly in the Extension interface. For other data corrections, submit a request via email with specific details of the information to be corrected.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <h3 className="text-base font-semibold text-slate-900">3. Right to Erasure (Right to be Forgotten)</h3>
              <p className="mt-3">
                You have the right to request deletion of your personal information under certain circumstances.
              </p>
              <p className="mt-3">
                <strong className="text-slate-900">What will be deleted:</strong> User account, authentication tokens, reply history, KOL lists, usage statistics, preferences and settings, and any cached data.
              </p>
              <p className="mt-3">
                <strong className="text-slate-900">Exceptions:</strong> We may retain certain data if required by law, for legal claims, for accounting purposes (up to 7 years), or to prevent fraud and abuse.
              </p>
              <p className="mt-3">
                <strong className="text-slate-900">Timeline:</strong> Account deletion requests are processed within 30 days. You will receive confirmation once the deletion is complete.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <h3 className="text-base font-semibold text-slate-900">4. Right to Data Portability</h3>
              <p className="mt-3">
                You have the right to receive your personal data in a structured, commonly used, and machine-readable format (JSON or CSV).
              </p>
              <p className="mt-3">
                <strong className="text-slate-900">Exportable data:</strong> User profile information, reply history with timestamps, KOL lists and statistics, usage data and quota information, settings and preferences.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <h3 className="text-base font-semibold text-slate-900">5. Right to Object</h3>
              <p className="mt-3">
                You have the right to object to the processing of your personal data for certain purposes, including direct marketing, profiling, and processing based on legitimate interests.
              </p>
              <p className="mt-3">
                <strong className="text-slate-900">Note:</strong> Objecting to certain processing may limit or prevent us from providing the Extension's services, as some data processing is essential for functionality.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <h3 className="text-base font-semibold text-slate-900">6. Right to Restriction of Processing</h3>
              <p className="mt-3">
                You have the right to request restriction of processing your personal data in specific situations:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6 marker:text-brand-400">
                <li>When you contest the accuracy of the data</li>
                <li>When processing is unlawful but you don't want the data erased</li>
                <li>When we no longer need the data but you need it for legal claims</li>
                <li>When you have objected to processing pending verification</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <h3 className="text-base font-semibold text-slate-900">7. Right to Withdraw Consent</h3>
              <p className="mt-3">
                Where we rely on your consent to process personal data, you have the right to withdraw that consent at any time.
              </p>
              <p className="mt-3">
                <strong className="text-slate-900">How to withdraw:</strong> You can uninstall the Extension, disable specific features in settings, or contact us to withdraw consent. Withdrawal does not affect the lawfulness of processing before withdrawal.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <h3 className="text-base font-semibold text-slate-900">8. Right to Lodge a Complaint</h3>
              <p className="mt-3">
                You have the right to lodge a complaint with a supervisory authority, particularly in your country of residence, workplace, or where an alleged infringement occurred. For EU users, you can find your local data protection authority at <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">EDPB Member List</a>.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-semibold text-slate-900">How to Exercise Your Rights</h3>
            <div className="mt-4 rounded-2xl border-l-4 border-brand-600 bg-brand-50 p-6">
              <p className="text-slate-800">To exercise any of the above rights, please submit a written request to:</p>
              <p className="mt-4 font-medium text-slate-900">
                Email: <a href="mailto:privacy@yaps.win" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">privacy@yaps.win</a>
              </p>
              <p className="mt-4 text-sm text-slate-700"><strong className="text-slate-900">Your request must include:</strong></p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm marker:text-brand-400">
                <li>Your full name and email address associated with your account</li>
                <li>Clear description of which right(s) you wish to exercise</li>
                <li>Specific details about your request</li>
                <li>Proof of identity (to prevent unauthorized access to your data)</li>
              </ul>
              <p className="mt-4 text-sm text-slate-700"><strong className="text-slate-900">Response Timeline:</strong></p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm marker:text-brand-400">
                <li>We will acknowledge your request within 48 hours</li>
                <li>We will respond to your request within 30 days (may extend to 60 days for complex requests)</li>
                <li>If we need to extend the timeline, we will inform you and explain the reason</li>
              </ul>
              <p className="mt-4 text-sm text-slate-700">
                <strong className="text-slate-900">No Fee:</strong> We do not charge a fee for processing your rights requests unless the request is clearly unfounded, repetitive, or excessive. In such cases, we may charge a reasonable administrative fee or refuse the request.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border-l-4 border-accent-400 bg-accent-50 p-6">
              <p className="text-sm leading-relaxed text-amber-900">
                <strong>Important:</strong> To protect your privacy and security, we will verify your identity before processing any rights requests. We may ask for additional information to confirm you are the account holder. This verification process is necessary to prevent unauthorized access to your personal data.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Cookies and Tracking</h2>
          <p>
            Our Extension does not use cookies or tracking technologies. However, we access cookies that X/Twitter sets in your browser to authenticate and post replies on your behalf. We do not collect or store these cookies on our servers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Children's Privacy</h2>
          <p>
            Our Extension is not intended for children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws different from those in your country. By using the Extension, you consent to the transfer of your information to these countries. We take steps to ensure that your data receives adequate protection in accordance with applicable data protection laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Third-Party Links</h2>
          <p>
            The Extension may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party services you access through the Extension.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy in the Extension and updating the "Last updated" date. Your continued use of the Extension after such changes constitutes your acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Data Breach Notification</h2>
          <p>
            In the event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law. We will take immediate steps to mitigate the breach and protect your information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">California Privacy Rights (CCPA)</h2>
          <p>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li>Right to know what personal information is collected</li>
            <li>Right to know whether personal information is sold or disclosed</li>
            <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
            <li>Right to deletion of personal information</li>
            <li>Right to non-discrimination for exercising CCPA rights</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">GDPR Compliance (European Users)</h2>
          <p>If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-brand-400">
            <li><strong className="text-slate-900">Legal Basis:</strong> We process your data based on consent, contract performance, legitimate interests, or legal obligations</li>
            <li><strong className="text-slate-900">Data Protection Officer:</strong> For GDPR-related inquiries, contact our DPO at <a href="mailto:dpo@yaps.win" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">dpo@yaps.win</a></li>
            <li><strong className="text-slate-900">Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with your local supervisory authority</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
          <div className="space-y-2 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
            <p><strong className="text-slate-900">Email:</strong> <a href="mailto:privacy@yaps.win" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">privacy@yaps.win</a></p>
            <p><strong className="text-slate-900">Telegram:</strong> <a href="https://t.me/reply_guys_bot" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">@reply_guys_bot</a></p>
            <p><strong className="text-slate-900">Support:</strong> <a href="https://t.me/yapssupport" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">@yapssupport</a></p>
            <p><strong className="text-slate-900">Website:</strong> <a href="https://yaps.win" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 hover:text-brand-800 hover:underline">https://yaps.win</a></p>
          </div>
        </section>

        <section className="border-t border-slate-200 pt-10">
          <div className="rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
            <h3 className="text-lg font-semibold text-brand-900">Summary</h3>
            <p className="mt-2 leading-relaxed text-slate-700">
              We collect your authentication data, usage information, and preferences to provide the auto-reply service. We share data with AI providers (OpenAI, Grok, DeepSeek), Telegram for authentication, and X for posting replies. Your data is encrypted and stored securely. You have the right to access, correct, or delete your data at any time. We do not sell your personal information.
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
