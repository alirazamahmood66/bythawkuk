import React, { useEffect } from 'react';
import { COOKIE_POLICY_DATA } from '@/data/legalData';
import { LegalLayout } from '@/components/legal';
import { applySeo } from '@/utils/seo';

export const CookiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Cookie Policy | VTuber Design',
      description:
        'Learn about essential browser storage technologies used on vtuberdesign.co.au to provide secure and responsive digital experiences.',
      path: '/cookies',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Cookie Policy | VTuber Design',
        description:
          'Learn about essential browser storage technologies used on vtuberdesign.co.au to provide secure and responsive digital experiences.',
        url: 'https://vtuberdesign.co.au/cookies',
        provider: {
          '@type': 'Organization',
          name: 'VTUBER DESIGN',
          url: 'https://vtuberdesign.co.au',
        },
      },
    });
  }, []);

  return <LegalLayout document={COOKIE_POLICY_DATA} />;
};
