import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { WarliCommunityScene } from './art/WarliCommunityScene';
import { WarliDivider } from './art/WarliDivider';

const contactLinks = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Github, label: 'GitHub', value: 'github.com/narayan', href: personalInfo.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/narayan', href: personalInfo.linkedin },
  { icon: FileText, label: 'Resume', value: 'Download Resume', href: '#' },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mb-4">
            Let's Create Something.
          </h2>
          <p className="font-sans text-ink-muted text-lg max-w-lg mx-auto">
            Have a project idea, want to collaborate, or just want to say hello?
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1"
          >
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-4 py-5 border-b border-ink/10 group hover:pl-2 transition-all"
              >
                <link.icon size={20} className="text-ink-muted group-hover:text-terracotta transition-colors flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-ink-muted block">{link.label}</span>
                  <span className="font-sans text-ink group-hover:text-ink-light transition-colors">{link.value}</span>
                </div>
                <svg viewBox="0 0 20 20" className="w-4 h-4 text-ink-muted group-hover:text-ink group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                  <line x1="4" y1="10" x2="16" y2="10" />
                  <path d="M12 6 L16 10 L12 14" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-ink/60"
          >
            <WarliCommunityScene className="w-full max-w-md mx-auto" />
          </motion.div>
        </div>

        <div className="mt-16">
          <WarliDivider className="opacity-30" />
        </div>
      </div>
    </section>
  );
}
