import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import doctorRelaxingWebp from '../assets/doctor-relaxing.webp';

interface FinalCTAProps {
  onRequestDemo: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestDemo }) => {
  return (
    <section className="py-8 md:py-12 bg-surface-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Rounded Showcase Card with Doctor Relaxing WebP background */}
        <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden min-h-[300px] sm:min-h-[340px] md:min-h-[360px] flex items-center justify-center p-6 sm:p-8 md:p-10 shadow-xl shadow-brand-navy/10 border border-border-soft/60">
          
          {/* Compressed WebP Background with Brand Navy Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={doctorRelaxingWebp} 
              alt="Give your front desk its mornings back" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Rich tint overlay for crisp text readability */}
            <div className="absolute inset-0 bg-[#0F1B26]/80 backdrop-blur-[1.5px]" />
          </div>

          {/* Centered Content Block */}
          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4">
            
            {/* Headline using brand palette */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight leading-[1.18]">
              Give your front desk <br />
              <span className="text-[#56BBE5]">its mornings back</span>
            </h2>

            {/* Centered CTAs using solid brand blue */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto py-3 px-7 rounded-xl font-heading font-bold text-sm sm:text-base text-white bg-brand-blue hover:bg-brand-blue-hover transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 group shadow-md"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href="#workflows"
                className="w-full sm:w-auto py-3 px-6 rounded-xl font-heading font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 text-white fill-current" />
                <span>Watch Video</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
