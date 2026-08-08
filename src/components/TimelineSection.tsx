import React from 'react';
import { Code } from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/portfolioData';
import { KalamkariCorner } from './art/KalamkariMotif';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-[#F4EFE6]/50 relative border-y border-[#9A3412]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1B4B]/10 text-[#1E1B4B] text-xs font-mono font-bold uppercase tracking-widest mb-3">
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Learning <span className="text-[#9A3412]">Journey</span>
          </h2>
          <p className="mt-3 text-base text-[#1C1917]/75">
            Academic progression, software skills development, and key technical milestones.
          </p>
        </div>

        {/* Vertical Timeline with Indian Decorative Connector Line */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Decorative Connector Line (Warli Line Motif) */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9A3412] via-[#D97706] to-[#1E1B4B] sm:-translate-x-1/2 opacity-70" />

          <div className="space-y-12">
            {LEARNING_JOURNEY.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-[#FAF7F2] border-2 border-[#9A3412] text-[#9A3412] flex items-center justify-center shadow-md">
                    <Code className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pl-10' : 'sm:pr-10'} w-full`}>
                    <div className="relative bg-[#FAF7F2] p-6 rounded-2xl border-2 border-[#9A3412]/20 shadow-md hover:shadow-lg transition-shadow">
                      <KalamkariCorner position="top-left" />

                      <div className="flex items-center justify-between gap-2 border-b border-[#9A3412]/15 pb-3 mb-3">
                        <span className="text-xs font-mono font-bold bg-[#9A3412] text-[#FAF7F2] px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-[#1E1B4B]">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#1C1917] font-heading mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#9A3412] mb-3">
                        {item.organization}
                      </p>

                      <p className="text-sm text-[#1C1917]/80 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#9A3412]/10">
                        {item.technologies.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#F4EFE6] text-[#1E1B4B] border border-[#1E1B4B]/15"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
