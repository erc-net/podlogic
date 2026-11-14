import React, { useState } from 'react';
import { Phone, Mail, Link, ArrowRight, Menu, X } from 'lucide-react';
import type { PageId } from '../types';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* TOP UTILITY BAR */}
      <div className="bg-slate-900 text-xs py-2.5 px-4 sm:px-8 text-slate-300 flex justify-between items-center z-50 shadow-md">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+447307276303"
            className="hover:text-cyan-400 transition flex items-center gap-2 font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" /> +44 7307276303
          </a>
          <a
            href="mailto:hub@podlogic.info"
            className="hover:text-cyan-400 transition items-center gap-2 font-medium hidden sm:flex"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" /> hub@podlogic.info
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 hidden md:inline">
            Bulawayo Operations Hub | Servicing UK, EU &amp; US
          </span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 text-slate-200 transition flex items-center gap-1.5 font-semibold"
          >
            <Link className="w-4 h-4 text-cyan-400" /> LinkedIn
          </a>
        </div>
      </div>

      {/* NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 glass-header shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* LOGO */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative w-11 h-11 flex items-center justify-center bg-gradient-to-tr from-purple-600 via-blue-600 to-sky-500 rounded-xl p-[2px] shadow-md group-hover:shadow-sky-500/30 transition">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <svg
                  className="w-7 h-7 text-sky-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17l10 5 10-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12l10 5 10-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-wider text-slate-900">
                PODLOGIC
              </span>
              <span className="text-[9px] uppercase tracking-widest text-sky-600 font-bold -mt-1">
                Back-Office Operations
              </span>
            </div>
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 p-1.5 rounded-full border border-slate-200/90 shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                    isActive
                      ? 'text-sky-700 bg-white shadow'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-500/20 transition transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              Book Discovery Call <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-slate-700 hover:text-slate-900 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-semibold ${
                  activePage === item.id
                    ? 'bg-sky-50 text-sky-700'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                href="tel:+447307276303"
                className="flex items-center gap-2 text-sm text-sky-600 font-bold"
              >
                <Phone className="w-4 h-4" /> +44 7307276303
              </a>
              <a
                href="mailto:hub@podlogic.info"
                className="flex items-center gap-2 text-sm text-slate-700 font-medium"
              >
                <Mail className="w-4 h-4 text-sky-600" /> hub@podlogic.info
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};