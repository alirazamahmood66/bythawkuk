import React, { useEffect } from 'react';
import { COOKIE_POLICY_DATA } from '@/data/legalData';
import { LegalLayout } from '@/components/legal';
import { applySeo } from '@/utils/seo';

export const CookiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Cookie Policy | Bythawk',
      description:
        'Learn about essential browser storage technologies used on Bythawk.uk to provide secure and responsive digital experiences.',
      path: '/cookies',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Cookie Policy | Bythawk',
        description:
          'Learn about essential browser storage technologies used on Bythawk.uk to provide secure and responsive digital experiences.',
        url: 'https://bythawk.uk/cookies',
        provider: {
          '@type': 'Organization',
          name: 'BYTHAWK',
          url: 'https://bythawk.uk',
        },
      },
    });
  }, []);

  return <LegalLayout document={COOKIE_POLICY_DATA} />;
};
