import React from 'react';

export const GondTreeOfCode: React.FC = () => {
  return (
    <div className="w-full max-w-[420px] mx-auto p-2">
      <svg
        viewBox="0 0 400 450"
        className="w-full h-auto drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Bhil & Sohrai Tribal Wall Dot Patterns */}
          <pattern id="tribal-wall-dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.5" fill="#B93814" opacity="0.7" />
          </pattern>
          <pattern id="tribal-wall-hatches" width="8" height="8" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="8" y2="8" stroke="#1A2542" strokeWidth="1" opacity="0.6" />
          </pattern>
        </defs>

        {/* Textured Clay Wall Background Plate */}
        <rect x="10" y="10" width="380" height="430" rx="20" fill="#FAF5EA" stroke="#B93814" strokeWidth="3" />
        <rect x="18" y="18" width="364" height="414" rx="14" fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="6 3" />

        {/* Roots entwined with Circuit Nodes */}
        <g stroke="#B93814" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M200,370 C180,400 140,415 100,420" />
          <path d="M200,370 C220,400 260,415 300,420" />
          <circle cx="100" cy="420" r="4" fill="#D97706" stroke="#FAF5EA" />
          <circle cx="300" cy="420" r="4" fill="#D97706" stroke="#FAF5EA" />
        </g>

        {/* Main Tribal Wall Tree Trunk */}
        <path
          d="M175,370 C170,290 155,230 120,170 C150,190 180,210 190,250 C195,190 180,130 140,80 C180,110 200,150 205,210 C210,150 230,110 270,80 C230,130 215,190 220,250 C230,210 260,190 290,170 C255,230 240,290 235,370 Z"
          fill="url(#tribal-wall-hatches)"
          stroke="#1A2542"
          strokeWidth="3"
        />

        <path
          d="M185,370 C182,300 175,240 150,190 C170,210 190,230 195,270 C200,270 210,210 230,190 C225,240 218,300 215,370 Z"
          fill="url(#tribal-wall-dots)"
        />

        {/* Tribal Wall Leaves carrying Tech Symbols */}

        {/* Leaf 1: C++ */}
        <g transform="translate(110, 70)">
          <path d="M0,-24 C18,-12 22,12 0,24 C-22,12 -18,-12 0,-24 Z" fill="#B93814" stroke="#FAF5EA" strokeWidth="2" />
          <text x="0" y="4" textAnchor="middle" fill="#FAF5EA" fontSize="11" fontWeight="bold" fontFamily="sans-serif">C++</text>
        </g>

        {/* Leaf 2: Python */}
        <g transform="translate(280, 70)">
          <path d="M0,-24 C18,-12 22,12 0,24 C-22,12 -18,-12 0,-24 Z" fill="#1A2542" stroke="#FAF5EA" strokeWidth="2" />
          <text x="0" y="4" textAnchor="middle" fill="#FAF5EA" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Python</text>
        </g>

        {/* Leaf 3: { } */}
        <g transform="translate(75, 165)">
          <path d="M0,-22 C16,-10 20,10 0,22 C-20,10 -16,-10 0,-22 Z" fill="#FAF5EA" stroke="#D97706" strokeWidth="2.5" />
          <text x="0" y="5" textAnchor="middle" fill="#D97706" fontSize="13" fontWeight="bold" fontFamily="monospace">&#123; &#125;</text>
        </g>

        {/* Leaf 4: React */}
        <g transform="translate(325, 165)">
          <path d="M0,-22 C16,-10 20,10 0,22 C-20,10 -16,-10 0,-22 Z" fill="#FAF5EA" stroke="#15803D" strokeWidth="2.5" />
          <text x="0" y="4" textAnchor="middle" fill="#15803D" fontSize="10" fontWeight="bold" fontFamily="sans-serif">React</text>
        </g>

        {/* Leaf 5: 0101 */}
        <g transform="translate(200, 40)">
          <circle cx="0" cy="0" r="22" fill="#B93814" stroke="#FAF5EA" strokeWidth="2.5" />
          <text x="0" y="4" textAnchor="middle" fill="#FAF5EA" fontSize="10" fontWeight="bold" fontFamily="monospace">0101</text>
        </g>

        {/* Leaf 6: Java */}
        <g transform="translate(130, 250)">
          <path d="M-20,0 C-10,-18 10,-18 20,0 C10,18 -10,18 -20,0 Z" fill="#FAF5EA" stroke="#1A2542" strokeWidth="2" />
          <text x="0" y="4" textAnchor="middle" fill="#1A2542" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Java</text>
        </g>

        {/* Leaf 7: Git */}
        <g transform="translate(270, 250)">
          <path d="M-20,0 C-10,-18 10,-18 20,0 C10,18 -10,18 -20,0 Z" fill="#FAF5EA" stroke="#B93814" strokeWidth="2" />
          <text x="0" y="4" textAnchor="middle" fill="#B93814" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Git</text>
        </g>

        {/* Tribal Wall Street Art Title Label */}
        <g transform="translate(200, 390)">
          <rect x="-85" y="-12" width="170" height="24" rx="6" fill="#B93814" />
          <text x="0" y="4" textAnchor="middle" fill="#FAF5EA" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
            MODERN INDIA TRIBAL ART
          </text>
        </g>
      </svg>
    </div>
  );
};
