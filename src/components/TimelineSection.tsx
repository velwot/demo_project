import { motion } from 'framer-motion';
import { timelineEvents, achievements } from '../data/portfolioData';
import { WarliDivider } from './art/WarliDivider';

/* Warli-style timeline dot - small figure */
function TimelineDot() {
  return (
    <svg viewBox="0 0 24 36" className="w-5 h-7 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="5" strokeWidth="1.2" />
      <path d="M12 11 L8 24 L16 24 Z" strokeWidth="1.2" />
      <line x1="9" y1="24" x2="7" y2="33" strokeWidth="1" />
      <line x1="15" y1="24" x2="17" y2="33" strokeWidth="1" />
    </svg>
  );
}

/* Small achievement icon motifs */
function AchievementMotif({ index }: { index: number }) {
  const motifs = [
    // Trophy
    <svg key="t" viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1">
      <path d="M6 3 H14 V10 Q10 16 6 10 Z" />
      <line x1="10" y1="14" x2="10" y2="17" />
      <line x1="7" y1="17" x2="13" y2="17" />
    </svg>,
    // Certificate
    <svg key="c" viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1">
      <rect x="2" y="3" width="16" height="12" />
      <circle cx="10" cy="9" r="3" />
      <line x1="5" y1="5" x2="8" y2="5" />
    </svg>,
    // Code
    <svg key="cd" viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1">
      <path d="M7 6 L3 10 L7 14" />
      <path d="M13 6 L17 10 L13 14" />
      <line x1="10" y1="4" x2="10" y2="16" />
    </svg>,
    // Star
    <svg key="s" viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1">
      <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" />
    </svg>,
    // Gear
    <svg key="g" viewBox="0 0 20 20" className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1">
      <circle cx="10" cy="10" r="4" />
      <circle cx="10" cy="10" r="7" strokeDasharray="3 3" />
    </svg>,
  ];
  return motifs[index % motifs.length];
}

/* Triangle border pattern */
function TriangleBorder() {
  return (
    <svg viewBox="0 0 200 8" className="w-full h-1.5 mb-3 opacity-30" fill="none" stroke="currentColor" strokeLinecap="round">
      {[...Array(16)].map((_, i) => (
        <path key={i} d={`M${i * 12 + 4} 6 L${i * 12 + 8} 1 L${i * 12 + 12} 6`} strokeWidth="0.8" />
      ))}
    </svg>
  );
}

export function TimelineSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-parchment">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">Education & Journey</h2>
          <WarliDivider className="opacity-40" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-ink/20" />

          <div className="space-y-12">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot - Warli figure */}
                <div className="absolute left-2 md:left-4 top-0 text-ink">
                  <TimelineDot />
                </div>

                <div>
                  <span className="font-display text-lg text-terracotta">{event.year}</span>
                  <h3 className="font-sans font-semibold text-ink text-lg mt-1">{event.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed mt-2">{event.description}</p>
                </div>

                {/* Small decorative element between events */}
                {idx < timelineEvents.length - 1 && (
                  <svg viewBox="0 0 20 12" className="absolute left-5 md:left-7 -bottom-7 w-3 h-2 text-ink/30" fill="none" stroke="currentColor" strokeLinecap="round">
                    <path d="M4 2 L10 8 L16 2" strokeWidth="1.5" />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h3 className="font-display text-3xl text-ink mb-8 text-center">Achievements</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border border-ink/15 px-6 py-4 bg-parchment-light hover:shadow-md transition-shadow"
              >
                <TriangleBorder />
                <div className="flex items-center gap-3 text-ink">
                  <AchievementMotif index={idx} />
                  <span className="font-sans text-sm">{ach.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
