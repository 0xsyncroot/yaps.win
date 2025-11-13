import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yaps.win'),
  
  title: {
    default: "Reply Guys - AI-Powered X (Twitter) Automation Platform",
    template: "%s | Reply Guys"
  },
  
  description: "Automate your X engagement with AI. Chrome extension for Auto Reply and Auto Post. Powered by OpenAI, Grok, and DeepSeek. Simple setup, customizable settings.",
  
  keywords: [
    "X automation",
    "Twitter automation", 
    "AI reply",
    "auto reply Twitter",
    "auto post X",
    "Twitter bot",
    "X engagement tool",
    "AI content generation",
    "social media automation",
    "OpenAI Twitter",
    "Grok AI",
    "DeepSeek AI",
    "Chrome extension",
    "Twitter Chrome extension",
    "X productivity tool"
  ],
  
  authors: [
    { name: "Reply Guys Team", url: "https://yaps.win" }
  ],
  
  creator: "Reply Guys",
  publisher: "Reply Guys",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['vi_VN'],
    url: 'https://yaps.win',
    siteName: 'Reply Guys',
    title: 'Reply Guys - AI-Powered X Automation',
    description: 'Automate your X engagement with AI. Auto Reply and Auto Post with simple setup.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Reply Guys - AI X Automation',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Reply Guys Logo',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@yapswin',
    creator: '@yapswin',
    title: 'Reply Guys - AI-Powered X Automation',
    description: 'Automate your X engagement with AI. Auto Reply and Auto Post with simple setup.',
    images: ['/logo.png'],
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
  
  manifest: '/site.webmanifest',
  
  alternates: {
    canonical: 'https://yaps.win',
    languages: {
      'en-US': 'https://yaps.win',
      'vi-VN': 'https://yaps.win?lang=vi',
    },
  },
  
  verification: {
    google: 'your-google-site-verification-code',
  },
  
  category: 'Technology',
  
  other: {
    'application-name': 'Reply Guys',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Reply Guys',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2563eb',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#ffffff',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Schema.org structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Reply Guys',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Chrome',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.5',
                ratingCount: '100',
                bestRating: '5',
                worstRating: '1',
              },
              author: {
                '@type': 'Organization',
                name: 'Reply Guys',
                url: 'https://yaps.win',
              },
              description: 'AI-powered automation platform for X (Twitter). Auto Reply, Auto Post, and content generation powered by OpenAI, Grok, and DeepSeek.',
              downloadUrl: 'https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd',
              screenshot: '/logo.png',
              softwareVersion: '2.0.0',
              featureList: [
                'Auto Reply with AI',
                'Auto Post scheduling',
                'Multi-AI provider support',
                'Quota management',
                'Batch processing',
                'Real-time analytics',
              ],
            }),
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Reply Guys',
              url: 'https://yaps.win',
              logo: 'https://yaps.win/logo.png',
              sameAs: [
                'https://twitter.com/yapswin',
                'https://t.me/yapsbot',
                'https://github.com/yapswin',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                url: 'https://t.me/yapssupport',
              },
            }),
          }}
        />
        
        {/* WebSite Schema for Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Reply Guys',
              url: 'https://yaps.win',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://yaps.win/docs?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
