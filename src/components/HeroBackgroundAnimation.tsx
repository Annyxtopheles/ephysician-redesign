import React from 'react';

export const HeroBackgroundAnimation: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* -------------------------------------------------------------
          1. SUBTLE ATMOSPHERIC LIGHT (Calm, Soft Depth)
          ------------------------------------------------------------- */}
      <div className="absolute -top-32 left-1/3 w-[36rem] h-[36rem] rounded-full bg-white/10 blur-[140px] animate-hero-biolum" />
      <div
        className="absolute top-16 right-1/4 w-[32rem] h-[32rem] rounded-full bg-cyan-200/15 blur-[130px] animate-hero-biolum"
        style={{ animationDelay: '4s' }}
      />

      {/* -------------------------------------------------------------
          2. THE VOICE WAVEFORM HORIZON LINE (Sarah AI Receptionist)
             A single, clean, elegant acoustic wave gliding across the
             background — the voice counterpart to the footer's ECG.
          ------------------------------------------------------------- */}
      <div className="w-full absolute top-72 sm:top-80 md:top-96 left-0 right-0 overflow-hidden">
        <div className="relative w-full h-12 flex items-center">
          {/* Subtle guide line across the full viewport width */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/15" />

          {/* Animated SVG Voice Waveform overlay */}
          <svg
            className="w-full h-12 relative z-10 overflow-visible opacity-85"
            viewBox="0 0 1600 48"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Repeating Acoustic Speech Formants across 1600px width */}
            <path
              d="M 0 24 L 130 24 C 145 24, 155 17, 165 17 C 175 17, 182 31, 190 31 C 200 31, 208 7, 218 7 C 228 7, 235 41, 245 41 C 255 41, 265 11, 275 11 C 285 11, 292 33, 300 33 C 308 33, 315 20, 322 20 C 330 20, 338 24, 350 24 L 530 24 C 545 24, 555 17, 565 17 C 575 17, 582 31, 590 31 C 600 31, 608 7, 618 7 C 628 7, 635 41, 645 41 C 655 41, 665 11, 675 11 C 685 11, 692 33, 700 33 C 708 33, 715 20, 722 20 C 730 20, 738 24, 750 24 L 930 24 C 945 24, 955 17, 965 17 C 975 17, 982 31, 990 31 C 1000 31, 1008 7, 1018 7 C 1028 7, 1035 41, 1045 41 C 1055 41, 1065 11, 1075 11 C 1085 11, 1092 33, 1100 33 C 1108 33, 1115 20, 1122 20 C 1130 20, 1138 24, 1150 24 L 1330 24 C 1345 24, 1355 17, 1365 17 C 1375 17, 1382 31, 1390 31 C 1400 31, 1408 7, 1418 7 C 1428 7, 1435 41, 1445 41 C 1455 41, 1465 11, 1475 11 C 1485 11, 1492 33, 1500 33 C 1508 33, 1515 20, 1522 20 C 1530 20, 1538 24, 1550 24 L 1600 24"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(80, 198, 204, 0.6))',
              }}
              className="animate-voice-wave"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
