import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
        isOpen
          ? 'bg-surface-pale border-brand-teal/50 shadow-sm'
          : 'bg-surface-white border-border-soft hover:border-brand-blue/30'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
      >
        <span className="text-base sm:text-lg font-bold font-heading text-brand-navy">
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: 45 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-white border border-border-soft flex items-center justify-center text-brand-blue shadow-xs"
        >
          <Plus className="w-4 h-4" />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden px-5 sm:px-6"
      >
        <p className="pb-5 sm:pb-6 text-sm sm:text-base text-text-body leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const FAQ: React.FC = () => {
  const tabs = ['General & Setup', 'AI Voice Agent', 'EHR & Integrations', 'Security & Billing'];

  const faqData: Record<string, Array<{ question: string; answer: string }>> = {
    'General & Setup': [
      {
        question: 'How fast can our clinic be up and running?',
        answer:
          'Under 24 hours. There is no software to install on local workstations. You simply point your existing clinic phone lines to Sarah and connect your EHR credentials. Most practices launch the very same day.',
      },
      {
        question: 'Do our front desk staff need technical retraining?',
        answer:
          'Zero retraining is required. Sarah books directly into your existing schedule using your clinic’s established rules. Your team continues working inside their familiar EHR calendar as usual.',
      },
      {
        question: 'What is your pricing model?',
        answer:
          'We operate on transparent, usage-based pricing proportional to your actual call and reminder volume. You never pay high fixed monthly minimums for capacity you don’t use.',
      },
    ],
    'AI Voice Agent': [
      {
        question: 'How natural does Sarah sound to patients?',
        answer:
          'Sarah uses state-of-the-art conversational voice synthesis with sub-500ms latency. She understands clinic-specific terminology, handles interruptions gracefully, and sounds like an experienced clinic receptionist.',
      },
      {
        question: 'What happens during clinical emergencies or complex inquiries?',
        answer:
          'Sarah immediately detects clinical urgency and initiates a warm transfer directly to your designated on-call clinician or front-desk staff, accompanied by a real-time call transcript and patient summary.',
      },
      {
        question: 'Can we customize Sarah’s voice, rules, and intake questions?',
        answer:
          'Yes. Practice managers can customize greeting scripts, provider booking preferences, appointment duration buffers, and clinic triage rules directly from the dashboard.',
      },
    ],
    'EHR & Integrations': [
      {
        question: 'Which EHR and Practice Management Systems do you support?',
        answer:
          'We support NexHealth, OpenDental, eClinicalWorks, Dentrix (Henry Schein One), Eaglesoft, Curve Dental, and many more. We also offer direct Google Calendar sync for independent providers.',
      },
      {
        question: 'Does ePhysician cause double bookings or calendar conflicts?',
        answer:
          'Never. Sarah verifies real-time live availability in your EHR before confirming an appointment slot. The booking is instantly written to your calendar with complete patient details.',
      },
    ],
    'Security & Billing': [
      {
        question: 'Is ePhysician fully HIPAA compliant?',
        answer:
          'Yes. We execute a Business Associate Agreement (BAA) with every clinic. All audio streams and records are encrypted with TLS 1.3 in transit and AES-256 at rest. Patient data is isolated with row-level security and never used to train public AI models.',
      },
      {
        question: 'How does copay collection work at check-in?',
        answer:
          'Patients check in on a sleek tablet kiosk that confirms identity and collects copays before the patient enters the exam room. Payments are processed securely via Stripe Level 1 PCI-DSS certified infrastructure.',
      },
      {
        question: 'How does AI claims staging help our billing team?',
        answer:
          'Immediately after each visit, ePhysician maps clinical notes to appropriate ICD-10/CPT codes and checks payer pre-authorizations, staging clean claims for your biller’s one-click approval.',
      },
    ],
  };

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section id="faq" className="py-14 sm:py-20 bg-surface-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-navy tracking-tight">
            FAQs
          </h2>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab) => {
            const isSelected = selectedTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-white bg-brand-blue shadow-sm'
                    : 'text-brand-navy bg-surface-pale/70 border border-border-soft hover:border-brand-blue/40'
                }`}
              >
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Questions Accordion List with AnimatePresence */}
        <div className="mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="space-y-3.5"
            >
              {faqData[selectedTab]?.map((item, idx) => (
                <FAQItem key={idx} question={item.question} answer={item.answer} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
