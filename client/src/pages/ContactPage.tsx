import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import {
  ContactHero,
  ProjectForm,
  WhatHappensNext,
  ContactAlternative,
  ContactFaq,
} from '@/components/contact';

import { applySeo } from '@/utils/seo';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Contact Bythawk | Start a Digital Project',
      description:
        'Start your digital project with Bythawk. Discuss web applications, platforms, e-commerce, and digital engineering with our team.',
      path: '/contact',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Bythawk | Start a Digital Project',
        description:
          'Start your digital project with Bythawk. Discuss web applications, platforms, e-commerce, and digital engineering with our team.',
        url: 'https://bythawk.uk/contact',
        mainEntity: {
          '@type': 'Organization',
          name: 'BYTHAWK',
          url: 'https://bythawk.uk',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'London',
            addressCountry: 'GB',
          },
        },
      },
    });
  }, []);

  const { scrollYProgress } = useScroll();
  // AZIMUTH & ELEVATION TRACKING (No zoom - mechanical parabolic alignment)
  const dishY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const dishRotate = useTransform(scrollYProgress, [0, 1], [-8, 20]);

  return (
    <PageTransition>
      <CosmicScrollJourney />

      {/* BESPOKE QUANTUM UPLINK TRANSMISSION ARRAY (Azimuth Scanning Alignment & Radio Pulse Waves) */}
      <motion.div
        className="fixed top-[6%] -right-12 sm:right-[2%] md:right-[5%] w-[320px] sm:w-[420px] md:w-[480px] aspect-square pointer-events-none select-none z-0"
        style={{
          y: dishY,
          rotate: dishRotate,
        }}
      >
        <div className="relative w-full h-full">
          {/* Concentric Parabolic Signal Radiation Waves */}
          <div className="absolute top-[35%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-amber-400/30 animate-ping opacity-30 pointer-events-none" />
          <div className="absolute top-[35%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cyan-300/40 animate-pulse opacity-40 pointer-events-none" />

          <img
            src="/images/cosmic/telemetry_satellite.png"
            alt="Telemetry satellite uplink"
            className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(245, 158, 11, 0.7)] opacity-95"
            style={{ mixBlendMode: 'screen' }}
            loading="eager"
          />
        </div>
      </motion.div>

      <article className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-amber-300">
        <Container>
          {/* Section 1: Hero */}
          <ContactHero />

          {/* Section 2: Interactive Project Enquiry Form */}
          <div id="project-form-section" className="py-12 md:py-16">
            <ProjectForm />
          </div>

          {/* Section 3: What Happens Next Protocol */}
          <WhatHappensNext />

          {/* Section 4: Direct Channels & Operational Protocols */}
          <ContactAlternative />

          {/* Section 5: FAQs */}
          <ContactFaq />
        </Container>
      </article>
    </PageTransition>
  );
};
