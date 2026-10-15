import React, { useEffect } from 'react';
import { TERMS_DATA } from '@/data/legalData';
import { LegalLayout } from '@/components/legal';
import { applySeo } from '@/utils/seo';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Terms & Conditions | VTuber Design',
      description:
        'Terms and conditions governing the use of the VTuber Design digital agency website and project enquiry portal.',
      path: '/terms',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Terms & Conditions | VTuber Design',
        description:
          'Terms and conditions governing the use of the VTuber Design digital agency website and project enquiry portal.',
        url: 'https://vtuberdesign.co.au/terms',
        provider: {
          '@type': 'Organization',
          name: 'VTUBER DESIGN',
          url: 'https://vtuberdesign.co.au',
        },
      },
    });
  }, []);

  return <LegalLayout document={TERMS_DATA} />;
};
