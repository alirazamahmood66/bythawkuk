import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/HomePage';
import { DesignSystemPage } from '@/pages/DesignSystemPage';
import { ServiceDetailPage } from '@/pages/services/ServiceDetailPage';
import { ServicesOverviewPage } from '@/pages/services/ServicesOverviewPage';
import { WorkPage } from '@/pages/WorkPage';
import { WorkDetailPage } from '@/pages/WorkDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProcessPage } from '@/pages/ProcessPage';
import { ContactPage } from '@/pages/ContactPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { InsightDetailPage } from '@/pages/InsightDetailPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { CookiesPage } from '@/pages/CookiesPage';
import { TermsPage } from '@/pages/TermsPage';
import { SolutionsOverviewPage } from '@/pages/solutions/SolutionsOverviewPage';
import { SolutionDetailPage } from '@/pages/solutions/SolutionDetailPage';
import { CareersPage } from '@/pages/CareersPage';
import { PlaceholderRoutePage } from '@/pages/PlaceholderRoutePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Active Implemented Pages */}
          <Route index element={<HomePage />} />
          <Route path="design-system" element={<DesignSystemPage />} />

          {/* Services Routes */}
          <Route path="services" element={<ServicesOverviewPage />} />
          <Route path="services/ecommerce-development" element={<Navigate to="/services/ecommerce" replace />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />

          {/* Solutions Routes */}
          <Route path="solutions" element={<SolutionsOverviewPage />} />
          <Route path="solutions/:slug" element={<SolutionDetailPage />} />

          {/* Primary Agency Routes */}
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<WorkDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="careers" element={<CareersPage />} />

          {/* Insights Routes */}
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/:slug" element={<InsightDetailPage />} />

          {/* Contact */}
          <Route path="contact" element={<ContactPage />} />

          {/* Legal Pages */}
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="cookies" element={<CookiesPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
