import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { DropdownItem } from './navigationConfig';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';

import type { Variants } from 'framer-motion';

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: DropdownItem[];
  title?: string;
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  onClose,
  items,
  title,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const dropdownVariants: Variants = {
    closed: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -6,
      scale: 0.98,
      transition: { duration: 0.15 },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          role="menu"
          aria-orientation="vertical"
          initial="closed"
          animate="open"
          exit="closed"
          variants={dropdownVariants}
          className={`absolute top-full mt-2 w-80 rounded-xl bg-[#0B0C10]/95 backdrop-blur-xl border border-white/[0.1] shadow-2xl shadow-black/80 py-2 z-50 overflow-hidden ${className}`}
        >
          {title && (
            <div className="px-4 py-2 border-b border-white/[0.06] mb-1">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                {title}
              </span>
            </div>
          )}

          <div className="px-1.5 space-y-0.5">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                role="menuitem"
                className="group flex flex-col p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors focus-ring"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 transition-colors font-sans">
                    {item.title}
                  </span>
                  {item.badge ? (
                    <Badge variant="emerald" size="sm" withDot>
                      {item.badge}
                    </Badge>
                  ) : (
                    <ArrowRight className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-amber-400" />
                  )}
                </div>
                {item.description && (
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-sans">
                    {item.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
