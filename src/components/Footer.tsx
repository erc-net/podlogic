import React from 'react';
import { Layers, Phone, Mail, Link } from 'lucide-react';
import type { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* BRAND */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center">
                  <Layers className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-wider">
                PODLOGIC
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering enterprise front offices across the UK, EU &amp; US with
              back-office administration support from Bulawayo.
            </p>
          </div>

          {/* NAVIGATION LINKS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-400 transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-400 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* DIRECT CONTACT INFO */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Details
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href="tel:+447307276303" className="hover:text-white transition">
                  +44 7307276303
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href="mailto:hub@podlogic.info"
                  className="hover:text-white transition"
                >
                  hub@podlogic.info
                </a>
              </li>
              <li className="text-slate-500 pt-1">
                Operations Hub: Bulawayo, Zimbabwe
              </li>
            </ul>
          </div>

          {/* SOCIAL (LINKEDIN EXCLUSIVE) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Follow PodLogic on our official channel:
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-cyan-400 hover:border-cyan-400 transition"
            >
              <Link className="w-4 h-4" /> LinkedIn Official
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2026 PodLogic. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#privacy" className="hover:text-slate-400">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};