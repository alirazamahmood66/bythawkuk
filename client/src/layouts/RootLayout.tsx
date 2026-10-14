import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#040407] text-[#FFFBEB] selection:bg-[#D97706]/30 selection:text-[#FFFBEB]">
      <Navbar />
      <main className="flex-1 flex flex-col pt-16 sm:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
