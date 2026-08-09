interface WarliCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

const rotationMap = {
  'top-left': 'rotate(0)',
  'top-right': 'rotate(90)',
  'bottom-right': 'rotate(180)',
  'bottom-left': 'rotate(270)',
};

export function WarliCorner({ position, className = '' }: WarliCornerProps) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`w-10 h-10 md:w-14 md:h-14 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: rotationMap[position] }}
    >
      {/* Corner L-shape */}
      <path d="M5 55 L5 5 L55 5" strokeWidth="1.2" />
      <path d="M10 50 L10 10 L50 10" strokeWidth="0.7" />

      {/* Small decorative arc */}
      <path d="M5 40 Q20 20 40 5" strokeWidth="0.6" strokeDasharray="2 2" />

      {/* Tiny tree */}
      <line x1="22" y1="38" x2="22" y2="22" strokeWidth="0.8" />
      <path d="M22 22 L17 28 M22 22 L27 28" strokeWidth="0.7" />
      <circle cx="22" cy="20" r="2.5" strokeWidth="0.6" />

      {/* Small dots */}
      <circle cx="35" cy="18" r="1.2" fill="currentColor" strokeWidth="0" />
      <circle cx="40" cy="22" r="1.2" fill="currentColor" strokeWidth="0" />
      <circle cx="18" cy="42" r="1.2" fill="currentColor" strokeWidth="0" />

      {/* Tiny zigzag */}
      <path d="M30 12 L33 8 L36 12 L39 8 L42 12" strokeWidth="0.6" />
    </svg>
  );
}
