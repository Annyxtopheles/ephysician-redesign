import { useState } from 'react';
import { X, CheckCircle2, Shield, Calendar, Sparkles } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    practiceName: '',
    providersCount: '1-3',
    phone: '',
    specialty: 'Dental',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo Request Submitted:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-surface-white rounded-2xl shadow-2xl border border-border-soft p-6 md:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-text-body/60 hover:text-brand-navy rounded-full hover:bg-surface-pale transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-brand-teal border border-teal-200">
                <Sparkles className="w-3 h-3" /> Live Demo
              </span>
              <span className="text-xs text-text-body/70">15-minute walkthrough</span>
            </div>

            <h3 className="text-2xl font-bold font-heading text-brand-navy tracking-tight">
              See ePhysician Control Tower live
            </h3>
            <p className="text-sm text-text-body mt-1 mb-6">
              Watch Sarah answer simulated patient calls, book into test calendars, and verify insurance in real time.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Jordan Hayes"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-soft bg-surface-pale/40 focus:outline-none focus:border-brand-blue focus:bg-white text-brand-navy transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Practice Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Bay Dental Partners"
                    value={formData.practiceName}
                    onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-soft bg-surface-pale/40 focus:outline-none focus:border-brand-blue focus:bg-white text-brand-navy transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@baydental.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-soft bg-surface-pale/40 focus:outline-none focus:border-brand-blue focus:bg-white text-brand-navy transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Phone (for SMS confirmation)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-soft bg-surface-pale/40 focus:outline-none focus:border-brand-blue focus:bg-white text-brand-navy transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Practice Type
                  </label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-soft bg-surface-pale/40 focus:outline-none focus:border-brand-blue focus:bg-white text-brand-navy transition-all"
                  >
                    <option value="Dental">Dental Practice</option>
                    <option value="Primary Care">Primary Care</option>
                    <option value="Specialty Medical">Specialty Medical</option>
                    <option value="Multi-location Group">Multi-location Group</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-navy mb-1">
                    Number of Providers
                  </label>
                  <select
                    value={formData.providersCount}
                    onChange={(e) => setFormData({ ...formData, providersCount: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-border-soft bg-surface-pale/40 focus:outline-none focus:border-brand-blue focus:bg-white text-brand-navy transition-all"
                  >
                    <option value="1">Solo Provider (1)</option>
                    <option value="2-4">2–4 Providers</option>
                    <option value="5-10">5–10 Providers</option>
                    <option value="10+">10+ Providers</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl font-heading font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-all duration-200 cursor-pointer text-center"
                >
                  Schedule Live Walkthrough
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-text-body/70">
                <span className="flex items-center gap-1 font-medium">
                  <Shield className="w-3 h-3 text-brand-teal" /> HIPAA BAA Available
                </span>
                <span>•</span>
                <span>No credit card required</span>
                <span>•</span>
                <span>Live in &lt; 24h</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-brand-navy">
              Demo Request Received
            </h3>
            <p className="text-sm text-text-body mt-2 max-w-sm mx-auto">
              Our clinical automation specialist will contact you at <span className="font-semibold text-brand-navy">{formData.workEmail}</span> within 2 hours to confirm your live session.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-surface-pale border border-border-soft text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="text-brand-navy font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-blue" /> Scheduled Overview:
              </div>
              <p className="text-text-body">Clinic: <span className="font-medium">{formData.practiceName}</span> ({formData.specialty})</p>
              <p className="text-text-body">Live voice test call to: <span className="font-medium">{formData.phone}</span></p>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 rounded-xl font-heading font-bold text-sm text-brand-navy bg-surface-pale hover:bg-border-soft/60 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
