import React from 'react';
import { X, Printer, Mail, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS, ABOUT_TEXT, EDUCATION_DATA, SKILL_CATEGORIES, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF7F2] max-w-4xl w-full rounded-2xl border-2 border-[#9A3412] shadow-2xl my-8 overflow-hidden animate-fadeIn">
        
        {/* Action Header */}
        <div className="bg-[#F4EFE6] px-6 py-4 border-b border-[#9A3412]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-sm text-[#1E1B4B]">
              Resume Preview — Narayan
            </span>
            <span className="text-xs font-mono text-[#9A3412] bg-[#9A3412]/10 px-2 py-0.5 rounded">
              B.Tech IT
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#9A3412] text-[#FAF7F2] text-xs font-bold font-heading hover:bg-[#7C2D12] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#FAF7F2] text-[#1C1917] hover:bg-[#1E1B4B] hover:text-[#FAF7F2] transition-colors border border-[#9A3412]/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 space-y-8 bg-white text-[#1C1917]" id="printable-resume">
          
          {/* Header */}
          <div className="border-b border-[#9A3412]/20 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-[#1E1B4B] font-heading">
                Narayan
              </h1>
              <p className="text-sm font-bold text-[#9A3412] font-mono mt-1">
                Information Technology Student • Software Developer
              </p>
            </div>
            <div className="text-xs space-y-1 font-mono text-[#1C1917]/80">
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9A3412]" /> {SOCIAL_LINKS.email}
              </p>
              <p className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-[#1E1B4B]" /> github.com/velwot
              </p>
              <p className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#D97706]" /> linkedin.com/in/narayan-p-601b2541a
              </p>
            </div>
          </div>

          {/* Objective / Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#9A3412] border-b border-[#9A3412]/20 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-[#1C1917]/85 leading-relaxed">
              {ABOUT_TEXT.bioShort} Skilled in C++, Java, JavaScript, React, and data structures. Dedicated to writing clean, maintainable code and solving engineering challenges.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#9A3412] border-b border-[#9A3412]/20 pb-1 mb-3">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs font-heading">
              <div>
                <h3 className="font-bold text-[#1E1B4B] text-sm">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-[#1C1917]/80 font-medium">
                  {EDUCATION_DATA.institution} — {EDUCATION_DATA.location}
                </p>
              </div>
              <div className="text-right font-mono">
                <span className="font-bold text-[#9A3412]">{EDUCATION_DATA.years}</span>
                <p className="text-[11px] text-[#166534] font-semibold">{EDUCATION_DATA.gradeOrGpa}</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#9A3412] border-b border-[#9A3412]/20 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="bg-[#FAF7F2] p-3 rounded-lg border border-[#9A3412]/15">
                  <h4 className="font-bold text-[#1E1B4B] mb-1">{cat.category}:</h4>
                  <p className="text-[#1C1917]/80 leading-normal">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#9A3412] border-b border-[#9A3412]/20 pb-1 mb-3">
              Key Projects
            </h2>
            <div className="space-y-3 text-xs">
              {PROJECTS_DATA.slice(0, 3).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-center font-heading font-bold">
                    <span className="text-[#1E1B4B] text-sm">{proj.title}</span>
                    <span className="font-mono text-[10px] text-[#9A3412]">{proj.technologies.join(' • ')}</span>
                  </div>
                  <p className="text-[#1C1917]/80 leading-normal">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
