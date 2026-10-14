import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SpaceBackground } from '@/components/atmosphere/SpaceBackground';
import { PageTransition } from '@/components/transitions/PageTransition';
import { ArrowLeft, Compass, Terminal } from 'lucide-react';
import { applySeo } from '@/utils/seo';

interface PlaceholderRoutePageProps {
  title?: string;
  category?: string;
}

export const PlaceholderRoutePage: React.FC<PlaceholderRoutePageProps> = ({
  title,
  category = 'AGENCY ARCHITECTURE',
}) => {
  const location = useLocation();

  useEffect(() => {
    const cleanupSeo = applySeo({
      title: `${title || 'Mission Route'} | Bythawk`,
      description: 'Bythawk agency architecture route node.',
      path: location.pathname,
      robots: 'noindex, nofollow',
    });
    return cleanupSeo;
  }, [title, location.pathname]);

  // Derive readable name from path if title is not explicitly passed
  const displayTitle =
    title ||
    location.pathname
      .replace(/^\//, '')
      .split('/')
      .map((segment) =>
        segment
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      )
      .join(' / ');

  return (
    <PageTransition>
      <SpaceBackground showStars showNebula showGrid showGlow glowPosition="top-center">
        <Section spacingVariant="spacious" className="min-h-[75vh] flex items-center">
          <Container size="md">
            <Card variant="glowCyan" className="p-8 sm:p-12 text-center space-y-6">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
                <Badge variant="cyan" withDot pulseDot>
                  {category}
                </Badge>
                <Badge variant="neutral">
                  Route Active
                </Badge>
              </div>

              <div className="space-y-2">
                <span className="text-mono-label block text-cyan-400">
                  BYTHAWK.UK // TELEMETRY
                </span>
                <h1 className="heading-1 text-white font-sans">
                  {displayTitle || 'Mission Route'}
                </h1>
                <p className="text-sm font-mono text-slate-400">
                  Endpoint: <span className="text-cyan-300">{location.pathname}</span>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#02040a]/80 border border-white/[0.08] max-w-lg mx-auto text-left text-xs font-mono space-y-2 text-slate-400">
                <div className="flex items-center gap-2 text-slate-300 font-semibold border-b border-white/[0.06] pb-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Navigation Verification Node</span>
                </div>
                <p>Status: HTTP 200 OK — Routing established and active.</p>
                <p>Architectural Phase: Phase 3 Navigation System complete.</p>
                <p className="text-slate-500">Dedicated page design scheduled for subsequent build phases.</p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link to="/">
                  <Button variant="secondary" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                    Return to Overview
                  </Button>
                </Link>
                <Link to="/design-system">
                  <Button variant="ghost" size="md" leftIcon={<Compass className="w-4 h-4" />}>
                    View Design Tokens
                  </Button>
                </Link>
              </div>
            </Card>
          </Container>
        </Section>
      </SpaceBackground>
    </PageTransition>
  );
};
