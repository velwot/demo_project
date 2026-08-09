interface WarliProjectIconProps {
  type: 'web' | 'data' | 'mobile' | 'security';
  className?: string;
}

export function WarliProjectIcon({ type, className = '' }: WarliProjectIconProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`w-full h-full ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {type === 'web' && (
        <>
          {/* Figure interacting with monitor */}
          <circle cx="45" cy="35" r="10" strokeWidth="1.5" />
          <path d="M45 45 L35 75 L55 75 Z" strokeWidth="1.5" />
          <line x1="37" y1="58" x2="25" y2="52" strokeWidth="1.2" />
          <line x1="53" y1="58" x2="65" y2="52" strokeWidth="1.2" />
          <line x1="38" y1="75" x2="32" y2="100" strokeWidth="1.2" />
          <line x1="52" y1="75" x2="58" y2="100" strokeWidth="1.2" />
          {/* Monitor */}
          <rect x="65" y="30" width="40" height="28" strokeWidth="1.2" />
          <line x1="85" y1="58" x2="85" y2="66" strokeWidth="1" />
          <line x1="75" y1="66" x2="95" y2="66" strokeWidth="1" />
          {/* Code on screen */}
          <path d="M72 40 L76 44 L72 48" strokeWidth="0.8" />
          <line x1="79" y1="42" x2="90" y2="42" strokeWidth="0.6" />
          <line x1="79" y1="46" x2="96" y2="46" strokeWidth="0.6" />
          <line x1="79" y1="50" x2="88" y2="50" strokeWidth="0.6" />
          {/* Small decorative dots */}
          <circle cx="20" cy="90" r="1.5" fill="currentColor" strokeWidth="0" />
          <circle cx="100" cy="85" r="1.5" fill="currentColor" strokeWidth="0" />
        </>
      )}

      {type === 'data' && (
        <>
          {/* Connected containers/circles representing data flow */}
          <circle cx="35" cy="35" r="16" strokeWidth="1.2" />
          <circle cx="85" cy="35" r="16" strokeWidth="1.2" />
          <circle cx="60" cy="80" r="16" strokeWidth="1.2" />
          {/* Connection lines */}
          <line x1="49" y1="40" x2="71" y2="40" strokeWidth="1" />
          <line x1="42" y1="49" x2="50" y2="68" strokeWidth="1" />
          <line x1="78" y1="49" x2="70" y2="68" strokeWidth="1" />
          {/* Inner symbols */}
          <circle cx="35" cy="35" r="4" fill="currentColor" strokeWidth="0" />
          <circle cx="85" cy="35" r="4" fill="currentColor" strokeWidth="0" />
          <circle cx="60" cy="80" r="4" fill="currentColor" strokeWidth="0" />
          {/* Small figure */}
          <circle cx="60" cy="20" r="5" strokeWidth="1" />
          <path d="M60 25 L56 38 L64 38 Z" strokeWidth="0.8" />
          {/* Arrow heads on connections */}
          <path d="M58 40 L62 37 L62 43 Z" fill="currentColor" strokeWidth="0" />
          {/* Data dots */}
          <circle cx="15" cy="60" r="1.5" fill="currentColor" strokeWidth="0" />
          <circle cx="105" cy="60" r="1.5" fill="currentColor" strokeWidth="0" />
          <circle cx="60" cy="108" r="1.5" fill="currentColor" strokeWidth="0" />
        </>
      )}

      {type === 'mobile' && (
        <>
          {/* Figure holding phone */}
          <circle cx="50" cy="30" r="10" strokeWidth="1.5" />
          <path d="M50 40 L40 70 L60 70 Z" strokeWidth="1.5" />
          <line x1="42" y1="52" x2="30" y2="48" strokeWidth="1.2" />
          <line x1="58" y1="52" x2="70" y2="45" strokeWidth="1.2" />
          <line x1="43" y1="70" x2="38" y2="95" strokeWidth="1.2" />
          <line x1="57" y1="70" x2="62" y2="95" strokeWidth="1.2" />
          {/* Phone */}
          <rect x="68" y="38" width="16" height="24" rx="2" strokeWidth="1.2" />
          <line x1="74" y1="42" x2="80" y2="42" strokeWidth="0.6" />
          <circle cx="76" cy="57" r="2" strokeWidth="0.6" />
          {/* Signal waves */}
          <path d="M88 42 Q94 38 88 34" strokeWidth="0.7" />
          <path d="M92 44 Q100 38 92 32" strokeWidth="0.7" />
          {/* Small tree */}
          <line x1="20" y1="100" x2="20" y2="75" strokeWidth="0.8" />
          <path d="M20 75 L15 82 M20 75 L25 82" strokeWidth="0.7" />
          <circle cx="20" cy="72" r="3" strokeWidth="0.6" />
          {/* Dots */}
          <circle cx="95" cy="70" r="1.5" fill="currentColor" strokeWidth="0" />
          <circle cx="100" cy="75" r="1.5" fill="currentColor" strokeWidth="0" />
        </>
      )}

      {type === 'security' && (
        <>
          {/* Figure with shield */}
          <circle cx="60" cy="28" r="10" strokeWidth="1.5" />
          <path d="M60 38 L50 68 L70 68 Z" strokeWidth="1.5" />
          <line x1="52" y1="50" x2="38" y2="44" strokeWidth="1.2" />
          <line x1="68" y1="50" x2="82" y2="44" strokeWidth="1.2" />
          <line x1="53" y1="68" x2="48" y2="92" strokeWidth="1.2" />
          <line x1="67" y1="68" x2="72" y2="92" strokeWidth="1.2" />
          {/* Shield */}
          <path d="M28 35 L28 55 Q28 70 40 75 L28 35 Z" strokeWidth="1.2" />
          <path d="M28 35 L40 75 Q52 70 52 55 L52 35 Z" strokeWidth="1.2" />
          {/* Lock symbol inside shield */}
          <rect x="35" y="50" width="10" height="8" strokeWidth="0.8" />
          <path d="M37 50 L37 46 Q40 42 43 46 L43 50" strokeWidth="0.8" />
          <circle cx="40" cy="54" r="1.5" fill="currentColor" strokeWidth="0" />
          {/* Key lines */}
          <path d="M82 44 L92 38 L96 42" strokeWidth="0.8" />
          <circle cx="96" cy="42" r="3" strokeWidth="0.7" />
          {/* Dots */}
          <circle cx="20" cy="85" r="1.5" fill="currentColor" strokeWidth="0" />
          <circle cx="100" cy="85" r="1.5" fill="currentColor" strokeWidth="0" />
        </>
      )}
    </svg>
  );
}
