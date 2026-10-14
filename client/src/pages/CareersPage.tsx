import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import { applySeo } from '@/utils/seo';
import {
  Sparkles,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Laptop,
  HeartHandshake,
  CheckCircle2,
  Mail,
  Compass,
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  requirements: string[];
  responsibilities: string[];
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'senior-fullstack-engineer',
    title: 'Senior Full-Stack Engineer (React 19 & TypeScript)',
    department: 'ENGINEERING',
    location: 'Remote (UK / GMT ±2h)',
    type: 'Full-Time',
    summary:
      'Lead architecture and development of high-velocity web applications, enterprise telemetry dashboards, and modern cloud APIs. You will own features from schema design to production deployment.',
    responsibilities: [
      'Architect robust React 19 and Next.js client applications with strict type safety.',
      'Design high-throughput REST and GraphQL backend services in Node.js and Express.',
      'Optimize Web Vitals, edge caching strategies, and database query latency.',
      'Mentor intermediate engineers and establish modern CI/CD best practices.',
    ],
    requirements: [
      '5+ years of production experience with TypeScript, React, and Node.js.',
      'Strong knowledge of PostgreSQL, Redis, and cloud containerization (Docker, AWS).',
      'Obsession with sub-second performance and clean, decoupled component architecture.',
    ],
  },
  {
    id: 'creative-technologist-3d',
    title: 'Creative Technologist & 3D WebGL Developer',
    department: 'CREATIVE TECHNOLOGY',
    location: 'Remote (UK / Europe)',
    type: 'Full-Time / Contract',
    summary:
      'Push the boundaries of interactive digital experiences by crafting silky 60fps WebGL shaders, Three.js celestial models, and fluid physics-based micro-interactions.',
    responsibilities: [
      'Develop customized Three.js scenes, procedural particle engines, and GLSL shaders.',
      'Bridge interactive 3D assets with responsive React DOM interfaces.',
      'Ensure strict GPU frame budgets across both high-end desktop and mobile GPUs.',
      'Collaborate closely with brand designers to prototype cinematic UI concepts.',
    ],
    requirements: [
      'Demonstrated portfolio of live Three.js / WebGL / Canvas interactive projects.',
      'Deep understanding of GLSL shader programming, lighting models, and geometry optimization.',
      'Proficiency in React, modern JavaScript, and CSS animation principles.',
    ],
  },
  {
    id: 'lead-ui-ux-designer',
    title: 'Lead UI/UX Product Designer',
    department: 'PRODUCT & DESIGN',
    location: 'Remote (UK / GMT ±2h)',
    type: 'Full-Time',
    summary:
      'Shape the visual language and user experience of flagship client platforms. You will create cohesive design token systems, ergonomic dashboards, and conversion-optimized storefronts.',
    responsibilities: [
      'Create high-fidelity Figma components, design systems, and responsive layout tokens.',
      'Conduct user journey mapping, wireframing, and interactive prototype testing.',
      'Work alongside frontend engineers to ensure pixel-perfect CSS implementation.',
      'Present design rationales and architectural decisions directly to client executives.',
    ],
    requirements: [
      '4+ years designing complex digital products, SaaS consoles, or high-end e-commerce.',
      'Mastery of Figma (auto-layout, components, variables, interactive prototyping).',
      'Strong understanding of frontend constraints (HTML, CSS, flexbox, grid, accessibility WCAG AA).',
    ],
  },
];

export const CareersPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Careers at Bythawk | Digital Technology Studio',
      description:
        'Explore engineering, creative technology, and design careers at Bythawk. Join our remote-first UK digital studio building high-performance digital worlds.',
      path: '/careers',
    });
  }, []);

  const { scrollYProgress } = useScroll();
  // ZERO-GRAVITY INERTIAL DRIFT PHYSICS (No zoom - pure microgravity drift across axes)
  const astronautY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const astronautX = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const astronautRotate = useTransform(scrollYProgress, [0, 1], [-10, 24]);

  // Distant Moon slow background parallax
  const moonY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const moonRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);

  return (
    <PageTransition>
      <CosmicScrollJourney />

      {/* 1. DISTANT NASA CRESCENT MOON (Deep background lunar presence) */}
      <motion.div
        className="fixed top-[6%] -right-4 sm:right-[6%] w-[220px] sm:w-[280px] aspect-square pointer-events-none select-none z-0 opacity-40"
        style={{
          y: moonY,
          rotate: moonRotate,
        }}
      >
        <img
          src="/images/cosmic/crescent_moon.png"
          alt="Cratered lunar surface moon"
          className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          style={{ mixBlendMode: 'screen' }}
          loading="lazy"
        />
      </motion.div>

      {/* 2. BESPOKE DEEP-SPACE EVA SPACEWALKER (Zero-G Inertial Floating Drift) */}
      <motion.div
        className="fixed top-[14%] -right-12 sm:right-[2%] md:right-[5%] w-[320px] sm:w-[420px] md:w-[480px] aspect-square pointer-events-none select-none z-0"
        style={{
          y: astronautY,
          x: astronautX,
          rotate: astronautRotate,
        }}
        animate={{
          y: [0, -14, 0],
          rotate: [-2, 3, -2],
          transition: {
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <div className="relative w-full h-full">
          <img
            src="/images/cosmic/astronaut_eva_spacewalker.png"
            alt="Deep-space EVA astronaut spacewalker"
            className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(32,217,243,0.55)] opacity-95"
            style={{ mixBlendMode: 'screen' }}
            loading="eager"
          />
        </div>
      </motion.div>

      <div className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-cyan-300">
        <Container>
          {/* Hero Section */}
          <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/[0.08]">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono font-medium tracking-wider text-cyan-300">
                  BYTHAWK // STUDIO TALENT & CULTURE
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                Build the Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400">
                  Digital Worlds With Us.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
                We are a dedicated UK digital technology studio obsessed with high-performance software engineering, cinematic visual craft, and sub-second web experiences. We hire autonomous, craft-focused builders who take immense pride in their work.
              </p>
            </div>
          </section>

          {/* Studio Culture & Values */}
          <section className="py-16 border-b border-white/[0.08]">
            <div className="mb-10">
              <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                // HOW WE OPERATE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans mt-2">
                Our Engineering Philosophy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Laptop,
                  title: 'Remote-First Flexibility',
                  desc: 'Work from wherever you do your best thinking. We respect deep work and prioritize asynchronous communication over pointless meetings.',
                },
                {
                  icon: Sparkles,
                  title: 'Modern Stack Only',
                  desc: 'Zero legacy monoliths or outdated WordPress setups. We build exclusively with TypeScript, React 19, Three.js, Node.js, and modern cloud primitives.',
                },
                {
                  icon: HeartHandshake,
                  title: 'Autonomous Ownership',
                  desc: 'We don’t micromanage. You own your architectural decisions, code quality, and delivery milestones with direct client impact.',
                },
                {
                  icon: Compass,
                  title: 'Hardware & Learning',
                  desc: 'Generous annual equipment stipend, continuous education budget, and time dedicated to research and open-source contributions.',
                },
              ].map((perk, i) => (
                <Card
                  key={i}
                  variant="default"
                  spotlight={true}
                  withReticles={true}
                  className="p-6 bg-[#071426]/90 border-white/[0.08] space-y-3 rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <perk.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {perk.desc}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Open Positions List */}
          <section className="py-16 border-b border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                  // CURRENT OPENINGS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans mt-2">
                  Active Positions ({OPEN_POSITIONS.length})
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                  APPLICATIONS ACTIVELY REVIEWED
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {OPEN_POSITIONS.map((job) => (
                <Card
                  key={job.id}
                  variant="interactive"
                  spotlight={true}
                  withReticles={true}
                  className="p-6 sm:p-8 bg-[#071426]/85 border-white/[0.08] hover:border-cyan-500/40 transition-all rounded-2xl"
                >
                  <div className="space-y-6">
                    {/* Header Strip */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-bold uppercase">
                            {job.department}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-400 uppercase">
                            {job.type}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                          {job.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {job.summary}
                    </p>

                    {/* Responsibilities & Requirements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-white/[0.06]">
                      <div className="space-y-2">
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
                          RESPONSIBILITIES:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
                          REQUIREMENTS:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Action */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400">
                        Reference: <code className="text-cyan-300 font-mono">BYTHAWK-HR-{job.id.toUpperCase()}</code>
                      </span>

                      <a
                        href={`mailto:careers@bythawk.uk?subject=Application:%20${encodeURIComponent(job.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Apply via Email</span>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* General Application CTA */}
          <section className="py-16 text-center">
            <Card
              variant="default"
              spotlight={true}
              withReticles={true}
              className="p-8 sm:p-12 rounded-2xl bg-[#071426]/90 border-white/[0.08] max-w-3xl mx-auto space-y-6 shadow-2xl"
            >
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                // SPECULATIVE ENQUIRIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Don’t See Your Exact Role?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl mx-auto">
                We are always excited to connect with exceptional engineers, 3D artists, and product strategists. Send your GitHub, portfolio, and an introductory note directly to our team.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:careers@bythawk.uk?subject=Speculative%20Enquiry%20-%20Bythawk"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold text-cyan-300 bg-[#030712] hover:bg-cyan-950/60 border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>careers@bythawk.uk</span>
                </a>
              </div>
            </Card>
          </section>
        </Container>
      </div>
    </PageTransition>
  );
};

export default CareersPage;
