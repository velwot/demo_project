import React from 'react';
import { Target, Compass, BookOpen, Calendar, Palette } from 'lucide-react';
import { GondTreeOfCode } from './art/GondTreeOfCode';
import { WarliDivider } from './art/WarliDivider';
import { KalamkariCorner } from './art/KalamkariMotif';
import { ABOUT_TEXT, EDUCATION_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B93814]/10 text-[#B93814] text-xs font-mono font-bold uppercase tracking-widest mb-3 border border-[#B93814]/20">
            <Palette className="w-3.5 h-3.5" />
            <span>MODERN INDIA: TRIBAL STREET MURAL ART</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181512] tracking-tight">
            About <span className="text-[#B93814]">Narayan</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#181512]/80">
            Fusing traditional Indian tribal wall painting techniques (Warli, Bhil & Gond) with contemporary computer science concepts.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Intro & Education Card */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Bio Card */}
            <div className="relative bg-[#FAF5EA] p-8 rounded-2xl border-2 border-[#B93814]/30 shadow-md">
              <KalamkariCorner position="top-left" />
              <KalamkariCorner position="bottom-right" />

              <h3 className="text-xl font-bold text-[#1A2542] mb-4 font-heading flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#B93814]" />
                <span>Background & Philosophy</span>
              </h3>
              <p className="text-base text-[#181512]/85 leading-relaxed mb-4">
                {ABOUT_TEXT.bioShort}
              </p>
              <p className="text-sm text-[#181512]/75 leading-relaxed">
                As an Information Technology undergraduate, I focus on building performant software in C++ and building responsive user interfaces in React. I believe in clean code, practical problem solving, and constant curiosity.
              </p>
            </div>

            {/* Education Highlight Card */}
            <div className="relative bg-[#F5EFE4] p-8 rounded-2xl border-2 border-[#B93814]/20 shadow-sm space-y-6">
              <div className="flex items-start justify-between flex-wrap gap-4 border-b border-[#B93814]/20 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#B93814] uppercase tracking-wider block mb-1">
                    Current Degree Program
                  </span>
                  <h4 className="text-lg font-bold text-[#1A2542] font-heading">
                    {EDUCATION_DATA.degree}
                  </h4>
                  <p className="text-sm font-semibold text-[#181512]/80 flex items-center gap-2 mt-1">
                    <span>{EDUCATION_DATA.institution}</span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-[#B93814] text-[#FAF6EE] px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" /> {EDUCATION_DATA.years}
                  </span>
                  <span className="text-xs font-semibold text-[#15803D] bg-[#15803D]/10 px-2.5 py-0.5 rounded-md mt-1">
                    {EDUCATION_DATA.gradeOrGpa}
                  </span>
                </div>
              </div>

              {/* Areas of Interest */}
              <div>
                <h5 className="text-sm font-bold text-[#1A2542] uppercase tracking-wider mb-3 flex items-center gap-2 font-heading">
                  <Compass className="w-4 h-4 text-[#D97706]" />
                  <span>Areas of Interest</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_TEXT.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#FAF5EA] text-[#181512] border border-[#B93814]/20 shadow-2xs"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Goals */}
              <div className="pt-2 border-t border-[#B93814]/15">
                <h5 className="text-sm font-bold text-[#1A2542] uppercase tracking-wider mb-2 flex items-center gap-2 font-heading">
                  <Target className="w-4 h-4 text-[#B93814]" />
                  <span>Career Goals</span>
                </h5>
                <p className="text-xs text-[#181512]/85 leading-relaxed font-medium">
                  {ABOUT_TEXT.careerGoals}
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Gond / Bhil Tribal Street Wall Art Tree */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm bg-[#FAF5EA] p-6 rounded-2xl border-2 border-[#B93814]/30 shadow-md text-center">
              <span className="text-xs font-mono font-bold text-[#B93814] uppercase tracking-wider block mb-2">
                MODERN INDIA • TRIBAL STREET MURAL
              </span>
              <GondTreeOfCode />
              <p className="text-xs text-[#181512]/75 italic mt-3 font-serif">
                "Computer algorithms intertwined with Indian tribal street art roots."
              </p>
            </div>
          </div>

        </div>

        {/* Section Divider */}
        <WarliDivider />
      </div>
    </section>
  );
};
