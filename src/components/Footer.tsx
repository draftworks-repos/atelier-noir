import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Clock, Instagram, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO, ALL_STYLES } from '../data/studioData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0D] border-t border-[rgba(255,255,255,0.08)] pt-16 pb-12 text-sm text-[#A5A3A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
            
                <span className="font-serif-cinzel font-bold text-xl tracking-[0.16em] text-[#F3F0E9] block">
                  {STUDIO_INFO.name}
                </span>
              
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-[#A5A3A0]/90">
              A bespoke dark atelier dedicated to fine art tattooing, high-contrast realism, surgical fine-line, and anatomical blackwork. Permanent artistry crafted with obsessive discipline.
            </p>
            <div className="pt-2 flex flex-col lg:flex-row items-start lg:items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141416] border border-[rgba(255,255,255,0.08)] text-xs text-[#F3F0E9] hover:border-[#D42C25] transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D42C25]" />
                <span>{STUDIO_INFO.socials.instagram}</span>
              </a>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141416] border border-[rgba(255,255,255,0.08)] text-xs text-[#A5A3A0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D42C25]" />
                <span>Licensed NYC Tattoo Atelier</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3F0E9] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services & Styles' },
                { id: 'about', label: 'About Atelier' },
                { id: 'artists', label: 'Resident Artists' },
                { id: 'gallery', label: 'Curated Gallery' },
                { id: 'contact', label: 'Book Appointment' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="cursor-pointer hover:text-[#F3F0E9] transition-colors inline-flex items-center gap-1 text-left"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Styles / Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3F0E9] mb-4">
              Styles
            </h4>
            <ul className="space-y-2.5">
              {ALL_STYLES.slice(0, 6).map((style) => (
                <li key={style.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="cursor-pointer hover:text-[#F3F0E9] transition-colors text-left"
                  >
                    {style.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Hours & Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F3F0E9] mb-4">
              Studio & Hours
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D42C25] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D42C25] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-[#F3F0E9] transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D42C25] shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-[#F3F0E9] transition-colors">
                  {STUDIO_INFO.email}
                </a>
              </div>
              <div className="pt-2 border-t border-[rgba(255,255,255,0.06)] space-y-1">
                <div className="flex items-center gap-2 text-[#F3F0E9]">
                  <Clock className="w-3.5 h-3.5 text-[#D42C25]" />
                  <span>Tue – Fri: {STUDIO_INFO.hours.tueFri}</span>
                </div>
                <div className="pl-5.5 text-[11px] text-[#A5A3A0]">
                  Sat – Sun: {STUDIO_INFO.hours.satSun}
                </div>
                <div className="pl-5.5 text-[11px] text-[#A5A3A0]">
                  {STUDIO_INFO.hours.mon}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} ATELIER NOIR LLC. All rights reserved. Strict clinical sanitation standards observed.</p>
          <div className="flex items-center gap-1 text-[#A5A3A0]">
          Design & Developed by
            <a href="https://draftworks.in/" className="cursor-pointer hover:text-[#F3F0E9] transition-colors">
              draftworks.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
