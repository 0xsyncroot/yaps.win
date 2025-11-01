'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
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
              <Link 
                href="/" 
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/docs" 
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Docs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: November 1, 2025
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Yaps ("we", "our", or "us") operates the Reply Guys Chrome Extension (the "Extension"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Extension. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Extension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1. Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use our Extension, we may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Authentication Data:</strong> Telegram user ID, username, and authentication tokens when you log in via Telegram</li>
              <li><strong>X (Twitter) Account Data:</strong> Your X username and session information to enable auto-reply functionality</li>
              <li><strong>User Preferences:</strong> Settings such as AI model selection (OpenAI, Grok, DeepSeek), reply tone, delay preferences, and retry counts</li>
              <li><strong>License Information:</strong> License key, subscription plan, quota usage, and expiration dates</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2. Usage Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information about how you interact with the Extension:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Reply Activity:</strong> URLs of posts you reply to, reply content generated, timestamp of replies, success/failure status</li>
              <li><strong>KOL Management:</strong> List of Key Opinion Leaders (KOLs) you monitor, statistics about KOL engagement</li>
              <li><strong>Quota Usage:</strong> Number of replies generated, remaining quota, usage patterns</li>
              <li><strong>Error Logs:</strong> Error messages, failed operations, and debugging information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3. Technical Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain technical information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Browser Information:</strong> Browser type, version, and extension version</li>
              <li><strong>Device Information:</strong> Operating system, screen resolution</li>
              <li><strong>Performance Data:</strong> Response times, API call durations, success rates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Service Delivery:</strong> To provide and maintain the auto-reply functionality, generate AI-powered responses, and manage your subscription</li>
              <li><strong>Authentication:</strong> To verify your identity and manage your account access via Telegram</li>
              <li><strong>Personalization:</strong> To remember your preferences and settings across sessions</li>
              <li><strong>Analytics:</strong> To understand usage patterns and improve the Extension's performance</li>
              <li><strong>Quota Management:</strong> To track your usage and enforce subscription limits</li>
              <li><strong>Customer Support:</strong> To respond to your inquiries and provide technical support</li>
              <li><strong>Error Monitoring:</strong> To identify and fix bugs, improve stability and performance</li>
              <li><strong>Security:</strong> To detect and prevent fraudulent activities, abuse, and security threats</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with the following third parties:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1. AI Service Providers</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>OpenAI:</strong> We send post content and user prompts to OpenAI's API to generate replies when you select OpenAI as your AI provider</li>
              <li><strong>Grok (xAI):</strong> We send post content and user prompts to Grok's API to generate replies when you select Grok as your AI provider</li>
              <li><strong>DeepSeek:</strong> We send post content and user prompts to DeepSeek's API to generate replies when you select DeepSeek as your AI provider</li>
              <li>Note: Each AI provider has their own privacy policy. We recommend reviewing:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenAI Privacy Policy</a></li>
                  <li><a href="https://x.ai/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">xAI Privacy Policy</a></li>
                  <li><a href="https://www.deepseek.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DeepSeek Privacy Policy</a></li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2. Telegram</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Telegram Bot API for user authentication and license management. Your Telegram user ID and username are shared with Telegram's services. Review <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Telegram's Privacy Policy</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3. X (Twitter)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Extension interacts with X (formerly Twitter) to post replies on your behalf. We do not share your data with X beyond what is necessary to perform the auto-reply function through your authenticated session. Review <a href="https://twitter.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">X's Privacy Policy</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4. Service Providers</h3>
            <p className="text-gray-700 leading-relaxed">
              We may share information with service providers who assist us in operating the Extension, such as hosting providers, database services, and analytics tools. These providers are contractually obligated to protect your information and only use it for specified purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1. Data Storage</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Local Storage:</strong> User preferences, settings, and cached data are stored locally in your browser using Chrome's storage API</li>
              <li><strong>Server Storage:</strong> Authentication tokens, license information, usage statistics, and reply history are stored on our secure servers</li>
              <li><strong>Data Retention:</strong> We retain your data for as long as your account is active or as needed to provide services. Account data is deleted within 30 days of account closure</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2. Security Measures</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Encryption of sensitive data in transit using HTTPS/TLS</li>
              <li>Encrypted storage of authentication tokens</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure API communication with authentication</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Permissions Explanation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Extension requires certain Chrome permissions to function. Here's why we need each permission:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>storage:</strong> To save your preferences, settings, authentication tokens, and cached data locally in your browser</li>
              <li><strong>activeTab:</strong> To interact with the current X/Twitter tab and post replies on your behalf</li>
              <li><strong>scripting:</strong> To inject content scripts into X/Twitter pages to enable auto-reply functionality</li>
              <li><strong>notifications:</strong> To show you notifications about reply status, quota usage, and errors</li>
              <li><strong>sidePanel:</strong> To display the Extension's interface in Chrome's side panel</li>
              <li><strong>windows & tabs:</strong> To manage the Extension window and tabs for better user experience</li>
              <li><strong>system.display:</strong> To optimize the Extension's UI for your screen resolution</li>
              <li><strong>Host permissions for twitter.com and x.com:</strong> To access and interact with X/Twitter pages for posting replies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on your location and applicable privacy laws, you have certain rights regarding your personal information. We are committed to facilitating the exercise of these rights in accordance with applicable data protection regulations.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Right to Access</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have the right to request confirmation of whether we process your personal data and to obtain a copy of your personal information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>What you can request:</strong> User account details, authentication data, reply history, KOL lists, usage statistics, settings and preferences, stored tokens and license information.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Right to Rectification</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have the right to request correction of inaccurate, incomplete, or outdated personal information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>How to correct:</strong> Most settings and preferences can be updated directly in the Extension interface. For other data corrections, submit a request via email with specific details of the information to be corrected.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Right to Erasure (Right to be Forgotten)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have the right to request deletion of your personal information under certain circumstances.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>What will be deleted:</strong> User account, authentication tokens, reply history, KOL lists, usage statistics, preferences and settings, and any cached data.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>Exceptions:</strong> We may retain certain data if required by law, for legal claims, for accounting purposes (up to 7 years), or to prevent fraud and abuse.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Timeline:</strong> Account deletion requests are processed within 30 days. You will receive confirmation once the deletion is complete.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Right to Data Portability</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have the right to receive your personal data in a structured, commonly used, and machine-readable format (JSON or CSV).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Exportable data:</strong> User profile information, reply history with timestamps, KOL lists and statistics, usage data and quota information, settings and preferences.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Right to Object</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have the right to object to the processing of your personal data for certain purposes, including direct marketing, profiling, and processing based on legitimate interests.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Note:</strong> Objecting to certain processing may limit or prevent us from providing the Extension's services, as some data processing is essential for functionality.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Right to Restriction of Processing</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have the right to request restriction of processing your personal data in specific situations:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>When you contest the accuracy of the data</li>
                  <li>When processing is unlawful but you don't want the data erased</li>
                  <li>When we no longer need the data but you need it for legal claims</li>
                  <li>When you have objected to processing pending verification</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Right to Withdraw Consent</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Where we rely on your consent to process personal data, you have the right to withdraw that consent at any time.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>How to withdraw:</strong> You can uninstall the Extension, disable specific features in settings, or contact us to withdraw consent. Withdrawal does not affect the lawfulness of processing before withdrawal.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Right to Lodge a Complaint</h3>
                <p className="text-gray-700 leading-relaxed">
                  You have the right to lodge a complaint with a supervisory authority, particularly in your country of residence, workplace, or where an alleged infringement occurred. For EU users, you can find your local data protection authority at <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EDPB Member List</a>.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Exercise Your Rights</h3>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-gray-800 leading-relaxed mb-4">
                  To exercise any of the above rights, please submit a written request to:
                </p>
                <p className="text-gray-800 font-medium mb-4">
                  Email: <a href="mailto:privacy@yaps.win" className="text-blue-600 hover:underline">privacy@yaps.win</a>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong>Your request must include:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mb-4">
                  <li>Your full name and email address associated with your account</li>
                  <li>Clear description of which right(s) you wish to exercise</li>
                  <li>Specific details about your request</li>
                  <li>Proof of identity (to prevent unauthorized access to your data)</li>
                </ul>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong>Response Timeline:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mb-4">
                  <li>We will acknowledge your request within 48 hours</li>
                  <li>We will respond to your request within 30 days (may extend to 60 days for complex requests)</li>
                  <li>If we need to extend the timeline, we will inform you and explain the reason</li>
                </ul>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>No Fee:</strong> We do not charge a fee for processing your rights requests unless the request is clearly unfounded, repetitive, or excessive. In such cases, we may charge a reasonable administrative fee or refuse the request.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <p className="text-yellow-900 text-sm leading-relaxed">
                <strong>Important:</strong> To protect your privacy and security, we will verify your identity before processing any rights requests. We may ask for additional information to confirm you are the account holder. This verification process is necessary to prevent unauthorized access to your personal data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Extension does not use cookies or tracking technologies. However, we access cookies that X/Twitter sets in your browser to authenticate and post replies on your behalf. We do not collect or store these cookies on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Extension is not intended for children under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws different from those in your country. By using the Extension, you consent to the transfer of your information to these countries. We take steps to ensure that your data receives adequate protection in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              The Extension may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party services you access through the Extension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy in the Extension and updating the "Last updated" date. Your continued use of the Extension after such changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Breach Notification</h2>
            <p className="text-gray-700 leading-relaxed">
              In the event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law. We will take immediate steps to mitigate the breach and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">California Privacy Rights (CCPA)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Right to know what personal information is collected</li>
              <li>Right to know whether personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to deletion of personal information</li>
              <li>Right to non-discrimination for exercising CCPA rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">GDPR Compliance (European Users)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Legal Basis:</strong> We process your data based on consent, contract performance, legitimate interests, or legal obligations</li>
              <li><strong>Data Protection Officer:</strong> For GDPR-related inquiries, contact our DPO at <a href="mailto:dpo@yaps.win" className="text-blue-600 hover:underline">dpo@yaps.win</a></li>
              <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with your local supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:privacy@yaps.win" className="text-blue-600 hover:underline">privacy@yaps.win</a></p>
              <p className="text-gray-700"><strong>Telegram:</strong> <a href="https://t.me/reply_guys_bot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@yapsbot</a></p>
              <p className="text-gray-700"><strong>Support:</strong> <a href="https://t.me/yapssupport" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@yapssupport</a></p>
              <p className="text-gray-700"><strong>Website:</strong> <a href="https://yaps.win" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://yaps.win</a></p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Summary</h3>
              <p className="text-blue-800 leading-relaxed">
                We collect your authentication data, usage information, and preferences to provide the auto-reply service. We share data with AI providers (OpenAI, Grok, DeepSeek), Telegram for authentication, and X for posting replies. Your data is encrypted and stored securely. You have the right to access, correct, or delete your data at any time. We do not sell your personal information.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 Yaps.win. Made with ❤️ for the community.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors font-medium">Privacy Policy</Link>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

