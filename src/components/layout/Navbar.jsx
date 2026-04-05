import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Moon, Sun } from 'lucide-react';
// import logo from '';


const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Stats', href: '#stats' },
  // { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-lg shadow-black/20' : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-12 h-12 flex items-center justify-center">
  <img
    src="/logo.svg"
    alt="logo"
    className="w-full h-full object-contain"
  />
</div>
          <span className={`font-heading font-700 text-xl tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            ASCEND<span className="text-gradient">RIXX</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`relative px-4 py-2 text-sm font-body transition-all duration-200 rounded-lg group
                ${activeLink === link.href
                  ? isDark ? 'text-white' : 'text-slate-900'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
              {link.label}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300
                bg-gradient-to-r from-accent-400 to-primary-500
                ${activeLink === link.href ? 'w-4' : 'w-0 group-hover:w-4'}`} />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme}
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200
              ${isDark ? 'border-white/10 text-slate-300 hover:border-accent-400/40 hover:text-accent-400 bg-white/5'
                : 'border-slate-200 text-slate-600 hover:border-primary-400 hover:text-primary-500 bg-white'}`}>
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <a href="#contact" className="btn-primary text-sm">Get Started</a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme}
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200
              ${isDark ? 'border-white/10 text-slate-300 bg-white/5' : 'border-slate-200 text-slate-600 bg-white'}`}>
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden glass mx-4 mt-2 rounded-2xl overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 rounded-xl transition-all text-sm font-body
                ${isDark ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-2 text-center justify-center">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
