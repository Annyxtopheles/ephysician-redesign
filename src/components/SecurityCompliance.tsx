import React from 'react';
import { ShieldCheck, Lock, Server, FileCheck, FileDown } from 'lucide-react';

interface SecurityComplianceProps {
  onRequestSecurityPacket?: () => void;
}

export const SecurityCompliance: React.FC<SecurityComplianceProps> = ({ onRequestSecurityPacket }) => {
  const securityPillars = [
    {
      title: 'End-to-End Cryptography',
      spec: 'TLS 1.3 · AES-256-GCM',
      icon: <Lock className="w-4 h-4 text-brand-blue" />,
      detail: 'Audio streams, call recordings, and patient notes are encrypted in transit and at rest with customer-isolated keys.',
      specs: [
        { label: 'In Transit', value: 'TLS 1.3 with Perfect Forward Secrecy' },
        { label: 'At Rest', value: 'AES-256 Envelope Encryption' },
        { label: 'LLM Policy', value: 'Zero Public Model Training' },
      ],
    },
    {
      title: 'Multi-Tenant Database Isolation',
      spec: 'PostgreSQL Row-Level Security',
      icon: <Server className="w-4 h-4 text-brand-teal" />,
      detail: 'Enforced at the database engine layer. One clinic’s staff, bots, and queries can never access another clinic’s data.',
      specs: [
        { label: 'Isolation', value: 'Hardware & Row-Level Tenant Boundary' },
        { label: 'Access Control', value: 'Granular Role-Based Access (RBAC)' },
        { label: 'Audit Trail', value: '100% Immutable Timestamped Logs' },
      ],
    },
    {
      title: 'Compliance & Payment Standards',
      spec: 'HIPAA BAA + PCI DSS Level 1',
      icon: <FileCheck className="w-4 h-4 text-emerald-600" />,
      detail: 'Full HIPAA Business Associate Agreement executed immediately. Cardholder payment data is tokenized via Stripe Level 1.',
      specs: [
        { label: 'HIPAA BAA', value: 'Fully Executed Upon Onboarding' },
        { label: 'Payments', value: 'PCI DSS Level 1 Tokenized (Stripe)' },
        { label: 'Data Rights', value: 'Clinic Retains 100% Ownership' },
      ],
    },
  ];

  return (
    <section id="security" className="py-14 md:py-20 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold font-heading tracking-widest text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Enterprise Security
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight text-balance mt-3">
            Security built in, not bolted on.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-body max-w-2xl mx-auto">
            Defending Protected Health Information (PHI) with banking-grade isolation, automated cryptographic safeguards, and strict legal compliance.
          </p>
        </div>

        {/* 3 Architecture Blueprint Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {securityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#EFFAFB]/60 rounded-2xl border border-border-soft p-6 sm:p-7 hover:border-brand-teal/50 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-white border border-border-soft flex items-center justify-center shadow-2xs">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-bold text-brand-navy bg-white px-2.5 py-1 rounded-md border border-border-soft">
                    {pillar.spec}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-navy tracking-tight">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-text-body leading-relaxed">
                  {pillar.detail}
                </p>
              </div>

              {/* Technical Telemetry Block */}
              <div className="mt-6 pt-5 border-t border-border-soft/80 space-y-2">
                {pillar.specs.map((specItem, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-[11px]">
                    <span className="text-text-body/70 font-medium">{specItem.label}</span>
                    <span className="font-semibold text-brand-navy bg-white px-2 py-0.5 rounded border border-border-soft/70">
                      {specItem.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Security Guarantee Ribbon */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-brand-teal/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-9 h-9 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-brand-teal" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold font-heading text-brand-navy">
                Zero Public AI Model Training Guarantee
              </div>
              <div className="text-xs text-text-body">
                Your clinic’s patient phone audio, EHR charts, and medical notes are never stored or shared to train public LLM models.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <span className="text-xs font-bold font-heading text-brand-navy bg-surface-pale px-3 py-1.5 rounded-lg border border-border-soft">
              BAA Executed on Day 1
            </span>
            {onRequestSecurityPacket && (
              <button
                type="button"
                onClick={onRequestSecurityPacket}
                className="py-2 px-3.5 rounded-lg font-heading font-bold text-xs text-white bg-brand-navy hover:bg-brand-blue transition-colors inline-flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Security Whitepaper (PDF)</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
