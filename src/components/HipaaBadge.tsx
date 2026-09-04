import React from 'react';
import CircularText from './CircularText';
import hipaaLogo from '../assets/HIPAA.svg';

interface HipaaBadgeProps {
  className?: string;
  size?: number;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers' | false;
}

export const HipaaBadge: React.FC<HipaaBadgeProps> = ({
  className = '',
  size = 200,
  spinDuration = 20,
  onHover = 'speedUp'
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient decorative ring / soft pulse */}
      <div className="absolute inset-1 rounded-full bg-brand-teal/5 border border-brand-teal/20 shadow-xs pointer-events-none group-hover:border-brand-teal/40 group-hover:bg-brand-teal/10 transition-all duration-300" />

      {/* Rotating Circular Text */}
      <CircularText
        text="HIPAA + COMPLIANT + "
        spinDuration={spinDuration}
        onHover={onHover}
        className="text-[#0D405F] tracking-widest text-xs sm:text-sm font-black"
      />

      {/* Center Static Emblem with HIPAA Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white border border-border-soft shadow-md flex items-center justify-center p-3.5 group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300">
          <img
            src={hipaaLogo}
            alt="HIPAA Compliant"
            className="w-full h-full object-contain filter drop-shadow-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default HipaaBadge;
