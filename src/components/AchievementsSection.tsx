import React from 'react';
import { Trophy, Award, Medal, GitPullRequest } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { KalamkariCorner } from './art/KalamkariMotif';

export const AchievementsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hackathon': return <Trophy className="w-5 h-5 text-[#D97706]" />;
      case 'Certification': return <Award className="w-5 h-5 text-[#9A3412]" />;
      case 'Academic': return <Medal className="w-5 h-5 text-[#166534]" />;
      case 'Open Source': return <GitPullRequest className="w-5 h-5 text-[#1E1B4B]" />;
      default: return <Trophy className="w-5 h-5 text-[#9A3412]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A3412]/10 text-[#9A3412] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <span>Recognitions & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Achievements & <span className="text-[#9A3412]">Certifications</span>
          </h2>
          <p className="mt-3 text-base text-[#1C1917]/75">
            Hackathon finalist awards, certified credentials, and open-source contributions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS_DATA.map((ach) => (
            <div
              key={ach.id}
              className="relative bg-[#FAF7F2] p-7 rounded-2xl border-2 border-[#9A3412]/20 hover:border-[#9A3412] shadow-md hover:shadow-lg transition-all duration-200 flex items-start gap-4"
            >
              <KalamkariCorner position="top-left" />

              <div className="p-3 rounded-xl bg-[#F4EFE6] border border-[#9A3412]/20 shrink-0 mt-1">
                {getCategoryIcon(ach.category)}
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold text-[#9A3412] uppercase tracking-wider">
                    {ach.category}
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#1E1B4B]/10 text-[#1E1B4B]">
                    {ach.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1C1917] font-heading">
                  {ach.title}
                </h3>
                <p className="text-xs font-semibold text-[#1E1B4B]">
                  {ach.issuerOrEvent}
                </p>

                <p className="text-xs text-[#1C1917]/80 leading-relaxed pt-1">
                  {ach.description}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] font-mono text-[#D97706] font-semibold flex items-center gap-1">
                    <span>❖ Motif:</span>
                    <span>{ach.badgeMotif}</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
