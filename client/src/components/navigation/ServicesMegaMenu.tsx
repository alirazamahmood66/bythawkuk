import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { MegaMenuSection } from './MegaMenuSection';
import { FeaturedServiceCard } from './FeaturedServiceCard';
import { StarField } from '@/components/atmosphere/StarField';
import { NebulaLayer } from '@/components/atmosphere/NebulaLayer';
import { GridOverlay } from '@/components/atmosphere/GridOverlay';
import { SERVICES_CATEGORIES, FEATURED_SERVICES } from './navigationConfig';
import { cinematicEasing } from '@/utils/motion';
import { ArrowRight, Compass, X } from 'lucide-react';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mega menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -8,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.35,
        ease: cinematicEasing,
      },
    },
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Services Navigation Universe"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-x-0 top-[76px] bottom-0 z-40 pointer-events-auto overflow-y-auto bg-[#020611]/95 backdrop-blur-2xl border-t border-[#FFFBEB]/[0.08] flex flex-col justify-between"
        >
          {/* Atmospheric Background Layers */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <NebulaLayer intensity="moderate" />
            <GridOverlay opacity={0.025} />
            <StarField count={45} />
            {/* Fine Orbital Arc decoration */}
            <div className="absolute -top-32 right-1/4 w-[750px] h-[750px] rounded-full border border-[#F59E0B]/10 pointer-events-none transform -rotate-12 scale-y-50" />
            <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full border border-dashed border-[#FBBF24]/10 pointer-events-none" />
          </div>

          {/* Main Menu Body */}
          <div className="relative z-10 flex-1 py-8 sm:py-10">
            <Container size="xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#FFFBEB]/[0.08]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="cyan" withDot pulseDot>
                      Service Universe
                    </Badge>
                    <span className="text-[#FFFBEB] font-bold text-lg tracking-tight font-sans">
                      CORE CAPABILITIES
                    </span>
                  </div>
                  <span className="hidden sm:inline text-[#FFFBEB]/20">&bull;</span>
                  <span className="text-xs text-[#FFFBEB]/70 font-sans">
                    Digital systems built for ambitious businesses.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex items-center gap-1.5 text-xs text-[#FFFBEB]/70 hover:text-[#FFFBEB] px-2.5 py-1 rounded-lg border border-[#FFFBEB]/10 hover:border-[#F59E0B]/40 bg-[#FFFBEB]/[0.02] focus-ring transition-colors cursor-pointer"
                  aria-label="Close Services Mega Menu"
                >
                  <X className="w-3.5 h-3.5" />
                  <span className="font-mono text-[11px] uppercase tracking-wider hidden sm:inline">Close (Esc)</span>
                </button>
              </div>

              {/* Grid: 6 Categories (Left/Center) + Featured Area (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* 6 Core Categories in a 2-column or 3-column sub-grid */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES_CATEGORIES.map((category) => (
                    <MegaMenuSection
                      key={category.id}
                      category={category}
                      onSelect={onClose}
                    />
                  ))}
                </div>

                {/* Right / Featured Secondary Area */}
                <div className="lg:col-span-4 flex flex-col space-y-4 lg:border-l lg:border-[#FFFBEB]/[0.08] lg:pl-8">
                  <div className="flex items-center justify-between pb-2 border-b border-[#FFFBEB]/[0.06]">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#FFFBEB]/70 uppercase">
                      Featured Capabilities
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245, 158, 11, 0.8)]" />
                  </div>

                  <div className="space-y-4">
                    {FEATURED_SERVICES.map((featured) => (
                      <FeaturedServiceCard
                        key={featured.id}
                        service={featured}
                        onSelect={onClose}
                      />
                    ))}
                  </div>

                  {/* Architecture Advisory Box */}
                  <div className="p-4 rounded-xl bg-[#070D18]/80 border border-[#FFFBEB]/[0.08] text-xs space-y-2 mt-2">
                    <div className="flex items-center gap-1.5 text-[#F59E0B] font-mono text-[11px] font-semibold uppercase">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Custom Architecture</span>
                    </div>
                    <p className="text-[#FFFBEB]/70 text-[11px] leading-relaxed">
                      Need a custom full-stack or planetary digital solution? We engineer tailored technical architectures.
                    </p>
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 text-[#FBBF24] hover:text-[#FFFBEB] font-medium text-[11px] font-mono group pt-1"
                    >
                      <span>Request Technical Consultation</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 border-t border-[#FFFBEB]/[0.08] bg-[#020611]/90 py-4">
            <Container size="xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-6 font-mono text-[#FFFBEB]/70">
                  <Link
                    to="/services"
                    onClick={onClose}
                    className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 focus-ring rounded"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span className="text-[#FFFBEB]/20">&bull;</span>
                  <Link
                    to="/process"
                    onClick={onClose}
                    className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 focus-ring rounded"
                  >
                    <span>View Engineering Process</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="text-[11px] font-mono text-[#FFFBEB]/50">
                  <span>BYTHAWK.UK &bull; Precision Digital Technology Agency</span>
                </div>
              </div>
            </Container>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
