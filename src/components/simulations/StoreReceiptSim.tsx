import React, { useState } from 'react';
import { CheckCircle2, ShoppingBag, Receipt, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';

interface StoreReceiptSimProps {
  onReplayLeveraged?: () => void;
}

export const StoreReceiptSim: React.FC<StoreReceiptSimProps> = ({ onReplayLeveraged }) => {
  const [phase, setPhase] = useState<'checkout' | 'empty' | 'reveal'>('checkout');

  return (
    <div className="bg-[#121214] text-neutral-100 min-h-full font-sans select-none pb-6">
      {phase === 'checkout' && (
        <div className="p-4 space-y-4">
          {/* Header */}
          <div className="text-center pb-2 border-b border-neutral-800">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/80 text-emerald-400 text-[11px] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>RATIO CITY SHOWROOM · POINT OF SALE</span>
            </div>
            <h3 className="text-base font-bold text-white mt-2">Physical In-Store Transaction</h3>
            <p className="text-[11px] text-neutral-400">Ahodwo Branch, Kumasi · Counter 02</p>
          </div>

          {/* Physical receipt mockup */}
          <div className="bg-neutral-900 border border-neutral-700/80 rounded-xl p-4 font-mono text-xs shadow-2xl space-y-3 relative overflow-hidden">
            <div className="text-center pb-2 border-b border-dashed border-neutral-700">
              <div className="font-bold text-sm tracking-wider text-white">RATIO CITY TECH GH</div>
              <div className="text-[10px] text-neutral-400">Kumasi, Ashanti Region · Tel: +233 24 000 0000</div>
              <div className="text-[10px] text-neutral-400">Customer: Walk-in (Anonymous)</div>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-neutral-200">1x iPhone 17 Pro Max 256GB</div>
                  <div className="text-[10px] text-neutral-400">Natural Titanium · Sealed</div>
                </div>
                <span className="text-neutral-100 font-bold">GH₵ 23,500</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-neutral-200">1x Apple MacBook Air 13" (M2)</div>
                  <div className="text-[10px] text-neutral-400">8GB / 256GB Midnight</div>
                </div>
                <span className="text-neutral-100 font-bold">GH₵ 16,500</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-neutral-200">1x Wireless Compact Mic</div>
                  <div className="text-[10px] text-neutral-400">Type-C Clip-on transmitter</div>
                </div>
                <span className="text-neutral-100 font-bold">GH₵ 2,500</span>
              </div>
            </div>

            <div className="border-t border-dashed border-neutral-700 pt-2 space-y-1 text-xs">
              <div className="flex justify-between font-bold text-white text-sm">
                <span>TOTAL PAID:</span>
                <span className="text-emerald-400">GH₵ 42,500</span>
              </div>
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span>Payment Method:</span>
                <span>MoMo / Cash Transfer</span>
              </div>
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span>Remaining Budget:</span>
                <span className="text-amber-400 font-mono">GH₵ 7,500 unallocated</span>
              </div>
            </div>

            <div className="pt-2 text-center text-[10px] text-neutral-400 border-t border-dashed border-neutral-800">
              * Official 1-Year Warranty Slip Issued *
            </div>
          </div>

          <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl text-xs space-y-1">
            <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold">Observation</span>
            <p className="text-neutral-300 text-[11px] leading-relaxed">
              Because Kwame felt uncertain about studio acoustics and lighting compatibility, he refrained from spending his remaining GH₵7,500. He leaves with unconfigured separate items.
            </p>
          </div>

          <button
            onClick={() => setPhase('empty')}
            className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-neutral-200 shadow-xl"
          >
            <span>Customer Leaves the Store</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {phase === 'empty' && (
        <div className="p-8 flex flex-col items-center justify-center min-h-[460px] text-center space-y-6 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500">
            <ShoppingBag className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              STORE FLOOR EMPTY
            </div>
            <h3 className="text-xl font-bold text-neutral-200">Receipt issued. Customer leaves.</h3>
            <p className="text-neutral-500 text-xs">
              Transaction logged in standard POS terminal.
            </p>
          </div>

          <div className="pt-4 pb-2">
            <div className="text-sm font-mono tracking-widest text-neutral-600 uppercase border-y border-neutral-800/80 py-2">
              END OF JOURNEY
            </div>
          </div>

          <div className="pt-6">
            <p className="text-lg font-serif italic text-amber-400 animate-pulse">
              Or is it?
            </p>
            <button
              onClick={() => setPhase('reveal')}
              className="mt-6 px-6 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-100 font-semibold border border-neutral-700 transition-all shadow-md"
            >
              Analyze What Just Happened
            </button>
          </div>
        </div>
      )}

      {phase === 'reveal' && (
        <div className="p-4 space-y-4 animate-in fade-in duration-200">
          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/40">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono">
              <AlertTriangle className="w-4 h-4" />
              <span>WHAT JUST HAPPENED?</span>
            </div>
            <p className="text-neutral-200 text-xs font-medium mt-1">
              Ratio City successfully made a <strong className="text-emerald-400">GH₵ 42,500</strong> sale.
            </p>
            <p className="text-neutral-400 text-[11px] mt-0.5">
              On surface metrics, this looks like an outright retail triumph.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
              YET RATIO CITY POTENTIALLY MISSED:
            </div>

            <div className="grid grid-cols-1 gap-1.5 text-[11px] text-neutral-300">
              {[
                'Understanding Kwame’s true YouTube launch objective',
                'Recommending the right complete creator bundle (lighting & audio balance)',
                'Increasing customer confidence during setup anxiety',
                'Identifying complementary accessories before he orders online elsewhere',
                'Creating an active digital customer profile with gear specs',
                'Remembering his creator intent for future upgrades',
                'Scheduling structured post-purchase setup assistance',
                'Establishing a long-term retention relationship in Kumasi',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-neutral-900/80 border border-neutral-800/80">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black border border-neutral-800 text-center space-y-1">
            <div className="text-xs font-mono text-neutral-400 uppercase">THE CRITICAL CONCLUSION</div>
            <div className="text-sm font-extrabold text-white tracking-tight">
              THE SALE WAS COMPLETED.
            </div>
            <div className="text-sm font-extrabold text-amber-400 tracking-tight">
              THE CUSTOMER JOURNEY WASN'T.
            </div>
          </div>

          {onReplayLeveraged && (
            <button
              onClick={onReplayLeveraged}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Replay: Experience The Leveraged Version</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
