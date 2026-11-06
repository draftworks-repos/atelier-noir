import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'artists', label: 'Artists' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0D]/75 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-3.5 shadow-2xl shadow-black/50'
          : 'bg-[#0B0B0D]/25 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="cursor-pointer flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D42C25] rounded-lg transition-transform active:scale-98"
            aria-label="Atelier Noir Home"
          >
            <div className="flex flex-col">
              <span className="font-serif-cinzel font-bold text-lg tracking-[0.18em] text-[#F3F0E9] whitespace-nowrap">
                ATELIER NOIR
              </span>
            </div>
          </button>

          {/* Nav Links (Zone 2) */}
          <nav
            className="hidden lg:flex items-center gap-8 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`cursor-pointer relative py-1 whitespace-nowrap transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D42C25] rounded ${
                    isActive
                      ? 'text-[#F3F0E9] font-semibold'
                      : 'text-[#A5A3A0] hover:text-[#F3F0E9]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D42C25] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action CTA (Zone 3) */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="cursor-pointer group relative hidden md:inline-flex items-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] text-white text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-[#D42C25]/20 hover:shadow-[#D42C25]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cursor-pointer p-2 text-[#A5A3A0] hover:text-[#F3F0E9] rounded-xl bg-[#141416] border border-[rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-[#D42C25]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          </div>

          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0D] border-b border-[rgba(255,255,255,0.09)] px-5 pt-3 pb-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1A1A1D] text-[#F3F0E9] font-semibold border border-[rgba(255,255,255,0.08)]'
                      : 'text-[#A5A3A0] hover:bg-[#141416] hover:text-[#F3F0E9]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D42C25]" />
                    )}
                  </div>
                </button>
              );
            })}
            <div className="pt-3">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] text-white text-xs uppercase tracking-wider font-semibold py-3.5 rounded-full transition-all shadow-md"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
