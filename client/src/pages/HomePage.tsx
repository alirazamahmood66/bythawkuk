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
      title: 'VTuber Design — Digital Technology Studio | Web, Apps, E-commerce & Growth',
      description:
        'VTuber Design is an Australian digital technology studio engineering high-performance websites, scalable web applications, conversion-focused e-commerce, mobile apps, digital marketing, SEO, and UI/UX design.',
      path: '/',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'VTuber Design',
        url: 'https://vtuberdesign.co.au',
        publisher: {
          '@type': 'Organization',
          name: 'VTUBER DESIGN',
          url: 'https://vtuberdesign.co.au',
        },
      },
    });
  }, []);

  return (
    <PageTransition>
      {/* INTERACTIVE 3D SOLAR SYSTEM HERO SLIDER */}
      <SolarSystemHeroSlider />

      {/* REST OF HOMEPAGE FLOW */}
      <div id="studio-overview" className="relative z-10 bg-[#040407]">
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
