import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.15, duration: 1.5, ease: 'easeInOut' },
      opacity: { delay: i * 0.15, duration: 0.3 },
    },
  }),
};

export function WarliHeroScene({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 600 420"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      animate="visible"
    >
      {/* Outer border */}
      <motion.rect x="8" y="8" width="584" height="404" strokeWidth="1.5" variants={draw} custom={0} />
      <motion.rect x="14" y="14" width="572" height="392" strokeWidth="0.8" variants={draw} custom={0.5} />

      {/* Large sun - top center */}
      <motion.circle cx="300" cy="60" r="28" strokeWidth="1.5" variants={draw} custom={1} />
      <motion.circle cx="300" cy="60" r="5" strokeWidth="1.5" fill="currentColor" variants={draw} custom={1.2} />
      {/* Sun rays */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 300 + Math.cos(angle) * 32;
        const y1 = 60 + Math.sin(angle) * 32;
        const x2 = 300 + Math.cos(angle) * 42;
        const y2 = 60 + Math.sin(angle) * 42;
        return (
          <motion.line key={`ray-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.2" variants={draw} custom={1.3} />
        );
      })}

      {/* Central figure - student with laptop */}
      {/* Head */}
      <motion.circle cx="300" cy="180" r="14" strokeWidth="1.5" variants={draw} custom={2} />
      {/* Body - triangle */}
      <motion.path d="M300 194 L275 260 L325 260 Z" strokeWidth="1.5" variants={draw} custom={2.2} />
      {/* Arms holding laptop */}
      <motion.line x1="280" y1="220" x2="255" y2="235" strokeWidth="1.5" variants={draw} custom={2.4} />
      <motion.line x1="320" y1="220" x2="345" y2="235" strokeWidth="1.5" variants={draw} custom={2.4} />
      {/* Legs */}
      <motion.line x1="285" y1="260" x2="270" y2="300" strokeWidth="1.5" variants={draw} custom={2.5} />
      <motion.line x1="315" y1="260" x2="330" y2="300" strokeWidth="1.5" variants={draw} custom={2.5} />
      {/* Laptop */}
      <motion.rect x="255" y="232" width="90" height="12" strokeWidth="1.5" variants={draw} custom={2.6} />
      <motion.rect x="260" y="220" width="80" height="14" strokeWidth="1.2" variants={draw} custom={2.7} />
      {/* Screen content - code symbols */}
      <motion.path d="M270 224 L275 227 L270 230" strokeWidth="1" variants={draw} custom={3} />
      <motion.path d="M330 224 L325 227 L330 230" strokeWidth="1" variants={draw} custom={3} />
      <motion.line x1="283" y1="226" x2="296" y2="226" strokeWidth="0.8" variants={draw} custom={3.1} />
      <motion.line x1="300" y1="228" x2="315" y2="228" strokeWidth="0.8" variants={draw} custom={3.1} />

      {/* Left tree */}
      <motion.line x1="100" y1="350" x2="100" y2="180" strokeWidth="1.5" variants={draw} custom={3} />
      <motion.path d="M100 180 L80 200 M100 180 L120 200" strokeWidth="1.2" variants={draw} custom={3.2} />
      <motion.path d="M100 210 L75 230 M100 210 L125 230" strokeWidth="1.2" variants={draw} custom={3.3} />
      <motion.path d="M100 240 L70 260 M100 240 L130 260" strokeWidth="1.2" variants={draw} custom={3.4} />
      {/* Leaves as small circles */}
      <motion.circle cx="80" cy="195" r="4" strokeWidth="1" variants={draw} custom={3.5} />
      <motion.circle cx="120" cy="195" r="4" strokeWidth="1" variants={draw} custom={3.5} />
      <motion.circle cx="75" cy="225" r="4" strokeWidth="1" variants={draw} custom={3.5} />
      <motion.circle cx="125" cy="225" r="4" strokeWidth="1" variants={draw} custom={3.5} />
      <motion.circle cx="100" cy="175" r="5" strokeWidth="1" variants={draw} custom={3.5} />

      {/* Right tree */}
      <motion.line x1="500" y1="350" x2="500" y2="190" strokeWidth="1.5" variants={draw} custom={3} />
      <motion.path d="M500 190 L480 210 M500 190 L520 210" strokeWidth="1.2" variants={draw} custom={3.2} />
      <motion.path d="M500 220 L475 240 M500 220 L525 240" strokeWidth="1.2" variants={draw} custom={3.3} />
      <motion.path d="M500 250 L470 270 M500 250 L530 270" strokeWidth="1.2" variants={draw} custom={3.4} />
      <motion.circle cx="480" cy="205" r="4" strokeWidth="1" variants={draw} custom={3.5} />
      <motion.circle cx="520" cy="205" r="4" strokeWidth="1" variants={draw} custom={3.5} />
      <motion.circle cx="475" cy="235" r="4" strokeWidth="1" variants={draw} custom={3.5} />
      <motion.circle cx="525" cy="235" r="4" strokeWidth="1" variants={draw} custom={3.5} />
      <motion.circle cx="500" cy="185" r="5" strokeWidth="1" variants={draw} custom={3.5} />

      {/* Small walking figure - left */}
      <motion.circle cx="170" cy="300" r="8" strokeWidth="1.2" variants={draw} custom={4} />
      <motion.path d="M170 308 L160 340 L180 340 Z" strokeWidth="1.2" variants={draw} custom={4.1} />
      <motion.line x1="160" y1="320" x2="148" y2="310" strokeWidth="1.2" variants={draw} custom={4.2} />
      <motion.line x1="180" y1="320" x2="192" y2="310" strokeWidth="1.2" variants={draw} custom={4.2} />
      <motion.line x1="165" y1="340" x2="155" y2="360" strokeWidth="1.2" variants={draw} custom={4.3} />
      <motion.line x1="175" y1="340" x2="185" y2="360" strokeWidth="1.2" variants={draw} custom={4.3} />

      {/* Small figure with arms up - right */}
      <motion.circle cx="430" cy="295" r="8" strokeWidth="1.2" variants={draw} custom={4} />
      <motion.path d="M430 303 L420 335 L440 335 Z" strokeWidth="1.2" variants={draw} custom={4.1} />
      <motion.line x1="422" y1="315" x2="408" y2="298" strokeWidth="1.2" variants={draw} custom={4.2} />
      <motion.line x1="438" y1="315" x2="452" y2="298" strokeWidth="1.2" variants={draw} custom={4.2} />
      <motion.line x1="425" y1="335" x2="418" y2="358" strokeWidth="1.2" variants={draw} custom={4.3} />
      <motion.line x1="435" y1="335" x2="442" y2="358" strokeWidth="1.2" variants={draw} custom={4.3} />

      {/* Dancing figure - far right */}
      <motion.circle cx="550" cy="310" r="7" strokeWidth="1.2" variants={draw} custom={4.5} />
      <motion.path d="M550 317 L542 345 L558 345 Z" strokeWidth="1.2" variants={draw} custom={4.6} />
      <motion.line x1="543" y1="328" x2="530" y2="318" strokeWidth="1.2" variants={draw} custom={4.7} />
      <motion.line x1="557" y1="328" x2="565" y2="315" strokeWidth="1.2" variants={draw} custom={4.7} />

      {/* Circuit-like lines around central figure */}
      <motion.path d="M220 170 L220 165 L240 165 L240 175" strokeWidth="0.8" variants={draw} custom={5} />
      <motion.path d="M380 170 L380 165 L360 165 L360 175" strokeWidth="0.8" variants={draw} custom={5} />
      <motion.circle cx="220" cy="170" r="2" strokeWidth="0.8" fill="currentColor" variants={draw} custom={5.1} />
      <motion.circle cx="380" cy="170" r="2" strokeWidth="0.8" fill="currentColor" variants={draw} custom={5.1} />
      <motion.path d="M235 280 L235 290 L265 290" strokeWidth="0.8" variants={draw} custom={5.2} />
      <motion.path d="M365 280 L365 290 L335 290" strokeWidth="0.8" variants={draw} custom={5.2} />

      {/* Binary/code dots scattered */}
      <motion.circle cx="200" cy="150" r="2" fill="currentColor" strokeWidth="0" variants={draw} custom={5.5} />
      <motion.circle cx="210" cy="150" r="2" fill="currentColor" strokeWidth="0" variants={draw} custom={5.5} />
      <motion.circle cx="400" cy="150" r="2" fill="currentColor" strokeWidth="0" variants={draw} custom={5.5} />
      <motion.circle cx="390" cy="155" r="2" fill="currentColor" strokeWidth="0" variants={draw} custom={5.5} />

      {/* Ground line with hills */}
      <motion.path d="M20 370 Q80 350 140 370 Q200 350 260 370 Q320 350 380 370 Q440 350 500 370 Q560 350 580 370" strokeWidth="1.2" variants={draw} custom={6} />

      {/* Small geometric patterns - zigzag bottom */}
      <motion.path d="M30 385 L40 378 L50 385 L60 378 L70 385 L80 378 L90 385" strokeWidth="0.8" variants={draw} custom={6.5} />
      <motion.path d="M510 385 L520 378 L530 385 L540 378 L550 385 L560 378 L570 385" strokeWidth="0.8" variants={draw} custom={6.5} />

      {/* Small hut - left side */}
      <motion.path d="M55 340 L45 310 L65 310 Z" strokeWidth="1" variants={draw} custom={5} />
      <motion.rect x="48" y="310" width="14" height="30" strokeWidth="1" variants={draw} custom={5.1} />

      {/* Bird shapes */}
      <motion.path d="M150 130 L160 120 L170 130" strokeWidth="1" variants={draw} custom={6} />
      <motion.path d="M440 140 L450 130 L460 140" strokeWidth="1" variants={draw} custom={6} />
      <motion.path d="M350 100 L358 92 L366 100" strokeWidth="1" variants={draw} custom={6.2} />

      {/* Decorative dots row */}
      {[...Array(8)].map((_, i) => (
        <motion.circle key={`dot-${i}`} cx={200 + i * 25} cy="395" r="1.5" fill="currentColor" strokeWidth="0" variants={draw} custom={7} />
      ))}
    </motion.svg>
  );
}
