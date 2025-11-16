'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, UtensilsCrossed } from 'lucide-react';
import { SITE_INFO } from '@/src/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary-900">
      
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/restaurant-interior.jpg"
          alt="Intérieur du restaurant"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Overlay gradient subtil */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/80 to-secondary-900/70" />
      </div>

      {/* Motifs décoratifs animés */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Contenu */}
      <div className="container-custom relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte */}
          <div className="text-white">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <UtensilsCrossed className="h-4 w-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-400">Cuisine Authentique Camerounaise</span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-white/90 "
            >
              {SITE_INFO.nom}
            </motion.h1>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-4 font-medium"
            >
              {SITE_INFO.slogan}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed"
            >
              Plongez dans un voyage culinaire au cœur de l&apos;Afrique. 
              Découvrez des saveurs authentiques préparées avec passion et tradition.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-primary-500 text-white hover:bg-primary-600 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Découvrir le menu
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white/30 hover:border-white/50"
              >
                <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Réserver une table
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/20 justify-around"
            >
              <div className='flex flex-col items-center'>
                <div className="text-3xl font-bold text-accent-400 mb-1">15+</div>
                <div className="text-sm text-white/70">Années d&apos;expérience</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className="text-3xl font-bold text-accent-400 mb-1">50+</div>
                <div className="text-sm text-white/70">Plats au menu</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className="text-3xl font-bold text-accent-400 mb-1">1000+</div>
                <div className="text-sm text-white/70">Clients satisfaits</div>
              </div>
            </motion.div>
          </div>

          {/* Image principale avec animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Card plat principal */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/hero/poulet-dg.jpg"
                alt="Ndolé - Plat signature"
                width={600}
                height={700}
                priority
                className="w-full h-auto"
              />
              
              {/* Badge "Signature" */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute top-6 right-6 px-4 py-2 rounded-full bg-accent-500 text-white font-semibold shadow-lg"
              >
                Notre signature
              </motion.div>
            </motion.div>

            {/* Petite card flottante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-white shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <UtensilsCrossed className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">Des saveurs uniques</div>
                  <div className="text-sm text-neutral-600">Près de chez vous</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}