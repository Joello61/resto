import type { Metadata } from 'next';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import { AboutPreview } from '../components/sections/about-preview';
import { ContactSection } from '../components/sections/contact-section';
import { GalleryPreview } from '../components/sections/gallery-preview';
import { Hero } from '../components/sections/hero';
import { MenuPreview } from '../components/sections/menu-preview';
import { SITE_INFO } from '../lib/constants';


export const metadata: Metadata = {
  title: SITE_INFO.nom,
  description: SITE_INFO.description,
  openGraph: {
    title: SITE_INFO.nom,
    description: SITE_INFO.description,
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Premier impact */}
      <Hero />

      {/* Menu Preview - Plats signatures */}
      <MenuPreview />

      {/* About Preview - Notre histoire */}
      <AboutPreview />

      {/* Gallery Preview - Galerie photos */}
      <GalleryPreview />

      {/* Contact Section - Réservation */}
      <ContactSection />

      {/* Scroll to top button */}
      <ScrollToTop />
    </>
  );
}