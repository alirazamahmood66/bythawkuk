import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SERVICES_DETAIL_DATA } from '@/data/servicesData';
import {
  Globe,
  Layout,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Search,
  Palette,
  Layers,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import { applySeo } from '@/utils/seo';

const iconMap = {
  Globe,
  Layout,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Search,
  Palette,
  Layers,
};

export const ServicesOverviewPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return applySeo({
      title: 'Digital Services | Bythawk',
      description:
        'Eight interconnected digital disciplines engineered with UK software craftsmanship. From web applications to user experience and technical search architecture.',
      path: '/services',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Digital Services | Bythawk',
        description:
          'Eight interconnected digital disciplines engineered with UK software craftsmanship.',
        url: 'https://bythawk.uk/services',
      },
    });
  }, []);

  const servicesList = Object.values(SERVICES_DETAIL_DATA);
  const { scrollYProgress } = useScroll();
  // PLANETARY AXIAL ROTATION & GRAVITATIONAL SLINGSHOT (No zoom - distinct orbital mechanics)
  const jupiterY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const europaAngle = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const shipY = useTransform(scrollYProgress, [0, 1], [120, -180]);
  const shipX = useTransform(scrollYProgress, [0, 1], [-40, 120]);
  const shipRotate = useTransform(scrollYProgress, [0, 1], [-25, 5]);

  return (
    <PageTransition>
      <CosmicScrollJourney />

      {/* 1. REAL NASA JUNO JUPITER WITH CONTINUOUS AXIAL SPIN (No Zoom) */}
      <motion.div
        className="fixed top-[8%] -right-16 sm:right-[2%] md:right-[5%] w-[320px] sm:w-[420px] md:w-[480px] aspect-square pointer-events-none select-none z-0"
        style={{
          y: jupiterY,
        }}
      >
        <div className="relative w-full h-full">
          {/* Continuous slow axial spin of Jupiter's cloud deck */}
          <motion.img
            src="/images/cosmic/jupiter_gas_giant.png"
            alt="Real NASA Juno photograph of planet Jupiter"
            className="w-full h-full object-contain filter drop-shadow-[0_0_65px_rgba(234,179,8,0.3)] opacity-90"
            loading="eager"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 200,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* 1B. ORBITING ICY OCEAN MOON EUROPA (Galileo Discovery) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] sm:w-[120px] aspect-square pointer-events-none"
            style={{
              x: useTransform(europaAngle, (deg) => Math.cos((deg * Math.PI) / 180) * 180),
              y: useTransform(europaAngle, (deg) => Math.sin((deg * Math.PI) / 180) * 80),
            }}
          >
            <img
              src="/images/cosmic/europa_moon.png"
              alt="NASA Galileo Europa icy ocean moon"
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 2. FLEET ESCORT STARSHIP (Gravitational Slingshot Trajectory) */}
      <motion.div
        className="fixed bottom-[8%] -left-10 sm:left-[2%] md:left-[5%] w-[260px] sm:w-[340px] aspect-square pointer-events-none select-none z-0"
        style={{
          y: shipY,
          x: shipX,
          rotate: shipRotate,
        }}
      >
        <img
          src="/images/cosmic/bythawk_recon_spaceship.png"
          alt="Bythawk tactical starship in gravitational slingshot"
          className="w-full h-full object-contain filter drop-shadow-[0_0_55px_rgba(245, 158, 11, 0.7)] opacity-95"
          loading="lazy"
        />
      </motion.div>

      <div className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-amber-300 py-12 md:py-20">
        <Container>
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-xs font-mono text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BYTHAWK // SERVICE CAPABILITIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The Digital Engineering Universe
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Eight interconnected digital disciplines engineered with UK software craftsmanship. From mission-critical cloud platforms to research-backed user experiences and technical search architectures.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, idx) => {
              const Icon = iconMap[service.iconName] || Globe;

              return (
                <Card
                  key={service.slug}
                  variant="default"
                  spotlight={true}
                  withReticles={true}
                  spotlightColor="rgba(245, 158, 11, 0.14)"
                  className="p-8 rounded-2xl bg-[#0B0C10]/90 border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
                >
                  {/* Subtle top border accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60 transition-all duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: service.accentColor }}
                  />

                  <div>
                    {/* Header Phase / Category Pill */}
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#FFFBEB]/[0.06] text-[10px] font-mono">
                      <span className="text-[#F59E0B] font-semibold tracking-wider">
                        DISCIPLINE 0{idx + 1}
                      </span>
                      <span className="text-[#FBBF24] uppercase px-2 py-0.5 rounded bg-[#EA580C]/20 border border-[#D97706]/30">
                        {service.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm shrink-0"
                        style={{
                          backgroundColor: `${service.accentColor}18`,
                          border: `1px solid ${service.accentColor}40`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: service.accentColor }} />
                      </div>

                      <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-amber-200 transition-colors">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                      {service.introduction}
                    </p>

                    {/* Capabilities Preview */}
                    <div className="space-y-1.5 mb-8">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        CORE CAPABILITIES
                      </span>
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <div key={cap.id} className="flex items-center text-xs text-slate-300">
                          <span
                            className="w-1.5 h-1.5 rounded-full mr-2"
                            style={{ backgroundColor: service.accentColor }}
                          />
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">
                      {service.metaBadges[0]?.value || '4-12 Weeks'}
                    </span>

                    <Link to={`/services/${service.slug}`}>
                      <Button variant="ghost" size="sm" className="group-hover:text-amber-300">
                        <span>View Specification</span>
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA Card with Spotlight & Reticles */}
          <Card
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(245, 158, 11, 0.15)"
            className="mt-20 p-8 sm:p-12 text-center space-y-4 shadow-2xl"
          >
            <span className="text-xs font-mono tracking-wider text-amber-400 uppercase block mb-1">
              // CUSTOM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Need a Custom Multi-Disciplinary Digital Solution?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
              Most of our client engagements span multiple services. We will architect a tailored mission team for your specific roadmap.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <Button variant="primary" size="md">
                  <span>Start a Project Consultation</span>
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </div>
    </PageTransition>
  );
};
