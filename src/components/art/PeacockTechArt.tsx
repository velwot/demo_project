import React from 'react';

export const PeacockTechArt: React.FC = () => {
  return (
    <div className="w-full max-w-[380px] mx-auto">
      <svg
        viewBox="0 0 350 350"
        className="w-full h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Mandala */}
        <circle cx="175" cy="175" r="160" stroke="#9A3412" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.4" />
        <circle cx="175" cy="175" r="145" stroke="#1E1B4B" strokeWidth="1" strokeOpacity="0.3" />

        {/* Peacock Body */}
        <g stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Elegant Curved Neck & Body */}
          <path
            d="M 160,110 C 140,120 135,150 145,180 C 155,210 185,220 200,200 C 210,180 205,150 190,140 C 180,135 175,120 180,105 C 182,95 175,85 165,90 Z"
            fill="#1E1B4B"
            fillOpacity="0.85"
          />

          {/* Crown Feathers (3 Crest Pins with Circuit Nodes) */}
          <line x1="165" y1="88" x2="155" y2="70" stroke="#D97706" strokeWidth="2" />
          <circle cx="155" cy="68" r="4" fill="#D97706" />

          <line x1="167" y1="86" x2="167" y2="64" stroke="#D97706" strokeWidth="2" />
          <circle cx="167" cy="62" r="4" fill="#9A3412" />

          <line x1="170" y1="88" x2="179" y2="70" stroke="#D97706" strokeWidth="2" />
          <circle cx="180" cy="68" r="4" fill="#D97706" />

          {/* Beak & Eye */}
          <path d="M 160,95 L 146,98 L 158,102 Z" fill="#D97706" />
          <circle cx="168" cy="97" r="2.5" fill="#FAF7F2" />
        </g>

        {/* Fan Feathers (Traditional Gond/Madhubani Peacock Feathers with Fiber-Optic Line Details) */}
        {[
          { cx: 80, cy: 120, rot: -45, color: '#9A3412', text: '</>' },
          { cx: 70, cy: 180, rot: -20, color: '#D97706', text: '@' },
          { cx: 80, cy: 240, rot: 10, color: '#166534', text: '01' },
          { cx: 110, cy: 285, rot: 35, color: '#1E1B4B', text: '{}' },
          { cx: 250, cy: 285, rot: -35, color: '#1E1B4B', text: '=>' },
          { cx: 280, cy: 240, rot: -10, color: '#9A3412', text: '&&' },
          { cx: 290, cy: 180, rot: 20, color: '#D97706', text: '||' },
          { cx: 270, cy: 120, rot: 45, color: '#166534', text: ';' },
        ].map((f, i) => (
          <g key={i} transform={`translate(${f.cx}, ${f.cy}) rotate(${f.rot})`}>
            {/* Feather Stem */}
            <path d="M0,35 L0,-25" stroke={f.color} strokeWidth="2" strokeDasharray="4 2" />
            {/* Feather Eye */}
            <path d="M0,-25 C15,-12 15,12 0,25 C-15,12 -15,-12 0,-25 Z" fill="#FAF7F2" stroke={f.color} strokeWidth="2" />
            <circle cx="0" cy="0" r="10" fill={f.color} opacity="0.8" />
            <text x="0" y="3.5" textAnchor="middle" fill="#FAF7F2" fontSize="9" fontWeight="bold" fontFamily="monospace">
              {f.text}
            </text>
          </g>
        ))}

        {/* Traditional Lotus Base with Signal Waves */}
        <g transform="translate(175, 290)">
          <path d="M-40,0 C-20,-25 0,-30 0,0 C0,-30 20,-25 40,0 C20,20 -20,20 -40,0 Z" fill="#9A3412" stroke="#FAF7F2" strokeWidth="2" />
          <path d="M-60,5 C-40,-15 -20,-20 -20,10 C-40,25 -50,20 -60,5 Z" fill="#D97706" opacity="0.8" />
          <path d="M60,5 C40,-15 20,-20 20,10 C40,25 50,20 60,5 Z" fill="#D97706" opacity="0.8" />
          
          {/* Signal WiFi / Digital Waves emitting from Lotus */}
          <path d="M-25,18 C-10,26 10,26 25,18" stroke="#1E1B4B" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M-38,26 C-15,36 15,36 38,26" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="3 3" />
        </g>
      </svg>
    </div>
  );
};
