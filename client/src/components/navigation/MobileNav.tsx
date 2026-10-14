import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MobileAccordion } from './MobileAccordion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { StarField } from '@/components/atmosphere/StarField';
import { NebulaLayer } from '@/components/atmosphere/NebulaLayer';
import { GridOverlay } from '@/components/atmosphere/GridOverlay';
import {
  SERVICES_CATEGORIES,
  SOLUTIONS_ITEMS,
  ABOUT_DROPDOWN_ITEMS,
  INSIGHTS_DROPDOWN_ITEMS,
} from './navigationConfig';
import { Menu, X, ArrowRight, Compass } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Close when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger / Close Button */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.1] text-slate-200 hover:text-white hover:border-amber-500/40 focus-ring cursor-pointer transition-colors"
      >
        {isOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.25 }}
            className="fixed inset-0 top-16 z-50 bg-[#040407] overflow-y-auto flex flex-col justify-between"
          >
            {/* Ambient Background Layers */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <NebulaLayer intensity="moderate" />
              <GridOverlay opacity={0.03} />
              <StarField count={35} />
            </div>

            {/* Menu Content */}
            <div className="relative z-10 p-6 space-y-4 max-w-lg mx-auto w-full">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#FFFBEB]/[0.08]">
                <Badge variant="cyan" withDot pulseDot>
                  Mission Menu
                </Badge>
                <span className="text-[11px] font-mono text-[#FFFBEB]/50">
                  BYTHAWK.UK
                </span>
              </div>

              {/* Direct Link: HOME */}
              <div className="border-b border-[#FFFBEB]/[0.06] py-3">
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base font-bold font-sans tracking-tight block py-1 focus-ring rounded ${
                      isActive ? 'text-[#F59E0B]' : 'text-[#FFFBEB] hover:text-[#FBBF24]'
                    }`
                  }
                >
                  Home
                </NavLink>
              </div>

              {/* Accordion 1: SERVICES */}
              <MobileAccordion title="Services" badge="6 Core">
                <div className="space-y-4 pt-1">
                  {SERVICES_CATEGORIES.map((category) => (
                    <div key={category.id} className="p-3 rounded-lg bg-[#FFFBEB]/[0.02] border border-[#FFFBEB]/[0.04]">
                      <Link
                        to={category.href}
                        onClick={closeMenu}
                        className="text-xs font-mono font-bold tracking-wider text-[#F59E0B] hover:text-[#FBBF24] block mb-1.5 focus-ring rounded"
                      >
                        {category.title} &rarr;
                      </Link>
                      <p className="text-[11px] text-[#FFFBEB]/70 mb-2 font-sans">
                        {category.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-1">
                        {category.items.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={closeMenu}
                            className="text-xs text-[#FFFBEB]/80 hover:text-[#FFFBEB] py-1 flex items-center gap-1.5 focus-ring rounded"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </MobileAccordion>

              {/* Accordion 2: SOLUTIONS */}
              <MobileAccordion title="Solutions" badge="Business">
                <div className="space-y-2 pt-1">
                  {SOLUTIONS_ITEMS.map((solution) => (
                    <Link
                      key={solution.id}
                      to={solution.href}
                      onClick={closeMenu}
                      className="p-3 rounded-lg bg-[#FFFBEB]/[0.02] border border-[#FFFBEB]/[0.04] block hover:border-[#F59E0B]/40 focus-ring"
                    >
                      <span className="font-mono text-xs font-bold text-[#FFFBEB] block mb-1">
                        {solution.title}
                      </span>
                      <p className="text-[11px] text-[#FFFBEB]/70 leading-snug">
                        {solution.tagline}
                      </p>
                    </Link>
                  ))}
                </div>
              </MobileAccordion>

              {/* Direct Link: WORK */}
              <div className="border-b border-[#FFFBEB]/[0.06] py-3">
                <NavLink
                  to="/work"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base font-bold font-sans tracking-tight block py-1 focus-ring rounded ${
                      isActive ? 'text-[#F59E0B]' : 'text-[#FFFBEB] hover:text-[#FBBF24]'
                    }`
                  }
                >
                  Work
                </NavLink>
              </div>

              {/* Accordion 3: ABOUT */}
              <MobileAccordion title="About">
                <div className="space-y-2 pt-1">
                  {ABOUT_DROPDOWN_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMenu}
                      className="p-2.5 rounded-lg bg-[#FFFBEB]/[0.02] block text-xs font-semibold text-[#FFFBEB] hover:text-[#F59E0B] focus-ring"
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#D97706]/10 text-[#FBBF24] border border-[#D97706]/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-[11px] text-[#FFFBEB]/70 mt-0.5 font-normal">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </MobileAccordion>

              {/* Accordion 4: INSIGHTS */}
              <MobileAccordion title="Insights">
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {INSIGHTS_DROPDOWN_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMenu}
                      className="p-2 rounded-lg bg-[#FFFBEB]/[0.02] text-xs font-medium text-[#FFFBEB]/80 hover:text-[#FFFBEB] focus-ring truncate"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </MobileAccordion>

              {/* Direct Link: CONTACT */}
              <div className="border-b border-[#FFFBEB]/[0.06] py-3">
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base font-bold font-sans tracking-tight block py-1 focus-ring rounded ${
                      isActive ? 'text-[#F59E0B]' : 'text-[#FFFBEB] hover:text-[#FBBF24]'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Mobile Footer CTA */}
            <div className="relative z-10 p-6 border-t border-[#FFFBEB]/[0.08] bg-[#040407]/90 mt-6 max-w-lg mx-auto w-full space-y-3">
              <Link to="/contact" onClick={closeMenu} className="block w-full">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Let's Talk
                </Button>
              </Link>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#FFFBEB]/50 pt-1">
                <span>London, United Kingdom</span>
                <span className="text-[#F59E0B]">bythawk.uk</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
