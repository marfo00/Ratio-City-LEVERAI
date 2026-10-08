import React, { useState } from 'react';
import { PERSONAS } from '../data/personas';
import { DeviceFrame } from './DeviceFrame';
import {
  Zap,
  Clock,
  Bell,
  ArrowRight,
  TrendingUp,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Eye,
  Sliders,
  Users,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

interface CaseStudy02Props {
  onCompleteCaseStudy: () => void;
}

export const CaseStudy02: React.FC<CaseStudy02Props> = ({ onCompleteCaseStudy }) => {
  const persona = PERSONAS.entrepreneur;
  // Day-by-day progression: 1 (Day 1), 3 (Day 3), 5 (Day 5 Morning), 6 (Day 5 Afternoon - The Signal), 7 (Human Intervention & Split Comparison)
  const [activeStage, setActiveStage] = useState<number>(1);
  const [showRadarZoom, setShowRadarZoom] = useState<boolean>(false);

  const stages = [
    { id: 1, day: 'Day 1', time: '10:14 AM', state: 'LOW / EXPLORATORY INTENT', label: 'Day 1: Browsing' },
    { id: 3, day: 'Day 3', time: '2:40 PM', state: 'INTEREST DETECTED', label: 'Day 3: Warranty Inquiry' },
    { id: 5, day: 'Day 5 AM', time: '11:15 AM', state: 'PURCHASE INTENT RISING', label: 'Day 5 AM: Stock Check' },
    { id: 6, day: 'Day 5 PM', time: '3:22 PM', state: 'PURCHASE SIGNAL DETECTED', label: 'Day 5 PM: "Pick Up Today"' },
    { id: 7, day: 'The Moment', time: '3:24 PM', state: 'LIVE OPPORTUNITY DISPATCH', label: 'Human Intervention' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-cyan-400 font-bold">CASE STUDY 02 · WIN THE MOMENT</span>
            <span>/</span>
            <span>SIMULATED OPPORTUNITY DETECTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            CUSTOMERS ARE NOT EQUALLY READY TO BUY AT EVERY MOMENT
          </h2>
          <p className="text-sm text-neutral-300 max-w-2xl mt-1.5 leading-relaxed">
            The business opportunity is not simply <em>“get more customers.”</em> It is knowing when a customer has crossed the line from passive interest into an active, high-converting opportunity.
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
            <div className="text-neutral-400 text-[11px] font-mono">Digital Entrepreneur · Dynamic Buyer State</div>
          </div>
        </div>
      </div>

      {/* Step Navigation Pill Bar */}
      <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-2 flex items-center justify-between overflow-x-auto gap-2">
        <div className="flex items-center gap-1.5 min-w-max">
          {stages.map((st) => {
            const isActive = activeStage === st.id;
            const isCompleted = activeStage > st.id;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStage(st.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-400 text-black font-semibold shadow-sm'
                    : isCompleted
                    ? 'bg-neutral-800/80 text-neutral-300 hover:text-white'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <span className="font-mono text-[11px] opacity-70">{st.day}</span>
                <span>{st.label}</span>
                {isCompleted && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setShowRadarZoom(!showRadarZoom)}
          className="px-3 py-1.5 rounded-lg bg-neutral-800 text-cyan-300 text-xs font-mono border border-neutral-700 hover:bg-neutral-700 flex items-center gap-1.5 shrink-0"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>{showRadarZoom ? 'View Journey Flow' : 'View Customer Radar'}</span>
        </button>
      </div>

      {!showRadarZoom ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context & Strategic Commentary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-2">
                <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                  <Zap className="w-3.5 h-3.5" /> BUYING STATE TRACKER
                </span>
                <span className="font-bold text-white">
                  {stages.find((s) => s.id === activeStage)?.time}
                </span>
              </div>

              {/* State Indicator */}
              <div className="p-3 rounded-xl bg-black/60 border border-neutral-800 space-y-1">
                <div className="text-[10px] font-mono uppercase text-neutral-400">DETECTED INTENT STATE</div>
                <div className="text-sm font-bold text-cyan-300 font-mono">
                  {stages.find((s) => s.id === activeStage)?.state}
                </div>
              </div>

              {/* Stage Description */}
              <div className="space-y-2 text-sm text-neutral-300 leading-relaxed">
                {activeStage === 1 && (
                  <p>
                    <strong>Day 1 — Casual Exploration:</strong> Kwame browses Ratio City's online catalogue looking at MacBook Pro models. He does not reach out. Traditional retailers either ignore this or spam generic remarketing ads. LEVERAI logs baseline intent with zero intrusive effort.
                  </p>
                )}
                {activeStage === 3 && (
                  <p>
                    <strong>Day 3 — Warranty Question:</strong> Kwame sends a quick WhatsApp message: <em>“Does this come with official Apple warranty?”</em> Intent is warming up. The system notes interest in warranty assurance. Still not an urgent buying moment.
                  </p>
                )}
                {activeStage === 5 && (
                  <p>
                    <strong>Day 5 (Morning) — Availability Check:</strong> Kwame messages: <em>“Do you have the 16-inch M3 Max in stock at Ahodwo?”</em> Intent is rising steeply. His project deadline has arrived.
                  </p>
                )}
                {activeStage === 6 && (
                  <p>
                    <strong>Day 5 (3:22 PM) — The Critical Signal:</strong> Kwame asks: <em>“Can I pick it up today?”</em> In retail, this is the inflection point. He has cash in hand, time constraints, and an immediate trigger.
                  </p>
                )}
                {activeStage === 7 && (
                  <div className="space-y-3">
                    <p>
                      <strong>The LEVERAI Principle:</strong>
                    </p>
                    <blockquote className="border-l-2 border-cyan-400 pl-3 py-1 font-medium text-white italic text-xs leading-relaxed">
                      “Automation detects.<br />
                      Infrastructure prepares.<br />
                      Humans handle the moments that matter.”
                    </blockquote>
                    <p className="text-xs text-neutral-400">
                      The system does not replace the salesperson. It equips salesperson Emmanuel with Kwame’s exact specs, confirms Ahodwo shelf stock, and alerts him to call Kwame instantly.
                    </p>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex items-center justify-between text-xs">
                <button
                  onClick={() => {
                    const idx = stages.findIndex((s) => s.id === activeStage);
                    if (idx > 0) setActiveStage(stages[idx - 1].id);
                  }}
                  disabled={activeStage === 1}
                  className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 disabled:opacity-40 text-neutral-300 hover:text-white"
                >
                  Previous Day
                </button>
                <button
                  onClick={() => {
                    const idx = stages.findIndex((s) => s.id === activeStage);
                    if (idx < stages.length - 1) {
                      setActiveStage(stages[idx + 1].id);
                    } else {
                      onCompleteCaseStudy();
                    }
                  }}
                  className="px-5 py-2 rounded-lg bg-cyan-400 text-black font-bold hover:bg-cyan-300 flex items-center gap-1.5 shadow-lg"
                >
                  <span>{activeStage === 7 ? 'Proceed to Case Study 03' : 'Advance Timeline'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split Comparison callout at Stage 7 */}
            {activeStage === 7 && (
              <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-3 text-xs">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  THE CRUCIAL COMPARISON
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                  <div className="p-3 rounded-xl bg-neutral-950 border border-rose-900/40 space-y-1">
                    <span className="text-rose-400 font-bold block">WITHOUT OPPORTUNITY DETECTION</span>
                    <p className="text-neutral-400 leading-tight">
                      Message sits unread for 3 hours. Staff are serving walk-ins. Kwame gets impatient and drives to a competitor in Adum.
                    </p>
                    <span className="text-rose-300 font-mono text-[10px] block pt-1">Result: GH₵ 34,000 lost</span>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 space-y-1">
                    <span className="text-cyan-300 font-bold block">WITH OPPORTUNITY DETECTION</span>
                    <p className="text-neutral-200 leading-tight">
                      Signal prioritizes Kwame in queue. Salesperson calls within 4 minutes with stock reserved. Transaction closed.
                    </p>
                    <span className="text-emerald-400 font-mono text-[10px] block pt-1">Result: Closed same-day</span>
                  </div>
                </div>

                <div className="pt-2 text-center border-t border-neutral-800">
                  <p className="text-xs font-extrabold text-white">
                    THE SALE DIDN'T NEED MORE EFFORT.
                  </p>
                  <p className="text-xs font-extrabold text-cyan-300">
                    IT NEEDED THE RIGHT EFFORT AT THE RIGHT MOMENT.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Realistic Screen Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <DeviceFrame
              deviceType="phone"
              time={stages.find((s) => s.id === activeStage)?.time}
              badge={`KWAME'S JOURNEY · ${stages.find((s) => s.id === activeStage)?.day}`}
            >
              <div className="bg-[#0b141a] text-white min-h-full font-sans select-none p-4 space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
                      RC
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Ratio City Ahodwo</div>
                      <div className="text-[10px] text-emerald-400">Official WhatsApp</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {stages.find((s) => s.id === activeStage)?.day}
                  </span>
                </div>

                {/* Day 1 state */}
                {activeStage === 1 && (
                  <div className="space-y-3 pt-4">
                    <div className="text-center text-[10px] font-mono text-neutral-500">
                      DAY 1 · 10:14 AM
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase">
                        WEBSITE CATALOGUE VISIT OBSERVED
                      </div>
                      <p className="text-neutral-200">
                        Kwame browses <strong>MacBook Pro 16" (M3 Max)</strong> specifications for 4 minutes from Kumasi IP address.
                      </p>
                      <div className="inline-block px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 text-[10px] font-mono">
                        Status: Low / Exploratory Intent
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-neutral-800/80 text-[11px] text-neutral-400 text-center">
                      No customer message sent yet. No aggressive follow-up needed.
                    </div>
                  </div>
                )}

                {/* Day 3 state */}
                {activeStage === 3 && (
                  <div className="space-y-3 pt-2">
                    <div className="text-center text-[10px] font-mono text-neutral-500">
                      DAY 3 · 2:40 PM
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#005c4b] p-2.5 rounded-xl rounded-tr-none text-xs text-white max-w-[85%]">
                        Hello, please does the MacBook Pro 16 M3 Max come with full Apple warranty in Ghana?
                        <div className="text-[9px] text-emerald-200/80 text-right mt-1">2:40 PM</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#202c33] p-2.5 rounded-xl rounded-tl-none text-xs text-white max-w-[85%]">
                        Hello Kwame! Yes, 100% genuine Apple official 1-year global warranty with receipt.
                        <div className="text-[9px] text-neutral-400 text-right mt-1">2:42 PM</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-[10px] font-mono text-cyan-300">
                      ✓ Signal Logged: Warranty Validation · Readiness: Moderate
                    </div>
                  </div>
                )}

                {/* Day 5 AM state */}
                {activeStage === 5 && (
                  <div className="space-y-3 pt-2">
                    <div className="text-center text-[10px] font-mono text-neutral-500">
                      DAY 5 · 11:15 AM
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#005c4b] p-2.5 rounded-xl rounded-tr-none text-xs text-white max-w-[85%]">
                        Do you have the Space Black 36GB RAM model in stock at Ahodwo right now?
                        <div className="text-[9px] text-emerald-200/80 text-right mt-1">11:15 AM</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-[#202c33] p-2.5 rounded-xl rounded-tl-none text-xs text-white max-w-[85%]">
                        Yes boss, 2 sealed units remaining at the Ahodwo showroom.
                        <div className="text-[9px] text-neutral-400 text-right mt-1">11:17 AM</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                      ⚡ Signal Detected: Specific Model Availability Checked · Intent Rising Fast
                    </div>
                  </div>
                )}

                {/* Day 5 PM (Signal) state */}
                {(activeStage === 6 || activeStage === 7) && (
                  <div className="space-y-3 pt-2">
                    <div className="text-center text-[10px] font-mono text-neutral-500">
                      DAY 5 · 3:22 PM (THE TURNING POINT)
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#005c4b] p-3 rounded-xl rounded-tr-none text-xs text-white max-w-[85%] font-medium ring-2 ring-cyan-400 shadow-lg">
                        Can I pick it up today? I have a client deliverable tonight.
                        <div className="text-[9px] text-emerald-200/80 text-right mt-1">3:22 PM</div>
                      </div>
                    </div>

                    {/* Dramatic Notification */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950 via-neutral-900 to-black border-2 border-cyan-400 text-xs shadow-2xl space-y-2.5 animate-in zoom-in-95 duration-200">
                      <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300">
                        <span className="flex items-center gap-1 font-bold">
                          <Bell className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                          LIVE OPPORTUNITY DETECTED
                        </span>
                        <span className="bg-cyan-400 text-black px-1.5 py-0.5 rounded font-extrabold text-[9px]">
                          PRIORITY: CRITICAL
                        </span>
                      </div>

                      <div className="text-sm font-extrabold text-white">
                        Kwame Gyinaye appears ready to purchase right now.
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono bg-black/60 p-2 rounded-lg border border-neutral-800">
                        <div>
                          <span className="text-neutral-500 block">Customer Intent</span>
                          <span className="text-cyan-300 font-bold">VERY HIGH</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">Product</span>
                          <span className="text-emerald-400 font-bold">AVAILABLE (2 UNITS)</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">Budget Alignment</span>
                          <span className="text-white">MATCHED (GH₵ 34,000)</span>
                        </div>
                        <div>
                          <span className="text-neutral-500 block">Timing Urgency</span>
                          <span className="text-amber-400 font-bold">SAME-DAY PICKUP</span>
                        </div>
                      </div>

                      <div className="p-2 bg-neutral-900 rounded-lg text-[11px] text-neutral-200 flex items-center justify-between">
                        <span>Recommended Action:</span>
                        <strong className="text-cyan-300">Human intervention now</strong>
                      </div>
                    </div>

                    {activeStage === 7 && (
                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-xs space-y-1.5">
                        <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono font-bold">
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>STAFF INTERVENTION: EMMANUEL (AHODWO)</span>
                        </div>
                        <p className="text-neutral-200 text-[11px] leading-relaxed">
                          Emmanuel gets instant phone prompt, calls Kwame: <em>“Kwame, Emmanuel here from Ahodwo. I have the unit set aside on Counter 1 right now. How soon are you arriving?”</em>
                        </p>
                        <div className="text-[10px] text-emerald-400 font-mono">
                          ✓ Deal locked in 4 minutes.
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </DeviceFrame>
          </div>
        </div>
      ) : (
        /* The Deeper Reveal / Zoomed-out Customer Radar View */
        <div className="p-6 sm:p-10 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-8 animate-in fade-in duration-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              THE DEEPER REVEAL · SIMULATED LEVERAGE MODEL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Don't Just Work Harder. Know Where To Act.
            </h3>
            <p className="text-sm text-neutral-400">
              Ratio City doesn't need staff to reply to every casual browser with equal intensity. Leverage identifies where human attention produces the highest financial return.
            </p>
          </div>

          {/* Customer States Spectrum */}
          <div className="p-4 rounded-xl bg-black border border-neutral-800 space-y-3">
            <div className="text-xs font-mono text-neutral-400 uppercase">
              THE REALITY OF CUSTOMER BUYING STATES
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-mono">
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
                <div className="font-bold text-neutral-200">Browsing</div>
                <div className="text-[9px] mt-1 text-neutral-500">Low urgency</div>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
                <div className="font-bold text-neutral-200">Researching</div>
                <div className="text-[9px] mt-1 text-neutral-500">Comparing specs</div>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400">
                <div className="font-bold text-neutral-200">Comparing</div>
                <div className="text-[9px] mt-1 text-neutral-500">Checking prices</div>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900 border border-cyan-800/40 text-cyan-300">
                <div className="font-bold">Interested</div>
                <div className="text-[9px] mt-1 text-cyan-400">Specific model</div>
              </div>
              <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-500/60 text-cyan-300">
                <div className="font-bold text-white">Ready</div>
                <div className="text-[9px] mt-1 text-cyan-300">Stock & budget</div>
              </div>
              <div className="p-3 rounded-lg bg-cyan-400 text-black font-extrabold shadow-lg">
                <div>Urgent</div>
                <div className="text-[9px] mt-1 text-black font-semibold">Live Opportunity</div>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1.5">
              <div className="text-[10px] font-mono text-neutral-500 uppercase">01 · INPUTS</div>
              <h4 className="font-bold text-white">Customer Signals</h4>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Google, Website catalogue, Instagram DMs, WhatsApp, past interactions, timing cues.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1.5">
              <div className="text-[10px] font-mono text-cyan-400 uppercase">02 · DETECTION</div>
              <h4 className="font-bold text-white">Opportunity Radar</h4>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Distinguishes between casual price-checkers and high-intent ready buyers.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1.5">
              <div className="text-[10px] font-mono text-amber-400 uppercase">03 · TRIAGE</div>
              <h4 className="font-bold text-white">Prioritization</h4>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Routes high-probability buyers to staff immediately with inventory verified.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1.5">
              <div className="text-[10px] font-mono text-emerald-400 uppercase">04 · EXECUTION</div>
              <h4 className="font-bold text-white">Human Action</h4>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Salesperson closes the relationship with personalized warmth and confidence.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-black border border-neutral-800 text-center space-y-2">
            <blockquote className="text-base sm:text-lg font-medium text-white italic">
              “Most businesses try to increase the amount of effort.<br />
              Leverage asks where effort will produce the greatest return.”
            </blockquote>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setShowRadarZoom(false)}
              className="text-xs text-neutral-400 hover:text-white font-mono"
            >
              ← Back to Journey
            </button>
            <button
              onClick={onCompleteCaseStudy}
              className="px-6 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-xs hover:bg-cyan-300 flex items-center gap-1.5 shadow-xl"
            >
              <span>Continue to Case Study 03: Compound</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
