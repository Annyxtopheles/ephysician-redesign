import React from 'react';
import { Clock, PhoneOff, PhoneForwarded, MessageSquareDashed, MessageSquareCheck, AlertCircle, CreditCard, FileWarning, FileCheck, CheckCircle2 } from 'lucide-react';

export const BeforeAfterComparison: React.FC = () => {
  const comparisons = [
    {
      time: '7:45 AM — Opening',
      without: {
        headline: '40 voicemails deep',
        sub: 'Staff burns 90 minutes returning calls. Callers give up and book elsewhere.',
        icon: <PhoneOff className="w-4 h-4 text-rose-500" />,
      },
      with: {
        headline: 'Zero backlog. 11 calls handled.',
        sub: 'Sarah answered every call overnight and booked 8 slots directly into your EHR.',
        icon: <PhoneForwarded className="w-4 h-4 text-emerald-600" />,
      },
    },
    {
      time: '10:30 AM — Reminders',
      without: {
        headline: 'Manual phone tags & 15% no-shows',
        sub: 'Desk dials 35 patients between walk-ins. Most go straight to voicemail.',
        icon: <MessageSquareDashed className="w-4 h-4 text-rose-500" />,
      },
      with: {
        headline: 'Automated 2-way SMS. 4% no-shows.',
        sub: 'Patients reply "C" to confirm. 82%+ response rate with zero staff effort.',
        icon: <MessageSquareCheck className="w-4 h-4 text-emerald-600" />,
      },
    },
    {
      time: '1:15 PM — Check-In',
      without: {
        headline: 'Paper clipboards & 60% copay rate',
        sub: 'Lobby congestion. Patients rush to exam rooms without paying copays.',
        icon: <AlertCircle className="w-4 h-4 text-rose-500" />,
      },
      with: {
        headline: '90-sec kiosk & 95%+ copays collected',
        sub: 'Patient taps card on tablet before seeing the provider. Instant EHR sync.',
        icon: <CreditCard className="w-4 h-4 text-emerald-600" />,
      },
    },
    {
      time: '5:00 PM — Billing',
      without: {
        headline: '60–90 day delayed claims',
        sub: 'Biller manually cross-references codes, charts, and payer pre-authorizations.',
        icon: <FileWarning className="w-4 h-4 text-rose-500" />,
      },
      with: {
        headline: '20–30 day compressed cash cycles',
        sub: 'AI pre-maps procedure codes immediately for 1-click human biller sign-off.',
        icon: <FileCheck className="w-4 h-4 text-emerald-600" />,
      },
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
            A morning without ePhysician vs. with it.
          </h2>
        </div>

        {/* Crisp Comparison Cards */}
        <div className="space-y-4">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-white rounded-xl border border-border-soft overflow-hidden hover:border-brand-blue/30 transition-colors"
            >
              {/* Timing Tag */}
              <div className="bg-surface-pale px-5 py-2 border-b border-border-soft flex items-center gap-2 text-xs font-bold font-heading text-brand-navy">
                <Clock className="w-3.5 h-3.5 text-brand-blue" />
                <span>{item.time}</span>
              </div>

              {/* Side-by-side contrast */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border-soft text-sm">
                
                {/* Status Quo */}
                <div className="p-4 sm:p-5 bg-rose-50/20 flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">{item.without.icon}</div>
                  <div>
                    <div className="font-bold text-rose-800 text-sm sm:text-base font-heading">
                      {item.without.headline}
                    </div>
                    <div className="text-xs sm:text-sm text-text-body mt-1 leading-relaxed">
                      {item.without.sub}
                    </div>
                  </div>
                </div>

                {/* With ePhysician */}
                <div className="p-4 sm:p-5 bg-emerald-50/25 flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">{item.with.icon}</div>
                  <div>
                    <div className="font-bold text-emerald-800 text-sm sm:text-base font-heading">
                      {item.with.headline}
                    </div>
                    <div className="text-xs sm:text-sm text-text-body mt-1 leading-relaxed">
                      {item.with.sub}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 p-5 rounded-xl bg-surface-pale border border-border-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold font-heading text-brand-navy">
                Staff reclaims 20+ hours every week
              </div>
              <div className="text-xs text-text-body">
                Front desk stops manually dialing confirmations and answering routine scheduling calls.
              </div>
            </div>
          </div>
          <span className="text-xs font-bold text-brand-blue font-heading bg-white px-3 py-1.5 rounded-lg border border-border-soft flex-shrink-0">
            Live in under 24 hours
          </span>
        </div>

      </div>
    </section>
  );
};
