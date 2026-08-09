import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { WarliHeroScene } from './art/WarliHeroScene';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p variants={item} className="text-ink-muted font-sans text-sm tracking-[0.15em] uppercase mb-4">
              — Namaste
            </motion.p>

            <motion.h1 variants={item} className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.1] mb-4">
              Hi, I'm <span className="italic">{personalInfo.name}</span>
            </motion.h1>

            <motion.p variants={item} className="font-sans text-lg md:text-xl text-ink-muted mb-6">
              {personalInfo.title}
            </motion.p>

            <motion.p variants={item} className="font-sans text-ink-light leading-relaxed max-w-lg mb-10">
              {personalInfo.intro}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-ink text-parchment-light px-8 py-3 font-sans text-sm uppercase tracking-[0.15em] hover:bg-ink-light transition-colors"
              >
                View Projects
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-3 font-sans text-sm uppercase tracking-[0.15em] hover:bg-ink hover:text-parchment-light transition-colors"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Warli illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="order-1 lg:order-2 text-ink"
          >
            <WarliHeroScene className="w-full max-w-xl mx-auto lg:max-w-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
