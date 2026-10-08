import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, ExternalLink, Globe } from 'lucide-react';

interface GoogleSearchSimProps {
  onDiscoverRatioCity?: () => void;
  isDiscovered?: boolean;
}

export const GoogleSearchSim: React.FC<GoogleSearchSimProps> = ({
  onDiscoverRatioCity,
  isDiscovered = false,
}) => {
  const [typedQuery, setTypedQuery] = useState('');
  const fullQuery = 'best iphone shop in kumasi';

  useEffect(() => {
    let current = '';
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullQuery.length) {
        current += fullQuery[index];
        setTypedQuery(current);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1f1f1f] text-neutral-100 min-h-full font-sans pb-8 select-none">
      {/* Google Header */}
      <div className="sticky top-0 z-10 bg-[#1f1f1f] border-b border-[#303134] px-4 py-2.5">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-white">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          <div className="flex-1 bg-[#303134] rounded-full px-3 py-1.5 flex items-center justify-between text-xs text-neutral-200">
            <span className="truncate">{typedQuery}<span className="inline-block w-1.5 h-3 bg-blue-400 ml-0.5 animate-pulse" /></span>
            <Search className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          </div>
        </div>

        {/* Search tabs */}
        <div className="flex items-center gap-4 mt-2.5 text-[11px] text-neutral-400 border-b border-neutral-700/50 pb-1">
          <span className="text-blue-400 font-medium border-b-2 border-blue-400 pb-1 -mb-1">All</span>
          <span>Maps</span>
          <span>Images</span>
          <span>Shopping</span>
        </div>
      </div>

      {/* Timestamp flag */}
      <div className="px-4 py-2 bg-neutral-900/60 border-b border-neutral-800 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
        <span>KUMASI, GHANA · CELLULAR SEARCH</span>
        <span className="text-amber-400/90 font-medium">12:41 PM</span>
      </div>

      {/* Results Feed */}
      <div className="px-3.5 pt-3 space-y-3">
        {/* Local Map Pack Result */}
        <div className="bg-[#2a2b2e] rounded-xl p-3 border border-[#3c4043]">
          <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1.5">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-red-400" /> Businesses in Kumasi</span>
            <span className="text-[10px] text-neutral-400">Near Ahodwo</span>
          </div>

          <div
            onClick={onDiscoverRatioCity}
            className={`cursor-pointer transition-all rounded-lg p-2.5 ${
              isDiscovered
                ? 'bg-neutral-800 border-2 border-amber-400/80 shadow-md'
                : 'hover:bg-neutral-800/80 border border-transparent'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-semibold text-blue-300 hover:underline flex items-center gap-1">
                  Ratio City Kumasi
                  <span className="text-[9px] bg-blue-900/80 text-blue-200 px-1 py-0.5 rounded">Verified Store</span>
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 mt-0.5">
                  <span className="text-amber-400 font-bold">4.9</span>
                  <div className="flex text-amber-400">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i} className="text-[10px]">{s}</span>
                    ))}
                  </div>
                  <span className="text-neutral-400">(418 reviews)</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Electronics shop · Ahodwo Roundabout / Adum, Kumasi
                </p>
                <p className="text-[10px] text-emerald-400 mt-0.5 font-medium">
                  Open · In-store shopping · Delivery in Ashanti Region
                </p>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-neutral-700/60 flex items-center justify-between text-[11px]">
              <span className="text-neutral-300">Apple iPhone 17 Pro Max, MacBook, Audio</span>
              <span className="text-blue-400 font-medium flex items-center gap-1">
                Tap to explore <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Organic Result 01: Instagram Profile */}
        <div
          onClick={onDiscoverRatioCity}
          className={`cursor-pointer bg-[#2a2b2e]/60 rounded-xl p-3 border border-[#3c4043] transition-all ${
            isDiscovered ? 'ring-1 ring-blue-500/50' : 'hover:border-neutral-500'
          }`}
        >
          <div className="flex items-center gap-2 mb-1 text-[11px] text-neutral-400">
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-[8px] text-white font-bold">
              IG
            </div>
            <span className="truncate">instagram.com › ratiocity.gh</span>
          </div>
          <h3 className="text-sm font-medium text-[#8ab4f8] hover:underline">
            Ratio City (@ratiocity.gh) · Kumasi Apple & Tech Destination
          </h3>
          <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
            Kumasi's certified Apple retailer. Genuine brand new iPhone 17 series, MacBook Air & Pro, AirPods, and studio accessories. Fast DM assistance on WhatsApp...
          </p>
          <div className="mt-2 flex items-center gap-2 text-[10px] text-neutral-400">
            <span className="text-emerald-400">✓ 48K Followers</span>
            <span>·</span>
            <span>Kumasi, Ghana</span>
          </div>
        </div>

        {/* Competitor / Alternative listing to make search feel genuine */}
        <div className="bg-[#2a2b2e]/30 rounded-xl p-3 border border-[#3c4043]/50 opacity-60">
          <div className="flex items-center gap-2 mb-1 text-[11px] text-neutral-400">
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span className="truncate">tonaton.com › ghana › kumasi</span>
          </div>
          <h3 className="text-xs font-medium text-neutral-300">
            Used iPhones for Sale in Kumasi - Tonaton Ghana
          </h3>
          <p className="text-[10px] text-neutral-400 mt-0.5">
            Compare prices of used & refurbished iPhones in Adum, Bantama and KNUST...
          </p>
        </div>

        {/* Kwame Observation card */}
        <div className="mt-3 p-3 rounded-lg bg-neutral-900/90 border border-neutral-800 text-[11px]">
          <div className="flex items-center justify-between text-neutral-400 font-mono text-[10px]">
            <span>KWAME'S INTERACTION OBSERVED</span>
            <span className="text-emerald-400">ACTION DETECTED</span>
          </div>
          <p className="text-neutral-200 mt-1 font-sans">
            Kwame bypasses grey-market classifieds. He taps on <strong className="text-white">Ratio City</strong> to check genuine stock on Instagram.
          </p>
        </div>
      </div>
    </div>
  );
};
