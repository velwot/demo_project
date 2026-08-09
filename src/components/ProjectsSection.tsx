import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { WarliDivider } from './art/WarliDivider';
import { WarliCorner } from './art/WarliCorner';
import { WarliProjectIcon } from './art/WarliProjectIcon';

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-2">Projects</h2>
          <p className="font-sans text-ink-muted text-lg mb-6">Stories of building and problem solving</p>
          <WarliDivider className="opacity-40" />
        </motion.div>

        {/* Project panels */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={project.name}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative border border-ink/15 p-6 md:p-10 lg:p-12 hover:shadow-[0_8px_30px_rgba(28,22,18,0.06)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2"><WarliCorner position="top-left" /></div>
                <div className="absolute -top-2 -right-2"><WarliCorner position="top-right" /></div>
                <div className="absolute -bottom-2 -left-2"><WarliCorner position="bottom-left" /></div>
                <div className="absolute -bottom-2 -right-2"><WarliCorner position="bottom-right" /></div>

                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center ${isEven ? 'lg:direction-rtl' : ''}`}>
                  {/* Illustration */}
                  <div className={`text-ink/70 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="max-w-[200px] mx-auto lg:mx-0">
                      <WarliProjectIcon type={project.iconType} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h3 className="font-display text-2xl md:text-3xl text-ink mb-6">{project.name}</h3>

                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-ink-muted block mb-1">Problem</span>
                        <p className="text-ink-light leading-relaxed text-sm md:text-base">{project.problem}</p>
                      </div>
                      <div>
                        <span className="text-[0.65rem] font-sans uppercase tracking-[0.2em] text-ink-muted block mb-1">Solution</span>
                        <p className="text-ink-light leading-relaxed text-sm md:text-base">{project.solution}</p>
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="border border-ink/20 px-3 py-1 text-xs font-sans text-ink-muted uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-sans text-ink-light hover:text-ink transition-colors group"
                      >
                        <Github size={16} />
                        <span className="border-b border-transparent group-hover:border-ink transition-colors">GitHub</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-sans text-ink-light hover:text-ink transition-colors group"
                      >
                        <ExternalLink size={16} />
                        <span className="border-b border-transparent group-hover:border-ink transition-colors">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
