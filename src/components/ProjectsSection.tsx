import React, { useState } from 'react';
import { Github, ExternalLink, AlertCircle, X, ChevronRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { KalamkariCorner } from './art/KalamkariMotif';
import { WarliDivider } from './art/WarliDivider';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Systems & Algorithms', 'Web Apps', 'Full Stack'];

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => filterCategory === 'All' || p.category === filterCategory
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A3412]/10 text-[#9A3412] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Featured <span className="text-[#9A3412]">Projects</span>
          </h2>
          <p className="mt-3 text-base text-[#1C1917]/75">
            Real-world software projects demonstrating algorithm visualizers, responsive web apps, and full-stack systems.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all duration-200 ${
                  filterCategory === cat
                    ? 'bg-[#9A3412] text-[#FAF7F2] shadow-md scale-105'
                    : 'bg-[#F4EFE6] text-[#1C1917] hover:bg-[#9A3412]/10 hover:text-[#9A3412] border border-[#9A3412]/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#FAF7F2] rounded-2xl border-2 border-[#9A3412]/20 hover:border-[#9A3412] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <KalamkariCorner position="top-left" />
              <KalamkariCorner position="bottom-right" />

              <div className="p-8 space-y-5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 border-b border-[#9A3412]/15 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1E1B4B]/10 text-[#1E1B4B]">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#9A3412] font-semibold">
                    Motif: {project.artMotif.toUpperCase()}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1C1917] group-hover:text-[#9A3412] transition-colors font-heading mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#1C1917]/80 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Problem Solved Highlight */}
                <div className="bg-[#F4EFE6] p-3.5 rounded-xl border border-[#9A3412]/15 text-xs text-[#1C1917]/85 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#9A3412] uppercase font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Problem Solved:</span>
                  </div>
                  <p className="line-clamp-2">{project.problemSolved}</p>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[#1E1B4B] border border-[#1E1B4B]/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-6 bg-[#F4EFE6]/70 border-t border-[#9A3412]/15 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-heading font-bold text-[#9A3412] hover:text-[#1E1B4B] flex items-center gap-1 group/btn"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#FAF7F2] text-[#1C1917] hover:bg-[#1E1B4B] hover:text-[#FAF7F2] border border-[#9A3412]/20 transition-colors shadow-2xs"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#9A3412] text-[#FAF7F2] hover:bg-[#7C2D12] transition-colors shadow-2xs"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal Overlay */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#FAF7F2] max-w-2xl w-full rounded-2xl border-2 border-[#9A3412] shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#F4EFE6] text-[#1C1917] hover:bg-[#9A3412] hover:text-[#FAF7F2] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9A3412] block mb-2">
                Project Deep Dive
              </span>
              <h3 className="text-2xl font-extrabold text-[#1C1917] font-heading mb-4">
                {selectedProject.title}
              </h3>

              <div className="space-y-4 text-sm text-[#1C1917]/85">
                <div>
                  <h4 className="font-bold text-[#1E1B4B] uppercase text-xs font-mono mb-1">
                    Overview:
                  </h4>
                  <p className="leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#9A3412] uppercase text-xs font-mono mb-1">
                    Problem & Impact:
                  </h4>
                  <p className="leading-relaxed bg-[#F4EFE6] p-3 rounded-xl border border-[#9A3412]/15">
                    {selectedProject.problemSolved}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1E1B4B] uppercase text-xs font-mono mb-2">
                    Technologies Applied:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md bg-[#1E1B4B] text-[#FAF7F2] font-mono text-xs font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#9A3412]/15 flex items-center justify-end gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1C1917] text-[#FAF7F2] font-bold text-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>

            </div>
          </div>
        )}

        <WarliDivider />
      </div>
    </section>
  );
};
