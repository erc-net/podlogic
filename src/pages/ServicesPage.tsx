import React from 'react';
import {
  FolderOpen,
  Building,
  PackageCheck,
  Settings,
  Check,
} from 'lucide-react';
import type { PageId, ServiceItem } from '../types';
import { SERVICES_LIST } from '../data/podlogicData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

const ACCENT_STYLES: Record<
  ServiceItem['accentColor'],
  { border: string; text: string; icon: React.ReactNode }
> = {
  sky: {
    border: 'border-l-sky-500',
    text: 'text-sky-700',
    icon: <FolderOpen className="w-6 h-6 text-sky-600" />,
  },
  purple: {
    border: 'border-l-purple-600',
    text: 'text-purple-700',
    icon: <Building className="w-6 h-6 text-purple-600" />,
  },
  blue: {
    border: 'border-l-blue-600',
    text: 'text-blue-700',
    icon: <PackageCheck className="w-6 h-6 text-blue-600" />,
  },
  emerald: {
    border: 'border-l-emerald-600',
    text: 'text-emerald-700',
    icon: <Settings className="w-6 h-6 text-emerald-600" />,
  },
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 font-mono">
            BPO &amp; Operations Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
            PodLogic Core Services
          </h1>
          <p className="text-slate-600 mt-4 text-base">
            We support high-volume corporate workflows from Bulawayo so your
            internal team can focus on customers, growth, and decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => {
            const style = ACCENT_STYLES[service.accentColor];
            return (
              <div
                key={service.number}
                className={`glass-card-light p-8 rounded-2xl flex flex-col justify-between border-l-4 ${style.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`${style.text} font-mono text-sm font-bold`}>
                      {service.number}
                    </span>
                    {style.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6 font-semibold">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className={`w-4 h-4 shrink-0 ${style.text}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className={`${style.text} font-bold text-sm hover:underline self-start`}
                >
                  {service.inquiryLabel} &rarr;
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};