import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const InsightsCta: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-white/[0.08]">
      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(245, 158, 11, 0.15)"
        className="p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl"
      >
        {/* Subtle radial glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, #D97706 60%, transparent 80%)' }}
        />

        <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-400 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// COMMENCE DIALOGUE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Have something worth building?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Let's turn the next idea into a digital product, platform, or experience built for what comes next.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg" className="flex items-center group shadow-lg shadow-amber-500/20">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to="/work">
              <Button variant="secondary" size="lg">
                <span>Explore Agency Work</span>
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
};
