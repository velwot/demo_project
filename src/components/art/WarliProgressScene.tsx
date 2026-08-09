import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.2, duration: 1.2, ease: 'easeInOut' },
      opacity: { delay: i * 0.2, duration: 0.2 },
    },
  }),
};

const fade = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.2 + 0.5, duration: 0.6 },
  }),
};

export function WarliProgressScene({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 700 220"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Connecting line */}
      <motion.path
        d="M60 130 C120 110, 160 150, 210 130 C260 110, 300 150, 350 130 C400 110, 440 150, 490 130 C540 110, 580 150, 640 130"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        variants={draw}
        custom={0}
      />

      {/* Stage 1: Learning - figure with book */}
      <motion.g variants={fade} custom={1}>
        <circle cx="60" cy="90" r="10" strokeWidth="1.5" />
        <path d="M60 100 L48 135 L72 135 Z" strokeWidth="1.5" />
        <line x1="50" y1="115" x2="38" y2="108" strokeWidth="1.2" />
        <line x1="70" y1="115" x2="82" y2="108" strokeWidth="1.2" />
        {/* Book */}
        <rect x="78" y="100" width="16" height="12" strokeWidth="1" />
        <line x1="86" y1="100" x2="86" y2="112" strokeWidth="0.8" />
        <line x1="48" y1="135" x2="40" y2="160" strokeWidth="1.2" />
        <line x1="72" y1="135" x2="80" y2="160" strokeWidth="1.2" />
      </motion.g>
      <motion.text x="60" y="185" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="var(--font-family-sans)" variants={fade} custom={1.5}>
        Learn
      </motion.text>

      {/* Stage 2: Coding - figure at computer */}
      <motion.g variants={fade} custom={2}>
        <circle cx="210" cy="85" r="10" strokeWidth="1.5" />
        <path d="M210 95 L198 130 L222 130 Z" strokeWidth="1.5" />
        <line x1="200" y1="110" x2="185" y2="105" strokeWidth="1.2" />
        <line x1="220" y1="110" x2="235" y2="105" strokeWidth="1.2" />
        {/* Monitor */}
        <rect x="230" y="90" width="22" height="16" strokeWidth="1" />
        <line x1="241" y1="106" x2="241" y2="112" strokeWidth="1" />
        <line x1="234" y1="112" x2="248" y2="112" strokeWidth="1" />
        {/* Code symbols */}
        <path d="M234 96 L237 99 L234 102" strokeWidth="0.8" />
        <line x1="240" y1="98" x2="248" y2="98" strokeWidth="0.6" />
        <line x1="198" y1="130" x2="192" y2="158" strokeWidth="1.2" />
        <line x1="222" y1="130" x2="228" y2="158" strokeWidth="1.2" />
      </motion.g>
      <motion.text x="210" y="185" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="var(--font-family-sans)" variants={fade} custom={2.5}>
        Code
      </motion.text>

      {/* Stage 3: Building - figure with blocks */}
      <motion.g variants={fade} custom={3}>
        <circle cx="350" cy="88" r="10" strokeWidth="1.5" />
        <path d="M350 98 L338 133 L362 133 Z" strokeWidth="1.5" />
        <line x1="340" y1="112" x2="325" y2="100" strokeWidth="1.2" />
        <line x1="360" y1="112" x2="375" y2="100" strokeWidth="1.2" />
        {/* Building blocks */}
        <rect x="370" y="95" width="12" height="10" strokeWidth="1" />
        <rect x="376" y="85" width="12" height="10" strokeWidth="1" />
        <rect x="382" y="95" width="12" height="10" strokeWidth="1" />
        <line x1="338" y1="133" x2="332" y2="158" strokeWidth="1.2" />
        <line x1="362" y1="133" x2="368" y2="158" strokeWidth="1.2" />
      </motion.g>
      <motion.text x="350" y="185" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="var(--font-family-sans)" variants={fade} custom={3.5}>
        Build
      </motion.text>

      {/* Stage 4: Collaborating - two figures */}
      <motion.g variants={fade} custom={4}>
        {/* Figure 1 */}
        <circle cx="478" cy="88" r="9" strokeWidth="1.2" />
        <path d="M478 97 L468 128 L488 128 Z" strokeWidth="1.2" />
        <line x1="486" y1="112" x2="497" y2="108" strokeWidth="1.2" />
        <line x1="468" y1="128" x2="462" y2="155" strokeWidth="1.2" />
        <line x1="488" y1="128" x2="494" y2="155" strokeWidth="1.2" />
        {/* Figure 2 */}
        <circle cx="510" cy="88" r="9" strokeWidth="1.2" />
        <path d="M510 97 L500 128 L520 128 Z" strokeWidth="1.2" />
        <line x1="502" y1="112" x2="491" y2="108" strokeWidth="1.2" />
        <line x1="500" y1="128" x2="494" y2="155" strokeWidth="1.2" />
        <line x1="520" y1="128" x2="526" y2="155" strokeWidth="1.2" />
        {/* Connecting hands */}
        <line x1="470" y1="112" x2="458" y2="105" strokeWidth="1.2" />
        <line x1="518" y1="112" x2="530" y2="105" strokeWidth="1.2" />
      </motion.g>
      <motion.text x="494" y="185" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="var(--font-family-sans)" variants={fade} custom={4.5}>
        Collaborate
      </motion.text>

      {/* Stage 5: Triumph - figure with arms up */}
      <motion.g variants={fade} custom={5}>
        <circle cx="640" cy="82" r="10" strokeWidth="1.5" />
        <path d="M640 92 L628 127 L652 127 Z" strokeWidth="1.5" />
        <line x1="630" y1="108" x2="615" y2="88" strokeWidth="1.5" />
        <line x1="650" y1="108" x2="665" y2="88" strokeWidth="1.5" />
        <line x1="628" y1="127" x2="622" y2="155" strokeWidth="1.2" />
        <line x1="652" y1="127" x2="658" y2="155" strokeWidth="1.2" />
        {/* Star/celebration */}
        <circle cx="615" cy="82" r="3" strokeWidth="0.8" />
        <circle cx="665" cy="82" r="3" strokeWidth="0.8" />
        <path d="M640 68 L642 73 L647 73 L643 76 L645 81 L640 78 L635 81 L637 76 L633 73 L638 73 Z" strokeWidth="0.8" />
      </motion.g>
      <motion.text x="640" y="185" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="var(--font-family-sans)" variants={fade} custom={5.5}>
        Create
      </motion.text>

      {/* Small decorative elements between stages */}
      <motion.g variants={fade} custom={6}>
        {/* Tree between 1-2 */}
        <line x1="135" y1="165" x2="135" y2="140" strokeWidth="0.8" />
        <path d="M135 140 L128 150 M135 140 L142 150" strokeWidth="0.8" />
        <circle cx="135" cy="137" r="3" strokeWidth="0.8" />
        {/* Dots between 2-3 */}
        <circle cx="275" cy="140" r="1.5" fill="currentColor" strokeWidth="0" />
        <circle cx="285" cy="135" r="1.5" fill="currentColor" strokeWidth="0" />
        <circle cx="295" cy="140" r="1.5" fill="currentColor" strokeWidth="0" />
        {/* Triangle pattern between 3-4 */}
        <path d="M415 145 L420 135 L425 145" strokeWidth="0.8" />
        <path d="M425 145 L430 135 L435 145" strokeWidth="0.8" />
        {/* Tree between 4-5 */}
        <line x1="570" y1="165" x2="570" y2="140" strokeWidth="0.8" />
        <path d="M570 140 L563 150 M570 140 L577 150" strokeWidth="0.8" />
        <circle cx="570" cy="137" r="3" strokeWidth="0.8" />
      </motion.g>

      {/* Ground dots */}
      <motion.g variants={fade} custom={6.5}>
        {[...Array(15)].map((_, i) => (
          <circle key={`gd-${i}`} cx={50 + i * 42} cy="200" r="1" fill="currentColor" strokeWidth="0" />
        ))}
      </motion.g>
    </motion.svg>
  );
}
