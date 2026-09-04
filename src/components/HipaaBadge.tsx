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
  size = 220,
  spinDuration = 20,
  onHover = 'speedUp'
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer subtle shadow / ambient ring */}
      <div className="absolute -inset-1.5 rounded-full bg-brand-blue/15 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Outer Blue Band with Thin Inner & Outer Accent Lines */}
      <div className="absolute inset-0 rounded-full bg-brand-blue border-2 border-brand-blue/40 shadow-md overflow-hidden pointer-events-none" />

      {/* Rotating White Circular Text */}
      <CircularText
        text="HIPAA COMPLIANT + HIPAA COMPLIANT + "
        spinDuration={spinDuration}
        onHover={onHover}
        className="text-white font-extrabold tracking-wider"
      />

      {/* Static Center White Disc with Large Medical Caduceus Emblem */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[136px] h-[136px] rounded-full bg-white border-2 border-brand-blue shadow-inner flex items-center justify-center p-3">
          <img
            src={hipaaLogo}
            alt="HIPAA Compliant"
            className="w-24 h-24 sm:w-26 sm:h-26 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HipaaBadge;
