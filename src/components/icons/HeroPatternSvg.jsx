import React from 'react';

export default function HeroPatternSvg({ className = "w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply", ...props }) {
  return (
    <svg
      className={className}
      style={{
        filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)"
      }}
      viewBox="0 0 2808 1200"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <defs>
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(55,50,47,0.12)" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  );
}
