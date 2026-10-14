import React from 'react';
import { Sparkles } from 'lucide-react';
import { PROCESS_DATA } from '@/data/processData';
import { Card } from '@/components/ui/Card';

export const ProcessHero: React.FC = () => {
  const { hero } = PROCESS_DATA;

  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 overflow-hidden border-b border-white/[0.08]">
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full opacity-15 blur-[120px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #D97706 50%, transparent 70%)' }}
      />

      {/* Decorative Constellation / Trajectory Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="30%" x2="35%" y2="20%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="35%" y1="20%" x2="65%" y2="40%" stroke="#FBBF24" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="65%" y1="40%" x2="90%" y2="25%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="10%" cy="30%" r="3" fill="#06b6d4" />
          <circle cx="35%" cy="20%" r="4" fill="#38bdf8" />
          <circle cx="65%" cy="40%" r="4" fill="#FBBF24" />
          <circle cx="90%" cy="25%" r="3" fill="#10b981" />
        </svg>
      </div>

      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-mono font-medium tracking-wider text-amber-300 uppercase">
            {hero.eyebrow}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
          {hero.headline}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl font-sans">
          {hero.subheadline}
        </p>
      </div>

      {/* Highlights / Badges */}
      <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4">
        {hero.highlights.map((h, idx) => (
          <Card
            key={idx}
            variant="default"
            spotlight={true}
            withReticles={true}
            className="p-4 rounded-xl bg-[#0B0C10]/90 border-white/[0.08] shadow-sm"
          >
            <div className="text-[11px] font-mono tracking-wider text-amber-400 uppercase font-semibold">
              {h.label}
            </div>
            <div className="text-sm font-bold text-white mt-1 font-sans">
              {h.value}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
