import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { applySeo } from '@/utils/seo';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    return applySeo({
      title: '404 — Orbit Not Found | VTuber Design',
      description: 'The requested page could not be located in the VTuber Design digital universe.',
      path: '/404',
      robots: 'noindex, nofollow',
    });
  }, []);
  return (
    <div className="flex-1 flex items-center justify-center py-16">
      <Container size="sm" className="text-center">
        <div className="text-7xl font-mono font-bold text-amber-400 mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-2">Orbit Not Found</h1>
        <p className="text-slate-400 mb-6">
          The planetary coordinates or resource requested do not exist in the VTUBER DESIGN system.
        </p>
        <Link to="/">
          <Button variant="primary">Return to Mission Control</Button>
        </Link>
      </Container>
    </div>
  );
};
