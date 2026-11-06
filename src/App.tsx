import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ArtistModal } from './components/ArtistModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { GALLERY_ITEMS, GalleryItem, Artist } from './data/studioData';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [prefilledArtist, setPrefilledArtist] = useState<string>('');
  const [prefilledStyle, setPrefilledStyle] = useState<string>('');

  // Read URL query params on load (e.g. ?page=gallery, ?autostart=1)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    if (pageParam && ['home', 'services', 'about', 'artists', 'gallery', 'contact'].includes(pageParam)) {
      setActivePage(pageParam);
    }
  }, []);

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookWithArtist = (artistName: string) => {
    setPrefilledArtist(artistName);
    setSelectedArtist(null);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookStyle = (styleName: string) => {
    setPrefilledStyle(styleName);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookFromLightbox = (artistName: string, styleName: string) => {
    setPrefilledArtist(artistName);
    setPrefilledStyle(styleName);
    setSelectedGalleryItem(null);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F3F0E9] flex flex-col font-sans selection:bg-[#D42C25] selection:text-white">
      {/* Global Navigation */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenLightbox={(item) => setSelectedGalleryItem(item)}
            onOpenArtist={(artist) => setSelectedArtist(artist)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onBookStyle={handleBookStyle}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenArtist={(artist) => setSelectedArtist(artist)}
          />
        )}

        {activePage === 'artists' && (
          <ArtistsPage
            onNavigate={handleNavigate}
            onOpenArtist={(artist) => setSelectedArtist(artist)}
            onOpenLightbox={(item) => setSelectedGalleryItem(item)}
            onBookWithArtist={handleBookWithArtist}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenLightbox={(item) => setSelectedGalleryItem(item)}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            initialArtist={prefilledArtist}
            initialStyle={prefilledStyle}
          />
        )}
      </main>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedGalleryItem(null)}
        onNavigateItem={(item) => setSelectedGalleryItem(item)}
        onBookWithArtist={handleBookFromLightbox}
      />

      {/* Artist Profile Modal */}
      <ArtistModal
        artist={selectedArtist}
        onClose={() => setSelectedArtist(null)}
        onBookWithArtist={handleBookWithArtist}
      />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
