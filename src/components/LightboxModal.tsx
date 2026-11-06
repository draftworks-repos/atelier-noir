import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Clock, User, Sparkles } from 'lucide-react';
import { GalleryItem } from '../data/studioData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigateItem: (item: GalleryItem) => void;
  onBookWithArtist?: (artistName: string, style: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigateItem,
  onBookWithArtist,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigateItem(items[prevIdx]);
  };
  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigateItem(items[nextIdx]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#141416] border border-[rgba(255,255,255,0.12)] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0B0B0D]/80 hover:bg-[#D42C25] text-[#F3F0E9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D42C25]"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame with Prev/Next Controls */}
        <div className="relative lg:w-3/5 bg-[#0B0B0D] flex items-center justify-center min-h-[300px] sm:min-h-[420px] lg:min-h-[560px] overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[85vh] transition-transform duration-500"
            referrerPolicy="no-referrer"
          />

          {/* Prev/Next arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0B0B0D]/80 hover:bg-[#D42C25] text-white transition-all focus:outline-none"
                aria-label="Previous artwork"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0B0B0D]/80 hover:bg-[#D42C25] text-white transition-all focus:outline-none"
                aria-label="Next artwork"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Details Pane */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#141416]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.style} Atelier Commission</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-cinzel text-[#F3F0E9] mb-4">
              {item.title}
            </h3>

            {/* Unboxed Metadata (Zero-Pill discipline) */}
            <div className="space-y-3 py-4 border-y border-[rgba(255,255,255,0.08)] text-sm text-[#A5A3A0]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#D42C25]" />
                  <span>Artisan</span>
                </span>
                <span className="text-[#F3F0E9] font-medium">{item.artist}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Placement</span>
                <span className="text-[#F3F0E9] font-medium">{item.placement}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D42C25]" />
                  <span>Session Span</span>
                </span>
                <span className="text-[#F3F0E9] font-medium">{item.sessionTime}</span>
              </div>
            </div>

            {/* Tags as clean unboxed text */}
            <div className="pt-4 text-xs text-[#A5A3A0] flex items-center gap-2 flex-wrap">
              <span className="text-[#F3F0E9]">Attributes:</span>
              {item.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span>{tag}</span>
                  {idx < item.tags.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#A5A3A0] leading-relaxed">
              Every piece produced at Atelier Noir is custom drafted directly onto client skin contours using certified non-toxic vegan inks and hospital-grade sterilization.
            </p>
          </div>

          {/* Action button */}
          <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.08)]">
            <button
              onClick={() => {
                onClose();
                if (onBookWithArtist) {
                  onBookWithArtist(item.artist, item.style);
                }
              }}
              className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#D42C25]/20"
            >
              <span>Consult on Similar Piece</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
