import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import { LegalDocument } from '@/data/legalData';
import { LegalHeader } from './LegalHeader';
import { LegalTableOfContents } from './LegalTableOfContents';
import { LegalSectionView } from './LegalSectionView';
import { MessageSquare, ArrowRight } from 'lucide-react';

interface LegalLayoutProps {
  document: LegalDocument;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ document }) => {
  return (
    <PageTransition>
      <CosmicScrollJourney />
      <article className="relative z-10 min-h-screen text-white selection:bg-cyan-500/20 selection:text-cyan-300">
        <Container>
          {/* Document Header */}
          <LegalHeader
            eyebrow={document.eyebrow}
            title={document.title}
            lastUpdated={document.lastUpdated}
            effectiveDate={document.effectiveDate}
            summary={document.summary}
          />

          {/* Main Document Body */}
          <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Content Column (approx 70-75ch width) */}
            <div className="lg:col-span-8 space-y-6">
              <Card
                variant="default"
                spotlight={true}
                withReticles={true}
                className="rounded-2xl bg-[#071426]/90 border-white/[0.08] p-6 sm:p-10 space-y-6 shadow-xl"
              >
                {document.sections.map((section) => (
                  <LegalSectionView key={section.id} section={section} />
                ))}
              </Card>

              {/* Inquiries Banner */}
              <Card
                variant="default"
                spotlight={true}
                withReticles={true}
                className="p-6 sm:p-8 rounded-2xl bg-[#071426]/90 border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                    LEGAL & DATA GOVERNANCE
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans">
                    Have questions regarding our policies or want to exercise your data rights?
                  </p>
                </div>
                <Link to="/contact">
                  <Button variant="secondary" size="sm" className="whitespace-nowrap flex items-center">
                    <MessageSquare className="w-3.5 h-3.5 mr-2 text-cyan-400" />
                    <span>Contact Governance</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </Link>
              </Card>
            </div>

            {/* Desktop Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4">
              <LegalTableOfContents sections={document.sections} />
            </aside>
          </div>
        </Container>
      </article>
    </PageTransition>
  );
};
