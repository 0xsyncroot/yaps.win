'use client';

import { useState } from 'react';
import SiteHeader from '../components/SiteHeader';

type ToolMode = 'extract' | 'compare';
type Platform = 'x.com' | 'farcaster' | 'binance';

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<string>('link-extractor');
  const [mode, setMode] = useState<ToolMode>('extract');
  const [inputText, setInputText] = useState('');
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [filterType, setFilterType] = useState<Platform>('x.com');
  const [filteredLinks, setFilteredLinks] = useState<string[]>([]);
  const [compareResult, setCompareResult] = useState<{
    onlyInFirst: string[];
    onlyInSecond: string[];
    inBoth: string[];
  } | null>(null);

  const extractLinks = (text: string, type: Platform): string[] => {
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
    } else if (type === 'binance') {
      // Binance Square posts: binance.com/[locale/]square/post/<id>, plus ?postId= forms —
      // keep the query string since the post id can live there.
      const binancePattern = /https?:\/\/(?:www\.)?binance\.com\/[^\s\)]*square[^\s\)]*/gi;
      const matches = text.match(binancePattern);
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
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <SiteHeader />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Tool List Only */}
        <aside className="w-64 shrink-0 overflow-y-auto border-r border-slate-200 bg-white">
          <div className="p-4">
            <h2 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Tools</h2>

            <div className="space-y-1">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-all ${
                    activeTool === tool.id
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {tool.icon}
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium">{tool.name}</div>
                    <div className={`text-xs ${activeTool === tool.id ? 'text-brand-100' : 'text-slate-500'}`}>
                      {tool.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content - Features */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-6xl p-8">
            {activeTool === 'link-extractor' && (
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h1 className="font-display text-2xl font-bold text-slate-900">Link Extractor</h1>
                  <p className="mt-1 text-sm text-slate-600">Extract and compare links from text</p>
                </div>

                {/* Control Panel */}
                <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200/70">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Mode Selector */}
                    <div>
                      <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Mode
                      </label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setMode('extract')}
                          className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                            mode === 'extract'
                              ? 'bg-brand-600 text-white shadow-soft'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          Extract
                        </button>
                        <button
                          onClick={() => setMode('compare')}
                          className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                            mode === 'compare'
                              ? 'bg-brand-600 text-white shadow-soft'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          Compare
                        </button>
                      </div>
                    </div>

                    {/* Platform Filter */}
                    <div>
                      <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Platform
                      </label>
                      <div className="flex gap-4">
                        <label className="flex cursor-pointer items-center gap-2">
                          <input
                            type="radio"
                            name="filterType"
                            value="x.com"
                            checked={filterType === 'x.com'}
                            onChange={(e) => setFilterType(e.target.value as 'x.com')}
                            className="h-4 w-4 text-brand-600 focus:ring-brand-500"
                          />
                          <span className="text-sm font-medium text-slate-700">x.com / Twitter</span>
                        </label>
                        <label className="flex cursor-pointer items-center gap-2">
                          <input
                            type="radio"
                            name="filterType"
                            value="farcaster"
                            checked={filterType === 'farcaster'}
                            onChange={(e) => setFilterType(e.target.value as 'farcaster')}
                            className="h-4 w-4 text-brand-600 focus:ring-brand-500"
                          />
                          <span className="text-sm font-medium text-slate-700">Farcaster</span>
                        </label>
                        <label className="flex cursor-pointer items-center gap-2">
                          <input
                            type="radio"
                            name="filterType"
                            value="binance"
                            checked={filterType === 'binance'}
                            onChange={(e) => setFilterType(e.target.value as Platform)}
                            className="h-4 w-4 text-brand-600 focus:ring-brand-500"
                          />
                          <span className="text-sm font-medium text-slate-700">Binance Square</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extract Mode */}
                {mode === 'extract' && (
                  <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200/70">
                      <label className="mb-3 block text-sm font-medium text-slate-700">
                        Input Text
                      </label>
                      <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Paste your text here..."
                        className="h-40 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-brand-500"
                      />
                      <button
                        onClick={handleFilter}
                        className="mt-4 w-full rounded-lg bg-brand-600 px-6 py-3 font-medium text-white transition-all hover:bg-brand-700"
                      >
                        Extract Links
                      </button>
                    </div>

                    {/* Results */}
                    {filteredLinks.length > 0 && (
                      <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200/70">
                        <div className="mb-4 flex items-center justify-between">
                          <h2 className="text-sm font-semibold text-slate-900">
                            {filteredLinks.length} link{filteredLinks.length !== 1 ? 's' : ''} found
                          </h2>
                          <button
                            onClick={() => handleCopyAll(filteredLinks)}
                            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-brand-700"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy All
                          </button>
                        </div>

                        <div className="scrollbar-thin max-h-[400px] space-y-1 overflow-y-auto pr-2">
                          {filteredLinks.map((link, index) => (
                            <div
                              key={index}
                              className="group flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 transition-colors hover:bg-slate-100"
                            >
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 break-all pr-4 text-sm text-slate-700 hover:text-brand-700"
                              >
                                {link}
                              </a>
                              <button
                                onClick={() => handleCopyLink(link)}
                                className="flex-shrink-0 rounded p-1.5 text-slate-400 opacity-0 transition-all hover:bg-white hover:text-brand-700 group-hover:opacity-100"
                                title="Copy"
                              >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {filteredLinks.length === 0 && inputText && (
                      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                        <svg className="mx-auto mb-3 h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                        <p className="text-sm text-slate-600">No {filterType === 'x.com' ? 'x.com/Twitter' : filterType === 'farcaster' ? 'Farcaster' : 'Binance Square'} links found</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Compare Mode */}
                {mode === 'compare' && (
                  <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200/70">
                      <div className="mb-6 grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            First Text
                          </label>
                          <textarea
                            value={inputText1}
                            onChange={(e) => setInputText1(e.target.value)}
                            placeholder="Paste first text here..."
                            className="h-40 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-brand-500"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Second Text
                          </label>
                          <textarea
                            value={inputText2}
                            onChange={(e) => setInputText2(e.target.value)}
                            placeholder="Paste second text here..."
                            className="h-40 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-transparent focus:ring-2 focus:ring-brand-500"
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleCompare}
                        className="w-full rounded-lg bg-brand-600 px-6 py-3 font-medium text-white transition-all hover:bg-brand-700"
                      >
                        Compare Links
                      </button>
                    </div>

                    {/* Compare Results */}
                    {compareResult && (
                      <div className="space-y-4">
                        {/* Results Header with Info */}
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg font-semibold text-slate-900">Compare Results</h2>
                          <div className="group relative">
                            <svg className="h-5 w-5 cursor-help text-slate-400 hover:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="invisible absolute left-0 top-full z-10 mt-2 w-80 rounded-lg bg-slate-900 p-4 text-xs text-white opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400"></div>
                                  <div>
                                    <div className="font-semibold text-emerald-400">In Both</div>
                                    <div className="text-slate-300">Links that appear in both texts</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-400"></div>
                                  <div>
                                    <div className="font-semibold text-brand-300">Only First</div>
                                    <div className="text-slate-300">Links only in the first text</div>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-400"></div>
                                  <div>
                                    <div className="font-semibold text-amber-400">Only Second</div>
                                    <div className="text-slate-300">Links only in the second text</div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute -top-1 left-2 h-2 w-2 rotate-45 bg-slate-900"></div>
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                        {/* Links in Both */}
                        <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white">
                          <div className="border-b border-emerald-200 bg-emerald-50 px-4 py-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                <h3 className="text-sm font-semibold text-emerald-900">
                                  In Both
                                </h3>
                              </div>
                              <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                                {compareResult.inBoth.length}
                              </span>
                            </div>
                            {compareResult.inBoth.length > 0 && (
                              <button
                                onClick={() => handleCopyAll(compareResult.inBoth)}
                                className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-emerald-700"
                              >
                                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy All
                              </button>
                            )}
                          </div>
                          <div className="scrollbar-thin max-h-[300px] space-y-1 overflow-y-auto p-3">
                            {compareResult.inBoth.length === 0 ? (
                              <p className="py-4 text-center text-xs text-slate-500">No common links</p>
                            ) : (
                              compareResult.inBoth.map((link, index) => (
                                <div
                                  key={index}
                                  className="group flex items-center justify-between rounded bg-emerald-50 px-2 py-1.5 transition-colors hover:bg-emerald-100"
                                >
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 break-all pr-2 text-xs text-slate-700 hover:text-slate-900"
                                  >
                                    {link}
                                  </a>
                                  <button
                                    onClick={() => handleCopyLink(link)}
                                    className="flex-shrink-0 rounded p-1 text-slate-400 opacity-0 transition-all hover:bg-white hover:text-slate-900 group-hover:opacity-100"
                                  >
                                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  </button>
                                </div>
                              ))
                            )}
                          </div>
                        </div>

                        {/* Only in First */}
                        <div className="overflow-hidden rounded-2xl border border-brand-200 bg-white">
                          <div className="border-b border-brand-200 bg-brand-50 px-4 py-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-brand-500"></div>
                                <h3 className="text-sm font-semibold text-brand-900">
                                  Only First
                                </h3>
                              </div>
                              <span className="rounded bg-brand-100 px-2 py-1 text-xs font-medium text-brand-700">
                                {compareResult.onlyInFirst.length}
                              </span>
                            </div>
                            {compareResult.onlyInFirst.length > 0 && (
                              <button
                                onClick={() => handleCopyAll(compareResult.onlyInFirst)}
                                className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded bg-brand-600 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-brand-700"
                              >
                                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy All
                              </button>
                            )}
                          </div>
                          <div className="scrollbar-thin max-h-[300px] space-y-1 overflow-y-auto p-3">
                            {compareResult.onlyInFirst.length === 0 ? (
                              <p className="py-4 text-center text-xs text-slate-500">No unique links</p>
                            ) : (
                              compareResult.onlyInFirst.map((link, index) => (
                                <div
                                  key={index}
                                  className="group flex items-center justify-between rounded bg-brand-50 px-2 py-1.5 transition-colors hover:bg-brand-100"
                                >
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 break-all pr-2 text-xs text-slate-700 hover:text-slate-900"
                                  >
                                    {link}
                                  </a>
                                  <button
                                    onClick={() => handleCopyLink(link)}
                                    className="flex-shrink-0 rounded p-1 text-slate-400 opacity-0 transition-all hover:bg-white hover:text-slate-900 group-hover:opacity-100"
                                  >
                                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                  </button>
                                </div>
                              ))
                            )}
                          </div>
                        </div>

                        {/* Only in Second */}
                        <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white">
                          <div className="border-b border-amber-200 bg-amber-50 px-4 py-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                                <h3 className="text-sm font-semibold text-amber-900">
                                  Only Second
                                </h3>
                              </div>
                              <span className="rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                                {compareResult.onlyInSecond.length}
                              </span>
                            </div>
                            {compareResult.onlyInSecond.length > 0 && (
                              <button
                                onClick={() => handleCopyAll(compareResult.onlyInSecond)}
                                className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded bg-amber-500 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-amber-600"
                              >
                                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                Copy All
                              </button>
                            )}
                          </div>
                          <div className="scrollbar-thin max-h-[300px] space-y-1 overflow-y-auto p-3">
                            {compareResult.onlyInSecond.length === 0 ? (
                              <p className="py-4 text-center text-xs text-slate-500">No unique links</p>
                            ) : (
                              compareResult.onlyInSecond.map((link, index) => (
                                <div
                                  key={index}
                                  className="group flex items-center justify-between rounded bg-amber-50 px-2 py-1.5 transition-colors hover:bg-amber-100"
                                >
                                  <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 break-all pr-2 text-xs text-slate-700 hover:text-slate-900"
                                  >
                                    {link}
                                  </a>
                                  <button
                                    onClick={() => handleCopyLink(link)}
                                    className="flex-shrink-0 rounded p-1 text-slate-400 opacity-0 transition-all hover:bg-white hover:text-slate-900 group-hover:opacity-100"
                                  >
                                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
