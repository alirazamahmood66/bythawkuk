import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItemProps {
  label: string;
  href?: string;
  isActiveRoute: boolean;
  isOpen: boolean;
  hasDropdown?: boolean;
  onClick: (e: React.MouseEvent) => void;
  id: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  isActiveRoute,
  isOpen,
  hasDropdown = false,
  onClick,
  id,
}) => {
  const commonClasses = `relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none focus-ring ${
    isActiveRoute || isOpen
      ? 'text-amber-300 bg-white/[0.04]'
      : 'text-slate-300 hover:text-white hover:bg-white/[0.02]'
  }`;

  if (hasDropdown) {
    return (
      <button
        type="button"
        id={`nav-button-${id}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`menu-${id}`}
        onClick={onClick}
        className={commonClasses}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-400 ${
            isOpen ? 'rotate-180 text-amber-400' : ''
          }`}
          aria-hidden="true"
        />
        {(isActiveRoute || isOpen) && (
          <span className="sr-only">(Active section)</span>
        )}
      </button>
    );
  }

  return (
    <NavLink
      to={href || '#'}
      onClick={onClick}
      className={({ isActive }) =>
        `${commonClasses} ${isActive ? 'text-amber-300 bg-white/[0.04]' : ''}`
      }
    >
      <span>{label}</span>
    </NavLink>
  );
};
