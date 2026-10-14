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
          className={`pointer-events-auto rounded-full transition-all duration-300 flex h-14 items-center justify-between px-4 sm:px-6 ${
            scrolled
              ? 'bg-[#061F25]/90 backdrop-blur-xl border border-[#E8FFFC]/[0.12] shadow-2xl shadow-[#001119]/60'
              : 'bg-[#061F25]/75 backdrop-blur-md border border-[#E8FFFC]/[0.08] shadow-xl shadow-[#001119]/40'
          }`}
        >
          {/* LEFT: Clean BYTHAWK Logo / Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-ring rounded-full py-1 px-1.5"
            aria-label="BYTHAWK Agency Homepage"
          >
            {/* Precision Monogram */}
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#23F7DB] via-[#30F1BE] to-[#04A37B] flex items-center justify-center font-bold text-[#001119] text-sm shadow-md shadow-[#23F7DB]/25 group-hover:scale-105 transition-transform duration-200">
              B
            </div>

            {/* Wordmark & UK Telemetry */}
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-[#E8FFFC] text-sm sm:text-base uppercase leading-none font-sans">
                BYTHAWK
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-widest text-[#30F1BE] font-mono font-medium leading-tight">
                DIGITAL STUDIO &bull; UK
              </span>
            </div>
          </Link>

          {/* CENTER: Desktop Main Navigation */}
          <DesktopNav />

          {/* RIGHT: CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-2.5">
            <Link to="/contact" className="hidden lg:inline-flex">
              <Button
                variant="primary"
                size="sm"
                className="rounded-full font-bold text-xs tracking-wide px-5 py-2 shadow-lg shadow-[#23F7DB]/20 hover:shadow-[#30F1BE]/30"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Let's Talk
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
