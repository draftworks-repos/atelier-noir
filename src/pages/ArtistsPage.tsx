import React from 'react';
import { ArrowUpRight, Award, Calendar, Sparkles } from 'lucide-react';
import { ARTISTS, GALLERY_ITEMS, Artist, GalleryItem } from '../data/studioData';

interface ArtistsPageProps {
  onNavigate: (page: string) => void;
  onOpenArtist: (artist: Artist) => void;
  onOpenLightbox: (item: GalleryItem) => void;
  onBookWithArtist: (artistName: string) => void;
}

export const ArtistsPage: React.FC<ArtistsPageProps> = ({
  onNavigate,
  onOpenArtist,
  onOpenLightbox,
  onBookWithArtist,
}) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 px-0 lg:px-8 overflow-hidden bg-[#0B0B0D]">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/artist_master_portrait_1793799071792.jpg"
            alt="Master artisan at Atelier Noir"
            className="w-full h-full object-cover object-top filter brightness-[0.38] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-[#0B0B0D]/80" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto w-full">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D42C25] font-semibold block">
              The Resident Collective
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-serif-cinzel tracking-tight text-[#F3F0E9] leading-tight text-balance">
              THE ARTISTS <br />
              <span className="text-[#D42C25]">BEHIND THE INK.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A5A3A0] leading-relaxed max-w-2xl font-light">
              Our resident collective unites four master draughtsmen and fine artists, each maintaining their own rigorous aesthetic domain and booking independently through our studio concierge.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ARTIST GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-6 mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
            Resident Artisans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
            Resident Artist Directory
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {ARTISTS.map((artist) => (
            <div
              key={artist.id}
              className="rounded-3xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:border-[rgba(255,255,255,0.2)] hover:shadow-2xl hover:shadow-black/70"
            >
              {/* Portrait container (14-20px rounded image) */}
              <div className="sm:w-5/12 relative aspect-[3/4] sm:aspect-auto sm:min-h-[360px] bg-[#141416] overflow-hidden group">
                <img
                  src={artist.portrait}
                  alt={artist.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:hidden" />
              </div>

              {/* Bio & Details */}
              <div className="sm:w-7/12 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#D42C25] uppercase tracking-wider font-semibold mb-1">
                    <span>{artist.role}</span>
                    <span className="text-[#A5A3A0]">{artist.experienceYears}y craft</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif-cinzel text-[#F3F0E9] mb-1">
                    {artist.name}
                  </h3>
                  <div className="text-xs font-medium text-[#F3F0E9]/80 mb-3">
                    {artist.specialization}
                  </div>
                  <p className="text-xs sm:text-sm text-[#A5A3A0] leading-relaxed line-clamp-4">
                    {artist.bio}
                  </p>

                  <div className="pt-3 mt-3 border-t border-[rgba(255,255,255,0.06)] text-xs text-[#A5A3A0] space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D42C25]" />
                      <span>Studio Days: {artist.availableDays}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenArtist(artist)}
                    className="cursor-pointer flex-1 text-center py-2.5 px-4 rounded-xl bg-[#141416] hover:bg-[#232328] text-xs font-semibold text-[#F3F0E9] border border-[rgba(255,255,255,0.08)] transition-colors"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => onBookWithArtist(artist.name)}
                    className="cursor-pointer flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#D42C25] hover:bg-[#b8231d] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md shadow-[#D42C25]/20"
                  >
                    <span>Book With</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURED WORK BY RESIDENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
              Masterpieces in Permanent Carbon
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
              Featured Resident Works
            </h2>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="cursor-pointer inline-flex items-center gap-2 text-sm text-[#A5A3A0] hover:text-[#F3F0E9] transition-colors"
          >
            <span>View Full Studio Gallery</span>
            <ArrowUpRight className="w-4 h-4 text-[#D42C25]" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.filter((item) => item.isFeatured).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group cursor-pointer rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#141416]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-106"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5 pointer-events-none">
                  <span className="text-xs uppercase tracking-wider text-white font-medium inline-flex items-center gap-1.5">
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D42C25]" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-wider text-[#D42C25] font-semibold mb-1">
                  {item.style}
                </div>
                <h3 className="text-lg font-bold font-serif-cinzel text-[#F3F0E9] group-hover:text-[#D42C25] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A5A3A0] mt-1">
                  Crafted by <strong className="text-[#F3F0E9] font-medium">{item.artist}</strong> · {item.placement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center rounded-3xl bg-[#141416] border border-[rgba(255,255,255,0.1)] p-10 sm:p-16 space-y-6">
          <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
            Select Your Resident Artisan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9]">
            BOOK DIRECTLY WITH YOUR PREFERRED ARTIST
          </h2>
          <p className="text-sm sm:text-base text-[#A5A3A0] max-w-xl mx-auto leading-relaxed">
            Have a particular artist in mind? Let us know on the consultation form. Our concierge will pair your concept directly with their schedule.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer inline-flex items-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] text-white px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#D42C25]/25"
            >
              <span>Submit Artist Booking Request</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
