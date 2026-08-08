import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF5EA] py-12 relative border-t-2 border-[#B93814]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Thin Tribal Ornamental Indian Art Divider */}
        <div className="w-full flex items-center justify-center gap-4 text-[#B93814]/50 opacity-80">
          <div className="h-px bg-current flex-1 max-w-xs" />
          <span className="font-mono text-xs text-[#B93814] font-bold">❖ MODERN INDIA ❖</span>
          <div className="h-px bg-current flex-1 max-w-xs" />
        </div>

        {/* Brand & Subtitle */}
        <div className="space-y-1">
          <h3 className="text-xl font-extrabold text-[#181512] font-heading">
            Narayan
          </h3>
          <p className="text-xs font-mono text-[#B93814] font-extrabold uppercase tracking-widest">
            IT Student & Software Developer
          </p>
        </div>

        {/* Quick Social Links */}
        <div className="flex justify-center items-center gap-5">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#F5EFE4] text-[#181512] hover:bg-[#B93814] hover:text-[#FAF6EE] border border-[#B93814]/20 transition-colors shadow-2xs"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#F5EFE4] text-[#181512] hover:bg-[#1A2542] hover:text-[#FAF6EE] border border-[#B93814]/20 transition-colors shadow-2xs"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="p-2.5 rounded-xl bg-[#F5EFE4] text-[#181512] hover:bg-[#B93814] hover:text-[#FAF6EE] border border-[#B93814]/20 transition-colors shadow-2xs"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright & Heritage Craftsmanship Note */}
        <div className="pt-4 border-t border-[#B93814]/15 text-xs text-[#181512]/75 space-y-1">
          <p>© {new Date().getFullYear()} Narayan. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#B93814] font-bold">
            MODERN INDIA • FUSING CONTEMPORARY TECH × INDIAN TRIBAL STREET MURAL ART
          </p>
        </div>

      </div>
    </footer>
  );
};
