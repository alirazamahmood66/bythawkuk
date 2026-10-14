import React from 'react';
import { ServiceBenefit } from '@/data/servicesData';
import { ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ServiceBenefitsProps {
  serviceTitle: string;
  benefits: ServiceBenefit[];
  accentColor: string;
}

export const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({
  serviceTitle,
  benefits,
  accentColor,
}) => {
  return (
    <section className="py-16 md:py-20 border-b border-white/[0.08]">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
          <span>// STRATEGIC ADVANTAGE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Why Bythawk for {serviceTitle}
        </h2>
        <p className="text-slate-300 mt-3 text-base leading-relaxed font-sans">
          We bring senior technical rigor, commercial alignment, and meticulous engineering craft to every engagement.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, idx) => (
          <Card
            key={idx}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(245, 158, 11, 0.14)"
            className="p-7 rounded-2xl bg-[#0B0C10]/90 border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 relative group shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <div
                className="p-2.5 rounded-xl mt-0.5 shrink-0 transition-transform group-hover:scale-105 shadow-md"
                style={{
                  backgroundColor: `${accentColor}18`,
                  color: accentColor,
                  border: `1px solid ${accentColor}40`,
                }}
              >
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-amber-200 transition-colors font-sans">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed font-sans font-normal">
                  {benefit.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
