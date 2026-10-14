import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface WorkCtaProps {
  title?: string;
  subtitle?: string;
}

export const WorkCta: React.FC<WorkCtaProps> = ({
  title = "HAVE A PROJECT IN MIND? LET'S BUILD IT.",
  subtitle = 'Whether architecting a complex web platform, scaling a headless commerce storefront, or engineering a cross-platform mobile utility, our London engineering leads are ready.',
}) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 max-w-4xl mx-auto rounded-full opacity-15 blur-[100px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #23F7DB 0%, #04A37B 50%, transparent 70%)' }}
      />

      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(32, 217, 243, 0.15)"
        className="relative z-10 max-w-4xl mx-auto text-center p-8 sm:p-12 shadow-2xl"
      >
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-4 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30">
          <Terminal className="w-3.5 h-3.5" />
          <span>INITIATE PARTNERSHIP // LONDON • UK</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center group shadow-lg shadow-cyan-500/15"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link to="/services">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>Explore Services</span>
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span>• Fixed Milestone Delivery</span>
          <span>• Senior UK Engineers</span>
          <span>• 100% Codebase Ownership</span>
        </div>
      </Card>
    </section>
  );
};
