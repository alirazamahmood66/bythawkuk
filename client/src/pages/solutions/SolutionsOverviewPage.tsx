import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import { getAllSolutions } from '@/data/solutionsData';
import { applySeo } from '@/utils/seo';
import {
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Compass,
} from 'lucide-react';

export const SolutionsOverviewPage: React.FC = () => {
  const solutions = getAllSolutions();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Targeted Agency Solutions | Bythawk',
      description:
        'Explore targeted digital solutions engineered for startups, enterprise modernization, headless e-commerce, and bespoke software systems.',
      path: '/solutions',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Targeted Agency Solutions | Bythawk',
        description:
          'Explore targeted digital solutions engineered for startups, enterprise modernization, headless e-commerce, and bespoke software systems.',
        url: 'https://bythawk.uk/solutions',
      },
    });
  }, []);

  return (
    <PageTransition>
      <CosmicScrollJourney />

      <div className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-amber-300">
        <Container>
          {/* Hero Section */}
          <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/[0.08]">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-mono font-medium tracking-wider text-amber-300">
                  BYTHAWK // TARGETED PACKAGES
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                Engineered Solutions for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C]">
                  Speed, Scale & Conversion.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
                Instead of open-ended guesswork, we provide structured, outcome-driven solution architectures tailored to specific commercial milestones — from early venture launch to global enterprise modernization.
              </p>
            </div>
          </section>

          {/* Solutions Grid */}
          <Section spacingVariant="spacious" className="py-16">
            <SectionHeading
              eyebrow="TAILORED ENGAGEMENTS"
              title="Explore Our"
              highlight="Solutions"
              description="Each package combines dedicated strategy, technical architecture, and rapid UK engineering execution."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <Card
                  key={solution.slug}
                  as="article"
                  variant="default"
                  spotlight={true}
                  withReticles={true}
                  spotlightColor={`${solution.accentColor}20`}
                  className="flex flex-col justify-between p-7 bg-[#070D18]/90 border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/40 transition-all duration-300 shadow-xl group rounded-2xl"
                >
                  <div className="space-y-5">
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded bg-[#EA580C]/20 border border-[#D97706]/30 text-[#FBBF24] font-semibold uppercase">
                        {solution.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#FFFBEB]/60">
                        <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>{solution.typicalTimeline}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#FFFBEB] tracking-tight group-hover:text-[#F59E0B] transition-colors font-sans mb-2">
                        <Link to={`/solutions/${solution.slug}`}>
                          {solution.title}
                        </Link>
                      </h3>
                      <p className="text-xs font-mono text-[#FBBF24] font-medium">
                        {solution.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#FFFBEB]/70 leading-relaxed font-sans">
                      {solution.description}
                    </p>

                    {/* Key Outcome Highlights */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#FFFBEB]/[0.08]">
                      {solution.keyOutcomes.map((outcome, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-[#020611] border border-[#FFFBEB]/[0.06] text-center">
                          <span className="block text-sm font-extrabold text-[#FBBF24] font-sans">
                            {outcome.value}
                          </span>
                          <span className="block text-[9px] font-mono text-[#FFFBEB]/60 uppercase tracking-tight mt-0.5 truncate">
                            {outcome.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Core Deliverable Snippets */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-[#FFFBEB]/60 uppercase tracking-wider block">
                        CORE DELIVERABLES:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#FFFBEB]/70">
                        {solution.deliverables.slice(0, 3).map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                            <span>{d.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 mt-6 border-t border-[#FFFBEB]/[0.08]">
                    <Link
                      to={`/solutions/${solution.slug}`}
                      className="flex items-center justify-between text-xs font-mono tracking-wider text-[#FFFBEB]/70 group-hover:text-[#F59E0B] transition-colors"
                    >
                      <span className="font-bold">INSPECT BLUEPRINT & SPEC</span>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#EA580C]/20 border border-[#D97706]/30 group-hover:bg-[#F59E0B]/20 group-hover:border-[#F59E0B] transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Bottom Conversion CTA */}
          <section className="py-16 border-t border-[#FFFBEB]/[0.08]">
            <Card
              variant="default"
              spotlight={true}
              withReticles={true}
              className="p-8 sm:p-12 rounded-2xl bg-[#070D18]/90 border-[#FFFBEB]/[0.08] text-center max-w-3xl mx-auto space-y-6 shadow-2xl"
            >
              <span className="text-xs font-mono tracking-widest text-[#F59E0B] uppercase font-semibold">
                // CUSTOM SPECIFICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFBEB] tracking-tight font-sans">
                Require a Bespoke Architecture?
              </h2>
              <p className="text-sm sm:text-base text-[#FFFBEB]/70 leading-relaxed font-sans max-w-xl mx-auto">
                Every enterprise challenge has unique parameters. Schedule an introductory architectural discovery session with our engineering directors.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-amber-950/40">
                    <span>Schedule Discovery Call</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/work">
                  <Button variant="ghost" size="lg" className="border border-[#FFFBEB]/[0.08]">
                    <span>View Completed Systems</span>
                  </Button>
                </Link>
              </div>
            </Card>
          </section>
        </Container>
      </div>
    </PageTransition>
  );
};

export default SolutionsOverviewPage;
