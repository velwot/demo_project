import React, { useState } from 'react';
import { Code, Globe, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { KalamkariCorner } from './art/KalamkariMotif';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'Web Development', 'Tools & Technologies'];

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Programming': return <Code className="w-5 h-5 text-[#B93814]" />;
      case 'Web Development': return <Globe className="w-5 h-5 text-[#1A2542]" />;
      case 'Tools & Technologies': return <Wrench className="w-5 h-5 text-[#D97706]" />;
      default: return <Sparkles className="w-5 h-5 text-[#B93814]" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter(
    (cat) => selectedCategory === 'All' || cat.category === selectedCategory
  );

  return (
    <section id="skills" className="py-20 bg-[#F5EFE4]/80 relative border-y border-[#B93814]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B93814]/10 text-[#B93814] text-xs font-mono font-bold uppercase tracking-widest mb-3 border border-[#B93814]/20">
            <span>MODERN INDIA: TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181512] tracking-tight">
            Skills & <span className="text-[#B93814]">Technologies</span>
          </h2>
          <p className="mt-3 text-base text-[#181512]/80">
            Core programming languages, web engineering frameworks, and developer tools.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#B93814] text-[#FAF6EE] shadow-md scale-105'
                    : 'bg-[#FAF5EA] text-[#181512] hover:bg-[#B93814]/10 hover:text-[#B93814] border border-[#B93814]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((group, gIdx) => (
            <div
              key={gIdx}
              className="bg-[#FAF5EA] p-8 rounded-2xl border-2 border-[#B93814]/30 shadow-md relative"
            >
              <KalamkariCorner position="top-left" />
              <KalamkariCorner position="bottom-right" />

              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-[#B93814]/20 pb-4 mb-6">
                <div className="p-3 rounded-xl bg-[#F5EFE4] border border-[#B93814]/30">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A2542] font-heading">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-[#B93814] font-bold">
                    MODERN INDIA • {group.skills.length} TECHNOLOGIES
                  </span>
                </div>
              </div>

              {/* Grid of Skill Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative bg-[#F5EFE4]/80 hover:bg-[#FAF5EA] p-4 rounded-xl border border-[#B93814]/20 hover:border-[#B93814] transition-all duration-200 shadow-2xs hover:shadow-md flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B93814] group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="font-heading font-bold text-sm text-[#181512] group-hover:text-[#B93814] transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-[11px] text-[#181512]/70 font-mono">
                          {skill.motif}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#1A2542]/10 text-[#1A2542]">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
