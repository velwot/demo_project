import React from 'react';

interface WarliDividerProps {
  className?: string;
  variant?: 'simple' | 'ornate';
}

export const WarliDivider: React.FC<WarliDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full flex items-center justify-center my-8 overflow-hidden opacity-90 ${className}`}>
      <svg
        viewBox="0 0 800 40"
        className="w-full max-w-4xl h-8 text-[#9A3412]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left Horizontal Line */}
        <line x1="0" y1="20" x2="310" y2="20" stroke="#9A3412" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="310" cy="20" r="3.5" fill="#D97706" />

        {/* Right Horizontal Line */}
        <line x1="490" y1="20" x2="800" y2="20" stroke="#9A3412" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="490" cy="20" r="3.5" fill="#D97706" />

        {/* Central Traditional Indian Folk Motif / Warli Coders */}
        <g transform="translate(400, 20)">
          {/* Central Sun/Gear Motif */}
          <circle cx="0" cy="0" r="14" fill="#FAF7F2" stroke="#1E1B4B" strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="#9A3412" />
          <text x="0" y="3.5" textAnchor="middle" fill="#FAF7F2" fontSize="8" fontWeight="bold" fontFamily="monospace">&lt;&gt;</text>

          {/* Left Warli Coder */}
          <g transform="translate(-45, 0)">
            <circle cx="0" cy="-10" r="4" fill="#9A3412" />
            <path d="M-6,2 L0,-5 L6,2 Z" fill="#9A3412" />
            <path d="M-6,2 L0,9 L6,2 Z" fill="#9A3412" />
            <path d="M-6,0 L-11,-4 M6,0 L11,-4" stroke="#9A3412" strokeWidth="1.5" />
            <path d="M-3,9 L-6,16 M3,9 L6,16" stroke="#9A3412" strokeWidth="1.5" />
          </g>

          {/* Right Warli Coder */}
          <g transform="translate(45, 0)">
            <circle cx="0" cy="-10" r="4" fill="#1E1B4B" />
            <path d="M-6,2 L0,-5 L6,2 Z" fill="#1E1B4B" />
            <path d="M-6,2 L0,9 L6,2 Z" fill="#1E1B4B" />
            <path d="M-6,0 L-11,-4 M6,0 L11,-4" stroke="#1E1B4B" strokeWidth="1.5" />
            <path d="M-3,9 L-6,16 M3,9 L6,16" stroke="#1E1B4B" strokeWidth="1.5" />
          </g>

          {/* Connecting Dots */}
          <circle cx="-24" cy="0" r="2" fill="#D97706" />
          <circle cx="24" cy="0" r="2" fill="#D97706" />
        </g>
      </svg>
    </div>
  );
};
