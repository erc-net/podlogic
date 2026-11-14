import React from 'react';
import {
  ArrowRight,
  FileText,
  Building2,
  ClipboardCheck,
  Network,
  TrendingUp,
  Boxes,
} from 'lucide-react';
import type { PageId } from '../types';
import { ONBOARDING_STAGES } from '../data/podlogicData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <section>
      {/* HERO SECTION */}
      <div className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-300 text-sky-800 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                Bulawayo BPO &amp; Operations Hub
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
                Back-Office Administration Support That <br />
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Keeps Operations Moving
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Your front office cannot perform if the back office is overloaded.
                PodLogic supports documentation, CRM updates, record management,
                order processing, tenant and broader Real Estate management, claims
                admin, and daily operational tasks from Bulawayo so your internal
                team can focus on customers, growth, and decision-making.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-sky-500/25 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Schedule Discovery Call <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 rounded-xl bg-white/90 hover:bg-white border border-slate-300 text-slate-800 font-semibold text-sm transition shadow-sm backdrop-blur-md"
                >
                  Explore Solutions
                </button>
              </div>

              {/* BULAWAYO / ADVANTAGE STATS */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-300/80">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-sky-700">
                    UK / EU / US
                  </div>
                  <div className="text-[11px] text-slate-600 uppercase font-bold tracking-wider mt-1">
                    Aligned Time Zones
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Top-Tier
                  </div>
                  <div className="text-[11px] text-slate-600 uppercase font-bold tracking-wider mt-1">
                    Graduate Talent
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-purple-700">
                    2-4 Weeks
                  </div>
                  <div className="text-[11px] text-slate-600 uppercase font-bold tracking-wider mt-1">
                    Structured Onboarding
                  </div>
                </div>
              </div>
            </div>

            {/* DASHBOARD VISUAL CARD */}
            <div className="lg:col-span-5 relative">
              <div className="glass-card-light rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      BULAWAYO HUB: ACTIVE
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono font-bold">
                    24/7 SUPPORT MODEL
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/90 p-3.5 rounded-xl border border-slate-200/90 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 font-bold">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          Documentation &amp; CRM Updates
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Record management &amp; data entry
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-sky-800 bg-sky-100 px-2 py-1 rounded border border-sky-200">
                      VERIFIED
                    </span>
                  </div>

                  <div className="bg-white/90 p-3.5 rounded-xl border border-slate-200/90 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 font-bold">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          Tenant &amp; Real Estate Admin
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Broader portfolio management
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-purple-800 bg-purple-100 px-2 py-1 rounded border border-purple-200">
                      STREAMLINED
                    </span>
                  </div>

                  <div className="bg-white/90 p-3.5 rounded-xl border border-slate-200/90 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                        <ClipboardCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          Claims Admin &amp; Order Processing
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Accurate daily workflow execution
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-1 rounded border border-emerald-200">
                      24/7 SLA
                    </span>
                  </div>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-xl text-xs text-slate-300 flex justify-between items-center shadow-md">
                  <span>Enquiries: Mon - Fri</span>
                  <a
                    href="mailto:hub@podlogic.info"
                    className="text-sky-400 font-bold hover:underline"
                  >
                    hub@podlogic.info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMMERCIAL ADVANTAGE SECTION */}
      <div className="py-16 bg-white/75 border-t border-b border-slate-300/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2 font-mono">
              Commercial Advantage
            </h2>
            <p className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Optimize Corporate Operations &amp; Back Office
            </p>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Discover how PodLogic enhances your enterprise efficiency with
              professional back-office solutions. The time zone lines up, top
              tier graduates, the English is the right fit, and the cost of
              running a Bulawayo versus a UK-based team is a genuine commercial
              advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card-light p-8 rounded-2xl transition hover:-translate-y-1">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6 border border-sky-200">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Streamlined Back Office
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Streamline daily operations and internal processes, ensuring your
                business environment runs smoothly and efficiently every day.
              </p>
            </div>

            <div className="glass-card-light p-8 rounded-2xl transition hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-200">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Process Optimization
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leverage graduate-level employees integrated into your operational
                frameworks, designed specifically to elevate productivity and
                reduce administrative friction.
              </p>
            </div>

            <div className="glass-card-light p-8 rounded-2xl transition hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-200">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Enterprise Solutions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Implement scalable solutions tailored to meeting you at your point
                of need—whether at start-up, growth, scaling, or improving
                internal workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6-STAGE ONBOARDING PROCESS */}
      <div className="py-20 border-t border-slate-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 font-mono">
              Seamless Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              How We Get You Live
            </h2>
            <p className="text-slate-700 mt-3 text-sm leading-relaxed">
              Outsourcing fails at the handover far more often than it fails in
              delivery. This is the six-stage process PodLogic runs before a new
              operation goes live, ensuring zero friction and complete clarity.
              Typical onboarding takes <strong>two to four weeks</strong>,
              depending on process complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ONBOARDING_STAGES.map((item) => (
              <div
                key={item.stage}
                className={`glass-card-light p-6 rounded-2xl border-l-4 ${item.borderColor}`}
              >
                <div className={`text-xs font-mono ${item.textColor} mb-2 font-bold`}>
                  {item.stage}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};