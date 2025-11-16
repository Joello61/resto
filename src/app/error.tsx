'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home, RefreshCw, Mail, UtensilsCrossed, Phone, AlertTriangle } from 'lucide-react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log l'erreur pour le debugging
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-error/5 to-neutral-50 px-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* Illustration */}
        <div className="relative mb-8">
          {/* Cercle gradient en arrière-plan */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-gradient-to-br from-error/20 to-primary-500/20 blur-3xl animate-pulse" />
          </div>
          
          {/* Icône centrale */}
          <div className="relative">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-error/10 to-primary-500/10 mb-4">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-xl">
                <AlertTriangle className="h-16 w-16 text-error animate-wiggle" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Message principal */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900">
            Oups ! Quelque chose a mal tourné
          </h1>
          <p className="text-lg text-neutral-600 max-w-lg mx-auto leading-relaxed">
            Une erreur inattendue s&apos;est produite. Nos cuisiniers travaillent déjà 
            pour résoudre le problème !
          </p>
        </div>

        {/* Détails de l'erreur (développement) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mb-8 p-4 rounded-lg bg-error/10 border border-error/20 text-left max-w-lg mx-auto">
            <p className="text-sm font-mono text-error break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-neutral-500 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg group"
          >
            <RefreshCw className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
            Réessayer
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
          >
            <Home className="h-5 w-5" />
            Retour à l&apos;accueil
          </Link>
        </div>

        {/* Alternatives */}
        <div className="grid gap-4 md:grid-cols-3 max-w-3xl mx-auto">
          
          {/* Card Menu */}
          <Link
            href="/menu"
            className="group p-6 rounded-xl bg-white hover:bg-primary-50 border border-neutral-200 hover:border-primary-500 transition-all hover:shadow-lg"
          >
            <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 group-hover:bg-primary-500 transition-colors">
              <UtensilsCrossed className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Notre Menu</h3>
            <p className="text-sm text-neutral-600">
              Découvrez nos plats
            </p>
          </Link>

          {/* Card Réservation */}
          <Link
            href="/contact"
            className="group p-6 rounded-xl bg-white hover:bg-accent-50 border border-neutral-200 hover:border-accent-500 transition-all hover:shadow-lg"
          >
            <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-100 group-hover:bg-accent-500 transition-colors">
              <Phone className="h-6 w-6 text-accent-600 group-hover:text-white transition-colors" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Réserver</h3>
            <p className="text-sm text-neutral-600">
              Une table pour ce soir ?
            </p>
          </Link>

          {/* Card Contact */}
          <a
            href="mailto:contact@restaurant-camerounais.fr"
            className="group p-6 rounded-xl bg-white hover:bg-secondary-50 border border-neutral-200 hover:border-secondary-500 transition-all hover:shadow-lg"
          >
            <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary-100 group-hover:bg-secondary-500 transition-colors">
              <Mail className="h-6 w-6 text-secondary-600 group-hover:text-white transition-colors" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-1">Nous contacter</h3>
            <p className="text-sm text-neutral-600">
              Besoin d&apos;aide ?
            </p>
          </a>

        </div>

        {/* Message de réconfort */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-accent-50 to-primary-50 border border-accent-200/50">
          <p className="text-sm text-neutral-700">
            <span className="font-semibold">Pas de panique !</span> Cette erreur a été enregistrée 
            et notre équipe technique est déjà sur le coup. En attendant, que diriez-vous 
            de découvrir nos spécialités camerounaises ?
          </p>
        </div>

      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}