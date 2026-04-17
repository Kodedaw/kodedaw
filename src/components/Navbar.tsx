import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

type ThemeMode = 'dark' | 'light';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-transparent backdrop-blur-[28px]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/images/kodedaw-logo.png"
              alt="Kodedaw"
              className={`h-10 md:h-7 w-auto ${theme === 'dark' ? 'mix-blend-screen' : ''}`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-foreground/75 hover:text-foreground transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#work"
              className="text-sm text-foreground/75 hover:text-foreground transition-colors duration-300 relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#clients"
              className="text-sm text-foreground/75 hover:text-foreground transition-colors duration-300 relative group"
            >
              Product
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#insights"
              className="text-sm text-foreground/75 hover:text-foreground transition-colors duration-300 relative group"
            >
              Insights
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
            </a>
            <button
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-border bg-dark-card/55 text-foreground hover:border-teal/45 transition-colors duration-300"
              aria-label="Toggle color mode"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span className="text-xs font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
            <a
              href="#contact"
              className="text-sm px-6 py-2.5 bg-gradient-to-r from-teal to-teal-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal/30 transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-dark-card/70 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark/40 backdrop-blur-[24px] border-t border-gray-border animate-slide-down">
          <div className="px-6 py-8 space-y-5">
            <a
              href="#services"
              className="block text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </a>
            <a
              href="#work"
              className="block text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Work
            </a>
            <a
              href="#insights"
              className="block text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Insights
            </a>
            <a
              href="#clients"
              className="block text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setMobileOpen(false)}
            >
              Product
            </a>
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-border text-foreground"
              onClick={() => {
                onToggleTheme();
                setMobileOpen(false);
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            </button>
            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-teal to-teal-light text-white font-semibold rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
