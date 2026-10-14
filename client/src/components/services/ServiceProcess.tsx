import React from 'react';
import { ProcessStage } from '@/data/servicesData';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ServiceProcessProps {
  process: ProcessStage[];
  accentColor: string;
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({
  process,
  accentColor,
}) => {
  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
          <span>// DELIVERY METHODOLOGY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          6-Stage Engineering Trajectory
        </h2>
        <p className="text-slate-300 mt-3 text-base sm:text-lg leading-relaxed font-sans">
          A disciplined, transparent delivery framework designed to eliminate scope ambiguity, maintain velocity, and ensure predictable project success.
        </p>
      </div>

      {/* 6-Stage Timeline / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {process.map((stage) => (
          <Card
            key={stage.step}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(32, 217, 243, 0.12)"
            className="p-6 sm:p-7 rounded-2xl bg-[#061F25]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between relative group shadow-xl"
          >
            <div>
              {/* Header: Step Number & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-sm font-bold px-2.5 py-1 rounded-md border"
                  style={{
                    color: accentColor,
                    borderColor: `${accentColor}50`,
                    backgroundColor: `${accentColor}12`,
                  }}
                >
                  STAGE {stage.step}
                </span>
                <span className="text-xs font-mono text-space-muted">
                  PHASE {stage.step}/06
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-space-cyan transition-colors mb-2">
                {stage.name}
              </h3>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-space-muted leading-relaxed mb-5">
                {stage.summary}
              </p>

              {/* Activities list */}
              <div className="space-y-1.5 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-space-muted block mb-1">
                  CORE ACTIVITIES
                </span>
                {stage.activities.map((act, idx) => (
                  <div key={idx} className="flex items-start text-xs text-space-text/80">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverable Callout */}
            <div className="pt-4 border-t border-space-border/50">
              <span className="text-[10px] font-mono uppercase tracking-wider text-space-muted block mb-1">
                STAGE MILESTONE OUTPUT
              </span>
              <div className="flex items-center text-xs font-medium text-white">
                <CheckCircle
                  className="w-3.5 h-3.5 mr-1.5 flex-shrink-0"
                  style={{ color: accentColor }}
                />
                <span className="line-clamp-1">{stage.deliverable}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
