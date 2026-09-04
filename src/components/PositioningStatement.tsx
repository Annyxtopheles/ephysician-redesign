import React from 'react';

export const PositioningStatement: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* High-Impact Statement - Solid Colors Only */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-navy leading-tight tracking-tight">
          There's no shortage of AI vendors for your front desk.{' '}
          <span className="text-brand-blue block sm:inline">
            There's a shortage of ones that actually run all of it.
          </span>
        </h2>

        {/* Crisp Supporting Line */}
        <p className="mt-5 text-base sm:text-lg text-text-body font-normal max-w-2xl mx-auto leading-relaxed">
          One platform for scheduling, reminders, check-in, and claims — not four different subscriptions that don't talk to each other.
        </p>

      </div>
    </section>
  );
};
