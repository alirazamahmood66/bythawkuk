import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none pt-3 sm:pt-4 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`pointer-events-auto rounded-full transition-all duration-300 flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 ${
            scrolled
              ? 'bg-[#0B0C10]/90 backdrop-blur-xl border border-[#FFFBEB]/[0.12] shadow-2xl shadow-[#040407]/60'
              : 'bg-[#0B0C10]/75 backdrop-blur-md border border-[#FFFBEB]/[0.08] shadow-xl shadow-[#040407]/40'
          }`}
        >
          {/* LEFT: Standalone 3D Solar Gold Logo */}
          <Link
            to="/"
            className="flex items-center group focus-ring rounded-xl py-1 px-1"
            aria-label="VTuber Design Homepage"
          >
            <img
              src="/images/logo/vtuber-design-emblem.png"
              alt="VTuber Design"
              className="h-10 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(245,158,11,0.35)] group-hover:scale-105 group-hover:drop-shadow-[0_2px_16px_rgba(245,158,11,0.55)] transition-all duration-200"
            />
          </Link>

          {/* CENTER: Desktop Main Navigation */}
          <DesktopNav />

          {/* RIGHT: CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-2.5">
            <Link to="/contact" className="hidden lg:inline-flex">
              <Button
                variant="primary"
                size="sm"
                className="rounded-full font-bold text-xs tracking-wide px-5 py-2 bg-gradient-to-r from-[#FBBF24] to-[#D97706] text-[#040407] shadow-lg shadow-[#F59E0B]/25 hover:shadow-[#FBBF24]/40 border-0"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get Started
              </Button>
            </Link>

            {/* Mobile / Tablet Hamburger Toggle */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
