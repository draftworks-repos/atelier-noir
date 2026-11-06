import React, { useEffect } from 'react';
import { X, Calendar, Clock, Award, ArrowUpRight } from 'lucide-react';
import { Artist } from '../data/studioData';

interface ArtistModalProps {
  artist: Artist | null;
  onClose: () => void;
  onBookWithArtist: (artistName: string) => void;
}

export const ArtistModal: React.FC<ArtistModalProps> = ({
  artist,
  onClose,
  onBookWithArtist,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!artist) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artist]);

  if (!artist) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`${artist.name} Profile`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#141416] border border-[rgba(255,255,255,0.12)] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0B0B0D]/80 hover:bg-[#D42C25] text-[#F3F0E9] transition-colors focus:outline-none"
          aria-label="Close Profile"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Artist Portrait */}
        <div className="md:w-5/12 bg-[#0B0B0D] relative min-h-[300px] md:min-h-[500px]">
          <img
            src={artist.portrait}
            alt={artist.name}
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent md:hidden" />
        </div>

        {/* Artist Content */}
        <div className="md:w-7/12 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto bg-[#141416]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold mb-1">
              {artist.role}
            </div>
            <h3 className="text-3xl font-bold font-serif-cinzel text-[#F3F0E9] mb-2">
              {artist.name}
            </h3>
            <p className="text-sm font-medium text-[#F3F0E9]/80 mb-6">
              Specialization: {artist.specialization}
            </p>

            <div className="space-y-4 py-4 border-y border-[rgba(255,255,255,0.08)] text-sm text-[#A5A3A0]">
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-[#D42C25]" />
                <span>
                  <strong className="text-[#F3F0E9] font-semibold">{artist.experienceYears} Years</strong> Master
                  Craft Experience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#D42C25]" />
                <span>
                  Resident Days: <span className="text-[#F3F0E9] font-medium">{artist.availableDays}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D42C25]" />
                <span>Consultation: Private 1-on-1 Studio Sessions</span>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3F0E9]">
                Background & Philosophy
              </h4>
              <p className="text-sm text-[#A5A3A0] leading-relaxed">
                {artist.fullBio}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3F0E9] mb-2">
                Notable Portfolio Pieces
              </h4>
              <ul className="text-xs text-[#A5A3A0] space-y-1">
                {artist.featuredWorks.map((work) => (
                  <li key={work} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D42C25]" />
                    <span>{work}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.08)]">
            <button
              onClick={() => {
                onClose();
                onBookWithArtist(artist.name);
              }}
              className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#D42C25]/20"
            >
              <span>Book Appointment with {artist.name.split(' ')[0]}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
