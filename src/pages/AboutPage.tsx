import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Feather, Award } from 'lucide-react';
import { ARTISTS, Artist } from '../data/studioData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenArtist: (artist: Artist) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenArtist }) => {
  const philosophyPillars = [
    {
      icon: Feather,
      title: 'Individual Expression',
      description: 'Your skin is a sovereign canvas. We never force aesthetic formulas onto clients; every line and wash is tailored to reflect your personal narrative.',
    },
    {
      icon: Sparkles,
      title: 'Artistic Creativity',
      description: 'We view tattooing through the lens of classical fine art, drawing on Renaissance anatomy, woodblock composition, and modern printmaking.',
    },
    {
      icon: Award,
      title: 'Attention to Detail',
      description: 'From micro-needle groupings to optical ink depth, our artists obsess over millimetric precision that looks immaculate today and twenty years hence.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Craftsmanship',
      description: 'Uncompromised patience, surgical hygiene, and museum-grade pigments ensure permanent ink integrity with gentle, accelerated healing.',
    },
  ];

  const hygieneProtocols = [
    {
      title: 'Hospital-Grade Autoclave',
      detail: 'All reusable stainless steel components undergo Class B vacuum autoclave sterilization with digital spore batch validation.',
    },
    {
      title: 'Single-Use Surgical Needles',
      detail: 'Every cartridge needle is single-use, sterile-blister packed with safety membrane barriers preventing backflow contamination.',
    },
    {
      title: 'Certified Vegan Carbon Inks',
      detail: 'Pure, heavy-metal-free, organic carbon pigments formulated for exceptional lightfastness, low allergenicity, and archival stability.',
    },
    {
      title: 'Clinical Barrier Wrapping',
      detail: 'Every surface, cable, power supply, and machine is freshly barrier-filmed prior to every procedure in front of the client.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 px-0 lg:px-8 overflow-hidden bg-[#0B0B0D]">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/studio_atelier_interior_1793799069847.jpg"
            alt="Atelier interior atmosphere"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.12]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-[#0B0B0D]/80" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto w-full">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D42C25] font-semibold block">
              Our Heritage & Vision
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-serif-cinzel tracking-tight text-[#F3F0E9] leading-tight text-balance">
              MORE THAN INK. <br />
              <span className="text-[#D42C25]">IT'S YOUR STORY.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A5A3A0] leading-relaxed max-w-2xl font-light">
              Founded on the belief that tattooing is one of humanity’s oldest fine arts, Atelier Noir unites academic draughtsmanship with contemporary tattoo culture.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
              The Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9]">
              OUR STORY & ORIGINS
            </h2>
            <p className="text-sm sm:text-base text-[#A5A3A0] leading-relaxed">
              Established in 2018 in the historic cast-iron district of SoHo, Atelier Noir emerged from a shared frustration with the hurried, noisy atmosphere of commercial tattoo parlors. Master artisan Marcus Vance sought to create a peaceful, light-filled studio reminiscent of a classical European atelier.
            </p>
            <p className="text-sm sm:text-base text-[#A5A3A0] leading-relaxed">
              Today, our collective comprises four distinguished resident artists with backgrounds in fine art painting, architectural draftsmanship, printmaking, and biological illustration. We take on a limited number of commissions each week to ensure that every client receives undivided focus.
            </p>
            <div className="pt-2 flex items-center gap-8 text-sm">
              <div>
                <div className="text-2xl font-bold font-serif-cinzel text-[#F3F0E9]">8+</div>
                <div className="text-xs text-[#A5A3A0]">Years in SoHo</div>
              </div>
              <div className="w-[1px] h-8 bg-[rgba(255,255,255,0.1)]" />
              <div>
                <div className="text-2xl font-bold font-serif-cinzel text-[#F3F0E9]">100%</div>
                <div className="text-xs text-[#A5A3A0]">Custom Artwork</div>
              </div>
              <div className="w-[1px] h-8 bg-[rgba(255,255,255,0.1)]" />
              <div>
                <div className="text-2xl font-bold font-serif-cinzel text-[#F3F0E9]">Zero</div>
                <div className="text-xs text-[#A5A3A0]">Rushed Sessions</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-[#141416] border border-[rgba(255,255,255,0.09)] aspect-[4/3] shadow-2xl group">
            <img
              src="/src/assets/images/hero_cinematic_tattoo_1793799069695.jpg"
              alt="Marcus Vance in consultation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
            Guiding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
            Our Studio Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#141416] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#D42C25] mb-5 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-serif-cinzel text-[#F3F0E9] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5A3A0] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: INSIDE THE STUDIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
            The Sanctum
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
            Inside the Studio
          </h2>
          <p className="text-sm text-[#A5A3A0] mt-1 max-w-2xl">
            Designed to foster calm and precision. High ceilings, expansive natural light, curated vinyl soundscapes, and private artist stations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden bg-[#141416] border border-[rgba(255,255,255,0.09)] aspect-[4/3] group relative">
            <img
              src="/src/assets/images/studio_atelier_interior_1793799069847.jpg"
              alt="Private studio station"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-semibold text-[#F3F0E9]">Private Procedure Stations</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#141416] border border-[rgba(255,255,255,0.09)] aspect-[4/3] group relative">
            <img
              src="/src/assets/images/artist_master_portrait_1793799071792.jpg"
              alt="Artist drafting area"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-semibold text-[#F3F0E9]">Drafting & Stencil Suite</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-[#141416] border border-[rgba(255,255,255,0.09)] aspect-[4/3] group relative">
            <img
              src="/src/assets/images/hero_cinematic_tattoo_1793799069695.jpg"
              alt="Sterile workstation setup"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-semibold text-[#F3F0E9]">Clinical Sterile Bays</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: HYGIENE & SAFETY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#141416] border border-[rgba(255,255,255,0.09)] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
              Clinical Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9]">
              HYGIENE, SAFETY & SANITATION STANDARDS
            </h2>
            <p className="text-sm sm:text-base text-[#A5A3A0] leading-relaxed">
              We hold our studio to sterilization protocols that mirror surgical outpatient environments. We are fully licensed by the NYC Department of Health and strictly comply with OSHA bloodborne pathogen guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hygieneProtocols.map((protocol, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.06)] p-6 space-y-2"
              >
                <div className="flex items-center gap-2.5 text-[#F3F0E9] font-semibold text-base font-serif-cinzel">
                  <ShieldCheck className="w-5 h-5 text-[#D42C25] shrink-0" />
                  <span>{protocol.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A5A3A0] leading-relaxed">
                  {protocol.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: MEET OUR ARTISTS (PREVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
              The Resident Collective
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
              Meet Our Artists
            </h2>
          </div>
          <button
            onClick={() => onNavigate('artists')}
            className="cursor-pointer group inline-flex items-center gap-2 text-sm font-semibold text-[#D42C25] hover:text-[#f35953] transition-colors"
          >
            <span>Explore Individual Portfolios</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISTS.map((artist) => (
            <div
              key={artist.id}
              onClick={() => onOpenArtist(artist)}
              className="group cursor-pointer rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] p-4 flex flex-col transition-all duration-300 hover:border-[rgba(255,255,255,0.22)] hover:-translate-y-1"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-3 bg-[#141416]">
                <img
                  src={artist.portrait}
                  alt={artist.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold font-serif-cinzel text-[#F3F0E9] group-hover:text-[#D42C25] transition-colors">
                {artist.name}
              </h3>
              <p className="text-xs text-[#A5A3A0]">
                {artist.specialization}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: ABOUT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center rounded-3xl bg-[#141416] border border-[rgba(255,255,255,0.1)] p-10 sm:p-16 space-y-6">
          <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
            Visit the SoHo Atelier
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9]">
            EXPERIENCE THE SANCTUM IN PERSON
          </h2>
          <p className="text-sm sm:text-base text-[#A5A3A0] max-w-xl mx-auto leading-relaxed">
            We welcome clients for private consultations, reference review, and sizing sessions. Schedule your visit today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer inline-flex items-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] text-white px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#D42C25]/25"
            >
              <span>Book an In-Person Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
