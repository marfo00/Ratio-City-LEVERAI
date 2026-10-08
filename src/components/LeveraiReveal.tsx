import React, { useState } from 'react';
import {
  Stethoscope,
  Radar,
  SlidersHorizontal,
  UserCheck,
  BookmarkPlus,
  Repeat,
  BrainCircuit,
  Boxes,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface LeveraiRevealProps {
  onProceedToClosing: () => void;
}

export const LeveraiReveal: React.FC<LeveraiRevealProps> = ({ onProceedToClosing }) => {
  const [activeCapability, setActiveCapability] = useState<number>(0);

  const capabilities = [
    {
      id: 0,
      code: '01',
      name: 'DIAGNOSE',
      summary: 'Understand intent and underlying customer problems before recommending products.',
      icon: Stethoscope,
      accent: 'text-amber-400',
      bgGlow: 'from-amber-950/40',
      borderAccent: 'border-amber-500/50',
      description:
        'Moves Ratio City beyond commodity price-matching. Extracts real goals, constraints, and project timelines so customers receive high-confidence solutions rather than single hardware models.',
      currentConstraint:
        'Sales reps jump immediately to pricing: “iPhone 17 Pro Max is GH₵23,500.” Intent remains completely invisible.',
      leveragedSuperpower:
        'The doctor model: Identifies that the customer is launching a YouTube studio with GH₵50,000, recommending balanced audio, lighting, and computing.',
    },
    {
      id: 1,
      code: '02',
      name: 'DETECT',
      summary: 'Identify important customer signals and inflection points across all channels.',
      icon: Radar,
      accent: 'text-cyan-400',
      bgGlow: 'from-cyan-950/40',
      borderAccent: 'border-cyan-500/50',
      description:
        'Continuously listens across Google, Website catalogue, Instagram, and WhatsApp to detect when customer intent transitions from casual curiosity into active purchase probability.',
      currentConstraint:
        'Hundreds of messages sit in mixed inboxes; high-stakes buying questions get lost behind trivial inquiries.',
      leveragedSuperpower:
        'The opportunity radar: Detects when Kwame asks “Can I pick it up today?” and immediately tags the conversation as critical priority.',
    },
    {
      id: 2,
      code: '03',
      name: 'PRIORITIZE',
      summary: 'Determine where human attention and sales effort produce the highest financial return.',
      icon: SlidersHorizontal,
      accent: 'text-blue-400',
      bgGlow: 'from-blue-950/40',
      borderAccent: 'border-blue-500/50',
      description:
        'Applies intelligent triage so staff attention is deployed with surgical precision, ensuring ready buyers receive immediate attention before they defect to competitors.',
      currentConstraint:
        'Uniform effort: Staff spend identical time typing specs to low-intent browsers as they do to ready buyers.',
      leveragedSuperpower:
        'Effort leverage: Surfaces live opportunities at the exact moment purchase probability peaks, multiplying revenue per staff hour.',
    },
    {
      id: 3,
      code: '04',
      name: 'ACT',
      summary: 'Equip staff with verified context, stock availability, and tailored talking points.',
      icon: UserCheck,
      accent: 'text-emerald-400',
      bgGlow: 'from-emerald-950/40',
      borderAccent: 'border-emerald-500/50',
      description:
        'Prepares salespeople before they pick up the phone or approach Counter 1. The human closes the transaction with empathy, authority, and zero awkward friction.',
      currentConstraint:
        'Salesperson Emmanuel has to scramble to check backroom shelves while the customer waits on the phone.',
      leveragedSuperpower:
        'Prepared action: Emmanuel gets an instant prompt confirming 2 units of 16" M3 Max in Space Black on Counter 1, enabling a 4-minute close.',
    },
    {
      id: 4,
      code: '05',
      name: 'CAPTURE',
      summary: 'Record unfinished demand and prospective customer parameters instead of letting them walk.',
      icon: BookmarkPlus,
      accent: 'text-purple-400',
      bgGlow: 'from-purple-950/40',
      borderAccent: 'border-purple-500/50',
      description:
        'Treats “not ready today” as an asset. Logs stated budgets, desired models, and expected timeframes into durable business memory.',
      currentConstraint:
        'Daniel leaves because of a GH₵2,500 gap. The store says “come back when you have money,” and registers $0.',
      leveragedSuperpower:
        'Unfinished demand captured: Daniel’s GH₵6,500 allowance and engineering coding need are recorded in 20 seconds.',
    },
    {
      id: 5,
      code: '06',
      name: 'FOLLOW UP',
      summary: 'Continue relationships proactively when relevant inventory, price drops, or timing align.',
      icon: Repeat,
      accent: 'text-indigo-400',
      bgGlow: 'from-indigo-950/40',
      borderAccent: 'border-indigo-500/50',
      description:
        'Nurtures ongoing demand without spamming. Reaches out only when a genuine solution surfaces or when onboarding checkpoints arrive.',
      currentConstraint:
        'Zero structured follow-up; customers buy from whichever competitor runs a social ad first.',
      leveragedSuperpower:
        'Contextual outreach: Reaches Daniel two weeks later when a GH₵6,500 machine arrives, closing the sale with zero advertising cost.',
    },
    {
      id: 6,
      code: '07',
      name: 'LEARN',
      summary: 'Accumulate institutional intelligence that compounds across staff shifts and seasons.',
      icon: BrainCircuit,
      accent: 'text-pink-400',
      bgGlow: 'from-pink-950/40',
      borderAccent: 'border-pink-500/50',
      description:
        'Retains client tech stacks, preferences, and purchase cycles so the store becomes smarter with every customer interaction.',
      currentConstraint:
        'Customer knowledge lives only in individual employees’ heads and vanishes if someone resigns.',
      leveragedSuperpower:
        'Durable institutional memory: Anyone on duty instantly sees Kwame’s agency hardware fleet and Daniel’s university year.',
    },
    {
      id: 7,
      code: '08',
      name: 'COMPOUND',
      summary: 'Turn isolated transactions into durable recurring relationships and ecosystem hubs.',
      icon: Boxes,
      accent: 'text-amber-300',
      bgGlow: 'from-amber-950/50',
      borderAccent: 'border-amber-400/50',
      description:
        'Elevates Ratio City from a commodity electronics shop into an indispensable technology ecosystem for creators, students, and businesses.',
      currentConstraint:
        'Each sale is a one-off battle to win the customer all over again against price-cutting competitors.',
      leveragedSuperpower:
        'The ecosystem flywheel: Student tech circles, creator studio support, and corporate procurement accounts that lock in multi-year loyalty.',
    },
  ];

  const current = capabilities[activeCapability];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-12 animate-in fade-in duration-300">
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          LEVERAGE ARCHITECTURE · 8 CORE CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          WHAT IF THE BUSINESS COULD DO THIS AT SCALE?
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
          Not a chatbot. Not a CRM. Not an AI dashboard. An infrastructure layer that multiplies human and business capability.
        </p>
      </div>

      {/* 8 Capabilities Grid / Pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {capabilities.map((c) => {
          const Icon = c.icon;
          const isSelected = activeCapability === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCapability(c.id)}
              className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-between min-h-[96px] ${
                isSelected
                  ? 'bg-neutral-900 border-white text-white shadow-lg ring-1 ring-white/50'
                  : 'bg-neutral-950/80 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
              }`}
            >
              <span className="font-mono text-[10px] opacity-60">{c.code}</span>
              <Icon className={`w-5 h-5 my-1 ${c.accent}`} />
              <span className="text-[11px] font-bold tracking-tight">{c.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Capability Deep-Dive */}
      <div className="rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
          <div className="flex items-center gap-3.5">
            <div className={`w-12 h-12 rounded-2xl bg-neutral-950 border ${current.borderAccent} flex items-center justify-center ${current.accent}`}>
              <CurrentIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-neutral-400">CAPABILITY {current.code} OF 08</div>
              <h3 className="text-2xl font-black text-white">{current.name}</h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md">
            {current.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
            <span className="text-[10px] font-mono text-rose-400 uppercase font-bold">
              TODAY'S STRUCTURAL BOTTLENECK
            </span>
            <p className="text-neutral-300 leading-relaxed text-xs">
              {current.currentConstraint}
            </p>
          </div>

          <div className={`p-5 rounded-2xl bg-gradient-to-br ${current.bgGlow} to-neutral-950 border ${current.borderAccent} space-y-2`}>
            <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
              WITH LEVERAI INFRASTRUCTURE
            </span>
            <p className="text-neutral-200 leading-relaxed text-xs">
              {current.leveragedSuperpower}
            </p>
          </div>
        </div>
      </div>

      {/* Important Positioning for the Owner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-black border border-neutral-800 space-y-6 max-w-4xl mx-auto shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
          <ShieldCheck className="w-4 h-4" />
          <span>IMPORTANT POSITIONING FOR RATIO CITY LEADERSHIP</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Building The Infrastructure That Multiplies Human and Business Capability
        </h3>

        <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
          <p>
            LEVERAI is not selling a generic chatbot, CRM, or marketing automation gadget.
          </p>

          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-neutral-200 font-medium">
            <p className="text-white">
              Ratio City already has: <strong>products, staff, customers, physical locations, social channels, WhatsApp, local reputation, suppliers, and constant demand.</strong>
            </p>
            <p className="text-amber-400 pt-1">
              The question is: What happens when those assets stop operating as disconnected pieces and start working as an intelligent system?
            </p>
          </div>

          <p className="text-xs text-neutral-400">
            “You don't need more effort. You need the infrastructure that connects the assets you already own.”
          </p>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            onClick={onProceedToClosing}
            className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-neutral-200 shadow-xl transition-all"
          >
            <span>Proceed to The Strategic Philosophy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
