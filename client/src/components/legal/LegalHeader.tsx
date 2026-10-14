import React from 'react';
import { ShieldCheck, Calendar, Clock } from 'lucide-react';

interface LegalHeaderProps {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  effectiveDate: string;
  summary: string;
}

export const LegalHeader: React.FC<LegalHeaderProps> = ({
  eyebrow,
  title,
  lastUpdated,
  effectiveDate,
  summary,
}) => {
  return (
    <header className="pt-8 pb-10 md:pt-14 md:pb-12 border-b border-white/[0.08]">
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 shadow-sm backdrop-blur-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-mono font-medium tracking-wider text-amber-300 uppercase">
            {eyebrow}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl font-sans">
          {summary}
        </p>

        {/* Governance metadata */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>EFFECTIVE: {effectiveDate}</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center space-x-2">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>LAST REVIEWED: {lastUpdated}</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center space-x-1.5 text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>JURISDICTION: ENGLAND & WALES</span>
          </div>
        </div>
      </div>
    </header>
  );
};
