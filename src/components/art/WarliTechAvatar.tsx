import React from 'react';

export const WarliTechAvatar: React.FC = () => {
  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center p-3">
      {/* Street Wall Plaster Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#B93814]/15 via-[#D97706]/15 to-[#1A2542]/15 blur-2xl animate-pulse" />

      <svg
        viewBox="0 0 500 500"
        className="w-full h-full relative z-10 drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Terracotta Wall Texture Pattern */}
          <pattern id="clay-wall-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#B93814" strokeWidth="0.8" strokeOpacity="0.18" />
            <circle cx="12" cy="12" r="1" fill="#D97706" opacity="0.2" />
          </pattern>
          
          <linearGradient id="geru-mural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8411C" />
            <stop offset="100%" stopColor="#8C2208" />
          </linearGradient>

          <linearGradient id="indigo-mural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A375B" />
            <stop offset="100%" stopColor="#141D36" />
          </linearGradient>

          <linearGradient id="chalk-white-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF6EE" />
            <stop offset="100%" stopColor="#EFE5D5" />
          </linearGradient>
        </defs>

        {/* Outer Mud Wall Mural Frame */}
        <rect x="15" y="15" width="470" height="470" rx="30" fill="#FAF5EA" stroke="#B93814" strokeWidth="4" />
        <rect x="25" y="25" width="450" height="450" rx="24" fill="url(#clay-wall-pattern)" stroke="#D97706" strokeWidth="2" strokeDasharray="8 4" />

        {/* Traditional Warli & Bhil Tribal Wall Figures Ring */}
        <g stroke="#B93814" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          
          {/* Top Warli Tribal Coder Figure */}
          <g transform="translate(250, 55)">
            <circle cx="0" cy="-14" r="7" fill="#B93814" />
            <path d="M-10,4 L0,-7 L10,4 Z" fill="#B93814" />
            <path d="M-10,4 L0,15 L10,4 Z" fill="#B93814" />
            <path d="M-10,2 L-18,-4 M10,2 L18,-4" stroke="#B93814" strokeWidth="2.2" />
            <path d="M-5,15 L-10,26 M5,15 L10,26" stroke="#B93814" strokeWidth="2.2" />
            {/* Street Wall Laptop Symbol */}
            <rect x="-10" y="-4" width="20" height="12" rx="2" fill="#FAF6EE" stroke="#1A2542" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#B93814" fontSize="8" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
          </g>

          {/* Right Warli Tribal Musician / Coder */}
          <g transform="translate(435, 250) rotate(90)">
            <circle cx="0" cy="-14" r="7" fill="#1A2542" />
            <path d="M-10,4 L0,-7 L10,4 Z" fill="#1A2542" />
            <path d="M-10,4 L0,15 L10,4 Z" fill="#1A2542" />
            <path d="M-10,2 L-18,-6 M10,2 L18,-6" stroke="#1A2542" strokeWidth="2.2" />
            <path d="M-5,15 L-10,26 M5,15 L10,26" stroke="#1A2542" strokeWidth="2.2" />
          </g>

          {/* Bottom Warli Tribal Coder */}
          <g transform="translate(250, 445) rotate(180)">
            <circle cx="0" cy="-14" r="7" fill="#B93814" />
            <path d="M-10,4 L0,-7 L10,4 Z" fill="#B93814" />
            <path d="M-10,4 L0,15 L10,4 Z" fill="#B93814" />
            <path d="M-10,2 L-18,-4 M10,2 L18,-4" stroke="#B93814" strokeWidth="2.2" />
            <path d="M-5,15 L-10,26 M5,15 L10,26" stroke="#B93814" strokeWidth="2.2" />
          </g>

          {/* Left Warli Tribal Coder */}
          <g transform="translate(65, 250) rotate(-90)">
            <circle cx="0" cy="-14" r="7" fill="#1A2542" />
            <path d="M-10,4 L0,-7 L10,4 Z" fill="#1A2542" />
            <path d="M-10,4 L0,15 L10,4 Z" fill="#1A2542" />
            <path d="M-10,2 L-18,-6 M10,2 L18,-6" stroke="#1A2542" strokeWidth="2.2" />
            <path d="M-5,15 L-10,26 M5,15 L10,26" stroke="#1A2542" strokeWidth="2.2" />
          </g>

        </g>

        {/* Central Street Wall Mural Avatar Frame */}
        <g transform="translate(250, 250)">
          
          {/* Wall Plaster Textured Frame */}
          <circle cx="0" cy="0" r="145" fill="url(#geru-mural-grad)" stroke="#FAF6EE" strokeWidth="4" />
          <circle cx="0" cy="0" r="135" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="10 5" />
          
          {/* Inner Dark Mud Background */}
          <circle cx="0" cy="0" r="125" fill="url(#indigo-mural-grad)" />

          {/* Chalk White Tribal Line Art Developer Illustration */}
          {/* Body / Kurta */}
          <path d="M-65,110 Q0,75 65,110 L50,125 L-50,125 Z" fill="#B93814" stroke="#FAF6EE" strokeWidth="2" />
          <path d="M0,80 L0,125" stroke="#D97706" strokeWidth="2" strokeDasharray="4 2" />

          {/* Head & Glasses */}
          <circle cx="0" cy="20" r="34" fill="#FAF6EE" stroke="#1A2542" strokeWidth="2" />
          
          {/* Glasses & Tribal Hair Accent */}
          <rect x="-24" y="12" width="20" height="14" rx="3" fill="none" stroke="#B93814" strokeWidth="3" />
          <rect x="4" y="12" width="20" height="14" rx="3" fill="none" stroke="#B93814" strokeWidth="3" />
          <line x1="-4" y1="18" x2="4" y2="18" stroke="#B93814" strokeWidth="3" />
          <path d="M-30,8 Q0,-25 30,8" fill="#1A2542" />

          {/* Smile */}
          <path d="M-10,42 Q0,50 10,42" stroke="#1A2542" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Laptop on Wall Mural */}
          <rect x="-52" y="65" width="104" height="50" rx="5" fill="#181512" stroke="#FAF6EE" strokeWidth="2.5" />
          <rect x="-46" y="71" width="92" height="38" rx="3" fill="#0F172A" />
          
          {/* Code Text in Chalk Style */}
          <text x="-38" y="85" fill="#EAB308" fontSize="9" fontFamily="monospace" fontWeight="bold">MODERN INDIA</text>
          <text x="-38" y="97" fill="#10B981" fontSize="9" fontFamily="monospace">const dev = 'Narayan';</text>

        </g>

        {/* Street Art Spray Stencil Text Badge (Top Center) */}
        <g transform="translate(250, 395)">
          <rect x="-110" y="-14" width="220" height="28" rx="8" fill="#FAF6EE" stroke="#B93814" strokeWidth="2" />
          <text x="0" y="4" textAnchor="middle" fill="#B93814" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="1.5">
            MODERN INDIA × TRIBAL ART
          </text>
        </g>

      </svg>
    </div>
  );
};
