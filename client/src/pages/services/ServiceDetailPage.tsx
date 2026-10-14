import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVICES_DETAIL_DATA } from '@/data/servicesData';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  ServiceBreadcrumbs,
  ServiceHero,
  ServiceOverview,
  ServiceCapabilities,
  ServiceDeliverables,
  ServiceProcess,
  ServiceTechnology,
  ServiceBenefits,
  ServiceFaq,
  RelatedServices,
  ServiceCta,
} from '@/components/services';
import { ArrowLeft, Compass, ArrowRight } from 'lucide-react';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import { applySeo } from '@/utils/seo';

// Dedicated celestial archetype mapping per service discipline (All 100% NASA transparent photography)
const SERVICE_CELESTIAL_MAP: Record<string, {
  image: string;
  alt: string;
  glow: string;
  size: string;
  badge: string;
  animationType: 'pulsar-spin' | 'storm-yaw' | 'mars-drift' | 'methane-shear' | 'crystal-tumble' | 'venus-spin' | 'dish-sweep' | 'ring-tilt';
}> = {
  'web-development': {
    image: '/images/cosmic/pulsar_energy_core.png',
    alt: 'NASA Crab Nebula binary pulsar energy core',
    glow: 'rgba(32, 217, 243, 0.65)',
    size: 'w-[320px] sm:w-[420px] md:w-[480px]',
    badge: 'PULSAR EMISSION CORE // 30 REV/SEC',
    animationType: 'pulsar-spin',
  },
  'web-applications': {
    image: '/images/cosmic/jupiter_gas_giant.png',
    alt: 'NASA Juno photograph of Jupiter gas giant',
    glow: 'rgba(234, 179, 8, 0.4)',
    size: 'w-[280px] sm:w-[380px] md:w-[440px]',
    badge: 'JUNO TELEMETRY // AMMONIA CYCLONE BELTS',
    animationType: 'storm-yaw',
  },
  'ecommerce': {
    image: '/images/cosmic/mars_red_planet.png',
    alt: 'NASA Viking photograph of Mars red planet',
    glow: 'rgba(239, 68, 68, 0.55)',
    size: 'w-[280px] sm:w-[380px] md:w-[440px]',
    badge: 'VIKING MOSAIC // VALLES MARINERIS',
    animationType: 'mars-drift',
  },
  'mobile-app-development': {
    image: '/images/cosmic/neptune_ice_giant.png',
    alt: 'NASA Voyager 2 photograph of Neptune ice giant',
    glow: 'rgba(56, 189, 248, 0.45)',
    size: 'w-[280px] sm:w-[380px] md:w-[440px]',
    badge: 'VOYAGER 2 FLYBY // SUPERSONIC METHANE JETS',
    animationType: 'methane-shear',
  },
  'ui-ux-design': {
    image: '/images/cosmic/crystalline_prism_asteroid.png',
    alt: 'Hubble Carina Nebula cosmic pillar crystalline asteroid',
    glow: 'rgba(168, 85, 247, 0.6)',
    size: 'w-[300px] sm:w-[400px] md:w-[460px]',
    badge: 'HUBBLE CARINA // CRYSTALLINE REFRACTION',
    animationType: 'crystal-tumble',
  },
  'graphic-design': {
    image: '/images/cosmic/venus_planet.png',
    alt: 'NASA Magellan radar topography of planet Venus',
    glow: 'rgba(251, 146, 60, 0.5)',
    size: 'w-[280px] sm:w-[380px] md:w-[440px]',
    badge: 'MAGELLAN RADAR // SULFURIC CLOUD CRUST',
    animationType: 'venus-spin',
  },
  'digital-marketing': {
    image: '/images/cosmic/quantum_uplink_dish.png',
    alt: 'NASA Goldstone Deep Space Network 70m antenna dish',
    glow: 'rgba(32, 217, 243, 0.6)',
    size: 'w-[300px] sm:w-[380px] md:w-[420px]',
    badge: 'DSN GOLDSTONE // CARRIER UPLINK ACTIVE',
    animationType: 'dish-sweep',
  },
  'seo': {
    image: '/images/cosmic/saturn_ringed_planet.png',
    alt: 'NASA Cassini photograph of Saturn ringed planet',
    glow: 'rgba(250, 204, 21, 0.45)',
    size: 'w-[320px] sm:w-[420px] md:w-[480px]',
    badge: 'CASSINI SOLSTICE // RING PLANE PRECESSION',
    animationType: 'ring-tilt',
  },
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Determine active service from route param
  const service = slug ? SERVICES_DETAIL_DATA[slug] : undefined;

  // Scroll to top on mount or when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Update dynamic document title, canonical, and meta description for SEO
  useEffect(() => {
    if (!service) {
      return applySeo({
        title: 'Service Not Found | Bythawk',
        description: 'The requested service specification could not be located.',
        path: `/services/${slug || ''}`,
        robots: 'noindex, nofollow',
      });
    }

    return applySeo({
      title: `${service.title} | Bythawk`,
      description: service.seoDescription,
      path: `/services/${service.slug}`,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.seoDescription,
        provider: {
          '@type': 'Organization',
          name: 'BYTHAWK',
          url: 'https://bythawk.uk',
        },
      },
    });
  }, [service, slug]);

  // Handle case where service slug does not exist in dataset
  if (!service) {
    return (
      <main className="min-h-screen bg-[#001119] text-[#E8FFFC] flex items-center justify-center py-24">
        <Container className="text-center">
          <Card
            variant="default"
            spotlight={true}
            withReticles={true}
            className="max-w-md mx-auto p-8 rounded-2xl bg-[#061F25]/90 border-[#E8FFFC]/[0.08] space-y-6 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#008C6B]/20 border border-[#04A37B]/30 flex items-center justify-center mx-auto text-[#23F7DB]">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-wider text-[#23F7DB] uppercase">
                ERROR 404 // SERVICE SPECIFICATION
              </span>
              <h1 className="text-2xl font-bold text-[#E8FFFC] tracking-tight font-sans">
                Service Specification Not Found
              </h1>
              <p className="text-sm text-[#E8FFFC]/70 leading-relaxed font-sans">
                The requested service coordinate <code className="text-[#30F1BE] font-mono text-xs bg-[#008C6B]/30 px-1.5 py-0.5 rounded border border-[#04A37B]/40">/{slug}</code> could not be located within the BYTHAWK orbital network.
              </p>
            </div>
            <div className="pt-2 flex justify-center gap-4">
              <Link to="/services">
                <Button variant="primary" size="md">
                  <span>View All Services</span>
                </Button>
              </Link>
              <Link to="/">
                <Button variant="ghost" size="md" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span>Return Home</span>
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </main>
    );
  }

  const { scrollYProgress } = useScroll();
  const celestialData = slug ? SERVICE_CELESTIAL_MAP[slug] : undefined;

  // Custom motion transforms based on celestial archetype (No zoom!)
  const scrollYOffset = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-8, 16]);
  const scrollXOffset = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <PageTransition>
      <CosmicScrollJourney />

      {/* DEDICATED SERVICE CELESTIAL ARCHETYPE (Unique per discipline - Bespoke Physics & HUD) */}
      {celestialData && (
        <motion.div
          className={`fixed top-[12%] -right-14 sm:right-[1%] md:right-[4%] ${celestialData.size} aspect-square pointer-events-none select-none z-0`}
          style={{
            y: scrollYOffset,
            x: celestialData.animationType === 'mars-drift' || celestialData.animationType === 'methane-shear' ? scrollXOffset : 0,
            rotate: celestialData.animationType !== 'pulsar-spin' ? scrollRotate : undefined,
          }}
        >
          <div className="relative w-full h-full">
            <motion.img
              src={celestialData.image}
              alt={celestialData.alt}
              className="w-full h-full object-contain opacity-90"
              style={{
                filter: `drop-shadow(0 0 60px ${celestialData.glow})`,
              }}
              animate={
                celestialData.animationType === 'pulsar-spin'
                  ? { rotate: 360 }
                  : celestialData.animationType === 'crystal-tumble'
                  ? { rotate: [-10, 15, -10], y: [-8, 8, -8] }
                  : { y: [0, -10, 0] }
              }
              transition={
                celestialData.animationType === 'pulsar-spin'
                  ? { duration: 25, repeat: Infinity, ease: 'linear' }
                  : { duration: 10, repeat: Infinity, ease: 'easeInOut' }
              }
              loading="eager"
            />
          </div>
        </motion.div>
      )}

      <div className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-cyan-300">
        <Container>
          {/* Breadcrumb Navigation */}
          <ServiceBreadcrumbs serviceTitle={service.title} />

          {/* Section 1: Hero Section */}
          <ServiceHero
            title={service.title}
            eyebrow={service.eyebrow}
            category={service.category}
            headline={service.headline}
            introduction={service.introduction}
            accentColor={service.accentColor}
            iconName={service.iconName}
            metaBadges={service.metaBadges}
          />

          {/* Section 2: Strategic Positioning & Overview */}
          <ServiceOverview
            strategicHeadline={service.overview.strategicHeadline}
            paragraphs={service.overview.paragraphs}
            corePillars={service.overview.corePillars}
            accentColor={service.accentColor}
          />

          {/* Section 3: Core Capabilities Breakdown (01 - 06) */}
          <ServiceCapabilities
            capabilities={service.capabilities}
            accentColor={service.accentColor}
          />

          {/* Section 4: Tangible Deliverables Matrix */}
          <ServiceDeliverables
            deliverables={service.deliverables}
            accentColor={service.accentColor}
          />

          {/* Section 5: Standardized Launch Sequence Bridge (Replaces generic 6-screen duplicate process) */}
          <section className="py-12 border-b border-[#E8FFFC]/[0.08]">
            <Card
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor={`${service.accentColor}18`}
              className="p-8 sm:p-10 rounded-2xl bg-[#061F25]/90 border-[#E8FFFC]/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
            >
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-mono tracking-wider text-[#23F7DB] uppercase font-semibold">
                  // RIGOROUS UK CRAFTSMANSHIP
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E8FFFC] font-sans">
                  Engineered Through Our 6-Stage Launch Sequence
                </h3>
                <p className="text-sm text-[#E8FFFC]/70 leading-relaxed font-sans">
                  Every {service.title} engagement executes against our standardized UK quality gates, automated testing, and zero-downtime deployment pipelines.
                </p>
              </div>
              <Link to="/process" className="shrink-0">
                <Button variant="secondary" size="md" className="flex items-center gap-2 border border-white/[0.1]">
                  <span>Explore Launch Sequence</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </section>

          {/* Section 6: Curated Technology Stack */}
          <ServiceTechnology
            technologies={service.technologies}
            accentColor={service.accentColor}
          />

          {/* Section 7: Strategic Value & Why Bythawk */}
          <ServiceBenefits
            serviceTitle={service.title}
            benefits={service.benefits}
            accentColor={service.accentColor}
          />

          {/* Section 8: Curated FAQ (Top 4 Focused Questions) */}
          <ServiceFaq
            serviceTitle={service.title}
            faqs={service.faqs.slice(0, 4)}
            accentColor={service.accentColor}
          />

          {/* Section 9: Interconnected & Related Services */}
          <RelatedServices
            relatedServices={service.relatedServices}
            accentColor={service.accentColor}
          />

          {/* Section 10: Final High-Impact Service CTA */}
          <ServiceCta
            serviceTitle={service.title}
            accentColor={service.accentColor}
          />
        </Container>
      </div>
    </PageTransition>
  );
};
