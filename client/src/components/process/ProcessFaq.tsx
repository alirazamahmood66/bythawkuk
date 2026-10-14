import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { PROCESS_DATA, ProcessFaqItem } from '@/data/processData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const ProcessFaq: React.FC = () => {
  const { faqs } = PROCESS_DATA;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Context */}
        <div className="lg:col-span-4 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>// FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Methodology & Delivery Clarity
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Common questions regarding how we initiate engagements, manage scope, collaborate with internal teams, and ensure post-launch stability.
          </p>

          <div className="pt-4">
            <Card
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(32, 217, 243, 0.1)"
              className="p-5"
            >
              <span className="text-xs font-mono text-cyan-400 uppercase block mb-1">
                NEED BESPOKE ADVICE?
              </span>
              <p className="text-xs text-slate-300 mb-3 font-light leading-relaxed">
                Have specific technical parameters or enterprise compliance requirements?
              </p>
              <a
                href="/contact"
                className="text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 hover:underline inline-flex items-center"
              >
                <span>Talk with an engineer &rarr;</span>
              </a>
            </Card>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-8 space-y-3" role="region" aria-label="Process and Methodology FAQs">
          {faqs.map((faq: ProcessFaqItem, idx: number) => {
            const isOpen = openIndex === idx;
            const buttonId = `process-faq-btn-${idx}`;
            const panelId = `process-faq-panel-${idx}`;

            return (
              <Card
                key={idx}
                variant="default"
                spotlight={true}
                withReticles={true}
                spotlightColor="rgba(32, 217, 243, 0.08)"
                className="overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-cyan-400/50 text-white font-medium text-base transition-colors"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.08] font-light"
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
