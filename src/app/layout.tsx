import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import "leaflet/dist/leaflet.css";
import { Footer } from '../components/layout/footer';
import { Header } from '../components/layout/header';
import { SITE_INFO } from '../lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: SITE_INFO.nom,
    template: `%s | ${SITE_INFO.nom}`,
  },
  description: SITE_INFO.description,
  keywords: [
    'restaurant camerounais',
    'cuisine africaine',
    'restaurant africain',
    'ndolé',
    'poulet dg',
    'cuisine traditionnelle',
    'Paris',
  ],
  authors: [{ name: SITE_INFO.nom }],
  creator: SITE_INFO.nom,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_INFO.nom,
    title: SITE_INFO.nom,
    description: SITE_INFO.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_INFO.nom,
    description: SITE_INFO.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}