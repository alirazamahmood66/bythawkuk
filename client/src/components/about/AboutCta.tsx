import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_DATA } from '@/data/aboutData';
import { ArrowRight, Terminal, Compass, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const AboutCta: React.FC = () => {
  const { cta } = ABOUT_DATA;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 max-w-5xl mx-auto rounded-full opacity-25 blur-[120px] pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(32, 217, 243, 0.25) 0%, rgba(104, 175, 255, 0.15) 40%, rgba(139, 92, 246, 0.1) 70%, transparent 80%)',
        }}
      />

      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(32, 217, 243, 0.18)"
        className="relative z-10 max-w-4xl mx-auto text-center p-8 sm:p-14 lg:p-16 rounded-3xl bg-[#061F25]/90 border-cyan-500/30 backdrop-blur-xl shadow-2xl"
      >
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-300 uppercase mb-4 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{cta.eyebrow}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Build Something{' '}
          <span className="bg-gradient-to-r from-[#23F7DB] via-[#30F1BE] to-[#04A37B] bg-clip-text text-transparent">
            Worth Launching.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal font-sans">
          {cta.subheadline}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={cta.primaryButtonRoute}>
            <Button
              variant="special"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center group font-bold px-8 py-4"
              rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            >
              <span>{cta.primaryButtonText}</span>
            </Button>
          </Link>

          <Link to={cta.secondaryButtonRoute}>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-semibold px-7 py-4"
              rightIcon={<Compass className="w-4 h-4" />}
            >
              <span>{cta.secondaryButtonText}</span>
            </Button>
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="inline-flex items-center gap-1.5 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>UK Timezone Delivery</span>
          </span>
          <span>&bull;</span>
          <span>Direct Engineering Leadership</span>
          <span>&bull;</span>
          <span>100% Codebase Ownership</span>
        </div>
      </Card>
    </section>
  );
};
