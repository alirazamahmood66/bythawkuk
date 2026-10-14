import React from 'react';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, Cpu, Gauge, Lock } from 'lucide-react';

export const TrustStripSection: React.FC = () => {
  const metrics = [
    {
      icon: Cpu,
      value: '6 Flagship',
      label: 'Digital Disciplines',
      sublabel: 'Web, Cloud, Apps & Growth',
    },
    {
      icon: ShieldCheck,
      value: '100% UK',
      label: 'Engineering Architecture',
      sublabel: 'London HQ & Strict Governance',
    },
    {
      icon: Gauge,
      value: '< 1s Target',
      label: 'Core Web Vitals',
      sublabel: 'High-Velocity Performance',
    },
    {
      icon: Lock,
      value: 'Zero Tracker',
      label: 'Privacy Overhead',
      sublabel: 'Clean, Secure & Compliant',
    },
  ];

  return (
    <div className="border-y border-white/[0.08] bg-[#071426]/25 backdrop-blur-md relative z-20">
      <Container size="xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="py-5 sm:py-6 px-4 sm:px-8 flex items-center gap-4 transition-colors hover:bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400 shadow-sm shadow-cyan-950/50">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="font-extrabold text-white text-base sm:text-lg tracking-tight font-sans">
                      {item.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-300 truncate font-sans">
                      {item.label}
                    </span>
                  </div>
                  <span className="block text-[11px] font-mono text-slate-400 truncate mt-0.5">
                    {item.sublabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
