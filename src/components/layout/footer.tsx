import Link from 'next/link';
import { Facebook, Instagram, Video, MapPin, Phone, Mail, Clock, UtensilsCrossed } from 'lucide-react';
import { SITE_INFO, SOCIAL_LINKS, NAV_LINKS, CONTACT_INFO } from '@/src/lib/constants';

export function Footer() {
  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    video: Video,
  };

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white overflow-hidden">
      
      {/* Motif décoratif en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
      </div>

      <div className="relative">

        {/* Main Footer Content */}
        <div className="container mx-auto py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            
            {/* À propos */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12    w-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-2xl text-white"><UtensilsCrossed/></span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {SITE_INFO.nom}
                  </h3>
                  <p className="text-sm text-accent-400">{SITE_INFO.slogan}</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {SITE_INFO.description}
              </p>
              
              {/* Réseaux sociaux */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-10 w-10 rounded-lg bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      {Icon && <Icon className="h-5 w-5 text-white/80 group-hover:text-white transition-colors" />}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-heading text-white text-lg font-bold mb-6 flex items-center gap-2">
                <div className="h-1 w-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-white text-lg font-bold mb-6 flex items-center gap-2">
                <div className="h-1 w-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded" />
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`https://maps.google.com/?q=${CONTACT_INFO.adresse}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/70 hover:text-primary-400 transition-colors group"
                  >
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">
                      {CONTACT_INFO.adresse}<br />
                      {CONTACT_INFO.codePostal} {CONTACT_INFO.ville}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT_INFO.telephone}`}
                    className="flex items-center gap-3 text-white/70 hover:text-primary-400 transition-colors group"
                  >
                    <Phone className="h-5 w-5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                    <span className="text-sm">{CONTACT_INFO.telephone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-3 text-white/70 hover:text-primary-400 transition-colors group"
                  >
                    <Mail className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{CONTACT_INFO.email}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Horaires */}
            <div>
              <h4 className="font-heading text-white text-lg font-bold mb-6 flex items-center gap-2">
                <div className="h-1 w-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded" />
                Horaires
              </h4>
              <div className="space-y-4">
                {CONTACT_INFO.horaires.map((horaire: { jours: string; heures: string }, index: number) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index} className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-white">{horaire.jours}</p>
                      <p className="text-sm text-white/70">{horaire.heures}</p>
                    </div>
                  </div>
                ))}
                
                {/* Badge "Ouvert maintenant" (exemple) */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-xs font-semibold text-green-400">
                    Ouvert maintenant
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
              <p>
                © {new Date().getFullYear()} {SITE_INFO.nom}. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <Link href="/mentions-legales" className="hover:text-primary-400 transition-colors">
                  Mentions légales
                </Link>
                <Link href="/confidentialite" className="hover:text-primary-400 transition-colors">
                  Confidentialité
                </Link>
                <Link href="/cgv" className="hover:text-primary-400 transition-colors">
                  CGV
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}