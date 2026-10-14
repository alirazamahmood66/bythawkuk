import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1 flex flex-col pt-16 sm:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
