import React, { useState } from 'react';
import { HeaderNav, ActiveView } from './components/HeaderNav';
import { CinematicOpening } from './components/CinematicOpening';
import { PersonaSelector } from './components/PersonaSelector';
import { CaseStudy01 } from './components/CaseStudy01';
import { CaseStudy02 } from './components/CaseStudy02';
import { CaseStudy03 } from './components/CaseStudy03';
import { CollisionSynthesis } from './components/CollisionSynthesis';
import { EvidencePatternView } from './components/EvidencePatternView';
import { LeveraiReveal } from './components/LeveraiReveal';
import { ClosingStrategicView } from './components/ClosingStrategicView';
import { PersonaId } from './types/journey';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('opening');
  const [selectedPersona, setSelectedPersona] = useState<PersonaId>('creator');

  const handleSelectPersona = (id: PersonaId) => {
    setSelectedPersona(id);
    if (id === 'creator') setActiveView('case01');
    if (id === 'entrepreneur') setActiveView('case02');
    if (id === 'fresher') setActiveView('case03');
  };

  const getStageHighlight = () => {
    switch (activeView) {
      case 'case01':
        return '01 · DIAGNOSE (THE DOCTOR MODEL)';
      case 'case02':
        return '02 · WIN (OPPORTUNITY RADAR)';
      case 'case03':
        return '03 · COMPOUND (LIFECYCLE FLYWHEEL)';
      case 'collision':
        return 'MASTER SYNTHESIS (DIAGNOSE · WIN · COMPOUND)';
      case 'evidence':
        return 'MARKET EVIDENCE (THE PATTERN BEYOND RATIO CITY)';
      case 'infrastructure':
        return 'LEVERAGE ARCHITECTURE (8 CORE CAPABILITIES)';
      case 'closing':
        return 'STRATEGIC RESOLUTION';
      default:
        return 'RECONSTRUCTION READY';
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-neutral-100 flex flex-col justify-between selection:bg-neutral-800 selection:text-white font-sans antialiased">
      {/* Top Header Navigation */}
      <HeaderNav
        activeView={activeView}
        setActiveView={setActiveView}
        selectedPersona={selectedPersona}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col justify-center">
        {activeView === 'opening' && (
          <CinematicOpening
            onEnterPersonaSelector={() => setActiveView('selector')}
          />
        )}

        {activeView === 'selector' && (
          <PersonaSelector
            selectedId={selectedPersona}
            onSelectPersona={handleSelectPersona}
          />
        )}

        {activeView === 'case01' && (
          <CaseStudy01
            onCompleteCaseStudy={() => setActiveView('case02')}
          />
        )}

        {activeView === 'case02' && (
          <CaseStudy02
            onCompleteCaseStudy={() => setActiveView('case03')}
          />
        )}

        {activeView === 'case03' && (
          <CaseStudy03
            onCompleteCaseStudy={() => setActiveView('collision')}
          />
        )}

        {activeView === 'collision' && (
          <CollisionSynthesis
            onProceedToEvidencePattern={() => setActiveView('evidence')}
          />
        )}

        {activeView === 'evidence' && (
          <EvidencePatternView
            onProceedToInfrastructure={() => setActiveView('infrastructure')}
          />
        )}

        {activeView === 'infrastructure' && (
          <LeveraiReveal
            onProceedToClosing={() => setActiveView('closing')}
          />
        )}

        {activeView === 'closing' && (
          <ClosingStrategicView
            onRestartSimulation={() => setActiveView('opening')}
            onSelectPersona={handleSelectPersona}
          />
        )}
      </main>

      {/* Persistent Bottom Bar with Journey Progress & Stage Pipeline */}
      {activeView !== 'opening' && (
        <footer className="border-t border-neutral-900 bg-neutral-950/80 backdrop-blur-md px-4 sm:px-8 py-3 text-xs select-none">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Left: Indicator */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-neutral-400 text-[11px]">
                RATIO CITY × LEVERAI
              </span>
              <span className="text-neutral-700">|</span>
              <span className="text-neutral-300 font-mono text-[11px]">
                {getStageHighlight()}
              </span>
            </div>

            {/* Middle: 3 Pillars Pipeline */}
            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <span className={activeView === 'case01' ? 'text-amber-400 font-bold' : ''}>01. DIAGNOSE</span>
              <span>→</span>
              <span className={activeView === 'case02' ? 'text-cyan-400 font-bold' : ''}>02. WIN</span>
              <span>→</span>
              <span className={activeView === 'case03' ? 'text-purple-400 font-bold' : ''}>03. COMPOUND</span>
              <span>→</span>
              <span className={activeView === 'evidence' ? 'text-emerald-400 font-bold' : ''}>PATTERN</span>
              <span>→</span>
              <span className={activeView === 'infrastructure' ? 'text-white font-bold' : ''}>LEVERAGE</span>
            </div>

            {/* Right: Quick actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveView('selector')}
                className="text-neutral-400 hover:text-white transition-colors text-[11px] font-mono"
              >
                Switch Persona
              </button>
              <button
                onClick={() => setActiveView('opening')}
                className="text-neutral-400 hover:text-white transition-colors text-[11px] font-mono flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay All</span>
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
