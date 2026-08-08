import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF5EA]/90 backdrop-blur-md shadow-sm border-b border-[#B93814]/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & "MODERN INDIA" Tag */}
        <button
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#B93814] to-[#D97706] text-[#FAF6EE] flex items-center justify-center font-heading font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform duration-200 border border-[#FAF6EE]">
            <span>N</span>
            {/* Subtle Tribal Mural Corner Marker */}
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#1A2542] border border-[#FAF6EE]" />
          </div>
          <div>
            <span className="block font-heading font-bold text-lg text-[#181512] tracking-tight group-hover:text-[#B93814] transition-colors">
              Narayan
            </span>
            <span className="block text-[11px] text-[#B93814] font-extrabold tracking-widest uppercase font-mono">
              MODERN INDIA • TRIBAL ART
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F5EFE4]/90 p-1.5 rounded-full border border-[#B93814]/20 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#FAF6EE] bg-[#B93814] shadow-sm'
                    : 'text-[#181512]/80 hover:text-[#B93814] hover:bg-[#B93814]/10'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#B93814] bg-[#FAF6EE] border-2 border-[#B93814] hover:bg-[#B93814] hover:text-[#FAF6EE] rounded-xl transition-all duration-200 shadow-sm hover:shadow"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-[#F5EFE4] text-[#B93814] border border-[#B93814]/30 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-[#FAF5EA] border-b border-[#B93814]/30 p-6 shadow-2xl animate-fadeIn z-50">
          <div className="flex flex-col gap-2 mb-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-3 rounded-xl font-heading font-semibold text-lg flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#B93814] text-[#FAF6EE]'
                    : 'text-[#181512] hover:bg-[#B93814]/10 hover:text-[#B93814]'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <Sparkles className="w-4 h-4 text-[#EAB308]" />}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#B93814]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#B93814] text-[#FAF6EE] font-bold text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
