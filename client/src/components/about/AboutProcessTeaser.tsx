import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_DATA } from '@/data/aboutData';
import { ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const AboutProcessTeaser: React.FC = () => {
  const { processTeaser } = ABOUT_DATA;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{processTeaser.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {processTeaser.headline}
          </h2>
          <p className="text-slate-300 mt-2 text-base font-sans leading-relaxed">
            {processTeaser.description}
          </p>
        </div>

        <Link to={processTeaser.ctaRoute} className="mt-4 md:mt-0">
          <Button variant="secondary" size="md" className="group">
            <span>{processTeaser.ctaText}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* 6 Stage Orbital Teaser Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {processTeaser.stages.map((stage) => (
          <Card
            key={stage.step}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(32, 217, 243, 0.14)"
            className="p-5 sm:p-6 rounded-2xl bg-[#071426]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                  STAGE 0{stage.step}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:bg-cyan-300 group-hover:animate-ping" />
              </div>

              <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-cyan-200 transition-colors font-sans">
                {stage.name}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-sans font-normal">
                {stage.summary}
              </p>
            </div>

            <div className="mt-5 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-cyan-400/70">
              ORBIT SEQUENCE
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
