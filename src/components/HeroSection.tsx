import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Code2, Cpu, Terminal, Palette } from 'lucide-react';
import { WarliTechAvatar } from './art/WarliTechAvatar';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Street Wall Mural Background Accents */}
      <div className="absolute top-16 right-0 w-96 h-96 bg-[#B93814]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Prominent "MODERN INDIA" Stencil Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B93814] text-[#FAF6EE] text-xs font-bold uppercase tracking-widest shadow-md font-mono border-2 border-[#D97706]">
              <Palette className="w-4 h-4 text-[#EAB308] animate-bounce" />
              <span>MODERN INDIA: TRIBAL STREET ART × DIGITAL FRONTIER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#181512] tracking-tight leading-tight">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B93814] via-[#D97706] to-[#1A2542]">Narayan</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#1A2542] flex items-center gap-2 flex-wrap font-heading">
                <span>IT Student</span>
                <span className="text-[#B93814]">•</span>
                <span>Developer</span>
                <span className="text-[#B93814]">•</span>
                <span className="text-[#D97706]">Problem Solver</span>
              </p>
            </div>

            {/* Tribal Street Art Intro Tagline */}
            <div className="p-4 rounded-2xl bg-[#FAF5EA] border-2 border-[#B93814]/25 shadow-sm space-y-2">
              <p className="text-sm font-bold text-[#B93814] font-mono uppercase tracking-wider">
                ❖ Modern India Developer Portfolio
              </p>
              <p className="text-base text-[#181512]/85 leading-relaxed">
                Information Technology undergraduate combining analytical computational logic with the bold visual storytelling of Indian Tribal Street Wall Murals (Warli, Bhil, Gond & Sohrai art).
              </p>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#B93814] hover:bg-[#8C2208] text-[#FAF6EE] font-heading font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF6EE] text-[#181512] border-2 border-[#181512]/20 hover:border-[#B93814] hover:text-[#B93814] font-heading font-bold text-sm transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Badges */}
            <div className="pt-6 border-t border-[#B93814]/15 flex items-center gap-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B93814]">
                Connect:
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#FAF5EA] text-[#181512] hover:bg-[#1A2542] hover:text-[#FAF6EE] transition-colors border border-[#B93814]/20 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#FAF5EA] text-[#181512] hover:bg-[#1A2542] hover:text-[#FAF6EE] transition-colors border border-[#B93814]/20 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="p-2.5 rounded-xl bg-[#FAF5EA] text-[#181512] hover:bg-[#B93814] hover:text-[#FAF6EE] transition-colors border border-[#B93814]/20 shadow-sm"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Core Competency Tags */}
            <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-[#181512]/80 flex-wrap">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF5EA] border border-[#B93814]/20">
                <Code2 className="w-3.5 h-3.5 text-[#B93814]" /> C++ / Java
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF5EA] border border-[#B93814]/20">
                <Terminal className="w-3.5 h-3.5 text-[#1A2542]" /> React / Node
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF5EA] border border-[#B93814]/20">
                <Cpu className="w-3.5 h-3.5 text-[#D97706]" /> Data Structures
              </span>
            </div>

          </div>

          {/* Right Illustrated Avatar Section (Indian Tribal Street Art Mural) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <WarliTechAvatar />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
