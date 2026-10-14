import React from 'react';
import { ABOUT_DATA } from '@/data/aboutData';
import { ShieldCheck, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const PhilosophySection: React.FC = () => {
  const { philosophy, differences } = ABOUT_DATA;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      {/* 1. Guiding Philosophy */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{philosophy.sectionEyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {philosophy.sectionTitle}
        </h2>
        <p className="text-slate-300 mt-3 text-base sm:text-lg leading-relaxed font-sans">
          {philosophy.sectionDescription}
        </p>
      </div>

      <div className="space-y-4 mb-24">
        {philosophy.principles.map((principle) => (
          <Card
            key={principle.number}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(32, 217, 243, 0.12)"
            className="p-6 sm:p-8 rounded-2xl bg-[#061F25]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/40 flex items-center justify-center font-mono text-xl font-extrabold text-cyan-300 shadow-md shadow-cyan-950/50 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                  {principle.number}
                </div>
                <div className="hidden sm:block text-[10px] font-mono text-slate-400 tracking-wider">
                  DIRECTIVE
                </div>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors font-sans">
                  {principle.title}
                </h3>
                <span className="inline-block text-[11px] font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-2 py-0.5 rounded mt-2 uppercase tracking-wide">
                  {principle.summary}
                </span>
              </div>

              <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 md:pl-6">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal font-sans">
                  {principle.detail}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 2. What Makes Bythawk Different */}
      <div className="pt-8 border-t border-white/[0.08]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{differences.sectionEyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {differences.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differences.items.map((diff, idx) => (
            <Card
              key={idx}
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(32, 217, 243, 0.14)"
              className="p-7 sm:p-8 rounded-2xl bg-[#061F25]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.06]">
                  <span className="text-[11px] font-mono tracking-wider text-cyan-300 uppercase px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30">
                    {diff.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline">VERIFIED</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-200 transition-colors font-sans">
                  {diff.title}
                </h3>

                <p className="text-sm font-semibold text-cyan-300/90 mb-3 font-sans">
                  {diff.summary}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-sans">
                  {diff.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SYSTEM DIFFERENTIAL 0{idx + 1}</span>
                <span className="text-cyan-400 font-semibold">&bull; ENFORCED</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
