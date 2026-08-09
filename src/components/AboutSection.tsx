import { motion } from 'framer-motion';
import { WarliDivider } from './art/WarliDivider';
import { WarliProgressScene } from './art/WarliProgressScene';
import { WarliCorner } from './art/WarliCorner';

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">About Me</h2>
          <WarliDivider className="opacity-40" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-ink-light leading-relaxed text-base md:text-lg">
              I'm an Information Technology student with a deep passion for building software that solves
              real-world problems. My journey began with curiosity about how websites work and has since
              evolved into a comprehensive exploration of full-stack development, system design, and
              creative problem solving.
            </p>

            <p className="text-ink-light leading-relaxed">
              Beyond coding, I believe in the intersection of technology and human creativity. Every project
              I build is an opportunity to learn something new and create something meaningful. I enjoy
              collaborating with others, contributing to open-source communities, and continuously pushing
              the boundaries of what I can create.
            </p>

            <div className="pt-4">
              <h3 className="font-display text-xl text-ink mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {['Open Source', 'Web Technologies', 'System Design', 'Creative Coding', 'Problem Solving', 'UI Design'].map((interest) => (
                  <span
                    key={interest}
                    className="border border-ink/20 px-4 py-2 text-sm font-sans text-ink-light"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-display text-xl text-ink mb-3">Career Goal</h3>
              <p className="text-ink-light leading-relaxed">
                To become a well-rounded software engineer who builds impactful digital products — combining
                strong technical foundations with an eye for design and user experience.
              </p>
            </div>
          </motion.div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 relative"
          >
            {/* Corner decorations */}
            <div className="absolute -top-3 -left-3"><WarliCorner position="top-left" /></div>
            <div className="absolute -top-3 -right-3"><WarliCorner position="top-right" /></div>
            <div className="absolute -bottom-3 -left-3"><WarliCorner position="bottom-left" /></div>
            <div className="absolute -bottom-3 -right-3"><WarliCorner position="bottom-right" /></div>

            <div className="border border-ink/10 p-6 md:p-8 text-ink">
              <WarliProgressScene className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
