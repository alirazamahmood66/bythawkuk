import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface MobileAccordionProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const MobileAccordion: React.FC<MobileAccordionProps> = ({
  title,
  badge,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="border-b border-white/[0.06] last:border-b-0 py-2">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-3 text-left focus-ring rounded-lg cursor-pointer select-none"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-base font-bold text-white font-sans tracking-tight">
            {title}
          </span>
          {badge && (
            <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              {badge}
            </span>
          )}
        </div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.03] text-slate-400">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-cyan-400' : ''
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: shouldReduceMotion ? 0.01 : 0.25, ease: 'easeOut' },
                opacity: { duration: shouldReduceMotion ? 0.01 : 0.2 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: shouldReduceMotion ? 0.01 : 0.2, ease: 'easeIn' },
                opacity: { duration: shouldReduceMotion ? 0.01 : 0.15 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-1 pl-2 space-y-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
