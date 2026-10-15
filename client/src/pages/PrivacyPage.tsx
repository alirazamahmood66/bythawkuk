import React, { useEffect } from 'react';
import { PRIVACY_POLICY_DATA } from '@/data/legalData';
import { LegalLayout } from '@/components/legal';
import { applySeo } from '@/utils/seo';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Privacy Policy | VTuber Design',
      description:
        'Understand how VTuber Design processes and safeguards information submitted through our website and project enquiry form.',
      path: '/privacy',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Privacy Policy | VTuber Design',
        description:
          'Understand how VTuber Design processes and safeguards information submitted through our website and project enquiry form.',
        url: 'https://vtuberdesign.co.au/privacy',
        provider: {
          '@type': 'Organization',
          name: 'VTUBER DESIGN',
          url: 'https://vtuberdesign.co.au',
        },
      },
    });
  }, []);

  return <LegalLayout document={PRIVACY_POLICY_DATA} />;
};
