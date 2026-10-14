import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import {
  AboutHero,
  AboutPositioning,
  PhilosophySection,
  TechnologyPhilosophy,
  AboutCta,
} from '@/components/about';
import { ArrowRight } from 'lucide-react';

import { applySeo } from '@/utils/seo';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'About Bythawk | Digital Technology Studio',
      description:
        'Bythawk is a UK digital technology studio uniting commercial strategy, human-centered design, and resilient software engineering for ambitious organizations.',
      path: '/about',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Bythawk | Digital Technology Studio',
        description:
          'Bythawk is a UK digital technology studio uniting commercial strategy, human-centered design, and resilient software engineering.',
        url: 'https://bythawk.uk/about',
        mainEntity: {
          '@type': 'Organization',
          name: 'BYTHAWK',
          url: 'https://bythawk.uk',
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'United Kingdom',
          },
        },
      },
    });
  }, []);

  const { scrollYProgress } = useScroll();
  // GYROSCOPIC ATTITUDE & ORBITAL PASS (No zoom - distinct mechanical motion)
  const stationY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const stationX = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const stationRotate = useTransform(scrollYProgress, [0, 1], [-14, 18]);

  return (
    <PageTransition>
      {/* Continuous Cosmic Scroll Atmosphere */}
      <CosmicScrollJourney />

      {/* BESPOKE ORBITAL ENGINEERING SHIPYARD & SPACE STATION (Unique to About Page - Gyroscopic Roll/Yaw) */}
      <motion.div
        className="fixed top-[10%] -right-16 sm:right-[1%] md:right-[3%] w-[380px] sm:w-[480px] md:w-[560px] lg:w-[620px] aspect-square pointer-events-none select-none z-0"
        style={{
          y: stationY,
          x: stationX,
          rotate: stationRotate,
        }}
      >
        <div className="relative w-full h-full">
          <img
            src="/images/cosmic/orbital_shipyard_station.png"
            alt="Bythawk orbital engineering shipyard and space station"
            className="w-full h-full object-contain filter drop-shadow-[0_0_65px_rgba(32,217,243,0.55)] opacity-90"
            loading="eager"
          />
        </div>
      </motion.div>

      <div className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-cyan-300">
        <Container>
          {/* Section 1: Hero */}
          <AboutHero />

          {/* Section 2: Positioning (Strategy + Design + Technology + Growth) */}
          <AboutPositioning />

          {/* Section 3: Principles & Differentiators */}
          <PhilosophySection />

          {/* Section 4: Studio Discipline & Sequence Navigation Bridge */}
          <section className="py-12 border-b border-white/[0.08]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                variant="interactive"
                spotlight={true}
                withReticles={true}
                className="p-8 rounded-2xl bg-[#071426]/90 border-white/[0.08] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                    // 8 INTEGRATED DISCIPLINES
                  </span>
                  <h3 className="text-2xl font-bold text-white font-sans">
                    The Services Ecosystem
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    Explore our 8 core disciplines across web engineering, SaaS web applications, mobile platforms, and UI/UX design.
                  </p>
                </div>
                <div className="pt-6">
                  <Link to="/services" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase">
                    <span>Explore All Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>

              <Card
                variant="interactive"
                spotlight={true}
                withReticles={true}
                className="p-8 rounded-2xl bg-[#071426]/90 border-white/[0.08] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                    // BATTLE-TESTED CADENCE
                  </span>
                  <h3 className="text-2xl font-bold text-white font-sans">
                    The 6-Stage Launch Sequence
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    From architectural discovery and interface craft to automated verification and zero-downtime deployment.
                  </p>
                </div>
                <div className="pt-6">
                  <Link to="/process" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase">
                    <span>Review Launch Sequence</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            </div>
          </section>

          {/* Section 5: Technology Philosophy & UK Location Statement */}
          <TechnologyPhilosophy />

          {/* Section 6: Conversion CTA */}
          <AboutCta />
        </Container>
      </div>
    </PageTransition>
  );
};

export default AboutPage;

