import React, { useState } from 'react';
import { PERSONAS } from '../data/personas';
import { DeviceFrame } from './DeviceFrame';
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  Repeat,
  Layers,
  Users,
  MessageSquare,
  TrendingUp,
  XCircle,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface CaseStudy03Props {
  onCompleteCaseStudy: () => void;
}

export const CaseStudy03: React.FC<CaseStudy03Props> = ({ onCompleteCaseStudy }) => {
  const persona = PERSONAS.fresher;
  // Steps: 1: The Campus & Showroom Interaction, 2: The Leak ("Not Now != No"), 3: Without a System (Lost Sale), 4: Leveraged Future Demand Captured, 5: The Lifecycle & Ecosystem Flywheel
  const [step, setStep] = useState<number>(1);

  const steps = [
    { id: 1, label: '01. The Walk-in', desc: 'Budget shortfall in-store' },
    { id: 2, label: '02. The Leak', desc: 'What was actually heard' },
    { id: 3, label: '03. Without System', desc: 'Day 1 to 17 loss' },
    { id: 4, label: '04. Leveraged Capture', desc: 'Future demand captured' },
    { id: 5, label: '05. The Ecosystem', desc: 'Flywheel over time' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-purple-400 font-bold">CASE STUDY 03 · COMPOUND</span>
            <span>/</span>
            <span>SIMULATED LIFECYCLE & RETENTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            NOT READY DOES NOT MEAN NOT INTERESTED
          </h2>
          <p className="text-sm text-neutral-300 max-w-2xl mt-1.5 leading-relaxed">
            Turn today's customer into tomorrow's demand, relationship, and ecosystem. The customer who isn't ready today may be tomorrow's highest-value buyer—if the relationship survives today.
          </p>
        </div>

        {/* Persona quick badge */}
        <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 p-2.5 rounded-xl">
          <img
            src={persona.avatarUrl}
            alt={persona.name}
            className="w-10 h-10 rounded-full object-cover border border-neutral-700"
          />
          <div className="text-xs">
            <div className="font-semibold text-white">{persona.name}, {persona.age}</div>
            <div className="text-neutral-400 text-[11px] font-mono">KNUST Freshman · Budget GH₵6,500</div>
          </div>
        </div>
      </div>

      {/* Step Navigation Pill Bar */}
      <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-2 flex items-center justify-between overflow-x-auto gap-2">
        <div className="flex items-center gap-1.5 min-w-max">
          {steps.map((s) => {
            const isActive = step === s.id;
            const isCompleted = step > s.id;
            return (
              <button
                key={s.id}
                onClick={() => setStep(s.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-purple-500 text-white font-semibold shadow-sm'
                    : isCompleted
                    ? 'bg-neutral-800/80 text-neutral-300 hover:text-white'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <span className="font-mono text-[11px] opacity-70">0{s.id}</span>
                <span>{s.label}</span>
                {isCompleted && <CheckCircle2 className="w-3 h-3 text-purple-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Context & Analytical Narratives */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-2">
              <span className="text-purple-400 font-bold uppercase">
                {steps[step - 1].label}
              </span>
              <span>{steps[step - 1].desc}</span>
            </div>

            {/* Step Explanations */}
            {step === 1 && (
              <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
                <h3 className="text-lg font-bold text-white">Physical Discovery on Campus</h3>
                <p>
                  Daniel is 18 years old. He walks around the KNUST campus asking senior students where to find a trustworthy laptop for coding and coursework.
                </p>
                <p>
                  He visits Ratio City’s Ahodwo showroom. He falls in love with a slim, durable laptop priced at <strong>GH₵ 9,000</strong>. His current cash ceiling from home is <strong>GH₵ 6,500</strong>.
                </p>
                <div className="p-3 rounded-xl bg-black/60 border border-neutral-800 text-xs space-y-1">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">THE STOREFRONT MOMENT</div>
                  <p className="text-neutral-200">
                    Salesperson: <em>“When you get the money, come back.”</em><br />
                    Daniel: <em>“Okay.”</em> He walks out.
                  </p>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
                <h3 className="text-lg font-bold text-white">The Systemic Blindness</h3>
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1.5 text-xs">
                  <div className="text-[10px] font-mono text-rose-400 uppercase font-bold">WHAT THE BUSINESS HEARS</div>
                  <div className="text-white font-medium">“Customer can’t afford it.”</div>
                  <div className="text-neutral-400 text-[11px]">Logged as $0 foot traffic. Dismissed.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/40 space-y-2 text-xs">
                  <div className="text-[10px] font-mono text-purple-300 uppercase font-bold">WHAT ACTUALLY HAPPENED</div>
                  <ul className="space-y-1 text-neutral-200 text-[11px]">
                    <li>✓ Customer has a verified real need</li>
                    <li>✓ Customer identified the exact product</li>
                    <li>✓ Customer stated a clear budget (GH₵6,500)</li>
                    <li>✓ Customer showed high purchase intent</li>
                    <li>✓ Customer is not rejecting the business</li>
                    <li>✓ Customer is simply not ready today</li>
                  </ul>
                </div>

                <div className="p-3 bg-black border border-neutral-800 rounded-xl text-center">
                  <span className="text-sm sm:text-base font-extrabold text-purple-400 font-mono">
                    NOT NOW ≠ NO
                  </span>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
                <h3 className="text-lg font-bold text-white">Without a System: The Leakage</h3>
                <p>
                  Watch what happens when there is no follow-up infrastructure. Ratio City assumes Daniel will remember them and return.
                </p>
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-rose-900/40 text-xs space-y-2">
                  <div className="text-rose-400 font-mono text-[10px] uppercase font-bold">
                    THE PROGRESSION OF A LOST CUSTOMER
                  </div>
                  <div className="space-y-1.5 text-[11px] text-neutral-300">
                    <div className="flex justify-between border-b border-neutral-800 pb-1">
                      <span className="text-neutral-400">Day 01:</span>
                      <span>No follow-up. Daniel returns to campus.</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-1">
                      <span className="text-neutral-400">Day 07:</span>
                      <span>Daniel is still searching with his GH₵6,500.</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-1">
                      <span className="text-neutral-400">Day 14:</span>
                      <span className="text-amber-300">Adum competitor advertises a GH₵6,500 unit.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Day 17:</span>
                      <strong className="text-rose-400">Daniel buys elsewhere.</strong>
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  SIMULATED SCENARIO · DEMONSTRATING RETAIL FRICTION
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
                <h3 className="text-lg font-bold text-white">Future Demand Captured</h3>
                <p>
                  With LEVERAI, the salesperson doesn't let Daniel evaporate. A 20-second entry logs his unfinished demand into the system.
                </p>
                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/50 space-y-2 text-xs">
                  <div className="text-[10px] font-mono text-purple-300 uppercase font-bold">
                    FUTURE DEMAND RECORD
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-200 bg-black/60 p-2.5 rounded-lg">
                    <div>
                      <span className="text-neutral-500 block">Name</span>
                      <strong>Daniel (Student)</strong>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">Need</span>
                      <span>Laptop (Engineering)</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">Budget In-Hand</span>
                      <span className="text-emerald-400 font-bold">GH₵ 6,500</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">Readiness</span>
                      <span className="text-amber-300">1–2 Months</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-neutral-300 pt-1 leading-relaxed">
                    Two weeks later, Ratio City gets inventory matching his exact GH₵6,500 range. The system prompts the salesperson.
                  </p>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
                <h3 className="text-lg font-bold text-white">The Flywheel: From Transactions to Ecosystem</h3>
                <p>
                  This is not just about recovering one GH₵6,500 laptop sale. Daniel will be in Kumasi for four years, will graduate, and will build an engineering career.
                </p>
                <blockquote className="border-l-2 border-purple-400 pl-3 py-1 font-medium text-white italic text-xs leading-relaxed">
                  “The customer who isn't ready today may be tomorrow's best customer.<br />
                  But only if the relationship survives today.”
                </blockquote>
                <div className="pt-2 text-xs font-extrabold text-purple-300 uppercase tracking-wider">
                  DON'T LOSE THE CUSTOMER BECAUSE YOU LOST THE MOMENT.
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="pt-3 flex items-center justify-between text-xs">
              <button
                onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                disabled={step === 1}
                className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 disabled:opacity-40 text-neutral-300 hover:text-white"
              >
                Previous Stage
              </button>
              <button
                onClick={() => {
                  if (step < 5) {
                    setStep((prev) => prev + 1);
                  } else {
                    onCompleteCaseStudy();
                  }
                }}
                className="px-5 py-2 rounded-lg bg-purple-500 text-white font-bold hover:bg-purple-400 flex items-center gap-1.5 shadow-lg"
              >
                <span>{step === 5 ? 'Synthesize All Three Cases' : 'Next Stage'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Reconstructed UI Mockup */}
        <div className="lg:col-span-7 flex justify-center">
          <DeviceFrame
            deviceType={step === 5 ? 'cinematic' : 'phone'}
            time="1:45 PM"
            badge={`DANIEL · KNUST FRESHMAN · 0${step}`}
            className={step === 5 ? 'w-full max-w-xl' : ''}
          >
            {step === 1 && (
              <div className="bg-[#121214] text-white min-h-full font-sans select-none p-4 space-y-4">
                <div className="text-center text-[10px] font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                  AHODWO SHOWROOM · COUNTER ENCOUNTER
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
                  <div className="text-[10px] font-mono text-neutral-400">DESIRED PRODUCT</div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">MacBook Air M1 / Slim Pro Ultrabook</span>
                    <span className="font-bold text-white font-mono">GH₵ 9,000</span>
                  </div>
                  <div className="text-[11px] text-neutral-400">Ideal for engineering coursework & CAD</div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
                  <div className="text-[10px] font-mono text-neutral-400">DANIEL'S ALLOWANCE</div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-amber-400">Cash in Mobile Money / Hand</span>
                    <span className="font-bold text-emerald-400 font-mono">GH₵ 6,500</span>
                  </div>
                  <div className="text-[11px] text-rose-400">Shortfall: GH₵ 2,500</div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 space-y-3 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">Salesperson</span>
                    <p className="text-neutral-200">“When you get the money, come back.”</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-neutral-800">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">Daniel</span>
                    <p className="text-neutral-300">“Okay.” (Leaves store)</p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-[#121214] text-white min-h-full font-sans select-none p-4 space-y-4">
                <div className="text-center text-[10px] font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                  SCENE FREEZE · THE INVISIBLE LEAK
                </div>

                <div className="p-6 rounded-2xl bg-black border border-purple-500/50 text-center space-y-4">
                  <div className="text-3xl font-black text-purple-400 font-mono">
                    NOT NOW ≠ NO
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
                    A customer saying they cannot pay GH₵9,000 today is not rejecting your shop. They are simply not ready today.
                  </p>
                  <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 text-[11px] text-neutral-200">
                    Yet traditional retail treats them identically to a rejection.
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-[#121214] text-white min-h-full font-sans select-none p-4 space-y-4">
                <div className="text-center text-[10px] font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                  DAY 17 · ADUM COMPETITOR
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
                  <div className="text-rose-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>OPPORTUNITY LOST PERMANENTLY</span>
                  </div>
                  <p className="text-neutral-200 leading-relaxed">
                    Because Ratio City had zero follow-up record, another shop in Adum ran a promo for a refurbished Core i7 for GH₵6,500. Daniel bought it on Day 17.
                  </p>
                  <p className="text-neutral-400 text-[11px]">
                    Ratio City lost not just GH₵6,500 today, but all 4 years of Daniel's student lifecycle.
                  </p>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="bg-[#0b141a] text-white min-h-full font-sans select-none p-4 space-y-3">
                <div className="text-center text-[10px] font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                  14 DAYS LATER · PROACTIVE WHATSAPP
                </div>

                {/* Salesperson message */}
                <div className="flex justify-start">
                  <div className="bg-[#202c33] p-3 rounded-2xl rounded-tl-none text-xs text-white max-w-[90%] space-y-1.5 border border-purple-500/30">
                    <div className="text-[10px] text-purple-300 font-semibold">Ratio City Sales (Emmanuel)</div>
                    <p className="leading-relaxed">
                      “Hi Daniel! You were looking for a reliable coding laptop around GH₵ 6,500 two weeks ago. We just received a certified ThinkPad X1 with 16GB RAM that fits right into your budget. Would you like me to send you the specs?”
                    </p>
                    <div className="text-[9px] text-neutral-400 text-right mt-1">11:04 AM</div>
                  </div>
                </div>

                {/* Daniel reply */}
                <div className="flex justify-end">
                  <div className="bg-[#005c4b] p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[85%] space-y-1 shadow">
                    <p>“Wow yes please! I still have the money saved. Can I come by Ahodwo this afternoon?”</p>
                    <div className="text-[9px] text-emerald-200/80 text-right mt-1">11:08 AM</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/50 text-[10px] font-mono text-emerald-400 text-center">
                  ✓ Unfinished Demand Converted with Zero Ad Spend
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="p-5 space-y-4 text-xs font-sans">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <span className="text-[10px] font-mono text-purple-400 uppercase">
                    SIMULATED CUSTOMER LIFECYCLE (KNUST → CAREER)
                  </span>
                  <span className="text-emerald-400 font-bold font-mono">LTV: GH₵ 85,000+</span>
                </div>

                {/* The Timeline */}
                <div className="space-y-1.5">
                  {[
                    { stage: 'Freshman Year', item: 'Coding Laptop (GH₵ 6,500)', status: 'Captured Relationship' },
                    { stage: 'Sophomore Year', item: 'Phone Upgrade (GH₵ 11,000)', status: 'Returning Customer' },
                    { stage: 'Junior Year', item: 'Accessories & Monitor (GH₵ 4,500)', status: 'Loyal Buyer' },
                    { stage: 'Senior Year', item: 'Flagship Laptop (GH₵ 22,000)', status: 'High-Value Retention' },
                    { stage: 'Graduation + Career', item: 'Workstation & Corporate Gear (GH₵ 40,000+)', status: 'Advocate & Agency Partner' },
                  ].map((row, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-white">{row.stage}</div>
                        <div className="text-[10px] text-neutral-400">{row.item}</div>
                      </div>
                      <span className="text-[10px] font-mono text-purple-300">{row.status}</span>
                    </div>
                  ))}
                </div>

                {/* Ecosystem concept */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-950/60 to-neutral-900 border border-purple-500/40 space-y-1.5">
                  <div className="text-[10px] font-mono text-purple-300 uppercase font-bold">
                    THE ECOSYSTEM FLYWHEEL
                  </div>
                  <p className="text-neutral-200 text-[11px] leading-relaxed">
                    Once Ratio City understands the journey, it can build communities around students, creators, entrepreneurs, and gamers. Products are commodities; trusted ecosystem hubs cannot be dislodged.
                  </p>
                </div>
              </div>
            )}
          </DeviceFrame>
        </div>
      </div>
    </div>
  );
};
