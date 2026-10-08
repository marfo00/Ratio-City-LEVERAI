import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Eye } from 'lucide-react';

interface CinematicOpeningProps {
  onEnterPersonaSelector: () => void;
}

export const CinematicOpening: React.FC<CinematicOpeningProps> = ({ onEnterPersonaSelector }) => {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    // Stage 0: pure dark
    // Stage 1: LEVERAI × RATIO CITY + Subtitle (after 800ms)
    // Stage 2: What if we stopped looking at the transaction... (after 2800ms)
    // Stage 3: Let's follow three customers (after 5200ms)
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 2600);
    const t3 = setTimeout(() => setStage(3), 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 select-none bg-black">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black pointer-events-none" />

      {/* Screen container */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-12">
        {/* Stage 1: Brand introduction */}
        <div
          className={`transition-all duration-1000 ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-block tracking-[0.3em] text-xs font-mono text-neutral-400 uppercase mb-3">
            RECONSTRUCTED RETAIL INTELLIGENCE
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            LEVERAI × RATIO CITY
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 font-medium tracking-wide">
            Seeing the customer journey differently.
          </p>
        </div>

        {/* Stage 2: The Core Philosophical Question */}
        <div
          className={`space-y-4 transition-all duration-1000 delay-200 ${
            stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="w-12 h-[1px] bg-neutral-800 mx-auto my-6" />
          <p className="text-xl sm:text-3xl md:text-4xl font-serif text-neutral-300 font-light leading-relaxed">
            What if we stopped looking at the transaction...
          </p>
          <p className="text-xl sm:text-3xl md:text-4xl font-serif text-white font-medium italic">
            and started looking at everything around it?
          </p>
        </div>

        {/* Stage 3: Invitation to follow the customers */}
        <div
          className={`pt-6 space-y-6 transition-all duration-1000 ${
            stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm sm:text-base font-mono tracking-widest text-amber-400/90 uppercase">
            Let's follow three customers.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onEnterPersonaSelector}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-sm flex items-center gap-2.5 transition-all shadow-2xl hover:scale-105"
            >
              <Eye className="w-4 h-4 text-neutral-900" />
              <span>Begin Customer Journey Reconstruction</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[11px] font-mono text-neutral-400 pt-2">
            SIMULATIONS / RECONSTRUCTIONS BASED ON OBSERVED KUMASI TECH RETAIL PATTERNS
          </div>
        </div>
      </div>

      {/* Skip button in bottom corner */}
      <button
        onClick={onEnterPersonaSelector}
        className="absolute bottom-6 right-6 text-xs font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
      >
        <span>Skip intro</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};
