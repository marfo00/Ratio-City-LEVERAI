import React, { useState } from 'react';
import { ArrowRight, RotateCcw, Sparkles, CheckCircle2, MessageSquare, PhoneCall, Mail } from 'lucide-react';

interface ClosingStrategicViewProps {
  onRestartSimulation: () => void;
  onSelectPersona: (personaKey: 'creator' | 'entrepreneur' | 'fresher') => void;
}

export const ClosingStrategicView: React.FC<ClosingStrategicViewProps> = ({
  onRestartSimulation,
  onSelectPersona,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 space-y-16 animate-in fade-in duration-300">
      {/* Strategic Challenge Card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-neutral-800 p-8 sm:p-14 text-center space-y-8 shadow-2xl overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-blue-600/10 blur-[100px] pointer-events-none" />

        <div className="space-y-4">
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            LEVERAI STRATEGIC ADVISORY · RATIO CITY
          </span>

          <div className="space-y-2">
            <div className="text-xs sm:text-sm font-mono text-neutral-500 uppercase">
              THE QUESTION ISN'T:
            </div>
            <h3 className="text-xl sm:text-2xl text-neutral-400 font-serif italic line-through decoration-neutral-600">
              “Can Ratio City sell more products?”
            </h3>
          </div>

          <div className="pt-4 space-y-2">
            <div className="text-xs sm:text-sm font-mono text-amber-400 uppercase font-semibold">
              INSTEAD, THE QUESTION IS:
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
              “How much leverage is hidden inside the customer journeys Ratio City already has?”
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-neutral-800 mx-auto" />

        {/* LEVERAI Brand Manifesto */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="text-xl sm:text-2xl font-black text-white tracking-[0.25em] uppercase">
            LEVERAI
          </div>
          <div className="text-xs font-mono text-neutral-400">
            LEVERAGING INFRASTRUCTURE ASSETS
          </div>
          <div className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
            DIAGNOSE → WIN → COMPOUND
          </div>

          <blockquote className="text-neutral-200 text-sm sm:text-base leading-relaxed font-serif italic border-y border-neutral-800/80 py-5 space-y-1">
            <p>“We don't start with technology.”</p>
            <p>“We start with the constraint.”</p>
            <p>“We diagnose the bottleneck.”</p>
            <p>“We find the leverage.”</p>
            <p className="text-white font-medium">“Then we build the infrastructure that multiplies it.”</p>
          </blockquote>
        </div>

        {/* Interactive Exploration & Consultation Block */}
        <div className="pt-4 max-w-lg mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>EXECUTIVE BRIEFING · INITIATE ARCHITECTURE AUDIT</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Schedule a private, in-person walkthrough of the Ratio City customer-journey infrastructure at the Ahodwo showroom or digital conference.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 uppercase mb-1">
                    Leadership Contact Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Ratio City Executive Director"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-neutral-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 uppercase mb-1">
                    Direct Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+233 24 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-neutral-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-neutral-200 shadow-xl transition-all"
              >
                <span>EXPLORE THE OPPORTUNITY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 space-y-3 text-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">Consultation Request Recorded</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Thank you, {contactName || 'Leadership'}. The LEVERAI enterprise strategy team will prepare the tailored Kumasi customer touchpoint audit.
              </p>
              <div className="text-[11px] font-mono text-emerald-300">
                Direct Contact: {contactPhone || '+233 24 000 0000'}
              </div>
            </div>
          )}
        </div>

        {/* Quick jump back into journeys */}
        <div className="pt-8 border-t border-neutral-800/80">
          <div className="text-xs font-mono text-neutral-400 mb-3 uppercase">
            REVISIT SIMULATED JOURNEYS:
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onSelectPersona('creator')}
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs text-neutral-200 border border-neutral-800 transition-all"
            >
              01. The Creator (Kwame, 24)
            </button>
            <button
              onClick={() => onSelectPersona('entrepreneur')}
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs text-neutral-200 border border-neutral-800 transition-all"
            >
              02. The Entrepreneur (Kwame, 29)
            </button>
            <button
              onClick={() => onSelectPersona('fresher')}
              className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs text-neutral-200 border border-neutral-800 transition-all"
            >
              03. The Fresher (Daniel, 18)
            </button>
            <button
              onClick={onRestartSimulation}
              className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs text-white border border-neutral-700 flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart from Beginning</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
