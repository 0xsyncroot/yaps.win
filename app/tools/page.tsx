'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ToolPage() {
  const [inputText, setInputText] = useState('');
  const [filterType, setFilterType] = useState<'x.com' | 'farcaster'>('x.com');
  const [filteredLinks, setFilteredLinks] = useState<string[]>([]);

  const extractLinks = (text: string, type: 'x.com' | 'farcaster'): string[] => {
    const links: string[] = [];
    
    if (type === 'x.com') {
      const xPattern = /https?:\/\/(?:www\.)?(?:x\.com|twitter\.com)\/[^\s\)]+/gi;
      const matches = text.match(xPattern);
      if (matches) {
        const cleanedLinks = matches.map(link => {
          try {
            const url = new URL(link);
            return `${url.protocol}//${url.host}${url.pathname}`;
          } catch {
            return link.split('?')[0].split('#')[0];
          }
        });
        links.push(...cleanedLinks);
      }
    } else if (type === 'farcaster') {
      const farcasterPattern = /https?:\/\/(?:www\.)?(?:warpcast\.com|farcaster\.xyz)\/[^\s\)]+/gi;
      const matches = text.match(farcasterPattern);
      if (matches) {
        links.push(...matches);
      }
    }
    
    const uniqueLinks = Array.from(new Set(links));
    return uniqueLinks;
  };

  const handleFilter = () => {
    if (!inputText.trim()) {
      setFilteredLinks([]);
      return;
    }
    
    const links = extractLinks(inputText, filterType);
    setFilteredLinks(links);
  };

  const handleCopyAll = async () => {
    if (filteredLinks.length === 0) return;
    
    const textToCopy = filteredLinks.join('\n');
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert(`Copied ${filteredLinks.length} link${filteredLinks.length !== 1 ? 's' : ''} to clipboard!`);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCopyLink = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Reply Guys Logo" 
                  className="w-10 h-10 rounded-xl shadow-sm group-hover:shadow-md transition-all"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xl font-semibold text-gray-900">
                Reply Guys
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/docs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Docs
              </Link>
              <Link href="/tools" className="text-sm font-medium text-gray-900 transition-colors">
                Tools
              </Link>
              <a href="https://t.me/yapsbot" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Support
              </a>
              <a
                href="https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all"
              >
                Install Extension
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Link Filter Tools
            </h1>
            <p className="text-xl text-gray-600">
              Filter links from chat and copy easily
            </p>
          </div>

          {/* Filter Options */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select link type to filter:
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="filterType"
                    value="x.com"
                    checked={filterType === 'x.com'}
                    onChange={(e) => setFilterType(e.target.value as 'x.com')}
                    className="w-4 h-4 text-gray-900 focus:ring-gray-900"
                  />
                  <span className="text-sm font-medium text-gray-700">x.com / Twitter</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="filterType"
                    value="farcaster"
                    checked={filterType === 'farcaster'}
                    onChange={(e) => setFilterType(e.target.value as 'farcaster')}
                    className="w-4 h-4 text-gray-900 focus:ring-gray-900"
                  />
                  <span className="text-sm font-medium text-gray-700">Farcaster</span>
                </label>
              </div>
            </div>

            {/* Input Area */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste chat content containing links:
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste chat content here..."
                className="w-full h-48 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none text-sm"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={handleFilter}
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all"
            >
              Filter Links
            </button>
          </div>

          {/* Results */}
          {filteredLinks.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Found {filteredLinks.length} link{filteredLinks.length !== 1 ? 's' : ''}
                </h2>
                <button
                  onClick={handleCopyAll}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy All
                </button>
              </div>
              
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                {filteredLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-sm text-gray-700 hover:text-gray-900 break-all pr-4"
                    >
                      {link}
                    </a>
                    <button
                      onClick={() => handleCopyLink(link)}
                      className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-900 hover:bg-white rounded-lg transition-all opacity-0 group-hover:opacity-100"
                      title="Copy link"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredLinks.length === 0 && inputText && (
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
              <p className="text-gray-600">No {filterType === 'x.com' ? 'x.com/Twitter' : 'Farcaster'} links found in the content.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Reply Guys Logo" 
                  className="w-10 h-10 rounded-xl"
                />
                <span className="text-xl font-semibold">Reply Guys</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                AI-powered automation platform for X. Boost your engagement effortlessly.
              </p>
              <div className="flex gap-4">
                <a href="https://twitter.com/yapswin" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="https://t.me/yapsbot" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/tools" className="hover:text-white transition-colors">Tools</Link></li>
                <li><a href="https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd" className="hover:text-white transition-colors">Chrome Store</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="https://t.me/yapsbot" className="hover:text-white transition-colors">Telegram Bot</a></li>
                <li><a href="https://t.me/yapssupport" className="hover:text-white transition-colors">Help Center</a></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 Reply Guys. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

