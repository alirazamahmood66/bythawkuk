import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Globe,
  Layout,
  Smartphone,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Cpu,
  type LucideIcon,
} from 'lucide-react';

interface ConstellationService {
  id: string;
  blueprintCode: string;
  title: string;
  category: string;
  description: string;
  route: string;
  color: string;
  icon: LucideIcon;
  telemetryMetric: { label: string; value: string };
  capabilities: string[];
}

const FLAGSHIP_SERVICES: ConstellationService[] = [
  {
    id: 'web-development',
    blueprintCode: 'ARCH-WEB-901',
    title: 'Web Development',
    category: 'ORBIT 01 // CORE ARCHITECTURE',
    description:
      'High-performance web platforms engineered with headless architectures, instant page loads, and conversion-focused responsiveness.',
    route: '/services/web-development',
    color: '#20d9f3',
    icon: Globe,
    telemetryMetric: { label: 'PERFORMANCE SLO', value: '< 0.8s LCP // 100/100 CWV' },
    capabilities: ['Next.js & React 19', 'Edge Rendering', 'Sub-Second Latency'],
  },
  {
    id: 'web-applications',
    blueprintCode: 'ARCH-SAAS-404',
    title: 'Web Applications',
    category: 'ORBIT 02 // CLOUD SYSTEMS',
    description:
      'Scalable cloud software, SaaS telemetry platforms, and mission-critical portals built with zero-drift state synchronization.',
    route: '/services/web-applications',
    color: '#68afff',
    icon: Layout,
    telemetryMetric: { label: 'THROUGHPUT SLO', value: '1.4M EVENTS/HR // 99.98% UPTIME' },
    capabilities: ['SaaS Architectures', 'Real-Time WebSockets', 'GraphQL & REST'],
  },
  {
    id: 'mobile-app-development',
    blueprintCode: 'ARCH-MOB-720',
    title: 'Mobile App Development',
    category: 'ORBIT 03 // MOBILE PLATFORMS',
    description:
      'Native fluid iOS, Android, and cross-platform mobile products built for intuitive touch ergonomics and offline-first persistence.',
    route: '/services/mobile-app-development',
    color: '#FBBF24',
    icon: Smartphone,
    telemetryMetric: { label: 'UI REFRESH SLO', value: '60FPS FLUID // 100% OFFLINE CACHE' },
    capabilities: ['React Native & Native', 'Offline-First DB', 'Hardware Acceleration'],
  },
  {
    id: 'digital-marketing',
    blueprintCode: 'ARCH-GROWTH-110',
    title: 'Digital Marketing & Growth',
    category: 'ORBIT 04 // GROWTH ENGINES',
    description:
      'Attribution-driven customer acquisition engines combining programmatic SEO, high-intent paid campaigns, and algorithmic CRO.',
    route: '/services/digital-marketing',
    color: '#f59e0b',
    icon: TrendingUp,
    telemetryMetric: { label: 'ACQUISITION SLO', value: '+42% QUALIFIED PIPELINE // 3.4x ROAS' },
    capabilities: ['Technical SEO', 'High-Intent Search', 'Predictive Funnels'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden">
      {/* Subtle Constellation Geometric Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="15%" x2="50%" y2="40%" stroke="#20d9f3" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="50%" y1="40%" x2="80%" y2="25%" stroke="#68afff" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="50%" y1="40%" x2="50%" y2="85%" stroke="#FBBF24" strokeWidth="1" strokeDasharray="3 5" />
          <circle cx="20%" cy="15%" r="3" fill="#20d9f3" />
          <circle cx="50%" cy="40%" r="4" fill="#68afff" />
          <circle cx="80%" cy="25%" r="3" fill="#FBBF24" />
          <circle cx="50%" cy="85%" r="3" fill="#f59e0b" />
        </svg>
      </div>

      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="SERVICES CONSTELLATION"
            title="Core Digital"
            highlight="Capabilities"
            description="A focused ecosystem of high-velocity engineering disciplines, crafted to take ambitious businesses from initial concept to digital dominance."
            className="mb-0"
          />

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-amber-400 hover:text-amber-300 transition-colors uppercase py-2 focus-ring rounded"
          >
            <span>Explore All 8 Disciplines</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Card Flagship Services Grid with HUD Spotlight & Blueprint Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FLAGSHIP_SERVICES.map((service) => {
            const IconComponent = service.icon;

            return (
              <Link
                key={service.id}
                to={service.route}
                className="group focus-ring rounded-2xl block h-full"
                aria-label={`Explore ${service.title} service blueprint`}
              >
                <Card
                  variant="interactive"
                  spotlight={true}
                  spotlightColor={`${service.color}22`}
                  withReticles={true}
                  className="h-full flex flex-col justify-between p-7 sm:p-9 bg-[#0B0C10]/40 backdrop-blur-md border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/50 hover:bg-[#0B0C10]/70 rounded-2xl relative shadow-xl shadow-black/50 overflow-hidden group"
                >
                  {/* Subtle Background Blueprint Wireframe Lines */}
                  <div className="absolute top-0 right-0 w-44 h-44 opacity-[0.06] group-hover:opacity-[0.14] transition-opacity pointer-events-none" aria-hidden="true">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#F59E0B] stroke-current" fill="none">
                      <circle cx="80" cy="20" r="16" strokeWidth="0.8" strokeDasharray="2 3" />
                      <circle cx="80" cy="20" r="32" strokeWidth="0.5" />
                      <line x1="0" y1="20" x2="100" y2="20" strokeWidth="0.5" strokeDasharray="4 4" />
                      <line x1="80" y1="0" x2="80" y2="100" strokeWidth="0.5" strokeDasharray="4 4" />
                    </svg>
                  </div>

                  <div>
                    {/* Header: Blueprint Code, Category & Icon Housing */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: service.color }} />
                        <span className="text-[11px] font-mono font-bold tracking-wider text-[#FBBF24] uppercase">
                          {service.category}
                        </span>
                      </div>

                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#040407]/80 group-hover:bg-[#040407] border border-[#FFFBEB]/[0.1] group-hover:border-[#F59E0B]/50 transition-all duration-300 shadow-md"
                        style={{ color: service.color }}
                      >
                        <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#FFFBEB] tracking-tight group-hover:text-[#F59E0B] transition-colors font-sans">
                        {service.title}
                      </h3>
                      <span className="text-[9px] font-mono text-[#FFFBEB]/50 uppercase tracking-widest hidden sm:inline">
                        {service.blueprintCode}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#FFFBEB]/70 leading-relaxed font-sans mb-5">
                      {service.description}
                    </p>

                    {/* Embedded Architectural Telemetry Benchmark Strip */}
                    <div className="p-3 rounded-xl bg-[#040407]/80 border border-[#FFFBEB]/[0.08] group-hover:border-[#F59E0B]/30 flex items-center justify-between text-xs font-mono transition-colors mb-5 shadow-inner">
                      <div className="flex items-center gap-2 min-w-0">
                        <Cpu className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                        <span className="text-[#FFFBEB]/60 font-medium truncate">{service.telemetryMetric.label}:</span>
                      </div>
                      <span className="text-[#FBBF24] font-bold tracking-wider shrink-0 text-[11px] sm:text-xs">
                        {service.telemetryMetric.value}
                      </span>
                    </div>

                    {/* Capability Tags */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {service.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#FFFBEB]/70 bg-white/[0.04] border border-[#FFFBEB]/[0.08] group-hover:border-[#F59E0B]/30 group-hover:text-[#FBBF24] transition-colors"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Blueprint Action */}
                  <div className="pt-5 mt-4 border-t border-[#FFFBEB]/[0.08] flex items-center justify-between text-xs font-mono font-medium text-[#FFFBEB]/60 group-hover:text-[#FBBF24] transition-colors">
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Dedicated Architectural Blueprint</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#F59E0B] font-semibold group-hover:translate-x-1.5 transition-transform">
                      <span>Inspect</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Global Catalog Gateway Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0B0C10]/90 border border-[#FFFBEB]/[0.1] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-2xl relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#F59E0B] font-semibold">
                COMPLETE DIGITAL TECHNOLOGY ROSTER
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#FFFBEB] tracking-tight font-sans">
              Need specialized engineering beyond our core quartet?
            </h4>
            <p className="text-xs sm:text-sm text-[#FFFBEB]/70 font-sans max-w-xl">
              From bespoke UI/UX design systems to advanced cloud architecture and headless e-commerce, explore all 8 dedicated service blueprints.
            </p>
          </div>

          <Link to="/services" className="shrink-0 relative z-10">
            <Button
              variant="secondary"
              size="md"
              className="rounded-full font-bold text-xs tracking-wide px-6 py-3 bg-[#040407]/80 border-[#F59E0B]/30 hover:border-[#F59E0B] shadow-lg"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              View Full Catalog
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesSection;
