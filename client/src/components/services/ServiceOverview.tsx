import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ServiceOverviewProps {
  strategicHeadline: string;
  paragraphs: string[];
  corePillars: {
    title: string;
    description: string;
  }[];
  accentColor: string;
}

export const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  strategicHeadline,
  paragraphs,
  corePillars,
  accentColor,
}) => {
  return (
    <section className="py-16 md:py-20 border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Narrative Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase">
            <span>// STRATEGIC IMPERATIVE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {strategicHeadline}
          </h2>

          <div className="space-y-4 text-slate-300 text-base leading-relaxed font-sans">
            {paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* Right Pillars Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
            // ARCHITECTURAL FOUNDATIONS
          </div>

          {corePillars.map((pillar, idx) => (
            <Card
              key={idx}
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(32, 217, 243, 0.12)"
              className="p-5 sm:p-6 rounded-2xl bg-[#061F25]/90 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 relative group shadow-md"
            >
              <div className="flex items-start space-x-3.5">
                <div
                  className="mt-0.5 p-1.5 rounded-lg shrink-0"
                  style={{
                    backgroundColor: `${accentColor}18`,
                    color: accentColor,
                    border: `1px solid ${accentColor}40`,
                  }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors font-sans">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-sans font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
