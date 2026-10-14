import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowUpRight, ArrowRight, Activity, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface SelectedWorkItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  route: string;
  image: string;
  accentColor: string;
  domainUrl: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
}

const SELECTED_PROJECTS: SelectedWorkItem[] = [
  {
    id: 'bythawk-studio',
    slug: 'bythawk-studio',
    title: 'Bytehawk Creative Studio',
    category: 'CREATIVE TECHNOLOGY & 3D WEBGL',
    tagline: 'High-performance interactive studio platform with fluid 3D experiences.',
    description:
      'Architected an immersive digital ecosystem featuring responsive 60fps WebGL visualizers, automated client onboarding, and bespoke design systems.',
    route: '/work/bythawk-studio',
    image: '/images/projects/aetheria_preview.jpg',
    accentColor: '#23F7DB',
    domainUrl: 'bythawk.com',
    metrics: [
      { label: 'Display Refresh', value: '60 FPS' },
      { label: 'WebGL Shaders', value: '40+' },
      { label: 'Render Latency', value: '< 16ms' },
    ],
    technologies: ['React 19', 'TypeScript', 'Three.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    id: 'oaksis-academy',
    slug: 'oaksis-academy',
    title: 'Oaksis Learning Academy',
    category: 'EDTECH LEARNING MANAGEMENT',
    tagline: 'Scalable educational ecosystem for Cambridge & Edexcel curricula.',
    description:
      'Engineered a comprehensive LMS handling high-concurrency video lectures, automated milestone tracking, and seamless multi-currency subscription checkouts.',
    route: '/work/oaksis-academy',
    image: '/images/projects/vanguard_preview.jpg',
    accentColor: '#30F1BE',
    domainUrl: 'oaksis.com',
    metrics: [
      { label: 'Active Learners', value: '12,000+' },
      { label: 'Course Progress', value: '87%' },
      { label: 'Global Edge TTFB', value: '< 65ms' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe Edge'],
  },
  {
    id: 'ceedrs-platform',
    slug: 'ceedrs-platform',
    title: 'Ceedrs Velocity Platform',
    category: 'HIGH-VELOCITY WEB APPLICATION',
    tagline: 'Lightweight, ultra-fast single page web app with real-time feedback loops.',
    description:
      'Built an ultra-lean client application architecture optimized for sub-100ms TTFB and effortless cross-device performance.',
    route: '/work/ceedrs-platform',
    image: '/images/projects/orbit_preview.jpg',
    accentColor: '#04A37B',
    domainUrl: 'ceedrs.com',
    metrics: [
      { label: 'Initial TTFB', value: '< 80ms' },
      { label: 'Bundle Footprint', value: '42 kB' },
      { label: 'Sync Resilience', value: '100%' },
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
];

export const FeaturedWorkSection: React.FC = () => {
  const primaryProject = SELECTED_PROJECTS[0];
  const secondaryProjects = SELECTED_PROJECTS.slice(1);

  return (
    <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="SELECTED CASE STUDIES"
            title="Engineered"
            highlight="Work"
            description="A curated selection of modern digital platforms, high-velocity storefronts, and cross-platform mobile products built for ambitious businesses."
            className="mb-0"
          />

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors uppercase py-2 focus-ring rounded"
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 1. Primary Panoramic Hero Project (Aetheria) with Titanium Device Chrome */}
        <Link
          to={primaryProject.route}
          className="group focus-ring rounded-2xl block mb-10"
          aria-label={`View case study for ${primaryProject.title}`}
        >
          <Card
            variant="interactive"
            spotlight={true}
            spotlightColor={`${primaryProject.accentColor}25`}
            withReticles={true}
            className="p-6 sm:p-10 bg-[#061F25]/40 backdrop-blur-md border-[#E8FFFC]/[0.08] hover:border-[#23F7DB]/50 hover:bg-[#061F25]/60 rounded-2xl overflow-hidden shadow-2xl shadow-[#001119]/80 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Titanium Browser Device Framing */}
              <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#E8FFFC]/[0.12] bg-[#001119] relative group-hover:border-[#23F7DB]/50 transition-colors shadow-2xl">
                {/* Browser Chrome Header */}
                <div className="px-3.5 py-2.5 bg-[#061F25] border-b border-[#E8FFFC]/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#30F1BE]/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded bg-[#001119]/90 border border-[#E8FFFC]/[0.06] text-[10px] font-mono text-[#9edcd2]/70 flex items-center gap-1.5 max-w-[220px] truncate">
                    <ShieldCheck className="w-3 h-3 text-[#23F7DB] shrink-0" />
                    <span className="truncate">{primaryProject.domainUrl}</span>
                  </div>
                  <div className="w-8" />
                </div>

                {/* UI Screenshot with Hover Zoom */}
                <div className="relative overflow-hidden">
                  <img
                    src={primaryProject.image}
                    alt={`${primaryProject.title} dashboard UI preview`}
                    className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Inner Glass Reflection Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-[#23F7DB]/[0.08] pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Case Study Details & Telemetry */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="cyan" size="sm">
                      {primaryProject.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#E8FFFC] tracking-tight font-sans group-hover:text-[#23F7DB] transition-colors">
                    {primaryProject.title}
                  </h3>

                  <p className="text-sm text-[#9edcd2] leading-relaxed font-sans mt-3">
                    {primaryProject.description}
                  </p>
                </div>

                {/* Outcome Metrics Console */}
                <div className="grid grid-cols-3 gap-2.5 py-4 border-y border-[#E8FFFC]/[0.08]">
                  {primaryProject.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[#001119]/80 border border-[#E8FFFC]/[0.06] text-left">
                      <span className="block text-base sm:text-lg font-extrabold text-[#23F7DB] font-sans">
                        {m.value}
                      </span>
                      <span className="block text-[10px] font-mono text-[#5e948c] uppercase tracking-wider mt-0.5 truncate">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies & CTA */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {primaryProject.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 group-hover:translate-x-1.5 transition-transform">
                    <span>Inspect Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Link>

        {/* 2. Secondary Showcase Grid (Vanguard & Orbit) with Studio Device Chrome */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <Link
              key={project.id}
              to={project.route}
              className="group focus-ring rounded-2xl block h-full"
              aria-label={`View case study for ${project.title}`}
            >
              <Card
                variant="interactive"
                spotlight={true}
                spotlightColor={`${project.accentColor}25`}
                withReticles={true}
                className="h-full flex flex-col justify-between p-6 sm:p-8 bg-[#061F25]/40 backdrop-blur-md border-[#E8FFFC]/[0.08] hover:border-[#23F7DB]/50 hover:bg-[#061F25]/60 rounded-2xl overflow-hidden shadow-xl shadow-[#001119]/70 transition-all duration-300"
              >
                <div>
                  {/* Browser Chrome Header & UI Screenshot */}
                  <div className="w-full rounded-xl overflow-hidden border border-[#E8FFFC]/[0.1] bg-[#001119] mb-6 relative group-hover:border-[#23F7DB]/40 transition-colors shadow-lg">
                    <div className="px-3 py-2 bg-[#061F25] border-b border-[#E8FFFC]/[0.08] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                        <span className="w-2 h-2 rounded-full bg-[#30F1BE]/80" />
                      </div>
                      <div className="px-2.5 py-0.5 rounded bg-[#001119]/90 border border-[#E8FFFC]/[0.06] text-[9px] font-mono text-[#9edcd2]/70 truncate max-w-[160px]">
                        {project.domainUrl}
                      </div>
                    </div>

                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} UI preview`}
                        className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#001119]/90 border border-[#E8FFFC]/[0.1] backdrop-blur-md">
                        <span className="text-[10px] font-mono text-[#23F7DB] uppercase tracking-widest font-semibold">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#E8FFFC] tracking-tight group-hover:text-[#23F7DB] transition-colors font-sans">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9edcd2] leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Telemetry Metrics Console */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#E8FFFC]/[0.08] mb-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-2 rounded-lg bg-[#001119]/80 border border-[#E8FFFC]/[0.06] text-left">
                        <span className="block text-sm sm:text-base font-extrabold text-[#23F7DB] font-sans">
                          {m.value}
                        </span>
                        <span className="block text-[9px] font-mono text-[#5e948c] uppercase tracking-wider mt-0.5 truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech Tags & Blueprint CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 group-hover:translate-x-1.5 transition-transform">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedWorkSection;
