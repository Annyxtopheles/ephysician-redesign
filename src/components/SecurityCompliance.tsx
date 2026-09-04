import React from 'react';
import { Lock, Database, FileCheck } from 'lucide-react';

export const SecurityCompliance: React.FC = () => {
  const securityPillars = [
    {
      icon: <Lock className="w-5 h-5 text-brand-teal" />,
      title: 'Encryption',
      spec: 'TLS 1.3 in transit · AES-256 at rest',
      detail: 'Audio streams and records encrypted end-to-end. Patient data is never used to train public AI models.',
    },
    {
      icon: <Database className="w-5 h-5 text-brand-blue" />,
      title: 'Isolation',
      spec: 'Database Row-Level Security',
      detail: 'One clinic’s staff and agents cannot query another clinic’s data. Enforced strictly at the database layer.',
    },
    {
      icon: <FileCheck className="w-5 h-5 text-brand-navy" />,
      title: 'Compliance',
      spec: 'HIPAA BAA + PCI DSS Level 1',
      detail: 'BAA executed out of the box. Payments handled via Stripe Level 1. Every patient-data access is audit-logged.',
    },
  ];

  return (
    <section id="security" className="py-10 md:py-14 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
            Security built in, not bolted on.
          </h2>
        </div>

        {/* 3 Tight Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-surface-pale/40 rounded-xl border border-border-soft p-6 hover:border-brand-teal/40 hover:shadow-card-hover transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-white border border-border-soft flex items-center justify-center mb-4">
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold font-heading text-brand-navy tracking-tight">
                {pillar.title}
              </h3>
              
              <div className="text-xs font-semibold text-brand-blue font-heading mt-1 mb-3">
                {pillar.spec}
              </div>

              <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
