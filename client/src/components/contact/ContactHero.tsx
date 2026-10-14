import React from 'react';
import { Terminal } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 overflow-hidden border-b border-white/[0.08]">
      {/* Background ambient radial glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full opacity-15 blur-[120px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #D97706 50%, transparent 70%)' }}
      />

      {/* Decorative Constellation Vectors */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="15%" y1="25%" x2="45%" y2="40%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="45%" y1="40%" x2="75%" y2="20%" stroke="#FBBF24" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="45%" y1="40%" x2="55%" y2="80%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="15%" cy="25%" r="3" fill="#06b6d4" />
          <circle cx="45%" cy="40%" r="4" fill="#38bdf8" />
          <circle cx="75%" cy="20%" r="3" fill="#FBBF24" />
          <circle cx="55%" cy="80%" r="3" fill="#10b981" />
        </svg>
      </div>

      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 shadow-sm backdrop-blur-sm">
          <Terminal className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-mono font-medium tracking-wider text-amber-300 uppercase">
            BYTHAWK // START A PROJECT
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
          Let's Build Something Useful.
        </h1>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl font-sans">
          Tell us what you are building, improving, or trying to solve. We review every submission to evaluate project requirements, technical scope, and the most pragmatic next step.
        </p>
      </div>

      {/* Trust & Reassurance Badges */}
      <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'COLLABORATION', value: 'Direct Technical Dialogue' },
          { label: 'EVALUATION', value: 'Structured Review Process' },
          { label: 'ARCHITECTURE', value: 'Clean Modern Standards' },
          { label: 'CONFIDENTIALITY', value: 'Confidential Discovery' },
        ].map((item, idx) => (
          <Card
            key={idx}
            variant="default"
            spotlight={true}
            withReticles={true}
            className="p-4 rounded-xl bg-[#0B0C10]/90 border-white/[0.08] shadow-sm"
          >
            <div className="text-[11px] font-mono tracking-wider text-amber-400 uppercase font-semibold">
              {item.label}
            </div>
            <div className="text-sm font-bold text-white mt-1 font-sans">
              {item.value}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
