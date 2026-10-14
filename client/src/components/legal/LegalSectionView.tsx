import React from 'react';
import { LegalSection } from '@/data/legalData';

interface LegalSectionViewProps {
  section: LegalSection;
}

export const LegalSectionView: React.FC<LegalSectionViewProps> = ({ section }) => {
  return (
    <section id={section.id} className="scroll-mt-28 space-y-4 pt-6 border-b border-white/[0.08] pb-8 last:border-b-0">
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
        {section.title}
      </h2>

      {section.paragraphs.map((p, idx) => (
        <p key={idx} className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-normal">
          {p}
        </p>
      ))}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="space-y-2.5 pt-2 pl-1" role="list">
          {section.bullets.map((b, bIdx) => (
            <li key={bIdx} className="flex items-start space-x-3 text-sm text-slate-200 leading-relaxed font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
