'use client';

import Link from 'next/link';
import { easeOut, motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getFeaturedItems } from '@/src/lib/data/menu-data';
import { formatPrice } from '@/src/lib/utils';
import { Card, CardImage, CardContent, CardHeader, CardDescription, CardFooter } from '../ui/card';

export function MenuPreview() {
  const featuredItems = getFeaturedItems().slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="section-spacing bg-neutral-50">
      <div className="container-custom">
        
        {/* En-tête de section */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-4"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Nos Spécialités</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900 mb-4">
            Découvrez nos plats signatures
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Des recettes traditionnelles transmises de génération en génération, 
            préparées avec des ingrédients authentiques et beaucoup d&apos;amour.
          </p>
        </motion.div>

        {/* Grille de plats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"
        >
          {featuredItems.map((plat) => (
            <motion.div
              key={plat.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card hover className="group h-full">
                <div className="relative overflow-hidden">
                  <CardImage src={plat.image} alt={plat.nom} />
                  
                  {/* Overlay au hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-secondary-900/60 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-white text-center px-6"
                    >
                      <p className="text-sm font-medium">Cliquez pour en savoir plus</p>
                    </motion.div>
                  </motion.div>
                </div>

                <CardContent>
                  <CardHeader 
                    title={plat.nom}
                    badge={plat.badge}
                    badgeVariant={plat.badgeVariant}
                  />
                  <CardDescription className="line-clamp-2">
                    {plat.description}
                  </CardDescription>

                  {/* Indicateurs */}
                  <div className="flex gap-2 mt-4">
                    {plat.vegetarien && (
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                        Végétarien
                      </span>
                    )}
                    {plat.epice && (
                      <span className="text-xs px-2 py-1 rounded-full bg-error/10 text-error font-medium">
                        {plat.epice === 'doux' && '🌶️ Doux'}
                        {plat.epice === 'moyen' && '🌶️🌶️ Moyen'}
                        {plat.epice === 'fort' && '🌶️🌶️🌶️ Fort'}
                      </span>
                    )}
                  </div>

                  <CardFooter>
                    <motion.span
                      className="text-3xl font-bold text-primary-600"
                      whileHover={{ scale: 1.05 }}
                    >
                      {formatPrice(plat.prix)}
                    </motion.span>
                    <Link
                      href={`/menu#${plat.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all bg-primary-500 text-white hover:bg-primary-600"
                    >
                      Voir détails
                    </Link>
                  </CardFooter>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all bg-secondary-900 text-white hover:bg-secondary-800 shadow-lg hover:shadow-xl"
          >
            Voir tout le menu
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}