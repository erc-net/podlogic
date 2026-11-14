import React from 'react';
import { Info } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 font-mono">
            About PodLogic
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
            Our Values &amp; Mission
          </h1>
          <p className="text-sky-700 text-xl font-bold mt-3 italic">
            &ldquo;Service defines us; empowers you.&rdquo;
          </p>
          <p className="text-slate-700 mt-4 text-base leading-relaxed">
            PodLogic was built on the principle that front-office innovation
            requires uncompromised back-office reliability. Our mission is to
            empower businesses in the UK, EU &amp; US by providing exceptional
            BPO solutions that improve efficiency, reduce operational cost, and
            support the delivery of an outstanding customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              The Bulawayo Advantage
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Operating out of Bulawayo gives our enterprise clients a genuine
              commercial edge. We tap into a rich talent pool of university
              graduates possessing native-level English fluency, high digital
              competency, and strong analytical capabilities.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              With time zone alignment matching the UK and EU, your back office
              functions seamlessly alongside your internal team during regular
              business hours—or 24/7 according to your agreed support model.
            </p>
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs font-mono text-sky-800 flex items-center gap-3">
              <Info className="w-5 h-5 text-sky-600 shrink-0" />
              <span>
                Typical onboarding takes 2 to 4 weeks with full quality
                monitoring at every step.
              </span>
            </div>
          </div>

          <div className="glass-card-light p-8 rounded-2xl border border-sky-200 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Why Enterprises Choose PodLogic
            </h3>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-lg shrink-0">
                1
              </div>
              <div>
                <h4 className="text-slate-900 font-semibold text-base">
                  Verified Quality Output
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  We verify output consistency through rigorous monitoring rather
                  than assuming success.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">
                2
              </div>
              <div>
                <h4 className="text-slate-900 font-semibold text-base">
                  Frictionless Handover
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  Our structured 6-stage process eliminates handover failures
                  before pilot launch.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                3
              </div>
              <div>
                <h4 className="text-slate-900 font-semibold text-base">
                  Cost &amp; Talent Superiority
                </h4>
                <p className="text-slate-600 text-xs mt-1">
                  Top-tier graduates providing maximum operational leverage at a
                  fraction of local cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};