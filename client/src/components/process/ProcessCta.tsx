import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { PROCESS_DATA } from '@/data/processData';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ProcessCta: React.FC = () => {
  const { cta } = PROCESS_DATA;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 max-w-4xl mx-auto rounded-full opacity-15 blur-[100px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #D97706 50%, transparent 70%)' }}
      />

      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(32, 217, 243, 0.15)"
        className="relative z-10 max-w-4xl mx-auto text-center p-8 sm:p-12 shadow-2xl"
      >
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-4 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30">
          <Terminal className="w-3.5 h-3.5" />
          <span>{cta.eyebrow}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          {cta.headline}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          {cta.subheadline}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={cta.primaryButtonRoute}>
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center group shadow-lg shadow-amber-500/15"
            >
              <span>{cta.primaryButtonText}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link to={cta.secondaryButtonRoute}>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>{cta.secondaryButtonText}</span>
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span>• Phased Milestone Accountability</span>
          <span>• Direct Engineering Leads</span>
          <span>• Zero Vendor Lock-In</span>
        </div>
      </Card>
    </section>
  );
};
