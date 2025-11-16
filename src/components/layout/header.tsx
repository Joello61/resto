'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { SITE_INFO, CONTACT_INFO, NAV_LINKS } from '@/src/lib/constants';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effet de scroll pour le header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 transition-transform hover:scale-105"
            >
              <div className="relative">
                {/* Icon décoratif */}
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-2xl text-white"><UtensilsCrossed/></span>
                </div>
              </div>
              
              <div className="hidden sm:block">
                <h1 className={cn(
                  'font-heading text-xl font-bold transition-colors leading-tight text-white/90',
                  isScrolled ? 'text-secondary-900' : 'text-white/90 drop-shadow-lg'
                )}>
                  {SITE_INFO.nom}
                </h1>
                <p className={cn(
                  'text-xs transition-colors',
                  isScrolled ? 'text-neutral-600' : 'text-white/90 drop-shadow'
                )}>
                  {SITE_INFO.slogan}
                </p>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                          isActive
                            ? 'text-primary-600 bg-primary-50'
                            : isScrolled
                            ? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                            : 'text-white hover:bg-white/10 drop-shadow'
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA + Menu Mobile */}
            <div className="flex items-center gap-3">
              
              {/* Bouton Réserver - Desktop */}
              <Link
                href="/contact"
                className={cn(
                  'hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200',
                  'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-md hover:shadow-lg',
                  'group'
                )}
              >
                <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Réserver
              </Link>

              {/* Menu Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors',
                  isScrolled
                    ? 'text-secondary-900 hover:bg-primary-50'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Mobile - Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-[80px] right-0 bottom-0 w-full max-w-sm bg-white z-40 lg:hidden shadow-2xl animate-slide-in-right">
            <nav className="p-6">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          'block px-4 py-3 rounded-lg font-medium transition-all',
                          isActive
                            ? 'bg-primary-50 text-primary-600 shadow-sm'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* CTA Mobile */}
              <div className="mt-8 space-y-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-8 py-4 text-lg rounded-lg font-medium transition-all duration-200 bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  Réserver une table
                </Link>

                {/* Contact rapide */}
                <div className="pt-4 border-t">
                  <p className="text-sm text-neutral-600 mb-2">Appelez-nous</p>
                  <a
                    href={`tel:${CONTACT_INFO.telephone}`}
                    className="text-lg font-semibold text-primary-600 hover:text-primary-700"
                  >
                    {CONTACT_INFO.telephone}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Animations CSS personnalisées */}
      <style jsx global>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
}