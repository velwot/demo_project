import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-parchment-light/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,22,18,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
          className="font-display italic text-xl md:text-2xl text-ink tracking-wide"
        >
          Narayan
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="nav-link text-[0.7rem] font-sans uppercase tracking-[0.2em] text-ink-light hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Warli ornamental line */}
      <div className="section-container">
        <svg viewBox="0 0 800 4" className="w-full h-1 opacity-20" fill="none" stroke="currentColor" strokeLinecap="round">
          <line x1="0" y1="2" x2="800" y2="2" strokeWidth="0.8" />
          {[...Array(20)].map((_, i) => (
            <path key={i} d={`M${i * 40 + 10} 2 L${i * 40 + 15} 0 L${i * 40 + 20} 2`} strokeWidth="0.6" />
          ))}
        </svg>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-parchment-light/95 backdrop-blur-md border-t border-ink/10">
          <div className="section-container py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="text-sm font-sans uppercase tracking-[0.15em] text-ink-light hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
