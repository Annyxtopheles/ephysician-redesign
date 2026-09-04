import React from 'react';
import ephysicianSvg from '../assets/ephysician-logo.svg';
import collabAiSvg from '../assets/collab-ai-logo.svg';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showPoweredBy?: boolean;
  variant?: 'full' | 'compact';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showPoweredBy = true,
  variant = 'full',
}) => {
  const ephysHeights = {
    sm: 'h-6',
    md: 'h-7 sm:h-7.5',
    lg: 'h-8 sm:h-9',
  };

  const collabHeights = {
    sm: 'h-2.5',
    md: 'h-3 sm:h-3.5',
    lg: 'h-4',
  };

  // Indent so "Powered by Collab AI" starts under the wordmark text (past the icon ~56px out of 313px width ratio)
  const textIndents = {
    sm: 'pl-[30px]',
    md: 'pl-[36px] sm:pl-[40px]',
    lg: 'pl-[44px] sm:pl-[48px]',
  };

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      {/* Official ePhysician Logo SVG (icon is left 18%, wordmark text starts after) */}
      <img
        src={ephysicianSvg}
        alt="ePhysician"
        className={`${ephysHeights[size]} w-auto object-contain flex-shrink-0`}
      />

      {/* Powered by Collab AI placed directly under the ePhysician TEXT (not under the icon) */}
      {showPoweredBy && variant === 'full' && (
        <div className={`flex items-center gap-1.5 mt-0.5 ${textIndents[size]}`}>
          <span className="text-[9px] font-semibold tracking-wider text-text-body/60 uppercase whitespace-nowrap">
            Powered by
          </span>
          <img
            src={collabAiSvg}
            alt="Collab AI"
            className={`${collabHeights[size]} w-auto object-contain flex-shrink-0 opacity-85`}
          />
        </div>
      )}
    </div>
  );
};
