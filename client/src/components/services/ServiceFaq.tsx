import React, { useState } from 'react';
import { ServiceFaqItem } from '@/data/servicesData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ServiceFaqProps {
  serviceTitle: string;
  faqs: ServiceFaqItem[];
  accentColor: string;
}

export const ServiceFaq: React.FC<ServiceFaqProps> = ({
  serviceTitle,
  faqs,
  accentColor,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left Column: Context */}
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-400 uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>// FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Key Questions & Clarity
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            Technical parameters, delivery schedules, codebase ownership, and ongoing operational support for {serviceTitle}.
          </p>

          <div className="pt-4">
            <Card
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(32, 217, 243, 0.12)"
              className="p-5 rounded-2xl bg-[#070D18]/90 border-white/[0.08]"
            >
              <span className="text-xs font-mono text-amber-400 uppercase block mb-1">
                NEED BESPOKE ADVICE?
              </span>
              <p className="text-xs text-slate-300 mb-3 font-sans">
                Have specific technical parameters or enterprise compliance requirements?
              </p>
              <a
                href="/contact"
                className="text-xs font-mono font-bold text-amber-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Talk with an engineer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Card>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-8 space-y-3" role="region" aria-label={`FAQs for ${serviceTitle}`}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <Card
                key={idx}
                variant="default"
                spotlight={true}
                spotlightColor="rgba(32, 217, 243, 0.08)"
                className="rounded-2xl bg-[#070D18]/85 border-white/[0.08] hover:border-amber-500/30 overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none text-white font-bold text-base transition-colors font-sans"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                      style={{ color: isOpen ? accentColor : undefined }}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] font-sans"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;
