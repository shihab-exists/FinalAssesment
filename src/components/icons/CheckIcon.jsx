import React from 'react';

export default function CheckIcon({ className = "w-4 h-4", color = "#00D991", ...props }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill="rgba(0, 217, 145, 0.12)" />
      <path
        d="M5 8.2L7 10.2L11.2 6"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
