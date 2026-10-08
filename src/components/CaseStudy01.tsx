import React, { useState } from 'react';
import { PERSONAS } from '../data/personas';
import { DeviceFrame } from './DeviceFrame';
import { GoogleSearchSim } from './simulations/GoogleSearchSim';
import { InstagramSim } from './simulations/InstagramSim';
import { WhatsAppSim } from './simulations/WhatsAppSim';
import { StoreReceiptSim } from './simulations/StoreReceiptSim';
import { LeveragedJourneySim } from './LeveragedJourneySim';
import { ChevronRight, RotateCcw, Eye, ShieldCheck, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface CaseStudy01Props {
  onCompleteCaseStudy: () => void;
}

export const CaseStudy01: React.FC<CaseStudy01Props> = ({ onCompleteCaseStudy }) => {
  const persona = PERSONAS.creator;
  // Steps: 0: Overview/Persona, 1: Google Search, 2: Instagram, 3: WhatsApp, 4: Purchase & Reveal, 5: Leveraged Replay
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isInvisibleOverlayOpen, setIsInvisibleOverlayOpen] = useState(false);

  const stepsList = [
    { id: 1, title: 'Google Search', time: '12:41 PM', desc: 'Discovery in Kumasi' },
    { id: 2, title: 'Instagram', time: '12:42 PM', desc: 'Product feed & DM delay' },
    { id: 3, title: 'WhatsApp', time: '2:08 PM', desc: 'Price check & invisible data' },
    { id: 4, title: 'Purchase', time: '5:30 PM', desc: 'Point-of-sale receipt & end' },
    { id: 5, title: 'Leveraged Replay', time: 'Future', desc: 'Intent-driven infrastructure' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Header & Meta Bar */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-amber-400 font-bold">CASE STUDY 01 · DIAGNOSE</span>
            <span>/</span>
            <span>SIMULATED CUSTOMER RECONSTRUCTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            UNDERSTAND THE DEMAND BEFORE PRESCRIBING THE PRODUCT
          </h2>
          <p className="text-sm text-neutral-300 max-w-2xl mt-1.5 leading-relaxed">
            <strong className="text-amber-400 font-medium">The Doctor Analogy:</strong> A doctor doesn't prescribe before diagnosing. Similarly, a retail business shouldn't recommend a product before understanding the customer's real objective.
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
            <div className="text-neutral-400 text-[11px] font-mono">Budget: {persona.budget}</div>
          </div>
        </div>
      </div>

      {/* Step Navigation Pill Bar */}
      <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-2 flex items-center justify-between overflow-x-auto gap-2">
        <div className="flex items-center gap-1.5 min-w-max">
          {stepsList.map((step) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : isCompleted
                    ? 'bg-neutral-800/80 text-neutral-300 hover:text-white'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <span className="font-mono text-[11px] opacity-70">0{step.id}</span>
                <span>{step.title}</span>
                {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 pl-4 border-l border-neutral-800 shrink-0">
          <button
            onClick={() => setCurrentStep(1)}
            className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 text-xs flex items-center gap-1"
            title="Restart simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px] font-mono">Reset</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Context & Commentary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-2">
              <span>ACTIVE STAGE ANALYSIS</span>
              <span className="text-amber-400 font-bold">{stepsList[currentStep - 1].time}</span>
            </div>

            <h3 className="text-lg font-bold text-white">
              {currentStep === 1 && 'Step 1: The Google Search'}
              {currentStep === 2 && 'Step 2: Social Discovery (Instagram)'}
              {currentStep === 3 && 'Step 3: Direct Inquiry (WhatsApp)'}
              {currentStep === 4 && 'Step 4: The Point-of-Sale Transaction'}
              {currentStep === 5 && 'Step 5: The Leveraged Experience'}
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {currentStep === 1 &&
                'Kwame lives in Kumasi and has saved GH₵50,000 to launch a professional tech and lifestyle channel. He opens Google and types "best iphone shop in kumasi" to find a reputable local merchant.'}
              {currentStep === 2 &&
                'He lands on Ratio City’s Instagram profile. Seeing authentic photos of Apple stock, he sends a DM asking for the iPhone 17 Pro Max price. But 30 minutes pass without reply while the Kumasi showroom serves in-person buyers.'}
              {currentStep === 3 &&
                'Seeking immediate assistance, he jumps to WhatsApp. The salesperson replies 2 hours later with a simple price tag: GH₵23,500. To the salesperson, this is just an iPhone price inquiry.'}
              {currentStep === 4 &&
                'Kwame walks into the Ahodwo showroom and pays GH₵42,500 for a phone, laptop, and microphone. A receipt is issued. Kwame walks out. Traditional metrics call this a completed sale.'}
              {currentStep === 5 &&
                'Now watch what happens when the infrastructure understands intent. The conversation diagnoses his actual YouTube setup, preserves context, guides his full budget safely, and turns a single receipt into a multi-year partnership.'}
            </p>

            {/* Persona Quick Card */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 space-y-2 text-xs">
              <div className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                PERSONA DOSSIER
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-neutral-400 block text-[10px]">Name</span>
                  <strong className="text-white">Kwame Gyinaye, 24</strong>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px]">Available Budget</span>
                  <strong className="text-emerald-400">GH₵ 50,000</strong>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px]">Technical Level</span>
                  <span className="text-neutral-300">Beginner Creator</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px]">Actual Objective</span>
                  <span className="text-neutral-300">End-to-End YouTube Setup</span>
                </div>
              </div>
            </div>

            {/* Invisible Information highlight */}
            {currentStep === 3 && (
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/40 text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Eye className="w-4 h-4" />
                  <span>The Critical Blind Spot</span>
                </div>
                <p className="text-neutral-300 text-xs">
                  The salesperson only knows: <em>“This customer wants an iPhone.”</em> Everything else about his GH₵50,000 budget and creator goal is completely invisible.
                </p>
                <button
                  onClick={() => setIsInvisibleOverlayOpen(!isInvisibleOverlayOpen)}
                  className="w-full py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-semibold"
                >
                  {isInvisibleOverlayOpen ? 'Hide Invisible Data Overlay' : 'Toggle Invisible Data Overlay'}
                </button>
              </div>
            )}
          </div>

          {/* Quick jump navigation */}
          <div className="flex items-center justify-between text-xs">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 disabled:opacity-40 text-neutral-300 hover:text-white"
            >
              Previous Step
            </button>
            <button
              onClick={() => {
                if (currentStep < 5) {
                  setCurrentStep((prev) => prev + 1);
                } else {
                  onCompleteCaseStudy();
                }
              }}
              className="px-5 py-2 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 flex items-center gap-1.5 shadow-lg"
            >
              <span>{currentStep === 5 ? 'Proceed to Case Study 02' : 'Next Step'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side: High-Fidelity Device Mockup */}
        <div className="lg:col-span-7 flex justify-center">
          <DeviceFrame
            deviceType={currentStep === 5 ? 'cinematic' : 'phone'}
            time={stepsList[currentStep - 1].time}
            badge={`CASE 01 · STAGE 0${currentStep}`}
            className={currentStep === 5 ? 'w-full max-w-xl' : ''}
          >
            {currentStep === 1 && (
              <GoogleSearchSim
                onDiscoverRatioCity={() => setCurrentStep(2)}
                isDiscovered={false}
              />
            )}
            {currentStep === 2 && (
              <InstagramSim
                onSwitchToWhatsApp={() => setCurrentStep(3)}
              />
            )}
            {currentStep === 3 && (
              <WhatsAppSim
                onProceedToStore={() => setCurrentStep(4)}
                onOpenInvisibleOverlay={() => setIsInvisibleOverlayOpen(!isInvisibleOverlayOpen)}
                isInvisibleOverlayOpen={isInvisibleOverlayOpen}
              />
            )}
            {currentStep === 4 && (
              <StoreReceiptSim
                onReplayLeveraged={() => setCurrentStep(5)}
              />
            )}
            {currentStep === 5 && (
              <LeveragedJourneySim
                onContinueToNextCase={onCompleteCaseStudy}
              />
            )}
          </DeviceFrame>
        </div>
      </div>
    </div>
  );
};
