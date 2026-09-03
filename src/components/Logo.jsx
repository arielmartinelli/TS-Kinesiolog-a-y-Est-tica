import React from 'react';

export default function Logo({ variant = 'full', className = '', isLight = false }) {
  const primaryColor = isLight ? '#FFFFFF' : '#6f583c';
  const secondaryColor = isLight ? '#f3efe9' : '#8f7453';
  const textColor = isLight ? '#FFFFFF' : '#22201d';
  const subtextColor = isLight ? '#E5E2DD' : '#6b645c';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Monogram SVG Icon */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-11 h-11 transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle background circle on hover or accent */}
          <circle cx="50" cy="50" r="46" stroke={secondaryColor} strokeWidth="1" strokeOpacity="0.3" fill={isLight ? "rgba(255,255,255,0.08)" : "rgba(111,88,60,0.05)"} />
          
          {/* TS Stylized Monogram */}
          {/* Upper arch swoosh of T */}
          <path
            d="M 26 26 C 36 21, 52 18, 68 22 C 73 23, 76 26, 75 28 C 73 29, 69 27, 63 26 C 54 24, 43 27, 36 30 Z"
            fill={primaryColor}
          />
          {/* Vertical stem of T with serifs */}
          <path
            d="M 33 28 L 39 28 L 39 63 C 39 65, 37 66, 34 66 L 34 68 L 44 68 L 44 66 C 41 66, 39 65, 39 63 L 39 28 L 45 28 C 45 28, 44 26, 39 26 L 33 26 Z"
            fill={primaryColor}
          />

          {/* S Intertwining curve */}
          <path
            d="M 64 30 C 58 30, 52 34, 52 42 C 52 50, 60 53, 62 57 C 65 63, 61 72, 53 72 C 47 72, 43 67, 44 61 C 44 59, 42 58, 41 59 C 40 60, 40 63, 41 66 C 43 72, 48 76, 55 76 C 64 76, 70 70, 70 61 C 70 54, 63 50, 59 47 C 56 44, 55 40, 56 36 C 58 32, 62 31, 66 33 C 68 34, 69 34, 70 33 C 71 31, 68 30, 64 30 Z"
            fill={primaryColor}
          />
          
          {/* Lower loop flourish of S */}
          <ellipse
            cx="57"
            cy="59"
            rx="14"
            ry="15"
            stroke={primaryColor}
            strokeWidth="3.2"
            fill="none"
            strokeLinecap="round"
            transform="rotate(-8 57 59)"
          />
        </svg>
      </div>

      {/* Brand Text */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col text-left leading-tight">
          <span
            className="font-sans font-bold tracking-[0.2em] text-sm md:text-base uppercase transition-colors"
            style={{ color: textColor }}
          >
            Tatiana Samana
          </span>
          <span
            className="text-[10px] md:text-[11px] font-sans tracking-[0.16em] uppercase font-medium mt-0.5"
            style={{ color: subtextColor }}
          >
            Kinesiología & Estética
          </span>
        </div>
      )}
    </div>
  );
}
