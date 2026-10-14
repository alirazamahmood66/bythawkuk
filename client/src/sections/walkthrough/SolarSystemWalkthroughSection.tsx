import React, { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { WalkthroughSolarCanvas } from '@/3d/canvas/WalkthroughSolarCanvas';
import { HeroCard, ServiceStationCard, SERVICE_STATIONS } from './WalkthroughCards';
import { OrbitalStationTracker } from './OrbitalStationTracker';
import { WhyBythawkSection } from '../WhyBythawkSection';
import { ProcessSection } from '../ProcessSection';
import { TechnologySection } from '../TechnologySection';
import { TestimonialsSection } from '../TestimonialsSection';
import { InsightsHomeSection } from '../InsightsHomeSection';
import { FinalCtaSection } from '../FinalCtaSection';

interface FloatingCardProps {
  side: 'left' | 'right';
  active: boolean;
  children: React.ReactNode;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ side, active, children }) => {
  return (
    <div
      className={`absolute inset-0 flex items-end md:items-center px-4 md:px-12 lg:px-20 pb-16 md:pb-0 pt-20 pointer-events-none transition-all duration-700 ease-out ${
        side === 'right' ? 'justify-end' : 'justify-start'
      } ${
        active
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-8 scale-[0.96] pointer-events-none'
      }`}
    >
      <div className="w-full max-w-[420px]">
        {children}
      </div>
    </div>
  );
};

export const SolarSystemWalkthroughSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeStation, setActiveStation] = useState(0);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgress(latest);
    const centers = [0.04, 0.22, 0.38, 0.54, 0.7, 0.85, 0.97];
    let best = 0;
    let bd = Infinity;
    centers.forEach((c, i) => {
      const d = Math.abs(latest - c);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    setActiveStation(best);
  });

  const handleSelectStation = (index: number) => {
    if (!trackRef.current) return;
    const centers = [0.04, 0.22, 0.38, 0.54, 0.7, 0.85, 0.97];
    const top = trackRef.current.getBoundingClientRect().top + window.scrollY;
    const h = trackRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + centers[index] * h, behavior: 'smooth' });
  };

  return (
    <>
      <div ref={trackRef} className="relative h-[700vh] w-full bg-[#040407]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* 3D solar system */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <WalkthroughSolarCanvas scrollProgress={progress} />
          </div>

          {/* readability vignette */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(4, 4, 7, 0.55)_100%)]" />

          {/* cards */}
          <div className="absolute inset-0 z-20">
            <FloatingCard side="left" active={activeStation === 0}>
              <HeroCard />
            </FloatingCard>
            {SERVICE_STATIONS.map((s, i) => (
              <FloatingCard
                key={s.planet}
                side={i % 2 === 0 ? 'right' : 'left'}
                active={activeStation === i + 1}
              >
                <ServiceStationCard s={s} />
              </FloatingCard>
            ))}
          </div>

          <OrbitalStationTracker activeStation={activeStation} onSelectStation={handleSelectStation} />
        </div>
      </div>

      {/* Rest of the homepage continues below the tour */}
      <div className="relative z-10 bg-[#040407]">
        <WhyBythawkSection />
        <ProcessSection />
        <TechnologySection />
        <TestimonialsSection />
        <InsightsHomeSection />
        <FinalCtaSection />
      </div>
    </>
  );
};

export default SolarSystemWalkthroughSection;
