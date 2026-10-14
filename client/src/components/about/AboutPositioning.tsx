import React from 'react';
import { Compass, Palette, Cpu, TrendingUp } from 'lucide-react';
import { ABOUT_DATA } from '@/data/aboutData';
import { Card } from '@/components/ui/Card';

const iconMap = [Compass, Palette, Cpu, TrendingUp];

export const AboutPositioning: React.FC = () => {
  const { positioning } = ABOUT_DATA;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="max-w-4xl space-y-6 mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase">
          <span>// STRATEGIC POSITIONING</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          A Digital Technology Partner,{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">
            Not Just a Vendor.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-cyan-200/90 font-medium leading-relaxed font-sans">
          {positioning.lead}
        </p>

        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed pt-2 font-sans">
          {positioning.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* 4 Pillars Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {positioning.pillars.map((pillar, idx) => {
          const Icon = iconMap[idx] || Compass;
          const colors = ['#20d9f3', '#c084fc', '#38bdf8', '#10b981'];
          const accent = colors[idx % colors.length];

          return (
            <Card
              key={pillar.title}
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(32, 217, 243, 0.14)"
              className="p-7 rounded-2xl bg-[#071426]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header Phase Pill */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.06] text-[10px] font-mono">
                  <span className="text-cyan-400 font-semibold tracking-wider">
                    PHASE 0{idx + 1}
                  </span>
                  <span className="text-slate-400 uppercase">
                    {pillar.subtitle}
                  </span>
                </div>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                  style={{
                    backgroundColor: `${accent}18`,
                    border: `1px solid ${accent}40`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: accent }} />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-200 transition-colors font-sans">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-cyan-400/80">
                <span>VERIFIED DISCIPLINE</span>
                <span className="text-slate-400">&bull;</span>
                <span className="text-slate-300">BYTHAWK.UK</span>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
