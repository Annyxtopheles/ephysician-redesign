import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onRequestDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestDemo }) => {
  return (
    <footer className="bg-surface-white pt-6 pb-12 overflow-hidden">
      {/* Animated ECG Heartbeat Divider Line — Full Bleed edge-to-edge */}
      <div className="w-full relative mb-12 overflow-hidden">
        <div className="relative w-full h-8 flex items-center">
          {/* Base soft guide line spanning 100% of viewport width */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-border-soft" />

          {/* Animated SVG ECG heartbeat pulse line overlay edge-to-edge */}
          <svg
            className="w-full h-8 relative z-10 overflow-visible"
            viewBox="0 0 1600 32"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Repeating ECG waveform path across entire screen width */}
            <path
              d="M0 16 L220 16 L230 16 L235 10 L240 22 L245 2 L252 28 L258 16 L264 16 L270 13 L276 16 L520 16 L530 16 L535 10 L540 22 L545 2 L552 28 L558 16 L564 16 L570 13 L576 16 L820 16 L830 16 L835 10 L840 22 L845 2 L852 28 L858 16 L864 16 L870 13 L876 16 L1120 16 L1130 16 L1135 10 L1140 22 L1145 2 L1152 28 L1158 16 L1164 16 L1170 13 L1176 16 L1420 16 L1430 16 L1435 10 L1440 22 L1445 2 L1452 28 L1458 16 L1464 16 L1470 13 L1476 16 L1600 16"
              stroke="#2E94C1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-ecg"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border-soft">
          
          {/* Column 1 & 2: Brand Lockup & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <BrandLogo size="md" variant="full" />
            </a>
            
            <p className="text-sm text-text-body max-w-sm leading-relaxed">
              AI voice agents and revenue automation for modern US medical and dental clinics. Answer every call, verify insurance, eliminate no-shows, and collect copays upfront.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-pale border border-border-soft text-xs text-brand-navy font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              <span>HIPAA Compliant & PCI DSS Level 1 Certified</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onRequestDemo}
                className="py-2 px-4 rounded-xl text-xs font-heading font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Request a Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 3: Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-brand-navy mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="text-text-body hover:text-brand-blue transition-colors">
                  Features Overview
                </a>
              </li>
              <li>
                <a href="#agents" className="text-text-body hover:text-brand-blue transition-colors">
                  AI Voice Agent (Sarah)
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-text-body hover:text-brand-blue transition-colors">
                  EHR & PMS Integrations
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-text-body hover:text-brand-blue transition-colors">
                  Usage-Based Pricing
                </a>
              </li>
              <li>
                <a href="#compare" className="text-text-body hover:text-brand-blue transition-colors">
                  Platform Comparison
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Solutions & Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-brand-navy mb-4">
              Company & Access
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://demo.ephysician.biz/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-body hover:text-brand-blue transition-colors flex items-center gap-1"
                >
                  <span>Demo Login</span>
                  <ArrowUpRight className="w-3 h-3 text-text-body/50" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:partners@ephysician.biz" 
                  className="text-text-body hover:text-brand-blue transition-colors flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-text-body/60" />
                  <span>Contact Team</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:partners@ephysician.biz?subject=Reseller%20Partnership" 
                  className="text-text-body hover:text-brand-blue transition-colors"
                >
                  Become a Partner
                </a>
              </li>
              <li>
                <span className="text-xs text-text-body/60 block pt-1">
                  Primary Audience: 1–10 Provider Clinics
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Security */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-brand-navy mb-4">
              Legal & Compliance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#privacy" className="text-text-body hover:text-brand-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-text-body hover:text-brand-blue transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#baa" className="text-text-body hover:text-brand-blue transition-colors">
                  BAA Agreement
                </a>
              </li>
              <li>
                <a href="#security" className="text-text-body hover:text-brand-blue transition-colors">
                  Security Architecture
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-body/70">
          <p>
            © 2026 SJ Innovation. All rights reserved. Powered by{' '}
            <span className="font-semibold text-brand-navy">Collab AI</span>.
          </p>

          <div className="flex items-center gap-6">
            <span>Built for US Medical & Dental Practices</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-medium text-brand-navy">Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
