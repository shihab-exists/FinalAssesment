import React from 'react';

export default function ServicesBadgeIcon({ className = "w-3 h-3", color = "#37322F", ...props }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="1" y="1" width="4" height="4" stroke={color} strokeWidth="1" fill="none" />
      <rect x="7" y="1" width="4" height="4" stroke={color} strokeWidth="1" fill="none" />
      <rect x="1" y="7" width="4" height="4" stroke={color} strokeWidth="1" fill="none" />
      <rect x="7" y="7" width="4" height="4" stroke={color} strokeWidth="1" fill="none" />
    </svg>
  );
}
