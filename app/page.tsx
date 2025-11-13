'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-white'
      }`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Reply Guys" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-lg font-semibold text-gray-900">Reply Guys</span>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900">
                Docs
              </Link>
              <a href="https://t.me/yapsbot" className="text-sm text-gray-600 hover:text-gray-900">
                Support
              </a>
              <a
                href="https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
              >
                Install
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automate Your X Engagement with AI
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Chrome extension that helps you reply and post on X automatically using AI. Simple, fast, effective.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
            >
              Install Extension
            </a>
            <Link
              href="/docs"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition"
            >
              Documentation
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <span>✓ Free to start</span>
            <span>✓ 3-minute setup</span>
            <span>✓ Chrome only</span>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              See How It Works
            </h2>
            <p className="text-gray-600">
              Watch the extension in action
            </p>
          </div>
          
          <div className="relative w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Features
            </h2>
            <p className="text-gray-600">
              Everything you need to automate X engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Auto Reply',
                description: 'Generate AI responses to posts automatically with customizable settings',
              },
              {
                title: 'Auto Post',
                description: 'Schedule and publish posts automatically with AI-generated content',
              },
              {
                title: 'Multi AI Support',
                description: 'Works with OpenAI, Grok, and DeepSeek - choose your preferred provider',
              },
              {
                title: 'Queue Management',
                description: 'Smart queue system with retry logic and rate limiting',
              },
              {
                title: 'Usage Tracking',
                description: 'Monitor your API usage and quota in real-time',
              },
              {
                title: 'Customizable Settings',
                description: 'Configure delays, tone, length, and more to fit your needs',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Getting Started
            </h2>
            <p className="text-gray-600">
              Start automating in 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: '1', 
                title: 'Install Extension', 
                description: 'Add Reply Guys from Chrome Web Store with one click' 
              },
              { 
                step: '2', 
                title: 'Get License', 
                description: 'Contact @yapsbot on Telegram to receive your license key' 
              },
              { 
                step: '3', 
                title: 'Start Automating', 
                description: 'Configure your settings and let AI handle your X engagement' 
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Automate?
          </h2>
          <p className="text-gray-600 mb-8">
            Start automating your X engagement with AI today
          </p>
          <a
            href="https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Install Extension
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img 
                  src="/logo.png" 
                  alt="Reply Guys" 
                  className="w-8 h-8 rounded-lg"
                />
                <span className="font-semibold">Reply Guys</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered automation for X
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/docs?doc=getting-started" className="hover:text-white">Getting Started</Link></li>
                <li><a href="https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd" className="hover:text-white">Chrome Store</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://t.me/yapsbot" className="hover:text-white">Telegram Bot</a></li>
                <li><a href="https://t.me/yapssupport" className="hover:text-white">Help Center</a></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 Reply Guys. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://twitter.com/yapswin" className="hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://t.me/yapsbot" className="hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
