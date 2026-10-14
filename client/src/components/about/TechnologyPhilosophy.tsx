import React from 'react';
import { ABOUT_DATA } from '@/data/aboutData';
import { Globe, Cpu, Zap, Shield, Maximize2, Layers, CheckCircle2, Radio, Terminal } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const icons = [Zap, Shield, Maximize2, Layers, Cpu, Globe];

export const TechnologyPhilosophy: React.FC = () => {
  const { technologyPhilosophy, ukPositioning } = ABOUT_DATA;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      {/* 1. Technology Philosophy */}
      <div className="max-w-4xl space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase">
          <Terminal className="w-3.5 h-3.5" />
          <span>// ENGINEERING ETHOS</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Technology Should Disappear{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">
            Into the Experience.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl font-sans">
          {technologyPhilosophy.lead}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {technologyPhilosophy.principles.map((principle, idx) => {
          const Icon = icons[idx % icons.length];

          return (
            <Card
              key={principle.title}
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(32, 217, 243, 0.12)"
              className="p-7 rounded-2xl bg-[#061F25]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.06] text-[10px] font-mono">
                  <span className="text-cyan-400 font-semibold tracking-wider">
                    LAW 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ENFORCED</span>
                  </div>
                </div>

                <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-300 shadow-md">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-200 transition-colors font-sans">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-sans">
                  {principle.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>CORE DIRECTIVE</span>
                <span className="text-cyan-400">&bull; ACTIVE</span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* 2. UK / London Presence Banner */}
      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(32, 217, 243, 0.16)"
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#061F25] via-[#091a33] to-[#061F25] border-cyan-500/30 shadow-2xl relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 font-semibold shadow-sm">
                <Globe className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span>{ukPositioning.location}</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>UK REGISTERED HQ</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
              {ukPositioning.headline}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal font-sans">
              {ukPositioning.description}
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="p-6 rounded-2xl bg-black/50 border border-cyan-500/30 backdrop-blur-xl text-center space-y-2 shadow-xl">
              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400 uppercase">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>OPERATIONAL TIMEZONE</span>
              </div>
              <div className="text-lg font-mono font-bold text-white tracking-tight">
                GMT / BST (UK Time)
              </div>
              <div className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded">
                REAL-TIME SENIOR COLLABORATION
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
