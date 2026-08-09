export function WarliDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 24"
      className={`w-full max-w-md ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Left line with zigzag */}
      <line x1="10" y1="12" x2="120" y2="12" strokeWidth="0.8" />
      <path d="M125 12 L130 6 L135 12 L140 6 L145 12 L150 6 L155 12" strokeWidth="0.8" />

      {/* Center motif - small sun */}
      <circle cx="200" cy="12" r="7" strokeWidth="1" />
      <circle cx="200" cy="12" r="2.5" fill="currentColor" strokeWidth="0" />
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 200 + Math.cos(angle) * 9;
        const y1 = 12 + Math.sin(angle) * 9;
        const x2 = 200 + Math.cos(angle) * 13;
        const y2 = 12 + Math.sin(angle) * 13;
        return <line key={`dr-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.8" />;
      })}

      {/* Right line with zigzag */}
      <path d="M245 12 L250 6 L255 12 L260 6 L265 12 L270 6 L275 12" strokeWidth="0.8" />
      <line x1="280" y1="12" x2="390" y2="12" strokeWidth="0.8" />

      {/* Small dots near center */}
      <circle cx="165" cy="12" r="1.5" fill="currentColor" strokeWidth="0" />
      <circle cx="175" cy="12" r="1.5" fill="currentColor" strokeWidth="0" />
      <circle cx="225" cy="12" r="1.5" fill="currentColor" strokeWidth="0" />
      <circle cx="235" cy="12" r="1.5" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}
