import React, { useEffect } from 'react';
import { PageTransition } from '@/components/transitions/PageTransition';
import { applySeo } from '@/utils/seo';
import {
  SolarSystemHeroSlider,
  TrustStripSection,
  FeaturedWorkSection,
  WhyBythawkSection,
  ProcessSection,
  TechnologySection,
  TestimonialsSection,
  InsightsHomeSection,
  FinalCtaSection,
} from '@/sections';

export const HomePage: React.FC = () => {
  useEffect(() => {
    return applySeo({
      title: 'Bythawk — Digital Technology Studio | Web, Apps, E-commerce & Growth',
      description:
        'Bythawk is a UK digital technology studio engineering high-performance websites, scalable web applications, conversion-focused e-commerce, mobile apps, digital marketing, SEO, and UI/UX design.',
      path: '/',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Bythawk',
        url: 'https://bythawk.uk',
        publisher: {
          '@type': 'Organization',
          name: 'BYTHAWK',
          url: 'https://bythawk.uk',
        },
      },
    });
  }, []);

  return (
    <PageTransition>
      {/* INTERACTIVE 3D SOLAR SYSTEM HERO SLIDER */}
      <SolarSystemHeroSlider />

      {/* REST OF HOMEPAGE FLOW */}
      <div id="studio-overview" className="relative z-10 bg-[#030712]">
        <TrustStripSection />
        <FeaturedWorkSection />
        <WhyBythawkSection />
        <ProcessSection />
        <TechnologySection />
        <TestimonialsSection />
        <InsightsHomeSection />
        <FinalCtaSection />
      </div>
    </PageTransition>
  );
};

export default HomePage;
