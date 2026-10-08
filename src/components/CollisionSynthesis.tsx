import React from 'react';
import { PERSONAS } from '../data/personas';
import { Stethoscope, Zap, Repeat, ArrowRight, Sparkles } from 'lucide-react';

interface CollisionSynthesisProps {
  onProceedToEvidencePattern: () => void;
}

export const CollisionSynthesis: React.FC<CollisionSynthesisProps> = ({ onProceedToEvidencePattern }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-12 animate-in fade-in duration-300">
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
          SYNTHESIS & MASTER LEVERAGE MODEL
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          THE THREE FORMS OF LEVERAGE COLLIDE
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
          These aren't random software features. These are three fundamental business capabilities Ratio City currently lacks infrastructure for.
        </p>
      </div>

      {/* The 3 Core Pillars Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 01: DIAGNOSE */}
        <div className="rounded-2xl bg-neutral-900/80 border border-amber-500/40 p-6 flex flex-col justify-between space-y-6 shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono text-amber-400 font-bold">01 · DIAGNOSE</span>
              <span className="text-[11px] font-mono text-neutral-400">THE DOCTOR ANALOGY</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-500/50 flex items-center justify-center text-amber-400">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Understand Before Prescribing</h4>
                <div className="text-xs text-neutral-400">Kwame (24) · Creator Setup</div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-neutral-300">
              <p>
                <strong>The Blind Spot:</strong> Customer asked for an iPhone 17 Pro Max price. But actually had a GH₵50,000 YouTube channel setup problem.
              </p>
              <p className="text-neutral-400 text-[11px]">
                A doctor doesn't prescribe medicine before taking vitals. A business shouldn't recommend hardware before understanding the customer's real objective.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black border border-amber-500/30 text-xs">
            <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block mb-1">
              THE LEVERAGE CAPABILITY
            </span>
            <div className="text-white font-bold text-sm">Customer Diagnostics</div>
            <p className="text-neutral-300 text-[11px] mt-0.5 font-serif italic">
              “Diagnose before prescribing.”
            </p>
          </div>
        </div>

        {/* Pillar 02: WIN */}
        <div className="rounded-2xl bg-neutral-900/80 border border-cyan-500/40 p-6 flex flex-col justify-between space-y-6 shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold">02 · WIN THE MOMENT</span>
              <span className="text-[11px] font-mono text-neutral-400">THE RADAR ANALOGY</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Act When Leverage Is Highest</h4>
                <div className="text-xs text-neutral-400">Kwame (29) · Ready Buyer</div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-neutral-300">
              <p>
                <strong>The Blind Spot:</strong> Customers are not equally ready at every moment. Kwame transitioned from browsing to urgent same-day buying on Day 5.
              </p>
              <p className="text-neutral-400 text-[11px]">
                Without radar detection, messages get buried in busy showroom shifts. Automation detects and equips staff; humans close the high-stakes moment.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black border border-cyan-500/30 text-xs">
            <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">
              THE LEVERAGE CAPABILITY
            </span>
            <div className="text-white font-bold text-sm">Opportunity Detection</div>
            <p className="text-neutral-300 text-[11px] mt-0.5 font-serif italic">
              “Deploy human effort where return is highest.”
            </p>
          </div>
        </div>

        {/* Pillar 03: COMPOUND */}
        <div className="rounded-2xl bg-neutral-900/80 border border-purple-500/40 p-6 flex flex-col justify-between space-y-6 shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono text-purple-400 font-bold">03 · COMPOUND</span>
              <span className="text-[11px] font-mono text-neutral-400">THE FLYWHEEL ANALOGY</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/50 flex items-center justify-center text-purple-400">
                <Repeat className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Turn Demand Into Tomorrow</h4>
                <div className="text-xs text-neutral-400">Daniel (18) · Campus Fresher</div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-neutral-300">
              <p>
                <strong>The Blind Spot:</strong> <em>“Not ready today”</em> does not mean <em>“not interested.”</em> Daniel left with GH₵6,500; the shop heard a rejection.
              </p>
              <p className="text-neutral-400 text-[11px]">
                Without follow-up infrastructure, he buys from an Adum competitor on Day 17. With continuity, he stays in Ratio City's ecosystem across his 4-year degree.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black border border-purple-500/30 text-xs">
            <span className="text-[10px] font-mono text-purple-400 uppercase font-bold block mb-1">
              THE LEVERAGE CAPABILITY
            </span>
            <div className="text-white font-bold text-sm">Lifecycle Retention & Ecosystem</div>
            <p className="text-neutral-300 text-[11px] mt-0.5 font-serif italic">
              “Turn unfinished demand into future value.”
            </p>
          </div>
        </div>
      </div>

      {/* The Master Sequence Flow */}
      <div className="p-8 sm:p-12 rounded-3xl bg-black border border-neutral-800 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
        <div className="space-y-2">
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            THE UNIFIED ENGINE OF COMMERCE
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            DIAGNOSE → WIN → COMPOUND
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="text-amber-400 font-bold block">01 · DIAGNOSE</span>
            <p className="text-neutral-300 font-sans text-[11px]">Understand the opportunity before prescribing the product.</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="text-cyan-400 font-bold block">02 · WIN</span>
            <p className="text-neutral-300 font-sans text-[11px]">Act when the probability of purchase is highest.</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="text-purple-400 font-bold block">03 · COMPOUND</span>
            <p className="text-neutral-300 font-sans text-[11px]">Keep the relationship alive so today's visit becomes tomorrow's asset.</p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onProceedToEvidencePattern}
            className="px-8 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-sm inline-flex items-center gap-2 shadow-2xl transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Examine The Pattern Beyond Ratio City (Market Evidence)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
