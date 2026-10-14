import React from 'react';
import { LegalSection } from '@/data/legalData';
import { ListFilter } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface LegalTableOfContentsProps {
  sections: LegalSection[];
}

export const LegalTableOfContents: React.FC<LegalTableOfContentsProps> = ({ sections }) => {
  return (
    <Card
      as="nav"
      aria-label="Table of Contents"
      variant="default"
      spotlight={true}
      withReticles={true}
      className="p-6 rounded-2xl bg-[#061F25]/90 border-white/[0.08] sticky top-24 space-y-3 shadow-xl"
    >
      <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider pb-2 border-b border-white/[0.06]">
        <ListFilter className="w-3.5 h-3.5" />
        <span>DOCUMENT OUTLINE</span>
      </div>

      <ol className="space-y-2 text-xs font-sans text-slate-300 pt-1" role="list">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="hover:text-cyan-400 transition-colors block py-0.5 leading-snug focus:outline-none focus:text-cyan-400"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </Card>
  );
};
