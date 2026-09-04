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
  size = 280,
  spinDuration = 24,
  onHover = 'speedUp'
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-2.5 rounded-full bg-brand-blue/25 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Solid CTA Brand Blue Ring (#2E94C1) with crisp borders */}
      <div className="absolute inset-0 rounded-full bg-brand-blue border-3 border-brand-blue/60 shadow-xl overflow-hidden pointer-events-none" />

      {/* Rotating Bold White Circular Text */}
      <CircularText
        text="HIPAA + COMPLIANT + "
        spinDuration={spinDuration}
        onHover={onHover}
        fontSize="31px"
        className="text-white font-black"
      />

      {/* Center White Disc with Large Caduceus Emblem */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[156px] h-[156px] sm:w-[162px] sm:h-[162px] rounded-full bg-white border-3 border-brand-blue shadow-md flex items-center justify-center p-2.5">
          <img
            src={hipaaLogo}
            alt="HIPAA Compliant"
            className="w-32 h-32 sm:w-36 sm:h-36 object-contain filter drop-shadow-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default HipaaBadge;
