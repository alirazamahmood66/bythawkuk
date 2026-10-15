import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Globe,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { WORK_PROJECTS, type WorkProject } from '@/data/workData';

export const FeaturedWorkSection: React.FC = () => {
  const primaryProject = WORK_PROJECTS[0]; // Global Integrated Support
  const secondaryProjects = WORK_PROJECTS.slice(1); // Ceedrs, Darul Quran Wasunnah, VTuber Design, Oaksis, Bythawk

  return (
    <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <Container size="xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="CLIENT PORTFOLIO // SELECTED WORK"
            title="Engineered"
            highlight="Deployments"
            description="Production digital platforms, high-concurrency web applications, and digital ecosystems built for ambitious enterprises."
            className="mb-0"
          />

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#FBBF24] hover:text-[#F59E0B] transition-colors uppercase py-2 focus-ring rounded"
          >
            <span>Explore All 6 Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 1. Primary Panoramic Hero Project (Global Integrated Support) - 100% Image-Free Architectural Console */}
        <div className="block mb-10">
          <Card
            variant="interactive"
            spotlight={true}
            spotlightColor="rgba(245, 158, 11, 0.15)"
            withReticles={true}
            className="p-6 sm:p-10 bg-[#0B0C10]/80 backdrop-blur-xl border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/50 rounded-2xl overflow-hidden shadow-2xl shadow-[#040407]/80 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Titanium Browser Frame with Real Live Preview */}
              <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#FFFBEB]/[0.12] bg-[#040407] relative shadow-2xl flex flex-col justify-between min-h-[340px] sm:min-h-[390px] group">
                {/* Browser Chrome Bar */}
                <div className="absolute top-0 inset-x-0 px-4 py-2.5 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#FFFBEB]/[0.08] flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded bg-[#040407]/90 border border-[#FFFBEB]/[0.08] text-[10px] font-mono text-[#CBD5E1]/80 flex items-center gap-1.5 max-w-[280px] truncate">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                    <span className="truncate">{primaryProject.domainUrl}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#F59E0B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                    <span className="hidden sm:inline">LIVE</span>
                  </div>
                </div>

                {primaryProject.heroImage ? (
                  <div className="relative pt-10 h-[340px] sm:h-[390px] w-full overflow-hidden">
                    <img
                      src={primaryProject.heroImage}
                      alt={`${primaryProject.title} live platform preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040407] via-transparent to-transparent opacity-50 pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-[#CBD5E1] z-10">
                      <span className="px-2 py-0.5 rounded bg-[#040407]/80 backdrop-blur-md border border-[#FFFBEB]/[0.08]">
                        HTTPS // VERIFIED ARCHITECTURE
                      </span>
                      <a
                        href={primaryProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded bg-[#F59E0B]/20 hover:bg-[#F59E0B]/30 border border-[#F59E0B]/40 text-[#FBBF24] hover:text-white transition-all flex items-center gap-1 font-bold backdrop-blur-md"
                      >
                        <span>VISIT LIVE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 pt-10 p-6 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-space-grid opacity-20 pointer-events-none" />
                    <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#94A3B8] pt-2">
                      <span className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>ENTERPRISE ARCHITECTURE // EDGE</span>
                      </span>
                      <span className="text-[#FBBF24]">TLS 1.3 / HTTP/3</span>
                    </div>

                    <div className="relative z-10 my-auto py-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#0B0C10]/90 border border-[#FFFBEB]/[0.08] backdrop-blur-md">
                        <span className="block text-2xl font-black text-[#FDE047] font-sans">99.98%</span>
                        <span className="block text-[10px] font-mono text-[#CBD5E1]/70 uppercase tracking-wider mt-1">
                          High Availability Uptime
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#0B0C10]/90 border border-[#FFFBEB]/[0.08] backdrop-blur-md">
                        <span className="block text-2xl font-black text-[#F59E0B] font-sans">&lt; 55ms</span>
                        <span className="block text-[10px] font-mono text-[#CBD5E1]/70 uppercase tracking-wider mt-1">
                          Global Edge TTFB
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#0B0C10]/90 border border-[#FFFBEB]/[0.08] backdrop-blur-md">
                        <span className="block text-2xl font-black text-[#EA580C] font-sans">45+</span>
                        <span className="block text-[10px] font-mono text-[#CBD5E1]/70 uppercase tracking-wider mt-1">
                          International Regions
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#FFFBEB]/[0.08] text-[10px] font-mono text-[#94A3B8]">
                      <span>ROUTING: ANYCAST EDGE NETWORK</span>
                      <a
                        href={primaryProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FBBF24] hover:text-white transition-colors flex items-center gap-1 font-bold"
                      >
                        <span>VISIT LIVE WEBSITE</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Case Study Details & Telemetry */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="cyan" size="sm">
                      {primaryProject.primaryCategory}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFBEB] tracking-tight font-sans">
                    {primaryProject.title}
                  </h3>

                  <p className="text-sm text-[#CBD5E1] leading-relaxed font-sans mt-3">
                    {primaryProject.description}
                  </p>
                </div>

                {/* Technologies & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#FFFBEB]/[0.08]">
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

                  <div className="flex items-center gap-3">
                    <a
                      href={primaryProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] text-[#040407] hover:scale-[1.02] shadow-lg shadow-[#F59E0B]/20 transition-all text-xs font-mono font-bold"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* 2. Secondary Showcase Grid (5 Production Client Platforms) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <Card
              key={project.slug}
              variant="interactive"
              spotlight={true}
              spotlightColor="rgba(245, 158, 11, 0.12)"
              withReticles={true}
              className="p-5 sm:p-6 bg-[#0B0C10]/80 backdrop-blur-xl border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/40 rounded-2xl flex flex-col justify-between shadow-xl shadow-[#040407]/60 group transition-all duration-300"
            >
              <div>
                {/* Browser-Style Top Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#FFFBEB]/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#FBBF24] hover:text-white transition-colors font-semibold tracking-wider flex items-center gap-1"
                    >
                      <span>{project.domainUrl}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  </div>

                  <span className="text-[10px] font-mono text-[#CBD5E1]/60 uppercase tracking-widest px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                    {project.badgeLabel}
                  </span>
                </div>

                {/* Screenshot Visual Thumbnail - clicking opens live website */}
                {project.heroImage && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-44 sm:h-52 rounded-xl overflow-hidden mb-4 border border-[#FFFBEB]/[0.08] relative group-hover:border-[#F59E0B]/30 transition-all bg-[#040407] group/thumb cursor-pointer"
                    aria-label={`Visit live website ${project.title}`}
                  >
                    <img
                      src={project.heroImage}
                      alt={`${project.title} interface preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#F59E0B] text-black font-mono font-bold text-[11px] flex items-center gap-1.5 shadow-xl">
                        <span>OPEN LIVE SITE</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </a>
                )}

                {/* Title & Category */}
                <div className="mb-2.5">
                  <span className="text-[10px] font-mono text-[#F59E0B] uppercase tracking-wider block mb-1">
                    {project.primaryCategory}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FFFBEB] tracking-tight group-hover:text-[#F59E0B] transition-colors">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F59E0B] transition-colors inline-flex items-center gap-2"
                    >
                      <span>{project.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 text-[#FBBF24]" />
                    </a>
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#CBD5E1]/80 leading-relaxed font-sans mb-5">
                  {project.shortDescription}
                </p>
              </div>

              {/* Bottom Actions & Tech Stack */}
              <div className="pt-3 border-t border-[#FFFBEB]/[0.08] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-[#CBD5E1]/70 bg-[#040407] border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold text-[#FBBF24] hover:text-white bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 border border-[#F59E0B]/30 hover:border-[#FBBF24]/60 transition-all"
                      aria-label={`Visit live website for ${project.title}`}
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA to Full Portfolio */}
        <div className="mt-12 p-8 rounded-2xl bg-[#0B0C10]/80 border border-[#F59E0B]/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#FBBF24] shrink-0">
              <Globe className="w-6 h-6 animate-[spin_20s_linear_infinite]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#FFFBEB]">Looking for our full client showcase?</h4>
              <p className="text-xs sm:text-sm text-[#CBD5E1]/80 mt-0.5">
                Explore all 6 deployed platforms across enterprise logistics, edtech, creative 3D web, and SaaS.
              </p>
            </div>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#040407] bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] shadow-lg shadow-[#F59E0B]/30 hover:shadow-[#FBBF24]/50 hover:scale-[1.02] transition-all shrink-0 cursor-pointer"
          >
            <span>Explore Portfolio (6 Projects)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedWorkSection;
