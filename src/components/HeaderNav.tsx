import React from 'react';
import { Eye, Layers, Compass, Sparkles, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { PersonaId } from '../types/journey';

export type ActiveView =
  | 'opening'
  | 'selector'
  | 'case01'
  | 'case02'
  | 'case03'
  | 'collision'
  | 'evidence'
  | 'infrastructure'
  | 'closing';

interface HeaderNavProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  selectedPersona: PersonaId;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeView,
  setActiveView,
  selectedPersona,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems: { key: ActiveView; label: string; tag: string }[] = [
    { key: 'selector', label: 'Personas', tag: '00' },
    { key: 'case01', label: '01 · Diagnose', tag: '01' },
    { key: 'case02', label: '02 · Win', tag: '02' },
    { key: 'case03', label: '03 · Compound', tag: '03' },
    { key: 'collision', label: 'Synthesis', tag: '04' },
    { key: 'evidence', label: 'The Pattern', tag: '05' },
    { key: 'infrastructure', label: 'Architecture', tag: '06' },
    { key: 'closing', label: 'The Question', tag: '07' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08080a]/90 backdrop-blur-xl border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand identity */}
        <div
          onClick={() => setActiveView('opening')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center font-black text-xs text-white group-hover:border-neutral-500 transition-colors">
            L
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-white tracking-tight">
              <span>LEVERAI</span>
              <span className="text-neutral-500">×</span>
              <span className="text-neutral-200">RATIO CITY</span>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 hidden sm:block">
              RECONSTRUCTED JOURNEY SIMULATION
            </div>
          </div>
        </div>

        {/* Mid-bar Stages / Chapters */}
        <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1 rounded-xl border border-neutral-800 text-xs">
          {navItems.map((item) => {
            const isActive = activeView === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActiveView(item.key)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all text-[11px] flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-neutral-100 text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                <span className="font-mono text-[9px] opacity-60">{item.tag}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Status Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">OBSERVATION</span>
            <span className="text-white font-semibold">
              {activeView === 'case01'
                ? '01 / 03'
                : activeView === 'case02'
                ? '02 / 03'
                : activeView === 'case03'
                ? '03 / 03'
                : 'SIM'}
            </span>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeView === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  setActiveView(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between ${
                  isActive ? 'bg-white text-black font-bold' : 'text-neutral-300 hover:bg-neutral-900'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-[10px] opacity-60">{item.tag}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
