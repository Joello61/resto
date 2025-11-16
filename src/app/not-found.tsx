'use client';

import Link from 'next/link';
import { Home, Search, ArrowLeft, UtensilsCrossed, Lightbulb } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/30 px-4">
      <div className="max-w-2xl w-full text-center">
        
        {/* Illustration animée */}
        <div className="relative mb-8">
          {/* Grand cercle gradient en arrière-plan */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-3xl animate-pulse" />
          </div>
          
          {/* 404 stylisé */}
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-heading font-bold leading-none">
              <span className="inline-block animate-bounce-subtle text-transparent bg-clip-text bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500">
                4
              </span>
              <span className="inline-block mx-4 md:mx-8">
                <UtensilsCrossed className="h-24 w-24 md:h-32 md:w-32 text-secondary-900 animate-wiggle" strokeWidth={1.5} />
              </span>
              <span className="inline-block animate-bounce-subtle animation-delay-200 text-transparent bg-clip-text bg-gradient-to-br from-accent-500 via-primary-500 to-secondary-500">
                4
              </span>
            </h1>
          </div>
        </div>

        {/* Message principal */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900">
            Oups ! Page introuvable
          </h2>
          <p className="text-lg text-neutral-600 max-w-md mx-auto leading-relaxed">
            On dirait que ce plat n&apos;est pas sur notre menu. 
            La page que vous cherchez a peut-être été déplacée ou n&apos;existe plus.
          </p>
        </div>

        {/* Suggestions */}
        <div className="mb-8">
          <p className="text-sm text-neutral-500 mb-4">Essayez plutôt :</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 transition-all text-sm text-neutral-700 hover:text-primary-600"
            >
              <Home className="h-4 w-4" />
              Accueil
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 transition-all text-sm text-neutral-700 hover:text-primary-600"
            >
              <Search className="h-4 w-4" />
              Voir le menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 transition-all text-sm text-neutral-700 hover:text-primary-600"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* CTA principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
          >
            <ArrowLeft className="h-5 w-5" />
            Retour
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-200 bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg"
          >
            <Home className="h-5 w-5" />
            Retour à l&apos;accueil
          </Link>
        </div>

        {/* Message sympathique */}
        <div className="mt-12 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-accent-200/50">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-6 w-6 text-accent-600 flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="font-semibold text-secondary-900 mb-1">Petit conseil</p>
              <p className="text-sm text-neutral-600">
                Pendant que vous êtes ici, pourquoi ne pas jeter un œil à nos spécialités du moment ? 
                Notre Ndolé est particulièrement délicieux aujourd&apos;hui !
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1.5s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}