import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSolutionBySlug } from '@/data/solutionsData';
import { WORK_PROJECTS } from '@/data/workData';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import { applySeo } from '@/utils/seo';
import {
  ChevronRight,
  Home,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Layers,
} from 'lucide-react';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getSolutionBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (solution) {
      return applySeo({
        title: `${solution.title} | Bythawk Solutions`,
        description: solution.description,
        path: `/solutions/${solution.slug}`,
      });
    }
  }, [solution]);

  if (!solution) {
    return (
      <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center py-24">
        <Container className="text-center">
          <Card
            variant="default"
            spotlight={true}
            withReticles={true}
            className="max-w-md mx-auto p-8 rounded-2xl bg-[#071426]/90 border-white/[0.08] space-y-6 shadow-2xl"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
                ERROR 404 // SOLUTION SPECIFICATION
              </span>
              <h1 className="text-2xl font-bold text-white tracking-tight font-sans">
                Solution Not Found
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                The requested solution coordinate <code className="text-cyan-300 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-500/30">/{slug}</code> could not be located in our solutions registry.
              </p>
            </div>
            <div className="pt-2 flex justify-center gap-4">
              <Link to="/solutions">
                <Button variant="primary" size="md">
                  <span>View All Solutions</span>
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

  // Find related real projects
  const relatedProjects = WORK_PROJECTS.filter((p) =>
    solution.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <PageTransition>
      <CosmicScrollJourney />

      <div className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-cyan-300">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center space-x-2 text-xs font-mono tracking-wider text-slate-400 flex-wrap">
              <li>
                <Link to="/" className="flex items-center hover:text-cyan-400 transition-colors px-1">
                  <Home className="w-3.5 h-3.5 mr-1" />
                  <span>HOME</span>
                </Link>
              </li>
              <li className="text-white/20" aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link to="/solutions" className="hover:text-cyan-400 transition-colors px-1">
                  <span>SOLUTIONS</span>
                </Link>
              </li>
              <li className="text-white/20" aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li aria-current="page">
                <span className="text-white font-medium px-2 py-0.5 bg-cyan-950/40 border border-cyan-500/30 rounded">
                  {solution.title.toUpperCase()}
                </span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <section className="pt-6 pb-12 md:pt-10 md:pb-16 border-b border-white/[0.08]">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 shadow-sm backdrop-blur-sm">
                <Terminal className="w-3.5 h-3.5" style={{ color: solution.accentColor }} />
                <span className="text-xs font-mono font-medium tracking-wider text-cyan-300">
                  {solution.eyebrow}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                {solution.title}
              </h1>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
                {solution.description}
              </p>

              {/* Engagement Meta Strip */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#071426] border border-white/[0.08] text-xs font-mono text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Timeline: <strong className="text-white">{solution.typicalTimeline}</strong></span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#071426] border border-white/[0.08] text-xs font-mono text-slate-300">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Model: <strong className="text-white">{solution.engagementModel}</strong></span>
                </div>
              </div>
            </div>

            {/* Key Expected Outcomes Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {solution.keyOutcomes.map((outcome, idx) => (
                <Card
                  key={idx}
                  variant="default"
                  spotlight={true}
                  withReticles={true}
                  className="p-5 bg-[#071426]/90 border-white/[0.08] text-center"
                >
                  <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-300 font-sans">
                    {outcome.value}
                  </span>
                  <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                    {outcome.label}
                  </span>
                </Card>
              ))}
            </div>
          </section>

          {/* Core Challenges Solved */}
          <section className="py-14 border-b border-white/[0.08]">
            <div className="max-w-4xl space-y-6">
              <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                // CRITICAL CHALLENGES RESOLVED
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                What This Architecture Solves
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {solution.challengesSolved.map((challenge, idx) => (
                  <Card
                    key={idx}
                    variant="default"
                    spotlight={true}
                    withReticles={true}
                    className="p-5 bg-[#071426]/80 border-white/[0.08] flex items-start gap-3"
                  >
                    <span className="font-mono text-sm font-bold text-cyan-400 shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {challenge}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Architectural Capabilities */}
          <section className="py-14 border-b border-white/[0.08]">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                // SOLUTION SPECIFICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                Engineered Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {solution.features.map((feature, idx) => (
                  <Card
                    key={idx}
                    variant="default"
                    spotlight={true}
                    withReticles={true}
                    className="p-6 bg-[#071426]/85 border-white/[0.08] space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <h3 className="text-base font-bold text-white font-sans">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6 font-sans">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Phased Deliverables Timeline */}
          <section className="py-14 border-b border-white/[0.08]">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                // SPRINT MILESTONES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                Tangible Deliverables Roadmap
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {solution.deliverables.map((deliv, idx) => (
                  <Card
                    key={idx}
                    variant="default"
                    spotlight={true}
                    withReticles={true}
                    className="p-6 bg-[#071426]/90 border-white/[0.08] space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-bold uppercase inline-block mb-3">
                        {deliv.timeframe}
                      </span>
                      <h3 className="text-lg font-bold text-white font-sans mb-1">
                        {deliv.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {deliv.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Related Real Projects / Case Studies */}
          {relatedProjects.length > 0 && (
            <section className="py-14 border-b border-white/[0.08]">
              <div className="space-y-6">
                <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                  // PROVEN BENCHMARKS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                  Relevant Case Studies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {relatedProjects.map((project) => (
                    <Card
                      key={project.slug}
                      variant="interactive"
                      spotlight={true}
                      withReticles={true}
                      className="p-6 bg-[#071426]/85 border-white/[0.08] rounded-xl flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-semibold uppercase">
                            {project.badgeLabel}
                          </span>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-mono text-cyan-400 hover:text-cyan-200 flex items-center gap-1"
                            >
                              <span>{project.liveUrl.replace(/^https?:\/\//, '')}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white font-sans">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          {project.shortDescription}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between">
                        <Link
                          to={`/work/${project.slug}`}
                          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5"
                        >
                          <span>Inspect Full Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Solution FAQs */}
          {solution.faqs && solution.faqs.length > 0 && (
            <section className="py-14 border-b border-white/[0.08]">
              <div className="max-w-3xl space-y-6">
                <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase font-semibold">
                  // ENGAGEMENT QUESTIONS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4 pt-2">
                  {solution.faqs.map((faq, idx) => (
                    <Card
                      key={idx}
                      variant="default"
                      spotlight={true}
                      withReticles={true}
                      className="p-5 bg-[#071426]/80 border-white/[0.08] space-y-2"
                    >
                      <h3 className="text-base font-bold text-white font-sans">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {faq.answer}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Action CTA */}
          <section className="py-16 text-center">
            <Card
              variant="default"
              spotlight={true}
              withReticles={true}
              className="p-8 sm:p-12 rounded-2xl bg-[#071426]/90 border-white/[0.08] max-w-3xl mx-auto space-y-6 shadow-2xl"
            >
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                // READY TO DEPLOY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Deploy {solution.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl mx-auto">
                Schedule a 30-minute architectural scoping session with our London engineering team to evaluate requirements, timelines, and milestones.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-cyan-950/40">
                    <span>Initiate Scoping Session</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="ghost" size="lg" className="border border-white/[0.08]">
                    <span>View All Solutions</span>
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

export default SolutionDetailPage;
