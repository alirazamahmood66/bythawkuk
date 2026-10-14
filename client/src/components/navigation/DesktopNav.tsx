import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { NavItem } from './NavItem';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { SolutionsMegaMenu } from './SolutionsMegaMenu';
import { DropdownMenu } from './DropdownMenu';
import {
  MAIN_NAV_ITEMS,
  ABOUT_DROPDOWN_ITEMS,
  INSIGHTS_DROPDOWN_ITEMS,
} from './navigationConfig';

export const DesktopNav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  // Click outside to close any open dropdowns or mega menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        // Also check if click is inside the fixed mega menu
        const target = event.target as HTMLElement;
        if (target && target.closest('[role="dialog"]')) {
          return;
        }
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = (menuId: string) => {
    setOpenMenu((prev) => (prev === menuId ? null : menuId));
  };

  const closeMenu = () => setOpenMenu(null);

  // Route awareness helpers
  const isRouteActive = (item: typeof MAIN_NAV_ITEMS[0]) => {
    if (item.type === 'link' && item.href) {
      return location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
    }
    if (item.id === 'services') {
      return location.pathname.startsWith('/services');
    }
    if (item.id === 'solutions') {
      return location.pathname.startsWith('/solutions');
    }
    if (item.id === 'about') {
      return location.pathname === '/about' || location.pathname === '/process' || location.pathname === '/careers';
    }
    if (item.id === 'insights') {
      return location.pathname.startsWith('/insights');
    }
    return false;
  };

  return (
    <div ref={navContainerRef} className="hidden lg:flex items-center gap-1 relative">
      {MAIN_NAV_ITEMS.map((item) => {
        const isOpen = openMenu === item.id;
        const active = isRouteActive(item);

        if (item.type === 'mega-services') {
          return (
            <div key={item.id}>
              <NavItem
                id={item.id}
                label={item.label}
                hasDropdown
                isOpen={isOpen}
                isActiveRoute={active}
                onClick={() => handleToggle(item.id)}
              />
              <ServicesMegaMenu isOpen={isOpen} onClose={closeMenu} />
            </div>
          );
        }

        if (item.type === 'mega-solutions') {
          return (
            <div key={item.id}>
              <NavItem
                id={item.id}
                label={item.label}
                hasDropdown
                isOpen={isOpen}
                isActiveRoute={active}
                onClick={() => handleToggle(item.id)}
              />
              <SolutionsMegaMenu isOpen={isOpen} onClose={closeMenu} />
            </div>
          );
        }

        if (item.type === 'dropdown') {
          return (
            <div key={item.id} className="relative">
              <NavItem
                id={item.id}
                label={item.label}
                hasDropdown
                isOpen={isOpen}
                isActiveRoute={active}
                onClick={() => handleToggle(item.id)}
              />
              <DropdownMenu
                isOpen={isOpen}
                onClose={closeMenu}
                items={
                  item.id === 'about'
                    ? ABOUT_DROPDOWN_ITEMS
                    : INSIGHTS_DROPDOWN_ITEMS
                }
                title={item.id === 'about' ? 'Agency Directory' : 'Insights & Research'}
                className="left-0"
              />
            </div>
          );
        }

        return (
          <NavItem
            key={item.id}
            id={item.id}
            label={item.label}
            href={item.href}
            isActiveRoute={active}
            isOpen={false}
            onClick={closeMenu}
          />
        );
      })}
    </div>
  );
};
