import React from 'react';
import { PERSONAS } from '../data/personas';
import { PersonaId } from '../types/journey';
import { ArrowRight, UserCheck, Wallet, Target, Compass, Sparkles } from 'lucide-react';

interface PersonaSelectorProps {
  onSelectPersona: (personaId: PersonaId) => void;
  selectedId?: PersonaId;
}

export const PersonaSelector: React.FC<PersonaSelectorProps> = ({
  onSelectPersona,
  selectedId = 'creator',
}) => {
  const personasList = [PERSONAS.creator, PERSONAS.entrepreneur, PERSONAS.fresher];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-12 animate-in fade-in duration-300">
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
          FIELD INVESTIGATION · SELECT SUBJECT
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          CHOOSE A CUSTOMER
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
          Three customers. Three journeys. Three very different opportunities.
        </p>
      </div>

      {/* The 3 Personas Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {personasList.map((p) => {
          const isSelected = selectedId === p.id;
          return (
            <div
              key={p.id}
              onClick={() => onSelectPersona(p.id as PersonaId)}
              className={`group relative rounded-2xl p-6 cursor-pointer transition-all duration-200 border flex flex-col justify-between space-y-6 ${
                isSelected
                  ? 'bg-neutral-900 border-white/60 shadow-[0_10px_35px_rgba(255,255,255,0.06)] ring-1 ring-white/30'
                  : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40'
              }`}
            >
              <div className="space-y-5">
                {/* Header tag */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {p.tagline}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {p.age} YEARS OLD
                  </span>
                </div>

                {/* Profile Image & Name */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={p.avatarUrl}
                      alt={p.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-neutral-700 group-hover:border-neutral-500 transition-colors"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[10px] text-emerald-400">
                      ✓
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase">
                      {p.category}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {p.name}
                    </h3>
                  </div>
                </div>

                {/* Persona Quote */}
                <blockquote className="text-xs text-neutral-300 italic border-l-2 border-neutral-700 pl-3 py-1">
                  {p.quote}
                </blockquote>

                {/* Metadata details */}
                <div className="space-y-2.5 text-xs pt-1 border-t border-neutral-800/80">
                  <div className="flex items-start gap-2">
                    <Compass className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-neutral-500 block text-[10px] font-mono uppercase">Acquisition Source</span>
                      <span className="text-neutral-200 text-[11px]">{p.acquisitionSource}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Wallet className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-neutral-500 block text-[10px] font-mono uppercase">Capital / Budget</span>
                      <span className="text-emerald-400 font-mono font-semibold text-[11px]">{p.budget}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Target className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-neutral-500 block text-[10px] font-mono uppercase">Real Objective</span>
                      <span className="text-neutral-200 text-[11px] leading-tight">{p.actualObjective}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action button */}
              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPersona(p.id as PersonaId);
                  }}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-white text-black hover:bg-neutral-200 shadow-md'
                      : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  <span>Explore {p.tagline}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Methodological label */}
      <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-900 text-center">
        <p className="text-[11px] font-mono text-neutral-400">
          CLEARLY LABELED SIMULATIONS / RECONSTRUCTIONS · NOT CLAIMS OF FACTUAL HISTORICAL DATA
        </p>
      </div>
    </div>
  );
};
