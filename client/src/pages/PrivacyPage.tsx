import React, { useEffect } from 'react';
import { PRIVACY_POLICY_DATA } from '@/data/legalData';
import { LegalLayout } from '@/components/legal';
import { applySeo } from '@/utils/seo';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Privacy Policy | Bythawk',
      description:
        'Understand how Bythawk processes and safeguards information submitted through our website and project enquiry form.',
      path: '/privacy',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy | Bythawk',
        description:
          'Understand how Bythawk processes and safeguards information submitted through our website and project enquiry form.',
        url: 'https://bythawk.uk/privacy',
        provider: {
          '@type': 'Organization',
          name: 'BYTHAWK',
          url: 'https://bythawk.uk',
        },
      },
    });
  }, []);

  return <LegalLayout document={PRIVACY_POLICY_DATA} />;
};
