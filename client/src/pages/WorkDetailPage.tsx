import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug, getNextProject } from '@/data/workData';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import {
  ProjectVisual,
  ProjectMetadata,
  ProjectApproach,
  ProjectFeatures,
  ProjectGallery,
  ProjectOutcomes,
  ProjectTestimonial,
  NextProject,
  WorkCta,
} from '@/components/work';
import { ChevronRight, Home, ArrowLeft, Compass, Terminal, ExternalLink } from 'lucide-react';

import { applySeo } from '@/utils/seo';

export const WorkDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = slug ? getProjectBySlug(slug) : undefined;
  const nextProject = slug ? getNextProject(slug) : undefined;

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Dynamic SEO metadata & JSON-LD
  useEffect(() => {
    if (project) {
      const cleanupSeo = applySeo({
        title: `${project.title} | Bythawk`,
        description: project.shortDescription,
        path: `/work/${project.slug}`,
        robots: 'index, follow',
        schema: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.shortDescription,
          creator: {
            '@type': 'Organization',
            name: 'BYTHAWK',
            url: 'https://bythawk.uk',
          },
          genre: project.primaryCategory,
        },
      });
      return cleanupSeo;
    } else {
      const cleanupSeo = applySeo({
        title: 'Case Study Not Found | Bythawk',
        description: 'The requested case study could not be found.',
        path: '/work',
        robots: 'noindex, nofollow',
      });
      return cleanupSeo;
    }
  }, [project]);

  // Fallback if project is not found
  if (!project) {
    return (
      <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center py-24">
        <Container className="text-center">
          <Card
            variant="default"
            spotlight={true}
            withReticles={true}
            className="max-w-md mx-auto p-8 rounded-2xl bg-[#071426]/90 border-white/[0.08] space-y-6 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
                ERROR 404 // CASE STUDY SPECIFICATION
              </span>
              <h1 className="text-2xl font-bold text-white tracking-tight font-sans">
                Case Study Not Found
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                The requested project specification <code className="text-cyan-300 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-500/30">/{slug}</code> could not be located in our portfolio registry.
              </p>
            </div>
            <div className="pt-2 flex justify-center gap-4">
              <Link to="/work">
                <Button variant="primary" size="md">
                  <span>View All Work</span>
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

  return (
    <PageTransition>
      <CosmicScrollJourney />
      <article className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-cyan-300">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center space-x-2 text-xs font-mono tracking-wider text-slate-400 flex-wrap">
              <li>
                <Link
                  to="/"
                  className="flex items-center hover:text-cyan-400 transition-colors px-1"
                >
                  <Home className="w-3.5 h-3.5 mr-1" />
                  <span>HOME</span>
                </Link>
              </li>
              <li className="text-white/20" aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link
                  to="/work"
                  className="hover:text-cyan-400 transition-colors px-1"
                >
                  <span>WORK</span>
                </Link>
              </li>
              <li className="text-white/20" aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li aria-current="page">
                <span className="text-white font-medium px-2 py-0.5 bg-cyan-950/40 border border-cyan-500/30 rounded">
                  {project.title.toUpperCase()}
                </span>
              </li>
            </ol>
          </nav>

          {/* Case Study Hero */}
          <section className="pt-6 pb-12 md:pt-10 md:pb-16 border-b border-white/[0.08]">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 shadow-sm backdrop-blur-sm">
                <Terminal className="w-3.5 h-3.5" style={{ color: project.accentColor }} />
                <span className="text-xs font-mono font-medium tracking-wider text-cyan-300">
                  {project.badgeLabel} // {project.primaryCategory.toUpperCase()}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                {project.title}
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
                {project.description}
              </p>

              {project.liveUrl && (
                <div className="pt-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/50 hover:border-cyan-400 transition-all shadow-lg shadow-cyan-950/40 group"
                  >
                    <span>VISIT LIVE PLATFORM</span>
                    <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="text-[11px] text-slate-400 font-normal hidden sm:inline ml-1">
                      ({project.liveUrl.replace(/^https?:\/\//, '')})
                    </span>
                  </a>
                </div>
              )}
            </div>

            {/* Project Metadata Strip */}
            <div className="mt-10">
              <ProjectMetadata
                primaryCategory={project.primaryCategory}
                services={project.services}
                technologies={project.technologies}
                year={project.year}
                duration={project.duration}
                location={project.location}
                industry={project.industry}
              />
            </div>

            {/* Large Hero Visual Display */}
            <div className="mt-10">
              <ProjectVisual
                title={project.title}
                category={project.primaryCategory}
                accentColor={project.accentColor}
                heroImage={project.heroImage}
                badgeLabel={project.badgeLabel}
                aspectRatio="wide"
              />
            </div>
          </section>

          {/* Section: Challenge & Objectives */}
          {(project.challenge || (project.objectives && project.objectives.length > 0)) && (
            <section className="py-14 md:py-20 border-b border-white/[0.08]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Challenge */}
                {project.challenge && (
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase block">
                      // THE CHALLENGE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Addressing Structural Friction
                    </h2>
                    <p className="text-slate-300 text-base leading-relaxed font-light">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {/* Objectives */}
                {project.objectives && project.objectives.length > 0 && (
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase block">
                      // CORE OBJECTIVES
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Key Performance Benchmarks
                    </h2>
                    <ol className="space-y-4 pt-2">
                      {project.objectives.map((obj, idx) => (
                        <Card
                          as="li"
                          key={idx}
                          variant="default"
                          spotlight={true}
                          withReticles={true}
                          spotlightColor="rgba(32, 217, 243, 0.1)"
                          className="flex items-start space-x-4 p-4"
                        >
                          <span
                            className="font-mono text-sm font-bold mt-0.5 flex-shrink-0"
                            style={{ color: project.accentColor }}
                          >
                            0{idx + 1}
                          </span>
                          <p className="text-sm text-slate-200 leading-relaxed font-light">
                            {obj}
                          </p>
                        </Card>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section: Solution */}
          {project.solution && (
            <section className="py-14 md:py-20 border-b border-white/[0.08]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5">
                  <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase block mb-2">
                    // THE SOLUTION
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                    Engineered For Resilience and Operational Clarity
                  </h2>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                    {project.solution}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Section: Methodology & Approach */}
          <ProjectApproach
            approach={project.approach}
            accentColor={project.accentColor}
          />

          {/* Section: Key Features */}
          <ProjectFeatures
            features={project.features}
            accentColor={project.accentColor}
          />

          {/* Section: Visual Gallery (conditional) */}
          <ProjectGallery gallery={project.gallery} title={project.title} />

          {/* Section: Outcomes (strictly conditional - null for previews) */}
          <ProjectOutcomes
            outcomes={project.outcomes}
            accentColor={project.accentColor}
          />

          {/* Section: Testimonial (strictly conditional - null for previews) */}
          <ProjectTestimonial testimonial={project.testimonial} />

          {/* Section: Next Project */}
          {nextProject && <NextProject nextProject={nextProject} />}

          {/* Section: Case Study CTA */}
          <WorkCta
            title="Ready to Build Your Digital Milestone?"
            subtitle="From initial technical scoping to cloud deployment, our UK engineering team delivers with precision."
          />
        </Container>
      </article>
    </PageTransition>
  );
};
