import React, { useEffect } from 'react';
import { TERMS_DATA } from '@/data/legalData';
import { LegalLayout } from '@/components/legal';
import { applySeo } from '@/utils/seo';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Terms & Conditions | Bythawk',
      description:
        'Terms and conditions governing the use of the Bythawk digital agency website and project enquiry portal.',
      path: '/terms',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Terms & Conditions | Bythawk',
        description:
          'Terms and conditions governing the use of the Bythawk digital agency website and project enquiry portal.',
        url: 'https://bythawk.uk/terms',
        provider: {
          '@type': 'Organization',
          name: 'BYTHAWK',
          url: 'https://bythawk.uk',
        },
      },
    });
  }, []);

  return <LegalLayout document={TERMS_DATA} />;
};
