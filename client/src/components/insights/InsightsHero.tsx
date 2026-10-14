import React from 'react';
import { Terminal, Sparkles } from 'lucide-react';

export const InsightsHero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-12 md:pt-14 md:pb-16 overflow-hidden border-b border-white/[0.08]">
      {/* Background ambient radial glow */}
      <div
        className="absolute top-0 right-1/4 w-[480px] h-[320px] rounded-full opacity-15 blur-[120px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, transparent 70%)' }}
      />

      {/* Subtle Concentric Orbital SVG Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="85%" cy="30%" r="140" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 6" fill="none" />
          <circle cx="85%" cy="30%" r="220" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 8" fill="none" />
          <circle cx="85%" cy="30%" r="4" fill="#06b6d4" />
          <line x1="10%" y1="70%" x2="40%" y2="85%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="10%" cy="70%" r="2.5" fill="#38bdf8" />
          <circle cx="40%" cy="85%" r="3" fill="#8b5cf6" />
        </svg>
      </div>

      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 shadow-sm backdrop-blur-sm">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono font-medium tracking-wider text-cyan-300 uppercase">
            BYTHAWK // INSIGHTS & EDITORIAL
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
          Ideas for Building <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Digital Worlds.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
          Perspectives on technology, product design, development, search, growth, and the digital experiences shaping modern businesses.
        </p>

        {/* Telemetry metadata indicators */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>FORMAT: EDITORIAL PREVIEW</span>
          </div>
          <span className="text-white/20">&bull;</span>
          <div className="flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AUTHOR: BYTHAWK EDITORIAL</span>
          </div>
          <span className="text-white/20">&bull;</span>
          <span>DISCIPLINES: 6 CORE AREAS</span>
        </div>
      </div>
    </section>
  );
};
