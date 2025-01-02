import React from 'react';

export const Logo = ({ className = "", size = 40 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Film reel circle with gradient */}
      <circle cx="20" cy="20" r="18" fill="url(#gradient)" />
      
      {/* Abstract AI pattern */}
      <path
        d="M14 14L26 26M14 26L26 14"
        stroke="#00FFC6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Film sprocket holes */}
      <circle cx="20" cy="11" r="2" fill="#0D0D0D" />
      <circle cx="20" cy="29" r="2" fill="#0D0D0D" />
      <circle cx="11" cy="20" r="2" fill="#0D0D0D" />
      <circle cx="29" cy="20" r="2" fill="#0D0D0D" />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8E2DE2" />
          <stop offset="100%" stopColor="#4A00E0" />
        </linearGradient>
      </defs>
    </svg>
  );
};