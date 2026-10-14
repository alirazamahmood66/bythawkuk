import React from 'react';
import { Sparkles, ShieldCheck, Cpu, Gauge, Lock } from 'lucide-react';
import { ABOUT_DATA } from '@/data/aboutData';
import { Card } from '@/components/ui/Card';

const chipIcons = [ShieldCheck, Lock, Gauge, Cpu];

export const AboutHero: React.FC = () => {
  const { hero } = ABOUT_DATA;

  return (
    <section className="relative pt-12 pb-16 md:pt-18 md:pb-24 overflow-hidden border-b border-white/[0.08]">
      {/* Background ambient radial glow */}
      <div
        className="absolute top-0 right-1/4 w-[650px] h-[400px] rounded-full opacity-25 blur-[140px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #20d9f3 0%, #68afff 40%, #8b5cf6 70%, transparent 80%)' }}
      />

      <div className="max-w-4xl space-y-6">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 shadow-lg shadow-cyan-950/50 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-wider text-cyan-300 uppercase">
            {hero.eyebrow}
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          We Build Digital Worlds{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">
            With Purpose.
          </span>
        </h1>

        {/* Subheadline narrative */}
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
          {hero.subheadline}
        </p>
      </div>

      {/* Highlights / Grounded Stat Chips */}
      <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {hero.chips.map((chip, idx) => {
          const Icon = chipIcons[idx % chipIcons.length];
          return (
            <Card
              key={idx}
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(32, 217, 243, 0.12)"
              className="p-4 sm:p-5 rounded-xl bg-[#071426]/85 border-white/[0.08] hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                  {chip.label}
                </span>
                <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                {chip.value}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
