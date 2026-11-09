import React, { useState } from "react";
import { ArrowUpRight, Filter } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "../data/studioData";
import { filterGalleryItems } from "../utils/booking";

interface GalleryPageProps {
  onNavigate: (page: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const filterOptions = [
    "All Work",
    "Black & Grey",
    "Realism",
    "Fine Line",
    "Blackwork",
    "Custom",
    "Neo Traditional",
  ];

  const filteredItems = filterGalleryItems(GALLERY_ITEMS, activeFilter);
  const featuredPieces = GALLERY_ITEMS.filter((item) => item.isFeatured).slice(
    0,
    2,
  );

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[55vh] flex items-center pt-28 pb-14 px-0 lg:px-8 overflow-hidden bg-[#0B0B0D]">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/tattoo_realism_portrait_1793799071055.jpg"
            alt="Realism tattoo gallery showcase"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-[#0B0B0D]/80" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto w-full">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D42C25] font-semibold block">
              Permanent Works Archive
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-serif-cinzel tracking-tight text-[#F3F0E9] leading-tight text-balance">
              EVERY TATTOO <br />
              <span className="text-[#D42C25]">HAS A STORY.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#A5A3A0] leading-relaxed font-light">
              Explore our curated portfolio of bespoke commissions. Each work is
              custom drafted for body anatomy, photographed in true studio
              light.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: GALLERY FILTERS (Interactive segmented controls as per §1.A) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] pb-6">
          <div className="flex items-center gap-2 text-xs text-[#A5A3A0] uppercase tracking-wider">
            <Filter className="w-4 h-4 text-[#D42C25]" />
            <span>Filter by Style:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#141416] border border-[rgba(255,255,255,0.08)]">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`cursor-pointer px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#1A1A1D] text-[#F3F0E9] font-semibold shadow-md border border-[rgba(255,255,255,0.12)] text-[#D42C25]"
                      : "text-[#A5A3A0] hover:text-[#F3F0E9] hover:bg-[#1A1A1D]/50"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: TATTOO GALLERY (Responsive image grid, rounded containers, minimal captions) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 text-[#A5A3A0]">
            No commissions found matching "{activeFilter}".
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group cursor-pointer rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.22)] hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1 flex flex-col"
              >
                {/* Rounded image container with subtle zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#141416]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5 pointer-events-none">
                    <span className="text-xs uppercase tracking-wider text-white font-medium inline-flex items-center gap-1.5">
                      <span>Expand Artwork</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D42C25]" />
                    </span>
                  </div>
                </div>

                {/* Minimal captions */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#D42C25] font-semibold mb-1">
                      {item.style}
                    </div>
                    <h3 className="text-lg font-bold font-serif-cinzel text-[#F3F0E9] group-hover:text-[#D42C25] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="pt-2 text-xs text-[#A5A3A0] flex items-center justify-between border-t border-[rgba(255,255,255,0.06)] mt-3">
                    <span>{item.artist}</span>
                    <span className="text-[11px] text-[#A5A3A0]/80">
                      {item.placement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 4: FEATURED WORK (Large Highlight Projects) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
            Atelier Spotlight
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
            Featured Highlight Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPieces.map((piece) => (
            <div
              key={piece.id}
              onClick={() => onOpenLightbox(piece)}
              className="cursor-pointer group rounded-3xl bg-[#141416] border border-[rgba(255,255,255,0.1)] overflow-hidden shadow-2xl transition-all duration-300 hover:border-[rgba(255,255,255,0.25)] flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0B0D]">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B0B0D]/80 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-[#D42C25] border border-[rgba(255,255,255,0.1)]">
                  Featured Commission
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#A5A3A0]">
                  {piece.style} · {piece.sessionTime}
                </div>
                <h3 className="text-2xl font-bold font-serif-cinzel text-[#F3F0E9] group-hover:text-[#D42C25] transition-colors">
                  {piece.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A3A0]">
                  Artisan:{" "}
                  <strong className="text-[#F3F0E9] font-medium">
                    {piece.artist}
                  </strong>{" "}
                  · {piece.placement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: GALLERY CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center rounded-3xl bg-[#141416] border border-[rgba(255,255,255,0.1)] p-10 sm:p-16 space-y-6">
          <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
            Commission An Original
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9]">
            YOUR IDEA COULD BE NEXT.
          </h2>
          <p className="text-sm sm:text-base text-[#A5A3A0] max-w-xl mx-auto leading-relaxed">
            Every piece in our gallery began as a simple thought or rough
            reference. Let's translate your story into permanent skin art.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate("contact")}
              className="cursor-pointer inline-flex items-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] text-white px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#D42C25]/25"
            >
              <span>Begin Your Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
