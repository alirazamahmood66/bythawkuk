import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ServiceCtaProps {
  serviceTitle: string;
  accentColor: string;
}

export const ServiceCta: React.FC<ServiceCtaProps> = ({
  serviceTitle,
  accentColor,
}) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 max-w-4xl mx-auto rounded-full opacity-20 blur-[120px] pointer-events-none -z-10"
        style={{ background: `radial-gradient(circle, ${accentColor} 0%, rgba(3, 7, 18, 0) 70%)` }}
      />

      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(245, 158, 11, 0.18)"
        className="relative z-10 max-w-4xl mx-auto text-center p-8 sm:p-14 rounded-3xl bg-[#0B0C10]/90 border-amber-500/30 backdrop-blur-xl shadow-2xl"
      >
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-300 uppercase mb-4 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 shadow-md">
          <Terminal className="w-3.5 h-3.5 text-amber-400" />
          <span>INITIATE MISSION // {serviceTitle.toUpperCase()}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Engineer Your{' '}
          <span className="bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">
            Next Milestone?
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal font-sans">
          Schedule a technical discovery session with our London engineering leadership. We will evaluate your architecture, velocity, and commercial targets.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button
              variant="special"
              size="lg"
              className="w-full sm:w-auto font-bold px-8 py-4"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              <span>Schedule Discovery Session</span>
            </Button>
          </Link>

          <Link to="/work">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-semibold px-7 py-4"
              rightIcon={<Compass className="w-4 h-4" />}
            >
              <span>Explore Agency Work</span>
            </Button>
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="inline-flex items-center gap-1.5 text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>UK Timezone Delivery</span>
          </span>
          <span>&bull;</span>
          <span>Direct Engineering Leads</span>
          <span>&bull;</span>
          <span>100% Codebase Ownership</span>
        </div>
      </Card>
    </section>
  );
};

export default ServiceCta;
