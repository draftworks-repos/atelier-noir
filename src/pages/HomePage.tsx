import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Award,
} from "lucide-react";
import {
  POPULAR_STYLES,
  ARTISTS,
  GALLERY_ITEMS,
  WHY_CHOOSE_US,
  TATTOO_PROCESS,
  REVIEWS,
  Artist,
  GalleryItem,
} from "../data/studioData";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenArtist: (artist: Artist) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLightbox,
  onOpenArtist,
}) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100svh] flex items-end md:items-center pt-24 pb-10 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background photo & scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_cinematic_tattoo_1793799069695.jpg"
            alt="Atelier tattoo artist at work"
            className="w-full h-full object-cover object-center filter  contrast-[1.12]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient overlays for contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl lg:px-8 mx-auto w-full">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#141416]/90 border border-[rgba(255,255,255,0.12)] text-xs uppercase tracking-[0.22em] text-[#F3F0E9] shadow-lg">
              <span>Haute Tattoo Atelier</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif-cinzel tracking-tight text-[#F3F0E9] leading-[1.08] text-balance">
              YOUR STORY. <br />
              <span className="text-[#D42C25]">YOUR INK.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#A5A3A0] leading-relaxed max-w-2xl font-light">
              An intimate studio sanctuary bridging classical fine art,
              anatomical realism, and modern single-needle precision. Every
              permanent composition is bespoke, clinical, and uncompromising.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate("contact")}
                className="cursor-pointer group inline-flex items-center justify-center gap-2.5 bg-[#D42C25] hover:bg-[#b8231d] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#D42C25]/25 hover:shadow-[#D42C25]/45 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => onNavigate("gallery")}
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#141416]/90 hover:bg-[#1A1A1D] text-[#F3F0E9] border border-[rgba(255,255,255,0.14)] hover:border-[rgba(255,255,255,0.25)] px-8 py-4 rounded-full font-medium text-sm transition-all duration-200"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#A5A3A0]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT THE STUDIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Rounded photograph */}
          <div className="relative rounded-3xl overflow-hidden bg-[#141416] border border-[rgba(255,255,255,0.09)] group aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <img
              src="/assets/images/studio_atelier_interior_1793799069847.jpg"
              alt="Atelier Noir studio workspace"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-6 ">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold block mb-0.5">
                The Sanctum
              </span>
            </div>
          </div>

          {/* Copy Column */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
              The Atelier Standard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-cinzel text-[#F3F0E9] leading-tight text-balance">
              ART THAT TELLS YOUR STORY.
            </h2>
            <p className="text-[#A5A3A0] leading-relaxed text-base sm:text-lg">
              Atelier Noir was founded to challenge the crowded, hurried
              standard of traditional street shops. We operate as an intimate
              creative studio where clients sit directly with master draughtsmen
              and fine artists.
            </p>
            <p className="text-[#A5A3A0] leading-relaxed text-sm sm:text-base">
              Every appointment is scheduled with generous time buffers to
              preserve an unhurried, focused environment. From initial
              anatomical stencil sizing to post-procedure barrier healing, we
              treat tattooing as permanent gallery-grade craftsmanship.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate("about")}
                className="cursor-pointer group inline-flex items-center gap-2 text-sm font-semibold text-[#F3F0E9] hover:text-[#D42C25] transition-colors"
              >
                <span>Learn More About Our Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: POPULAR TATTOO STYLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
              Curated Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
              Popular Tattoo Styles
            </h2>
          </div>
          <button
            onClick={() => onNavigate("services")}
            className="cursor-pointer group inline-flex items-center gap-2 text-sm font-medium text-[#A5A3A0] hover:text-[#F3F0E9] transition-colors"
          >
            <span>View All Services & Styles</span>
            <ArrowRight className="w-4 h-4 text-[#D42C25] transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_STYLES.map((style) => (
            <div
              key={style.id}
              onClick={() => onNavigate("services")}
              className="group cursor-pointer rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] p-4 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Rounded image container (14-20px) */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-[#141416]">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              <h3 className="text-xl font-bold font-serif-cinzel text-[#F3F0E9] group-hover:text-[#D42C25] transition-colors mb-2">
                {style.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#A5A3A0] leading-relaxed line-clamp-3">
                {style.shortDesc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: TATTOO STYLES MARQUEE (strictly between Section 3 and Section 5) */}
      <section className="w-full overflow-hidden py-8 sm:py-10 bg-[#141416] border-y border-[rgba(255,255,255,0.09)] select-none">
        <div className="animate-marquee flex items-center gap-12 text-[#F3F0E9] whitespace-nowrap">
          {[1, 2, 3].map((loopIdx) => (
            <div
              key={loopIdx}
              className="flex items-center gap-12 font-serif-cinzel text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.18em]"
            >
              <span>BLACK & GREY</span>
              <span className="text-[#D42C25]">·</span>
              <span>REALISM</span>
              <span className="text-[#D42C25]">·</span>
              <span>FINE LINE</span>
              <span className="text-[#D42C25]">·</span>
              <span>BLACKWORK</span>
              <span className="text-[#D42C25]">·</span>
              <span>NEO TRADITIONAL</span>
              <span className="text-[#D42C25]">·</span>
              <span>JAPANESE</span>
              <span className="text-[#D42C25]">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: RECENT WORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
              From The Sanctum
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
              Recent Work
            </h2>
          </div>
          <button
            onClick={() => onNavigate("gallery")}
            className="cursor-pointer group inline-flex items-center gap-2 text-sm font-semibold text-[#D42C25] hover:text-[#f35953] transition-colors"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Responsive image grid with balanced proportions and rounded containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group cursor-pointer rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.22)] hover:shadow-2xl hover:shadow-black/70"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#141416]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 pointer-events-none">
                  <span className="text-xs uppercase tracking-wider text-white font-medium inline-flex items-center gap-1.5">
                    <span>Inspect Artwork</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D42C25]" />
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-[11px] uppercase tracking-wider text-[#D42C25] font-semibold mb-1">
                  {item.style}
                </div>
                <h3 className="text-lg font-bold font-serif-cinzel text-[#F3F0E9] group-hover:text-[#D42C25] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A5A3A0] mt-1">
                  By {item.artist} · {item.placement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: MEET OUR ARTISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
              The Masters
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
              Meet Our Artists
            </h2>
          </div>
          <button
            onClick={() => onNavigate("artists")}
            className="cursor-pointer group inline-flex items-center gap-2 text-sm font-medium text-[#A5A3A0] hover:text-[#F3F0E9] transition-colors"
          >
            <span>View All Artist Resumes</span>
            <ArrowRight className="w-4 h-4 text-[#D42C25] transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISTS.map((artist) => (
            <div
              key={artist.id}
              onClick={() => onOpenArtist(artist)}
              className="group cursor-pointer rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] p-4 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-4 bg-[#141416]">
                <img
                  src={artist.portrait}
                  alt={artist.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] uppercase tracking-wider text-[#D42C25] font-semibold">
                    {artist.role}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold font-serif-cinzel text-[#F3F0E9] group-hover:text-[#D42C25] transition-colors">
                {artist.name}
              </h3>
              <p className="text-xs text-[#F3F0E9]/75 font-medium mt-0.5 mb-2">
                {artist.specialization}
              </p>
              <p className="text-xs text-[#A5A3A0] leading-relaxed line-clamp-3">
                {artist.bio}
              </p>

              <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-xs text-[#A5A3A0] group-hover:text-[#F3F0E9]">
                <span>View Full Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D42C25]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-[.5] hover:scale-[1.01] hover:border-[rgba(255,255,255,0.35)] hover:shadow-xl hover:shadow-black/30"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#141416] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#D42C25] mb-5 shadow-inner">
                  {idx === 0 && <Award className="w-6 h-6" />}
                  {idx === 1 && <Sparkles className="w-6 h-6" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 3 && <HeartHandshake className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold font-serif-cinzel text-[#F3F0E9] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A3A0] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: THE TATTOO PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
            The Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
            The Tattoo Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TATTOO_PROCESS.map((proc) => (
            <div
              key={proc.step}
              className="rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-[.5] hover:scale-[1.01] hover:border-[rgba(255,255,255,0.35)] hover:shadow-xl hover:shadow-black/30"
            >
              <div className="text-4xl sm:text-5xl font-serif-cinzel font-bold text-[#F3F0E9]/20 mb-4 select-none hover:text-[#D42C25]/50">
                {proc.step}
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif-cinzel text-[#F3F0E9] mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5A3A0] leading-relaxed">
                  {proc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: CLIENT REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
            Patron Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
            Client Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#D42C25] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#F3F0E9]/90 italic leading-relaxed mb-6 font-light">
                  "{rev.review}"
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="font-semibold text-sm text-[#F3F0E9]">
                  {rev.clientName}
                </div>
                <div className="text-xs text-[#A5A3A0]">
                  {rev.tattooType} · {rev.artistName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#141416] border border-[rgba(255,255,255,0.12)] p-8 sm:p-14 lg:p-16 text-center shadow-2xl">
          {/* Subtle background photo */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="/assets/images/hero_cinematic_tattoo_1793799069695.jpg"
              alt="Background pattern"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141416] via-[#141416]/80 to-[#141416]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
              Begin Your Commission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-cinzel text-[#F3F0E9] leading-tight">
              READY FOR YOUR NEXT TATTOO?
            </h2>
            <p className="text-[#A5A3A0] text-sm sm:text-base leading-relaxed">
              Whether you possess a fully mapped conceptual brief or wish to
              develop an idea directly with one of our master artisans, our
              studio concierge will guide every step.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate("contact")}
                className="cursor-pointer group inline-flex items-center gap-2.5 bg-[#D42C25] hover:bg-[#b8231d] text-white px-9 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#D42C25]/25 hover:shadow-[#D42C25]/45 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Your Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
