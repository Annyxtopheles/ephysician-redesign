import React from 'react';
import { RefreshCw, Coins, Zap, Sliders, ShieldCheck } from 'lucide-react';

export const WhyPracticesSwitch: React.FC = () => {
  const differentiators = [
    {
      icon: <RefreshCw className="w-5 h-5 text-brand-teal" />,
      title: 'Works alongside your EHR',
      description: 'Integrates directly with NexHealth, OpenDental, and eClinicalWorks — no migration, no staff retraining.',
    },
    {
      icon: <Coins className="w-5 h-5 text-brand-blue" />,
      title: 'Usage-based pricing',
      description: 'Pay proportional to your actual call and reminder volume, not a fixed \$1,500/mo subscription.',
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-teal" />,
      title: 'Live in under 24 hours',
      description: 'Point your existing clinic phone number and launch the same day — not the usual 4 to 6 weeks.',
    },
    {
      icon: <Sliders className="w-5 h-5 text-brand-blue" />,
      title: 'Staff customize scripts directly',
      description: 'Configure Sarah’s voice, appointment rules, and guidelines yourself without waiting on IT tickets.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-navy" />,
      title: 'HIPAA & PCI DSS Level 1',
      description: 'BAA available immediately. Zero patient data is ever used to train public AI models.',
    },
  ];

  return (
    <section id="compare" className="py-10 md:py-14 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Tagline Removed */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
            Built to replace the busywork, not your systems.
          </h2>
        </div>

        {/* 5 Clean Differentiator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className={`bg-surface-white rounded-xl border border-border-soft p-5 sm:p-6 hover:border-brand-blue/40 hover:shadow-card-hover transition-all duration-200 ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-pale border border-border-soft flex items-center justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold font-heading text-brand-navy tracking-tight">
                {item.title}
              </h3>
              
              <p className="mt-2 text-xs sm:text-sm text-text-body leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
