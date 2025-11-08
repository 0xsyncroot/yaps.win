'use client';

import Link from 'next/link';
import { useState } from 'react';

type ToolMode = 'extract' | 'compare';

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<string>('link-extractor');
  const [mode, setMode] = useState<ToolMode>('extract');
  const [inputText, setInputText] = useState('');
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [filterType, setFilterType] = useState<'x.com' | 'farcaster'>('x.com');
  const [filteredLinks, setFilteredLinks] = useState<string[]>([]);
  const [compareResult, setCompareResult] = useState<{
    onlyInFirst: string[];
    onlyInSecond: string[];
    inBoth: string[];
  } | null>(null);

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

  const handleCompare = () => {
    if (!inputText1.trim() || !inputText2.trim()) {
      setCompareResult(null);
      return;
    }
    
    const links1 = extractLinks(inputText1, filterType);
    const links2 = extractLinks(inputText2, filterType);
    
    const set1 = new Set(links1);
    const set2 = new Set(links2);
    
    const onlyInFirst = links1.filter(link => !set2.has(link));
    const onlyInSecond = links2.filter(link => !set1.has(link));
    const inBoth = links1.filter(link => set2.has(link));
    
    setCompareResult({
      onlyInFirst,
      onlyInSecond,
      inBoth,
    });
  };

  const handleCopyAll = async (links: string[]) => {
    if (links.length === 0) return;
    
    const textToCopy = links.join('\n');
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert(`Copied ${links.length} link${links.length !== 1 ? 's' : ''} to clipboard!`);
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

  const tools = [
    {
      id: 'link-extractor',
      name: 'Link Extractor',
      description: 'Extract and compare links',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="Reply Guys" 
                  className="w-8 h-8 rounded-lg"
                />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
              </div>
              <span className="text-lg font-semibold text-gray-900">Reply Guys</span>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900">
                Docs
              </Link>
              <Link href="/tools" className="text-sm text-gray-900 font-medium">
                Tools
              </Link>
              <a href="https://t.me/yapsbot" className="text-sm text-gray-600 hover:text-gray-900">
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="pt-16 flex h-screen">
        {/* Sidebar - Tool List Only */}
        <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Tools</h2>
            
            <div className="space-y-1">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    activeTool === tool.id
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tool.icon}
                  <div className="text-left flex-1">
                    <div className="text-sm font-medium">{tool.name}</div>
                    <div className={`text-xs ${activeTool === tool.id ? 'text-gray-300' : 'text-gray-500'}`}>
                      {tool.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Features */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto p-8">
            {activeTool === 'link-extractor' && (
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Link Extractor</h1>
                  <p className="text-sm text-gray-600">Extract and compare links from text</p>
                </div>

                {/* Control Panel */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Mode Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Mode
                      </label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setMode('extract')}
                          className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                            mode === 'extract'
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Extract
                        </button>
                        <button
                          onClick={() => setMode('compare')}
                          className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                            mode === 'compare'
                              ? 'bg-gray-900 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Platform Filter */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Platform
                      </label>
                      <div className="flex gap-4">
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
                  </div>
                </div>

                {/* Extract Mode */}
                {mode === 'extract' && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Input Text
                      </label>
                      <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Paste your text here..."
                        className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none text-sm"
                      />
                      <button
                        onClick={handleFilter}
                        className="mt-4 w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all"
                      >
                        Extract Links
                      </button>
                    </div>

                    {/* Results */}
                    {filteredLinks.length > 0 && (
                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-sm font-semibold text-gray-900">
                            {filteredLinks.length} link{filteredLinks.length !== 1 ? 's' : ''} found
                          </h2>
                          <button
                            onClick={() => handleCopyAll(filteredLinks)}
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy All
                          </button>
                        </div>
                        
                        <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                          {filteredLinks.map((link, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
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
                                className="flex-shrink-0 p-1.5 text-gray-400 hover:text-gray-900 hover:bg-white rounded transition-all opacity-0 group-hover:opacity-100"
                                title="Copy"
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
                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                        <p className="text-sm text-gray-600">No {filterType === 'x.com' ? 'x.com/Twitter' : 'Farcaster'} links found</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Compare Mode */}
                {mode === 'compare' && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Text
                          </label>
                          <textarea
                            value={inputText1}
                            onChange={(e) => setInputText1(e.target.value)}
                            placeholder="Paste first text here..."
                            className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Second Text
                          </label>
                          <textarea
                            value={inputText2}
                            onChange={(e) => setInputText2(e.target.value)}
                            placeholder="Paste second text here..."
                            className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none text-sm"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleCompare}
                        className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all"
                      >
                        Compare Links
                      </button>
                    </div>

                    {/* Compare Results */}
                    {compareResult && (
                      <div className="space-y-4">
                        {/* Results Header with Info */}
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg font-semibold text-gray-900">Compare Results</h2>
                          <div className="group relative">
                            <svg className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="absolute left-0 top-full mt-2 w-80 bg-gray-900 text-white text-xs rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 shadow-xl">
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-400 mt-1 flex-shrink-0"></div>
                                  <div>
                                    <div className="font-semibold text-green-400">In Both</div>
                                    <div className="text-gray-300">Links that appear in both texts</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-1 flex-shrink-0"></div>
                                  <div>
                                    <div className="font-semibold text-blue-400">Only First</div>
                                    <div className="text-gray-300">Links only in the first text</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-1 flex-shrink-0"></div>
                                  <div>
                                    <div className="font-semibold text-orange-400">Only Second</div>
                                    <div className="text-gray-300">Links only in the second text</div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute -top-1 left-2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                        {/* Links in Both */}
                        <div className="bg-white rounded-xl border border-green-200 overflow-hidden">
                          <div className="px-4 py-3 bg-green-50 border-b border-green-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <h3 className="text-sm font-semibold text-green-900">
                                  In Both
                                </h3>
                              </div>
                              <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded">
                                {compareResult.inBoth.length}
                              </span>
                            </div>
                            {compareResult.inBoth.length > 0 && (
                              <button
                                onClick={() => handleCopyAll(compareResult.inBoth)}
                                className="mt-2 w-full inline-flex items-center justify-center gap-1.5 bg-green-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-green-700 transition-all"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy All
                              </button>
                            )}
                          </div>
                          <div className="p-3 space-y-1 max-h-[300px] overflow-y-auto scrollbar-thin">
                            {compareResult.inBoth.length === 0 ? (
                              <p className="text-xs text-gray-500 text-center py-4">No common links</p>
                            ) : (
                              compareResult.inBoth.map((link, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between px-2 py-1.5 bg-green-50 rounded hover:bg-green-100 transition-colors group"
                                >
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-xs text-gray-700 hover:text-gray-900 break-all pr-2"
                                  >
                                    {link}
                                  </a>
                                  <button
                                    onClick={() => handleCopyLink(link)}
                                    className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-900 hover:bg-white rounded transition-all opacity-0 group-hover:opacity-100"
                                  >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  </button>
                                </div>
                              ))
                            )}
                          </div>
                        </div>

                        {/* Only in First */}
                        <div className="bg-white rounded-xl border border-blue-200 overflow-hidden">
                          <div className="px-4 py-3 bg-blue-50 border-b border-blue-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <h3 className="text-sm font-semibold text-blue-900">
                                  Only First
                                </h3>
                              </div>
                              <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">
                                {compareResult.onlyInFirst.length}
                              </span>
                            </div>
                            {compareResult.onlyInFirst.length > 0 && (
                              <button
                                onClick={() => handleCopyAll(compareResult.onlyInFirst)}
                                className="mt-2 w-full inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-all"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy All
                              </button>
                            )}
                          </div>
                          <div className="p-3 space-y-1 max-h-[300px] overflow-y-auto scrollbar-thin">
                            {compareResult.onlyInFirst.length === 0 ? (
                              <p className="text-xs text-gray-500 text-center py-4">No unique links</p>
                            ) : (
                              compareResult.onlyInFirst.map((link, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between px-2 py-1.5 bg-blue-50 rounded hover:bg-blue-100 transition-colors group"
                                >
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-xs text-gray-700 hover:text-gray-900 break-all pr-2"
                                  >
                                    {link}
                                  </a>
                                  <button
                                    onClick={() => handleCopyLink(link)}
                                    className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-900 hover:bg-white rounded transition-all opacity-0 group-hover:opacity-100"
                                  >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  </button>
                                </div>
                              ))
                            )}
                          </div>
                        </div>

                        {/* Only in Second */}
                        <div className="bg-white rounded-xl border border-orange-200 overflow-hidden">
                          <div className="px-4 py-3 bg-orange-50 border-b border-orange-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <h3 className="text-sm font-semibold text-orange-900">
                                  Only Second
                                </h3>
                              </div>
                              <span className="text-xs font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded">
                                {compareResult.onlyInSecond.length}
                              </span>
                            </div>
                            {compareResult.onlyInSecond.length > 0 && (
                              <button
                                onClick={() => handleCopyAll(compareResult.onlyInSecond)}
                                className="mt-2 w-full inline-flex items-center justify-center gap-1.5 bg-orange-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-orange-700 transition-all"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy All
                              </button>
                            )}
                          </div>
                          <div className="p-3 space-y-1 max-h-[300px] overflow-y-auto scrollbar-thin">
                            {compareResult.onlyInSecond.length === 0 ? (
                              <p className="text-xs text-gray-500 text-center py-4">No unique links</p>
                            ) : (
                              compareResult.onlyInSecond.map((link, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between px-2 py-1.5 bg-orange-50 rounded hover:bg-orange-100 transition-colors group"
                                >
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-xs text-gray-700 hover:text-gray-900 break-all pr-2"
                                  >
                                    {link}
                                  </a>
                                  <button
                                    onClick={() => handleCopyLink(link)}
                                    className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-900 hover:bg-white rounded transition-all opacity-0 group-hover:opacity-100"
                                  >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  </button>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
