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
      {/* Dynamic film strip that morphs into neural network */}
      <path
        d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2z"
        fill="url(#filmGradient)"
      />
      
      {/* Neural network connections */}
      <path
        d="M13 13C17 17 23 17 27 13M13 27C17 23 23 23 27 27M20 15v10"
        stroke="#00FFC6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1 3"
      />
      
      {/* Animated film frames */}
      <path
        d="M15 20a5 5 0 0110 0 5 5 0 01-10 0z"
        stroke="#00FFC6"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Abstract AI nodes */}
      <circle cx="20" cy="15" r="1.5" fill="#00FFC6" />
      <circle cx="20" cy="25" r="1.5" fill="#00FFC6" />
      <circle cx="15" cy="20" r="1.5" fill="#00FFC6" />
      <circle cx="25" cy="20" r="1.5" fill="#00FFC6" />
      
      {/* Pulsing glow effect */}
      <circle
        cx="20"
        cy="20"
        r="16"
        stroke="url(#pulseGradient)"
        strokeWidth="0.5"
        strokeDasharray="2 4"
        fill="none"
      />

      {/* Gradients */}
      <defs>
        <linearGradient
          id="filmGradient"
          x1="2"
          y1="2"
          x2="38"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8E2DE2">
            <animate
              attributeName="stop-color"
              values="#8E2DE2; #4A00E0; #8E2DE2"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#4A00E0">
            <animate
              attributeName="stop-color"
              values="#4A00E0; #8E2DE2; #4A00E0"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        
        <radialGradient
          id="pulseGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#00FFC6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00FFC6" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Animation for pulsing effect */}
      <animate
        xlinkHref="#pulse"
        attributeName="r"
        values="16;17;16"
        dur="2s"
        repeatCount="indefinite"
      />
    </svg>
  );
};