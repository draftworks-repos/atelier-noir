import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';
import { ALL_STYLES, TattooStyle } from '../data/studioData';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onBookStyle?: (styleName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onBookStyle }) => {
  const handleConsultStyle = (styleName: string) => {
    if (onBookStyle) {
      onBookStyle(styleName);
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[60vh] flex items-center pt-28 pb-16 px-0 lg:px-8 overflow-hidden bg-[#0B0B0D]">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/tattoo_fineline_botanical_1793799072123.jpg"
            alt="Fine line tattoo work"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-[#0B0B0D]/80" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto w-full">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D42C25] font-semibold block">
              Disciplines & Craftsmanship
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-serif-cinzel tracking-tight text-[#F3F0E9] leading-tight text-balance">
              FIND YOUR STYLE. <br />
              <span className="text-[#D42C25]">MAKE IT YOURS.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A5A3A0] leading-relaxed max-w-2xl font-light">
              We specialize in eight distinguished tattoo traditions, executed with museum-grade precision, certified vegan pigments, and absolute anatomical consideration.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: TATTOO STYLES (Alternating layouts for rhythm and avoiding identical card clones) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="border-b border-[rgba(255,255,255,0.08)] pb-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
            The Portfolio of Styles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
            Curated Styles & Techniques
          </h2>
        </div>

        {/* Feature Styles with Alternating Two-Column Editorial Layouts */}
        <div className="space-y-16 lg:space-y-24">
          {ALL_STYLES.map((style: TattooStyle, index: number) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={style.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-6 rounded-3xl overflow-hidden bg-[#141416] border border-[rgba(255,255,255,0.09)] group relative aspect-[16/11] shadow-2xl ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Frame */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-serif-cinzel font-bold text-[#D42C25] tracking-widest">
                      0{index + 1}.
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#A5A3A0]">
                      Specialized Technique
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9]">
                    {style.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A5A3A0] leading-relaxed">
                    {style.fullDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                    <div className="text-xs font-semibold text-[#F3F0E9] uppercase tracking-wider">
                      Technical Hallmarks:
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-[#A5A3A0]">
                      {style.techniques.map((tech, i) => (
                        <div key={tech} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D42C25]" />
                          <span>{tech}</span>
                          {i < style.techniques.length - 1 && <span className="text-[#A5A3A0]/40">·</span>}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-[#A5A3A0] pt-1">
                      <span className="text-[#F3F0E9] font-medium">Recommended Placement:</span> {style.recommendedPlacement}
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => handleConsultStyle(style.name)}
                      className="cursor-pointer group inline-flex items-center gap-2 bg-[#1A1A1D] hover:bg-[#D42C25] text-[#F3F0E9] hover:text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider border border-[rgba(255,255,255,0.12)] hover:border-transparent transition-all duration-200"
                    >
                      <span>Consult on {style.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: CUSTOM TATTOO DESIGN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#141416] border border-[rgba(255,255,255,0.09)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-2xl">
          <div className="lg:col-span-5 relative min-h-[320px] bg-[#0B0B0D]">
            <img
              src="/src/assets/images/artist_master_portrait_1793799071792.jpg"
              alt="Artist drawing custom concept"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Original Commissions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] leading-tight">
              CUSTOM TATTOO DESIGN
            </h2>
            <p className="text-sm sm:text-base text-[#A5A3A0] leading-relaxed">
              We never replicate existing tattoos or generic flash sheets. When you book a custom project with Atelier Noir, your idea is treated as a personal commission.
            </p>
            <p className="text-sm sm:text-base text-[#A5A3A0] leading-relaxed">
              We take high-resolution reference photos of your exact anatomy, draft directly onto body planes to ensure movement synergy, and collaborate through hand-drawn iterations until the design represents your story impeccably.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="cursor-pointer inline-flex items-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] text-white text-xs uppercase tracking-wider font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg shadow-[#D42C25]/20"
              >
                <span>Submit Your Custom Concept</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COVER-UP TATTOOS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.09)] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Artistic Restoration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9]">
              COVER-UP & TATTOO TRANSFORMATION
            </h2>
            <p className="text-sm sm:text-base text-[#A5A3A0] leading-relaxed">
              Existing tattoos with blown ink, outdated motifs, or faded pigments do not need to be lived with. Our resident specialists evaluate tone density, scar tissue, and light values to build strategic new compositions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[rgba(255,255,255,0.06)]">
              <div>
                <h4 className="text-sm font-semibold text-[#F3F0E9] mb-1">Tone Mapping</h4>
                <p className="text-xs text-[#A5A3A0]">Accurate assessment of pigment saturation and undertone dispersal.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F3F0E9] mb-1">Optical Camouflage</h4>
                <p className="text-xs text-[#A5A3A0]">Using organic textures and flow lines to redirect the observer's gaze.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F3F0E9] mb-1">Zero Muddying</h4>
                <p className="text-xs text-[#A5A3A0]">Strict layered ink chemistry ensuring dark coverage does not blur into blobs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center rounded-3xl bg-[#141416] border border-[rgba(255,255,255,0.1)] p-10 sm:p-16 space-y-6">
          <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
            Private Atelier Dialogue
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9]">
            DISCUSS YOUR VISION WITH AN ARTISAN
          </h2>
          <p className="text-sm sm:text-base text-[#A5A3A0] max-w-xl mx-auto leading-relaxed">
            Not sure which style fits your placement or concept best? Book an initial 30-minute studio consultation to explore possibilities with no pressure.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer inline-flex items-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] text-white px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#D42C25]/25"
            >
              <span>Schedule Free Studio Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
