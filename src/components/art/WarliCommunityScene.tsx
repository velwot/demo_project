import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.12, duration: 0.8 },
  }),
};

export function WarliCommunityScene({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 500 320"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Large central sun */}
      <motion.circle cx="250" cy="100" r="40" strokeWidth="1.5" variants={fade} custom={0} />
      <motion.circle cx="250" cy="100" r="8" strokeWidth="1.5" fill="currentColor" variants={fade} custom={0.5} />
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 * Math.PI) / 180;
        const x1 = 250 + Math.cos(angle) * 44;
        const y1 = 100 + Math.sin(angle) * 44;
        const x2 = 250 + Math.cos(angle) * 54;
        const y2 = 100 + Math.sin(angle) * 54;
        return <motion.line key={`sr-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" variants={fade} custom={1} />;
      })}

      {/* Circle of people around center */}
      {/* Person 1 - top left */}
      <motion.g variants={fade} custom={2}>
        <circle cx="160" cy="155" r="8" strokeWidth="1.2" />
        <path d="M160 163 L152 188 L168 188 Z" strokeWidth="1.2" />
        <line x1="153" y1="175" x2="142" y2="168" strokeWidth="1.2" />
        <line x1="167" y1="175" x2="178" y2="168" strokeWidth="1.2" />
        <line x1="155" y1="188" x2="150" y2="208" strokeWidth="1.2" />
        <line x1="165" y1="188" x2="170" y2="208" strokeWidth="1.2" />
      </motion.g>

      {/* Person 2 - top right */}
      <motion.g variants={fade} custom={2.5}>
        <circle cx="340" cy="155" r="8" strokeWidth="1.2" />
        <path d="M340 163 L332 188 L348 188 Z" strokeWidth="1.2" />
        <line x1="333" y1="175" x2="322" y2="168" strokeWidth="1.2" />
        <line x1="347" y1="175" x2="358" y2="168" strokeWidth="1.2" />
        <line x1="335" y1="188" x2="330" y2="208" strokeWidth="1.2" />
        <line x1="345" y1="188" x2="350" y2="208" strokeWidth="1.2" />
      </motion.g>

      {/* Person 3 - left with laptop */}
      <motion.g variants={fade} custom={3}>
        <circle cx="110" cy="200" r="8" strokeWidth="1.2" />
        <path d="M110 208 L102 233 L118 233 Z" strokeWidth="1.2" />
        <line x1="103" y1="218" x2="88" y2="215" strokeWidth="1.2" />
        <line x1="117" y1="218" x2="130" y2="212" strokeWidth="1.2" />
        {/* Laptop */}
        <rect x="125" y="208" width="18" height="10" strokeWidth="0.8" />
        <line x1="134" y1="218" x2="134" y2="221" strokeWidth="0.8" />
        <line x1="128" y1="221" x2="140" y2="221" strokeWidth="0.8" />
        <line x1="102" y1="233" x2="97" y2="253" strokeWidth="1.2" />
        <line x1="118" y1="233" x2="123" y2="253" strokeWidth="1.2" />
      </motion.g>

      {/* Person 4 - right */}
      <motion.g variants={fade} custom={3.5}>
        <circle cx="390" cy="200" r="8" strokeWidth="1.2" />
        <path d="M390 208 L382 233 L398 233 Z" strokeWidth="1.2" />
        <line x1="383" y1="218" x2="372" y2="212" strokeWidth="1.2" />
        <line x1="397" y1="218" x2="408" y2="212" strokeWidth="1.2" />
        <line x1="385" y1="233" x2="380" y2="253" strokeWidth="1.2" />
        <line x1="395" y1="233" x2="400" y2="253" strokeWidth="1.2" />
      </motion.g>

      {/* Person 5 - bottom left */}
      <motion.g variants={fade} custom={4}>
        <circle cx="190" cy="230" r="8" strokeWidth="1.2" />
        <path d="M190 238 L182 263 L198 263 Z" strokeWidth="1.2" />
        <line x1="183" y1="248" x2="172" y2="242" strokeWidth="1.2" />
        <line x1="197" y1="248" x2="208" y2="242" strokeWidth="1.2" />
        <line x1="185" y1="263" x2="180" y2="283" strokeWidth="1.2" />
        <line x1="195" y1="263" x2="200" y2="283" strokeWidth="1.2" />
      </motion.g>

      {/* Person 6 - bottom right */}
      <motion.g variants={fade} custom={4.5}>
        <circle cx="310" cy="230" r="8" strokeWidth="1.2" />
        <path d="M310 238 L302 263 L318 263 Z" strokeWidth="1.2" />
        <line x1="303" y1="248" x2="292" y2="242" strokeWidth="1.2" />
        <line x1="317" y1="248" x2="328" y2="242" strokeWidth="1.2" />
        <line x1="305" y1="263" x2="300" y2="283" strokeWidth="1.2" />
        <line x1="315" y1="263" x2="320" y2="283" strokeWidth="1.2" />
      </motion.g>

      {/* Person 7 - bottom center (arms linked) */}
      <motion.g variants={fade} custom={5}>
        <circle cx="250" cy="250" r="8" strokeWidth="1.2" />
        <path d="M250 258 L242 283 L258 283 Z" strokeWidth="1.2" />
        <line x1="243" y1="268" x2="210" y2="262" strokeWidth="1.2" />
        <line x1="257" y1="268" x2="290" y2="262" strokeWidth="1.2" />
        <line x1="245" y1="283" x2="240" y2="303" strokeWidth="1.2" />
        <line x1="255" y1="283" x2="260" y2="303" strokeWidth="1.2" />
      </motion.g>

      {/* Left tree */}
      <motion.g variants={fade} custom={5.5}>
        <line x1="50" y1="290" x2="50" y2="180" strokeWidth="1.2" />
        <path d="M50 180 L35 198 M50 180 L65 198" strokeWidth="1" />
        <path d="M50 205 L32 220 M50 205 L68 220" strokeWidth="1" />
        <path d="M50 230 L30 248 M50 230 L70 248" strokeWidth="1" />
        <circle cx="35" cy="194" r="4" strokeWidth="0.8" />
        <circle cx="65" cy="194" r="4" strokeWidth="0.8" />
        <circle cx="50" cy="176" r="4" strokeWidth="0.8" />
      </motion.g>

      {/* Right tree */}
      <motion.g variants={fade} custom={5.5}>
        <line x1="450" y1="290" x2="450" y2="180" strokeWidth="1.2" />
        <path d="M450 180 L435 198 M450 180 L465 198" strokeWidth="1" />
        <path d="M450 205 L432 220 M450 205 L468 220" strokeWidth="1" />
        <path d="M450 230 L430 248 M450 230 L470 248" strokeWidth="1" />
        <circle cx="435" cy="194" r="4" strokeWidth="0.8" />
        <circle cx="465" cy="194" r="4" strokeWidth="0.8" />
        <circle cx="450" cy="176" r="4" strokeWidth="0.8" />
      </motion.g>

      {/* Birds */}
      <motion.g variants={fade} custom={6}>
        <path d="M180 80 L188 70 L196 80" strokeWidth="1" />
        <path d="M310 70 L318 60 L326 70" strokeWidth="1" />
        <path d="M380 90 L386 82 L392 90" strokeWidth="1" />
      </motion.g>

      {/* Peacock - bottom right area */}
      <motion.g variants={fade} custom={6.5}>
        <circle cx="420" cy="265" r="5" strokeWidth="1" />
        <path d="M420 270 L416 285 L424 285 Z" strokeWidth="1" />
        {/* Fan tail */}
        <path d="M416 270 L400 255 M418 268 L405 248 M420 267 L415 245 M422 268 L430 248 M424 270 L440 255" strokeWidth="0.8" />
        <circle cx="400" cy="252" r="2" strokeWidth="0.6" />
        <circle cx="405" cy="245" r="2" strokeWidth="0.6" />
        <circle cx="415" cy="242" r="2" strokeWidth="0.6" />
        <circle cx="430" cy="245" r="2" strokeWidth="0.6" />
        <circle cx="440" cy="252" r="2" strokeWidth="0.6" />
      </motion.g>

      {/* Bottom geometric border */}
      <motion.g variants={fade} custom={7}>
        <path d="M30 300 L40 290 L50 300 L60 290 L70 300 L80 290 L90 300 L100 290 L110 300" strokeWidth="0.8" />
        <path d="M390 300 L400 290 L410 300 L420 290 L430 300 L440 290 L450 300 L460 290 L470 300" strokeWidth="0.8" />
      </motion.g>

      {/* Tech symbols scattered subtly */}
      <motion.g variants={fade} custom={7.5}>
        <path d="M75 145 L80 150 L75 155" strokeWidth="0.8" />
        <path d="M430 150 L425 155 L430 160" strokeWidth="0.8" />
        <circle cx="250" cy="170" r="2" fill="currentColor" strokeWidth="0" />
        <circle cx="258" cy="168" r="2" fill="currentColor" strokeWidth="0" />
      </motion.g>
    </motion.svg>
  );
}
