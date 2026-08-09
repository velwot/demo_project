import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { WarliDivider } from './art/WarliDivider';

/* Small Warli motif for each card header */
function CardMotif() {
  return (
    <svg viewBox="0 0 40 20" className="w-8 h-4 inline-block mr-2 opacity-50" fill="none" stroke="currentColor" strokeLinecap="round">
      <circle cx="10" cy="6" r="4" strokeWidth="1" />
      <path d="M10 10 L6 18 L14 18 Z" strokeWidth="1" />
      <path d="M20 16 L24 10 L28 16 L32 10 L36 16" strokeWidth="0.8" />
    </svg>
  );
}

/* Zigzag separator */
function ZigzagLine() {
  return (
    <svg viewBox="0 0 200 8" className="w-full h-2 my-4 opacity-25" fill="none" stroke="currentColor" strokeLinecap="round">
      {[...Array(12)].map((_, i) => (
        <path key={i} d={`M${i * 16 + 4} 4 L${i * 16 + 10} 1 L${i * 16 + 16} 4`} strokeWidth="0.8" />
      ))}
    </svg>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-parchment">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">Skills & Technologies</h2>
          <WarliDivider className="opacity-40" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((cat) => (
            <motion.div
              key={cat.category}
              variants={item}
              className="warli-card p-6 md:p-8"
            >
              <h3 className="font-display text-xl text-ink flex items-center">
                <CardMotif />
                {cat.category}
              </h3>
              <ZigzagLine />
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="border border-ink/20 px-3 py-1.5 text-sm font-sans text-ink-light hover:border-ink/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
