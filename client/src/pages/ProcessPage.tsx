import React, { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import {
  ProcessHero,
  ProcessTimeline,
  CollaborationSection,
  EngagementTypes,
  ProcessFaq,
  ProcessCta,
} from '@/components/process';

import { applySeo } from '@/utils/seo';

export const ProcessPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Our Process | VTuber Design — Digital Technology Studio',
      description:
        'Discover VTuber Design’s 6-stage engineering and design methodology: from strategic discovery to zero-downtime orbital launch and long-term evolution.',
      path: '/process',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Our Process | VTuber Design Digital Technology Studio',
        description:
          'A structured, transparent engineering methodology turning business challenges into purposeful digital products and platforms.',
        url: 'https://vtuberdesign.co.au/process',
        provider: {
          '@type': 'Organization',
          name: 'VTUBER DESIGN',
          url: 'https://vtuberdesign.co.au',
        },
      },
    });
  }, []);

  return (
    <PageTransition>
      {/* Continuous Cosmic Scroll Atmosphere */}
      <CosmicScrollJourney />

      <div className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-amber-300">
        <Container>
          {/* Section 1: Hero */}
          <ProcessHero />

          {/* Section 2: 6-Stage Timeline */}
          <ProcessTimeline />

          {/* Section 3: Collaboration Principles */}
          <CollaborationSection />

          {/* Section 4: Engagement Types */}
          <EngagementTypes />

          {/* Section 5: Process FAQ */}
          <ProcessFaq />

          {/* Section 6: Conversion CTA */}
          <ProcessCta />
        </Container>
      </div>
    </PageTransition>
  );
};

export default ProcessPage;

