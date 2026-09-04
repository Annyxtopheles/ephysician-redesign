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
  size = 250,
  spinDuration = 22,
  onHover = 'speedUp'
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient outer glow */}
      <div className="absolute -inset-2 rounded-full bg-brand-blue/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Outer Blue Band with Solid CTA Brand Blue Color */}
      <div className="absolute inset-0 rounded-full bg-brand-blue border-2 border-brand-blue/50 shadow-lg overflow-hidden pointer-events-none" />

      {/* Rotating White Circular Text - HIPAA COMPLIANT once with + icons */}
      <CircularText
        text="HIPAA + COMPLIANT + "
        spinDuration={spinDuration}
        onHover={onHover}
        fontSize="19px"
        className="text-white font-black tracking-wider"
      />

      {/* Static Center White Disc with Enlarged Caduceus Emblem */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[145px] h-[145px] rounded-full bg-white border-2 border-brand-blue shadow-inner flex items-center justify-center p-2.5">
          <img
            src={hipaaLogo}
            alt="HIPAA Compliant"
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HipaaBadge;
