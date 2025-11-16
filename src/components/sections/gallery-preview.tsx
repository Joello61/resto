'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Instagram } from 'lucide-react';

export function GalleryPreview() {
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/plat-1.jpg',
      alt: 'Ndolé traditionnel',
      category: 'Plats',
      span: 'col-span-2 row-span-2', // Grande image
    },
    {
      id: 2,
      src: '/images/gallery/restaurant-1.jpg',
      alt: 'Ambiance du restaurant',
      category: 'Restaurant',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 3,
      src: '/images/gallery/plat-2.jpg',
      alt: 'Poulet DG',
      category: 'Plats',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 4,
      src: '/images/gallery/plat-3.jpg',
      alt: 'Eru avec accompagnements',
      category: 'Plats',
      span: 'col-span-1 row-span-2',
    },
    {
      id: 5,
      src: '/images/gallery/event-1.jpg',
      alt: 'Soirée culturelle',
      category: 'Événements',
      span: 'col-span-1 row-span-1',
    },
    {
      id: 6,
      src: '/images/gallery/plat-4.jpg',
      alt: 'Desserts maison',
      category: 'Plats',
      span: 'col-span-1 row-span-1',
    },
  ];

  return (
    <section className="section-spacing bg-secondary-900 relative overflow-hidden">
      
      {/* Motif décoratif */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-500 blur-3xl"
      />

      <div className="container-custom relative z-10">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-4"
          >
            <Camera className="h-4 w-4" />
            <span className="text-sm font-semibold">Notre Galerie</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Une expérience en images
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Plongez dans l&apos;univers coloré et savoureux de notre restaurant. 
            Découvrez nos plats, notre ambiance et nos moments partagés.
          </p>
        </motion.div>

        {/* Grille Masonry */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`relative group cursor-pointer rounded-xl overflow-hidden ${image.span}`}
            >
              {/* Image */}
              <div className="relative w-full h-full min-h-[200px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                
                {/* Overlay au hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/50 to-transparent flex flex-col justify-end p-6"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-medium">{image.alt}</p>
                  </motion.div>
                </motion.div>

                {/* Icône Instagram au hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4"
                >
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA et réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Suivez-nous sur Instagram
            </h3>
            <p className="text-white/70">
              Rejoignez notre communauté et partagez vos moments gourmands avec #RestaurantCamerounais
            </p>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="https://instagram.com/restaurant-camerounais"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all bg-white text-secondary-900 hover:bg-neutral-100 shadow-lg"
            >
              <Instagram className="h-5 w-5" />
              Suivre
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all bg-primary-500 text-white hover:bg-primary-600 shadow-lg"
              >
                Toute la galerie
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Témoignages visuels (optionnel) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <span className="text-2xl text-accent-400">★</span>
              </motion.div>
            ))}
          </div>
          <p className="text-white/80 text-lg">
            <span className="font-bold text-accent-400">4.9/5</span> sur Google • Plus de 500 avis
          </p>
        </motion.div>

      </div>
    </section>
  );
}