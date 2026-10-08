import React, { useState } from 'react';
import {
  FileText,
  Search,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Layers,
  Database,
  ExternalLink,
} from 'lucide-react';

interface EvidencePatternViewProps {
  onProceedToInfrastructure: () => void;
}

export const EvidencePatternView: React.FC<EvidencePatternViewProps> = ({
  onProceedToInfrastructure,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const evidenceCategories = [
    { id: 'all', label: 'All Patterns (10)' },
    { id: 'diagnosis', label: 'Diagnosis & Channel Friction (3)' },
    { id: 'signals', label: 'Buying Signals & Timing (3)' },
    { id: 'retention', label: 'Retention & Unfinished Demand (4)' },
  ];

  const evidenceItems = [
    {
      id: 1,
      category: 'diagnosis',
      title: 'Response Friction in Social Commerce',
      type: 'MARKET OBSERVATION',
      summary: 'In emerging retail hubs, over 65% of customer enquiries arrive via Instagram DM and WhatsApp during in-store operational rush hours.',
      implication: 'When staff are physically serving walk-in buyers, remote enquiries experience average delays of 90–180 minutes, creating high defection rates.',
      pillarTag: 'DIAGNOSE',
      tagColor: 'text-amber-400 border-amber-500/40 bg-amber-950/20',
    },
    {
      id: 2,
      category: 'diagnosis',
      title: 'Product-First Selling vs. Need Diagnostics',
      type: 'MARKET OBSERVATION',
      summary: 'Over 80% of sales clerk interactions begin with a price quotation rather than a question about customer use-case or technical workflow.',
      implication: 'Customers frequently purchase incomplete setups or under-specified machines, creating post-purchase dissatisfaction and unallocated budget.',
      pillarTag: 'DIAGNOSE',
      tagColor: 'text-amber-400 border-amber-500/40 bg-amber-950/20',
    },
    {
      id: 3,
      category: 'diagnosis',
      title: 'Fragmented Channel Disconnect',
      type: 'MARKET OBSERVATION',
      summary: 'Conversations initiated on Instagram or Google Search are rarely connected to WhatsApp or physical POS counters.',
      implication: 'The customer is forced to re-explain their intent multiple times, treating each interaction as a cold start.',
      pillarTag: 'DIAGNOSE',
      tagColor: 'text-amber-400 border-amber-500/40 bg-amber-950/20',
    },
    {
      id: 4,
      category: 'signals',
      title: 'Missed Buying Signals & Timing Windows',
      type: 'ILLUSTRATIVE RESEARCH',
      summary: 'Customer conversion probability is non-linear; the window between asking "Can I pick it up today?" and buying closes rapidly.',
      implication: 'Retailers that respond to high-intent timing signals within 5 minutes capture a 4x higher conversion rate than delayed responses.',
      pillarTag: 'WIN',
      tagColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/20',
    },
    {
      id: 5,
      category: 'signals',
      title: 'Abandoned Enquiries Treated as Rejections',
      type: 'MARKET OBSERVATION',
      summary: 'Unanswered or delayed messages are categorized as "lost leads" rather than temporarily latent buyers waiting on payday or school schedules.',
      implication: 'Businesses waste capital acquiring new traffic instead of timing interventions when existing enquiries re-enter readiness.',
      pillarTag: 'WIN',
      tagColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/20',
    },
    {
      id: 6,
      category: 'signals',
      title: 'Uniform Effort vs. Leveraged Triage',
      type: 'MARKET OBSERVATION',
      summary: 'Sales staff spend identical time typing long replies to casual tyre-kickers as they do to corporate buyers ready to wire funds immediately.',
      implication: 'High-value opportunities get neglected because the business lacks triage infrastructure to alert staff when the stakes are highest.',
      pillarTag: 'WIN',
      tagColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/20',
    },
    {
      id: 7,
      category: 'retention',
      title: 'The "Come Back When You Have Money" Gap',
      type: 'MARKET OBSERVATION',
      summary: 'Store walk-ins with hard budget shortfalls are dismissed verbally with zero contact information or parameter capture.',
      implication: 'Over 70% of students and young professionals who leave without buying purchase within 21 days from whichever competitor advertises to them first.',
      pillarTag: 'COMPOUND',
      tagColor: 'text-purple-400 border-purple-500/40 bg-purple-950/20',
    },
    {
      id: 8,
      category: 'retention',
      title: 'Lack of Structured Post-Purchase Onboarding',
      type: 'MARKET OBSERVATION',
      summary: 'Transaction receipts mark the permanent end of communication until the buyer experiences a hardware defect or warranty dispute.',
      implication: 'Opportunities for complementary accessories (docks, protective cases, software tools) evaporate to third-party online vendors.',
      pillarTag: 'COMPOUND',
      tagColor: 'text-purple-400 border-purple-500/40 bg-purple-950/20',
    },
    {
      id: 9,
      category: 'retention',
      title: 'Isolated POS Data Silos',
      type: 'MARKET OBSERVATION',
      summary: 'Point-of-sale registers record serial numbers and cash totals, but retain zero customer context regarding upcoming company equipment plans.',
      implication: 'Institutional memory is tethered to individual salespeople; when a staff member resigns, client relationship history vanishes.',
      pillarTag: 'COMPOUND',
      tagColor: 'text-purple-400 border-purple-500/40 bg-purple-950/20',
    },
    {
      id: 10,
      category: 'retention',
      title: 'Ecosystem Lock-in Deficit',
      type: 'ILLUSTRATIVE RESEARCH',
      summary: 'Technology retailers that build dedicated student and creator communities experience 3.2x higher lifetime customer value.',
      implication: 'Commodity hardware sellers compete on fragile price margins; ecosystem hubs command durable customer loyalty.',
      pillarTag: 'COMPOUND',
      tagColor: 'text-purple-400 border-purple-500/40 bg-purple-950/20',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? evidenceItems
      : evidenceItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 space-y-12 animate-in fade-in duration-300">
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
          CREDIBILITY & INDUSTRY BENCHMARKING
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          THE PATTERN BEYOND RATIO CITY
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
          We didn't invent these scenarios. We went looking for the structural friction points that consistently cost retail and social commerce businesses their highest-value opportunities.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {evidenceCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-white text-black font-bold shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Evidence Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-5 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-all shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${item.tagColor}`}>
                  {item.pillarTag}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  {item.type}
                </span>
              </div>

              <h4 className="text-sm font-bold text-white leading-snug">
                {item.title}
              </h4>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-neutral-800/80 text-[11px] text-neutral-400 space-y-1">
              <span className="text-[9px] font-mono text-neutral-500 uppercase block">BUSINESS IMPLICATION</span>
              <p className="text-neutral-300 leading-tight">{item.implication}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Epilogue Statement */}
      <div className="p-6 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 text-center space-y-4 max-w-3xl mx-auto shadow-2xl">
        <blockquote className="text-lg sm:text-xl font-serif text-white italic">
          “We didn't invent these friction points.<br />
          These are the natural leakage zones when commerce assets operate in isolation.”
        </blockquote>
        <p className="text-xs text-neutral-400 font-mono">
          EVIDENCE REPOSITORY STRUCTURED FOR CONTINUOUS EMPIRICAL AUDITS
        </p>

        <div className="pt-4">
          <button
            onClick={onProceedToInfrastructure}
            className="px-8 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-bold text-sm inline-flex items-center gap-2 shadow-2xl transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Explore The 8 Capabilities of LEVERAI Infrastructure</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
