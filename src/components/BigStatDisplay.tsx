import React, { useEffect, useRef, useState } from 'react';

export interface BigStatDisplayProps {
  before?: string;
  staticText?: string;
  target?: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  tag?: string;
  tagPlacement?: 'beside' | 'below';
  tagVariant?: 'emerald' | 'blue';
}

export const BigStatDisplay: React.FC<BigStatDisplayProps> = ({
  before,
  staticText,
  target,
  from = 0,
  duration = 1200,
  prefix = '',
  suffix = '',
  tag,
  tagPlacement = 'below',
  tagVariant = 'emerald',
}) => {
  const [value, setValue] = useState(target !== undefined ? from : 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (target === undefined) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic: 1 - (1 - progress)^3
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(from + (target - from) * easeOut);
            setValue(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setValue(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [target, from, duration]);

  const tagChip = tag ? (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
        tagVariant === 'blue'
          ? 'bg-brand-blue/10 border border-brand-blue/20 text-brand-blue'
          : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
      }`}
    >
      {tag}
    </span>
  ) : null;

  return (
    <div ref={containerRef} className="flex flex-col gap-2">
      <div className="flex items-center gap-3 flex-wrap">
        {/* If static text like 24/7 */}
        {staticText ? (
          <span className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading text-brand-blue tracking-tight leading-none select-none">
            {staticText}
          </span>
        ) : (
          /* Before → After pair */
          <div className="flex items-center gap-2 xl:gap-3 flex-nowrap">
            {before && (
              <span className="text-base sm:text-lg xl:text-xl font-bold text-text-body/50 line-through decoration-text-body/40 select-none whitespace-nowrap">
                {before}
              </span>
            )}
            <span className="text-brand-blue font-bold text-base sm:text-lg xl:text-xl select-none">
              →
            </span>
            <span className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading text-brand-blue tracking-tight leading-none select-none tabular-nums inline-flex items-baseline whitespace-nowrap">
              {prefix && <span>{prefix}</span>}
              <span>{value}</span>
              {suffix && <span>{suffix}</span>}
            </span>
          </div>
        )}

        {/* Beside tag (e.g. 1 ring) */}
        {tag && tagPlacement === 'beside' && tagChip}
      </div>

      {/* Below tag (e.g. 3× fewer no-shows) */}
      {tag && tagPlacement === 'below' && (
        <div className="pt-0.5">{tagChip}</div>
      )}
    </div>
  );
};
