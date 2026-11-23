import React from 'react';

export default function TestimonialBadgeIcon({ className = "w-3 h-2.5", color = "#37322F", ...props }) {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="1" y="3" width="4" height="6" stroke={color} strokeWidth="1" fill="none" />
      <rect x="7" y="1" width="4" height="8" stroke={color} strokeWidth="1" fill="none" />
      <rect x="2" y="4" width="1" height="1" fill={color} />
      <rect x="3.5" y="4" width="1" height="1" fill={color} />
      <rect x="2" y="5.5" width="1" height="1" fill={color} />
      <rect x="3.5" y="5.5" width="1" height="1" fill={color} />
      <rect x="8" y="2" width="1" height="1" fill={color} />
      <rect x="9.5" y="2" width="1" height="1" fill={color} />
      <rect x="8" y="3.5" width="1" height="1" fill={color} />
      <rect x="9.5" y="3.5" width="1" height="1" fill={color} />
      <rect x="8" y="5" width="1" height="1" fill={color} />
      <rect x="9.5" y="5" width="1" height="1" fill={color} />
    </svg>
  );
}
