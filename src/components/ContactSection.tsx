import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, Sparkles } from 'lucide-react';
import { PeacockTechArt } from './art/PeacockTechArt';
import { KalamkariCorner } from './art/KalamkariMotif';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-[#F5EFE4]/80 relative border-t border-[#B93814]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B93814]/10 text-[#B93814] text-xs font-mono font-bold uppercase tracking-widest mb-3 border border-[#B93814]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODERN INDIA • CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#181512] tracking-tight">
            Let’s Build Something <span className="text-[#B93814]">Meaningful.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#181512]/80">
            Fusing traditional Indian heritage with contemporary software development. Let's discuss internships, projects, or technical collaboration!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Traditional Peacock Art & Direct Contacts */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Peacock Art Container */}
            <div className="bg-[#FAF5EA] p-6 rounded-2xl border-2 border-[#B93814]/30 shadow-md text-center">
              <span className="text-xs font-mono font-bold text-[#B93814] uppercase tracking-wider block mb-2">
                MODERN INDIA • PEACOCK STREET MURAL
              </span>
              <PeacockTechArt />
              <p className="text-xs text-[#181512]/75 italic mt-3 font-serif">
                "Connecting ancient Indian mural motifs with digital waves."
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="bg-[#FAF5EA] p-6 rounded-2xl border-2 border-[#B93814]/20 shadow-sm space-y-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#F5EFE4] transition-colors text-[#181512] group"
              >
                <div className="p-3 rounded-xl bg-[#B93814] text-[#FAF6EE]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#B93814] block font-bold">Direct Email</span>
                  <span className="text-sm font-bold font-heading group-hover:text-[#B93814]">
                    {SOCIAL_LINKS.email}
                  </span>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#F5EFE4] transition-colors text-[#181512] group"
              >
                <div className="p-3 rounded-xl bg-[#1A2542] text-[#FAF6EE]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#1A2542] block font-bold">LinkedIn Profile</span>
                  <span className="text-sm font-bold font-heading group-hover:text-[#1A2542] truncate max-w-[240px] block">
                    linkedin.com/in/narayan-p-601b2541a
                  </span>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#F5EFE4] transition-colors text-[#181512] group"
              >
                <div className="p-3 rounded-xl bg-[#181512] text-[#FAF6EE]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#181512] block font-bold">GitHub Repository</span>
                  <span className="text-sm font-bold font-heading group-hover:text-[#B93814]">
                    github.com/velwot
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#FAF5EA] p-8 sm:p-10 rounded-2xl border-2 border-[#B93814]/30 shadow-xl">
              <KalamkariCorner position="top-left" />
              <KalamkariCorner position="bottom-right" />

              <h3 className="text-2xl font-bold text-[#1A2542] font-heading mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#15803D]/10 text-[#15803D] mx-auto flex items-center justify-center">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#181512] font-heading">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-[#181512]/80 max-w-md mx-auto">
                    Thank you for reaching out to Narayan. I will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#B93814] text-[#FAF6EE] text-xs font-bold font-heading"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#181512] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4] border border-[#B93814]/30 focus:border-[#B93814] focus:outline-none text-sm text-[#181512]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#181512] mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4] border border-[#B93814]/30 focus:border-[#B93814] focus:outline-none text-sm text-[#181512]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#181512] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4] border border-[#B93814]/30 focus:border-[#B93814] focus:outline-none text-sm text-[#181512]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#181512] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your project details or message here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFE4] border border-[#B93814]/30 focus:border-[#B93814] focus:outline-none text-sm text-[#181512] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#B93814] hover:bg-[#8C2208] text-[#FAF6EE] font-heading font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
