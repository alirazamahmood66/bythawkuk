import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { SOLUTIONS_ITEMS } from './navigationConfig';
import { cinematicEasing } from '@/utils/motion';
import { ArrowUpRight, X, Sparkles } from 'lucide-react';

interface SolutionsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SolutionsMegaMenu: React.FC<SolutionsMegaMenuProps> = ({
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
        duration: shouldReduceMotion ? 0.01 : 0.3,
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
          aria-label="Solutions Navigation Menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-x-0 top-[76px] z-40 pointer-events-auto bg-[#030712]/95 backdrop-blur-2xl border-t border-b border-white/[0.08] shadow-2xl shadow-black/80 py-8"
        >
          <Container size="xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <Badge variant="violet" withDot>
                  Agency Solutions
                </Badge>
                <span className="text-white font-bold text-base tracking-tight">
                  TARGETED BUSINESS OUTCOMES
                </span>
                <span className="hidden sm:inline text-white/20">&bull;</span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Strategic blueprints designed for rapid commercial velocity.
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-lg border border-white/10 hover:border-violet-500/40 bg-white/[0.02] focus-ring transition-colors cursor-pointer"
                aria-label="Close Solutions Menu"
              >
                <X className="w-3.5 h-3.5" />
                <span className="font-mono text-[11px] uppercase tracking-wider hidden sm:inline">Close</span>
              </button>
            </div>

            {/* 2x3 Grid of Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SOLUTIONS_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={onClose}
                  className="group relative p-5 rounded-xl bg-[#0b1329]/60 hover:bg-[#101c3d]/70 border border-white/[0.08] hover:border-violet-500/40 transition-all duration-200 shadow-md focus-ring overflow-hidden flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold tracking-wider text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </span>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center bg-white/[0.04] group-hover:bg-violet-500/20 text-slate-400 group-hover:text-violet-300 transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.tagline}
                  </p>
                </Link>
              ))}
            </div>

            {/* Bottom Link */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <Link
                to="/solutions"
                onClick={onClose}
                className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 focus-ring rounded"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>View All Custom Solution Frameworks &rarr;</span>
              </Link>
              <span className="hidden sm:inline text-slate-500 text-[11px]">
                Tailored engineering architectures for UK enterprises
              </span>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
