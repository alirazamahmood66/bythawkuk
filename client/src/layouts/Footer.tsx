import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#FFFBEB]/[0.08] bg-[#040407] text-slate-400 py-16 relative z-20">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FFFBEB]/[0.06]">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center group focus-ring rounded-lg w-fit" aria-label="VTuber Design Homepage">
              <img
                src="/images/logo/vtuber-design-emblem.png"
                alt="VTuber Design"
                className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_2px_14px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform duration-200"
              />
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-sans">
              Digital technology for ambitious businesses. We engineer high-performance websites, scalable web applications, mobile platforms, and interactive digital ecosystems.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1">
              <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>SYDNEY &bull; MELBOURNE &bull; AUSTRALIA &bull; vtuberdesign.co.au</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFFBEB] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-sans" role="list">
              {[
                { label: 'Services Ecosystem', href: '/services' },
                { label: 'Client Portfolio', href: '/portfolio' },
                { label: 'Why VTuber Design', href: '/about' },
                { label: 'Launch Sequence', href: '/process' },
                { label: 'Research & Insights', href: '/insights' },
                { label: 'Contact Studio', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="hover:text-[#F59E0B] transition-colors focus-ring rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFFBEB] block">
              Governance
            </span>
            <ul className="space-y-2 text-xs font-sans" role="list">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Cookie Policy', href: '/cookies' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'System Design Tokens', href: '/design-system' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="hover:text-[#F59E0B] transition-colors focus-ring rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Box */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white block">
              Engagement
            </span>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Ready to build something built to move?
            </p>
            <Link to="/contact" className="block pt-1">
              <Button
                variant="primary"
                size="sm"
                className="w-full justify-center text-xs font-bold rounded-full bg-gradient-to-r from-[#FBBF24] to-[#D97706] text-[#040407] shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 border-0"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Copyright & Telemetry */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} VTUBER DESIGN. All rights reserved. Australian Digital Technology Studio.
          </div>
          <div className="flex items-center gap-3">
            <span>Domain: vtuberdesign.co.au</span>
            <span>&bull;</span>
            <span className="text-amber-400/80">60 FPS Planetary Simulation Engine</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
