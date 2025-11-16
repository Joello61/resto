'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'plats' | 'restaurant' | 'evenements'>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all' as const, label: 'Toutes les photos' },
    { id: 'plats' as const, label: 'Nos Plats' },
    { id: 'restaurant' as const, label: 'Le Restaurant' },
    { id: 'evenements' as const, label: 'Événements' },
  ];

  const images = [
    { id: 1, src: '/images/gallery/plat-1.jpg', alt: 'Ndolé traditionnel', category: 'plats' },
    { id: 2, src: '/images/gallery/plat-2.jpg', alt: 'Poulet DG', category: 'plats' },
    { id: 3, src: '/images/gallery/restaurant-1.jpg', alt: 'Salle principale', category: 'restaurant' },
    { id: 4, src: '/images/gallery/plat-3.jpg', alt: 'Eru avec plantain', category: 'plats' },
    { id: 5, src: '/images/gallery/event-1.jpg', alt: 'Soirée culturelle', category: 'evenements' },
    { id: 6, src: '/images/gallery/plat-4.jpg', alt: 'Assortiment de desserts', category: 'plats' },
    { id: 7, src: '/images/gallery/restaurant-2.jpg', alt: 'Décoration africaine', category: 'restaurant' },
    { id: 8, src: '/images/gallery/plat-5.jpg', alt: 'Poisson braisé', category: 'plats' },
    { id: 10, src: '/images/gallery/plat-6.jpg', alt: 'Sauce gombo', category: 'plats' },
    { id: 12, src: '/images/gallery/plat-7.jpg', alt: 'Beignets haricot', category: 'plats' },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[prevIndex]?.id || null);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex]?.id || null);
    }
  };

  const selectedImageData = images.find(img => img.id === selectedImage);

  return (
    <div className="min-h-screen bg-neutral-50">
      
      {/* Hero */}
      <section className="relative bg-secondary-900 text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Camera className="h-4 w-4 text-accent-400" />
              <span className="text-sm font-semibold text-accent-400">Notre Galerie</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white/90">
              En images
            </h1>
            <p className="text-xl text-white/80">
              Découvrez notre univers à travers nos photos : plats savoureux, 
              ambiance chaleureuse et moments partagés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <section className="sticky top-[88px] z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-4">
        <div className="container-custom">
          <div className="flex gap-3 justify-center flex-wrap">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all
                  ${selectedCategory === category.id 
                    ? 'bg-primary-500 text-white shadow-lg scale-105' 
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }
                `}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille d'images */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(image.id)}
                  className="relative aspect-square cursor-pointer rounded-lg overflow-hidden group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 via-secondary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-medium text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Camera className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-500">Aucune image dans cette catégorie</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>

            {/* Navigation buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[80vh]"
            >
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
                quality={95}
              />
              
              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg"
              >
                <p className="text-white text-lg font-medium">{selectedImageData.alt}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}