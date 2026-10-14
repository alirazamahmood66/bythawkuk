import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { IconButton } from '@/components/ui/IconButton';
import { Card } from '@/components/ui/Card';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { SpaceBackground } from '@/components/atmosphere/SpaceBackground';
import { OrbitalDecoration } from '@/components/atmosphere/OrbitalDecoration';
import { PageTransition } from '@/components/transitions/PageTransition';
import { colors, spacing } from '@/styles/tokens';
import { applySeo } from '@/utils/seo';
import { ArrowRight, Compass, Sparkles, Terminal, Shield, Zap, ExternalLink } from 'lucide-react';

export const DesignSystemPage: React.FC = () => {
  const [atmStars, setAtmStars] = useState(true);
  const [atmNebula, setAtmNebula] = useState(true);
  const [atmGrid, setAtmGrid] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    return applySeo({
      title: 'Design System & Visual Tokens | Bythawk',
      description: 'Internal design system and visual component tokens for Bythawk.',
      path: '/design-system',
      robots: 'noindex, nofollow',
    });
  }, []);

  return (
    <PageTransition>
      <SpaceBackground
        showStars={atmStars}
        showNebula={atmNebula}
        showGrid={atmGrid}
        glowPosition="top-center"
      >
        {/* Header Overview */}
        <Section spacingVariant="compact" hasBorderBottom>
          <Container size="xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="cyan" withDot pulseDot>
                    Phase 2 Active
                  </Badge>
                  <Badge variant="neutral">BYTHAWK.UK Design Tokens</Badge>
                </div>
                <h1 className="heading-1 text-white">
                  Visual Foundation & <span className="text-cyan-400">Design System</span>
                </h1>
                <p className="text-lead mt-3 text-slate-400 max-w-3xl">
                  Centralized token architecture, cinematic typography, dark glass depth, atmospheric
                  space primitives, and accessible interactive components.
                </p>
              </div>

              {/* Atmosphere Controls for Testing */}
              <GlassPanel depth="elevated" className="p-4 border-cyan-500/20 shrink-0">
                <span className="text-mono-label block mb-2">Atmosphere Toggles</span>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant={atmStars ? 'primary' : 'secondary'}
                    onClick={() => setAtmStars(!atmStars)}
                  >
                    Stars {atmStars ? 'ON' : 'OFF'}
                  </Button>
                  <Button
                    size="sm"
                    variant={atmNebula ? 'primary' : 'secondary'}
                    onClick={() => setAtmNebula(!atmNebula)}
                  >
                    Nebula {atmNebula ? 'ON' : 'OFF'}
                  </Button>
                  <Button
                    size="sm"
                    variant={atmGrid ? 'primary' : 'secondary'}
                    onClick={() => setAtmGrid(!atmGrid)}
                  >
                    Grid {atmGrid ? 'ON' : 'OFF'}
                  </Button>
                </div>
              </GlassPanel>
            </div>
          </Container>
        </Section>

        {/* 1. Color Palette Tokens */}
        <Section spacingVariant="standard" hasBorderBottom>
          <Container size="xl">
            <SectionHeading
              eyebrow="SYSTEM // 01"
              title="Color Tokens &"
              highlight="Deep Space Environment"
              description="Near-black void baselines, subtle navy surfaces, precision micro-borders, and disciplined electric cyan / cosmic violet accents."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Background tokens */}
              <Card className="p-5 flex flex-col justify-between">
                <div>
                  <span className="text-mono-label text-slate-400">Environment</span>
                  <h3 className="text-white font-semibold text-base mt-1">Deep Cosmic Void</h3>
                </div>
                <div className="h-16 rounded-lg bg-[#030712] border border-white/10 my-4 flex items-center justify-center font-mono text-xs text-slate-500">
                  {colors.background.deep}
                </div>
                <span className="text-xs text-slate-400">Base application backdrop</span>
              </Card>

              <Card className="p-5 flex flex-col justify-between">
                <div>
                  <span className="text-mono-label text-slate-400">Environment</span>
                  <h3 className="text-white font-semibold text-base mt-1">Space Navy Surface</h3>
                </div>
                <div className="h-16 rounded-lg bg-[#0b1329] border border-white/10 my-4 flex items-center justify-center font-mono text-xs text-slate-400">
                  {colors.background.surface}
                </div>
                <span className="text-xs text-slate-400">Standard card & panel surface</span>
              </Card>

              {/* Accent Cyan */}
              <Card className="p-5 flex flex-col justify-between">
                <div>
                  <span className="text-mono-label text-cyan-400">Primary Accent</span>
                  <h3 className="text-white font-semibold text-base mt-1">Electric Cyan</h3>
                </div>
                <div className="h-16 rounded-lg bg-cyan-500 my-4 flex items-center justify-center font-mono text-xs text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  {colors.accent.cyan}
                </div>
                <span className="text-xs text-slate-400">High-priority actions & key indicators</span>
              </Card>

              {/* Accent Violet */}
              <Card className="p-5 flex flex-col justify-between">
                <div>
                  <span className="text-mono-label text-violet-400">Secondary Accent</span>
                  <h3 className="text-white font-semibold text-base mt-1">Cosmic Violet</h3>
                </div>
                <div className="h-16 rounded-lg bg-violet-600 my-4 flex items-center justify-center font-mono text-xs text-white font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  {colors.accent.violet}
                </div>
                <span className="text-xs text-slate-400">Creative depth, gradients & highlights</span>
              </Card>
            </div>
          </Container>
        </Section>

        {/* 2. Typography System */}
        <Section spacingVariant="standard" hasBorderBottom>
          <Container size="xl">
            <SectionHeading
              eyebrow="SYSTEM // 02"
              title="Cinematic"
              highlight="Typography Scale"
              description="Engineered with Plus Jakarta Sans and JetBrains Mono for a blend of futuristic cinematic elegance and digital precision."
            />

            <div className="space-y-8">
              <Card className="p-8">
                <span className="text-mono-label block mb-2">Display Heading</span>
                <p className="heading-display mb-4">
                  Engineering The Next <span className="text-cyan-400">Digital Frontier.</span>
                </p>
                <div className="flex gap-4 text-xs font-mono text-slate-500 border-t border-white/5 pt-3">
                  <span>Class: .heading-display</span>
                  <span>Weight: 800</span>
                  <span>Tracking: -0.04em</span>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <span className="text-mono-label block mb-2">Heading 1 & 2</span>
                  <p className="heading-1 mb-2">Pioneering UK Agency</p>
                  <p className="heading-2 text-cyan-300">Intelligent Digital Systems</p>
                </Card>

                <Card className="p-6">
                  <span className="text-mono-label block mb-2">Heading 3 & Lead Text</span>
                  <p className="heading-3 mb-2">Scalable Planetary Architecture</p>
                  <p className="text-lead text-slate-400">
                    Precision engineering for mission-critical web applications, enterprise cloud
                    infrastructure, and immersive 3D digital experiences.
                  </p>
                </Card>
              </div>

              {/* Animated Text Reveal Example */}
              <Card className="p-6 border-cyan-500/20">
                <span className="text-mono-label block mb-3">Kinetic Typography Reveal (Reduced-Motion Aware)</span>
                <div className="text-xl sm:text-2xl font-semibold text-white">
                  <AnimatedText text="Precision execution meets cinematic planetary exploration." />
                </div>
              </Card>
            </div>
          </Container>
        </Section>

        {/* 3. Button System */}
        <Section spacingVariant="standard" hasBorderBottom>
          <Container size="xl">
            <SectionHeading
              eyebrow="SYSTEM // 03"
              title="Button"
              highlight="Interactive Hierarchy"
              description="Tactile interactive states, restrained glowing contours, keyboard focus outlines, and semantic variants."
            />

            <div className="space-y-6">
              {/* Core Button Variants */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center space-y-4">
                  <span className="text-mono-label block">Primary Action</span>
                  <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Let's Talk
                  </Button>
                  <p className="text-xs text-slate-400">High-contrast solid cyan with glow</p>
                </Card>

                <Card className="p-6 text-center space-y-4">
                  <span className="text-mono-label block">Secondary Action</span>
                  <Button variant="secondary" rightIcon={<Compass className="w-4 h-4" />}>
                    Explore Services
                  </Button>
                  <p className="text-xs text-slate-400">Refined space-navy surface with micro-border</p>
                </Card>

                <Card className="p-6 text-center space-y-4">
                  <span className="text-mono-label block">Ghost Action</span>
                  <Button variant="ghost" rightIcon={<ExternalLink className="w-4 h-4" />}>
                    View Project
                  </Button>
                  <p className="text-xs text-slate-400">Minimalist borderless with hover surface</p>
                </Card>

                <Card className="p-6 text-center space-y-4">
                  <span className="text-mono-label block">Special Hero CTA</span>
                  <Button variant="special" rightIcon={<Sparkles className="w-4 h-4" />}>
                    Launch Your Project
                  </Button>
                  <p className="text-xs text-slate-400">Cinematic orbital gradient with shimmer</p>
                </Card>
              </div>

              {/* Button Sizes & Interactive States */}
              <Card className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm" variant="secondary">Small</Button>
                    <Button size="md" variant="secondary">Medium</Button>
                    <Button size="lg" variant="secondary">Large</Button>
                    <Button
                      variant="primary"
                      isLoading={buttonLoading}
                      onClick={() => setButtonLoading(!buttonLoading)}
                    >
                      {buttonLoading ? 'Processing...' : 'Toggle Loading State'}
                    </Button>
                    <Button variant="secondary" disabled>Disabled State</Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <IconButton aria-label="Terminal telemetry" variant="primary">
                      <Terminal className="w-4 h-4" />
                    </IconButton>
                    <IconButton aria-label="Security check" variant="secondary">
                      <Shield className="w-4 h-4" />
                    </IconButton>
                    <IconButton aria-label="Energy power" variant="glass">
                      <Zap className="w-4 h-4" />
                    </IconButton>
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </Section>

        {/* 4. Glass & Depth Panel System */}
        <Section spacingVariant="standard" hasBorderBottom>
          <Container size="xl">
            <SectionHeading
              eyebrow="SYSTEM // 04"
              title="Glass &"
              highlight="Depth Hierarchy"
              description="A multi-layered elevation model utilizing dark glass, precision micro-borders, and restrained glowing contours."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default">
                <span className="text-mono-label text-slate-400 block mb-2">Default Glass</span>
                <h4 className="text-white font-semibold text-lg mb-2">Glass Panel</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  12px backdrop blur over dark navy glass with 8% white precision border.
                </p>
              </Card>

              <Card variant="interactive">
                <span className="text-mono-label text-cyan-400 block mb-2">Interactive Glass</span>
                <h4 className="text-white font-semibold text-lg mb-2">Interactive Hover Panel</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Elevates on hover with a smooth Y-translation and subtle electric cyan glow border.
                </p>
              </Card>

              <Card variant="elevated">
                <span className="text-mono-label text-violet-400 block mb-2">Elevated Depth</span>
                <h4 className="text-white font-semibold text-lg mb-2">Elevated Surface</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  16px backdrop blur with deeper ambient drop-shadow for overlays, drawers, and modal contexts.
                </p>
              </Card>

              <Card variant="glowCyan">
                <span className="text-mono-label text-cyan-300 block mb-2">Glow Panel Cyan</span>
                <h4 className="text-white font-semibold text-lg mb-2">Radial Cyan Glow</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Subtle internal cyan radiance designed for mission milestones and active telemetry.
                </p>
              </Card>

              <Card variant="glowViolet">
                <span className="text-mono-label text-violet-300 block mb-2">Glow Panel Violet</span>
                <h4 className="text-white font-semibold text-lg mb-2">Radial Violet Glow</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Atmospheric violet radiance designed for creative design capabilities and AI features.
                </p>
              </Card>

              <Card variant="bordered">
                <span className="text-mono-label text-slate-400 block mb-2">Technical Frame</span>
                <h4 className="text-white font-semibold text-lg mb-2">Bordered Panel</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  High-contrast minimal border container for dense telemetry tables and data specs.
                </p>
              </Card>
            </div>
          </Container>
        </Section>

        {/* 5. Telemetry Badges & Dividers */}
        <Section spacingVariant="standard">
          <Container size="xl">
            <SectionHeading
              eyebrow="SYSTEM // 05"
              title="Telemetry Badges &"
              highlight="Precision Dividers"
              description="Micro-indicators for agency capability status, technical coordinates, and structural dividing rules."
            />

            <div className="space-y-8">
              <Card className="p-6">
                <span className="text-mono-label block mb-4">Badge Matrix</span>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="cyan" withDot pulseDot>System Online</Badge>
                  <Badge variant="violet" withDot>AI Intelligence</Badge>
                  <Badge variant="emerald" withDot>Database Active</Badge>
                  <Badge variant="amber" withDot>In Progress</Badge>
                  <Badge variant="neutral">Architecture v1.0</Badge>
                  <Badge variant="outline">UK Domain</Badge>
                </div>
              </Card>

              <div className="space-y-4">
                <span className="text-mono-label block">Divider Styles</span>
                <Divider variant="subtle" />
                <Divider variant="gradient" label="Atmospheric Boundary" withNode />
                <Divider variant="dashed" />
                <Divider variant="accent" label="Orbital Vector" withNode />
              </div>
            </div>
          </Container>
        </Section>
      </SpaceBackground>
    </PageTransition>
  );
};
