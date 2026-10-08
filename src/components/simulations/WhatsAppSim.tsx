import React, { useState } from 'react';
import { ChevronLeft, Phone, Video, MoreVertical, CheckCheck, Clock, Eye, AlertCircle, ArrowRight } from 'lucide-react';

interface WhatsAppSimProps {
  onProceedToStore?: () => void;
  onOpenInvisibleOverlay?: () => void;
  isInvisibleOverlayOpen?: boolean;
}

export const WhatsAppSim: React.FC<WhatsAppSimProps> = ({
  onProceedToStore,
  onOpenInvisibleOverlay,
  isInvisibleOverlayOpen = false,
}) => {
  const [stage, setStage] = useState<'sent' | 'delayed' | 'replied'>('replied');

  return (
    <div className="relative bg-[#0b141a] text-neutral-100 min-h-full font-sans select-none pb-6">
      {/* WhatsApp Chat Header */}
      <div className="sticky top-0 z-20 bg-[#1f2c34] px-3 py-2.5 flex items-center justify-between border-b border-[#2a3942]">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-5 h-5 text-neutral-300 cursor-pointer" />
          <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
            RC
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>Ratio City</span>
              <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-1 py-0.2 rounded font-normal">Official</span>
            </div>
            <div className="text-[10px] text-emerald-400">Online · Business Account</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-neutral-300">
          <Video className="w-4 h-4" />
          <Phone className="w-4 h-4" />
          <MoreVertical className="w-4 h-4" />
        </div>
      </div>

      {/* WhatsApp Wallpaper subtle pattern */}
      <div className="p-3.5 space-y-3.5 min-h-[460px] flex flex-col justify-between">
        <div className="space-y-3">
          {/* Day banner */}
          <div className="text-center">
            <span className="bg-[#182229] text-[10px] text-neutral-400 px-3 py-1 rounded-md font-mono">
              TODAY
            </span>
          </div>

          {/* Encryption notice */}
          <div className="bg-[#182229] p-2 rounded-lg text-center text-[10px] text-amber-200/80 border border-amber-900/30">
            Messages and calls are end-to-end encrypted. Ratio City Business.
          </div>

          {/* Kwame's WhatsApp Message */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-lg rounded-tr-none bg-[#005c4b] p-2.5 text-xs text-neutral-100 shadow">
              <p>Hello please, how much is the iPhone 17 Pro Max?</p>
              <div className="flex items-center justify-end gap-1 text-[9px] text-emerald-200/80 mt-1">
                <span>2:08 PM</span>
                <CheckCheck className="w-3 h-3 text-cyan-300" />
              </div>
            </div>
          </div>

          {/* Realistic in-store delay note */}
          <div className="bg-[#182229] border border-neutral-700/60 rounded-xl p-3 text-xs space-y-1.5">
            <div className="flex items-center justify-between text-neutral-400 text-[10px] font-mono">
              <span className="flex items-center gap-1 text-amber-400">
                <Clock className="w-3 h-3" /> 2:08 PM → 4:08 PM (2-HOUR DELAY)
              </span>
              <span className="text-neutral-400">AHODWO SHOWROOM</span>
            </div>
            <p className="text-neutral-300 text-[11px] leading-relaxed">
              Inside Ratio City’s store: staff are busy attending to 4 walk-in customers testing MacBooks and buying phone screen protectors.
            </p>
          </div>

          {/* Salesperson reply */}
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-lg rounded-tl-none bg-[#202c33] p-2.5 text-xs text-neutral-100 shadow">
              <div className="text-[10px] text-emerald-400 font-semibold mb-0.5">Ratio City Sales</div>
              <p className="leading-relaxed">
                Hello! iPhone 17 Pro Max 256GB is <strong>GH₵23,500</strong> brand new sealed. Available in Natural Titanium.
              </p>
              <p className="mt-1 text-neutral-300">When are you coming by to pick it up?</p>
              <div className="flex items-center justify-end gap-1 text-[9px] text-neutral-400 mt-1">
                <span>4:08 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Freeze & Inspect Button */}
        <div className="pt-2 space-y-2">
          <button
            onClick={onOpenInvisibleOverlay}
            className="w-full py-2.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <Eye className="w-4 h-4 text-amber-400" />
            <span>FREEZE CONVERSATION: SEE INVISIBLE DATA</span>
          </button>

          {onProceedToStore && (
            <button
              onClick={onProceedToStore}
              className="w-full py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <span>Follow Kwame into Ratio City Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Freeze Invisible Information Overlay */}
      {isInvisibleOverlayOpen && (
        <div className="absolute inset-0 z-30 bg-black/92 backdrop-blur-md p-5 flex flex-col justify-between overflow-y-auto custom-scrollbar animate-in fade-in duration-200">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>CRITICAL REVEAL: INVISIBLE CONTEXT</span>
              </div>
              <button
                onClick={onOpenInvisibleOverlay}
                className="text-xs font-mono text-neutral-400 hover:text-white px-2 py-1 rounded bg-neutral-900 border border-neutral-800"
              >
                Close ×
              </button>
            </div>

            {/* Split comparison */}
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <div className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase mb-1">
                  WHAT RATIO CITY KNOWS
                </div>
                <div className="text-sm font-semibold text-neutral-100">
                  “Customer wants an iPhone 17 Pro Max.”
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  A basic commodity price check. No context, no roadmap, no history.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-b from-amber-950/40 to-neutral-900/80 border border-amber-500/40">
                <div className="text-[10px] font-mono tracking-wider text-amber-400 uppercase mb-2">
                  WHAT RATIO CITY DOESN'T KNOW
                </div>
                <div className="space-y-1.5 text-neutral-200 text-xs">
                  <div className="flex justify-between border-b border-neutral-800/80 pb-1">
                    <span className="text-neutral-400">Real Goal:</span>
                    <strong className="text-white">Start a YouTube channel</strong>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/80 pb-1">
                    <span className="text-neutral-400">Total Budget:</span>
                    <strong className="text-emerald-400">GH₵50,000 in hand</strong>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/80 pb-1">
                    <span className="text-neutral-400">Experience:</span>
                    <span className="text-neutral-200">Beginner (needs guidance)</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/80 pb-1">
                    <span className="text-neutral-400">Other Equipment Needed:</span>
                    <span className="text-neutral-200">Laptop + Mic + Lighting</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Future Lifetime:</span>
                    <strong className="text-amber-300">Recurring content tech upgrades</strong>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-2 border-amber-500 pl-3 py-1 text-[13px] font-medium text-neutral-200 italic leading-relaxed">
                “The customer asked for a product.<br />
                But the customer actually had a problem to solve.”
              </blockquote>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                if (onOpenInvisibleOverlay) onOpenInvisibleOverlay();
                if (onProceedToStore) onProceedToStore();
              }}
              className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-neutral-200 shadow-xl"
            >
              <span>Continue Journey into the Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
