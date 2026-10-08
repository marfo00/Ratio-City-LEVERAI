import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, UserCheck, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';

interface LeveragedJourneySimProps {
  onContinueToNextCase?: () => void;
}

export const LeveragedJourneySim: React.FC<LeveragedJourneySimProps> = ({ onContinueToNextCase }) => {
  const [step, setStep] = useState<number>(3); // start with conversational diagnosis

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-full font-sans select-none pb-8">
      {/* Top banner */}
      <div className="px-4 py-3 bg-gradient-to-r from-blue-950/80 via-neutral-900 to-indigo-950/80 border-b border-blue-900/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono tracking-wider text-blue-300 uppercase font-semibold">
              CASE STUDY 01 · LEVERAGED REPLAY
            </span>
          </div>
          <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/40 px-2 py-0.5 rounded-full font-mono">
            INTENT-AWARE INFRASTRUCTURE
          </span>
        </div>
        <h4 className="text-sm font-bold text-white mt-1">Same Customer. Same Business. Smarter Relationship.</h4>
      </div>

      <div className="p-4 space-y-4">
        {/* The Reconstructed Leveraged Chat */}
        <div className="bg-[#0b141a] rounded-2xl border border-neutral-800 p-3.5 space-y-3">
          <div className="text-center text-[10px] font-mono text-neutral-500">
            SIMULATED INTERACTION · LEVERAGE LAYER ACTIVE
          </div>

          {/* Kwame initial inquiry */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-[#005c4b] p-2.5 text-xs text-neutral-100 shadow">
              <p>Please how much is iPhone 17 Pro Max?</p>
              <div className="text-[9px] text-emerald-200/80 text-right mt-0.5">12:42 PM</div>
            </div>
          </div>

          {/* Diagnostic question instead of plain price tag */}
          <div className="flex justify-start">
            <div className="max-w-[88%] rounded-2xl rounded-tl-none bg-[#202c33] p-3 text-xs text-neutral-100 shadow space-y-1.5 border border-emerald-500/20">
              <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>Ratio City Experience Assistant</span>
              </div>
              <p className="leading-relaxed">
                “Absolutely! We have all storage configs in stock in Kumasi. Before I recommend one, what are you mainly planning to use it for?”
              </p>
            </div>
          </div>

          {/* Kwame explains his real goal */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-[#005c4b] p-2.5 text-xs text-neutral-100 shadow">
              <p>“I'm starting a YouTube channel.”</p>
              <div className="text-[9px] text-emerald-200/80 text-right mt-0.5">12:44 PM</div>
            </div>
          </div>

          {/* Intent Detection Notification overlay card */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-950/90 to-neutral-900 border border-blue-500/40 text-xs shadow-lg space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-blue-300">
              <span className="flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                CUSTOMER INTENT DETECTED
              </span>
              <span className="text-emerald-400 font-bold">MATCH: 100%</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] bg-black/40 p-2 rounded-lg border border-neutral-800">
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase font-mono">Primary Goal</span>
                <span className="text-white font-medium">YouTube Channel</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase font-mono">Budget Envelope</span>
                <span className="text-emerald-400 font-medium">GH₵ 50,000</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase font-mono">Experience</span>
                <span className="text-amber-300 font-medium">Beginner (Needs Setup)</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[9px] uppercase font-mono">Setup Requirements</span>
                <span className="text-neutral-200">Phone + Audio + Lighting</span>
              </div>
            </div>

            <p className="text-[11px] text-neutral-300 leading-relaxed">
              Instead of over-spending on 1TB phone storage, the customer is recommended a balanced setup: iPhone 17 Pro Max 256GB + M2 MacBook Air + DJI Mic 2 + Softbox Ring light.
            </p>
          </div>

          {/* Assistant tailored recommendation */}
          <div className="flex justify-start">
            <div className="max-w-[88%] rounded-2xl rounded-tl-none bg-[#202c33] p-3 text-xs text-neutral-100 shadow space-y-1.5">
              <p className="leading-relaxed">
                “That's fantastic Kwame! For YouTube, audio & lighting will actually make your videos look 10x more professional than just megapixels alone. Here is a proven starter kit within your GH₵50,000 budget that includes our in-store setup session at Ahodwo.”
              </p>
              <div className="pt-1 flex items-center gap-2 text-[10px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3 h-3" />
                <span>Kwame books Ahodwo in-store pickup with full confidence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional vs Leveraged Structural Comparison */}
        <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
          <div className="text-xs font-bold text-white font-mono uppercase tracking-wider">
            THE ARCHITECTURAL DIFFERENCE
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80">
              <div className="text-[10px] font-mono text-neutral-500 uppercase">TRADITIONAL RETAIL FLOW</div>
              <div className="text-neutral-300 font-mono text-[11px] mt-1 flex flex-wrap items-center gap-1">
                <span>Question</span>
                <span className="text-neutral-600">→</span>
                <span>Answer</span>
                <span className="text-neutral-600">→</span>
                <span>Transaction</span>
                <span className="text-neutral-600">→</span>
                <span className="text-rose-400">End</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-gradient-to-r from-blue-950/40 to-neutral-950 border border-blue-500/30">
              <div className="text-[10px] font-mono text-blue-400 uppercase">LEVERAI CUSTOMER DIAGNOSTICS</div>
              <div className="text-neutral-200 font-mono text-[11px] mt-1 flex flex-wrap items-center gap-1">
                <span className="text-blue-300">Question</span>
                <span className="text-neutral-500">→</span>
                <span className="text-blue-300">Context</span>
                <span className="text-neutral-500">→</span>
                <span className="text-amber-300">Intent</span>
                <span className="text-neutral-500">→</span>
                <span className="text-purple-300">Constraints</span>
                <span className="text-neutral-500">→</span>
                <span className="text-emerald-300">Recommendation</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-black/60 rounded-xl border border-neutral-800 text-center space-y-1">
            <p className="text-xs text-neutral-200 font-serif italic">
              “The customer asked for a product. The customer actually had a problem to solve.”
            </p>
            <p className="text-[10px] font-mono text-amber-400">
              A doctor doesn't prescribe before diagnosing. A business shouldn't recommend before understanding.
            </p>
          </div>

          <div className="pt-1 text-center">
            <div className="text-[11px] font-semibold text-neutral-300">
              SAME CUSTOMER · SAME BUSINESS · SAME PRODUCTS · DIFFERENT INFRASTRUCTURE
            </div>
          </div>
        </div>

        {onContinueToNextCase && (
          <button
            onClick={onContinueToNextCase}
            className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-neutral-200 shadow-xl transition-all"
          >
            <span>Proceed to Case Study 02: The Entrepreneur</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
