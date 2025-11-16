'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Leaf, Flame } from 'lucide-react';
import { Card, CardImage, CardContent, CardHeader, CardDescription, CardFooter } from '@/src/components/ui/card';
import { MENU_CATEGORIES } from '@/src/lib/constants';
import { getMenuSections } from '@/src/lib/data/menu-data';
import { formatPrice } from '@/src/lib/utils';
import { MenuCategory } from '@/src/types';
import { Badge } from '@/src/components/ui/badge';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const sections = getMenuSections();

  const categories: Array<{ id: MenuCategory | 'all'; label: string; icon: typeof UtensilsCrossed }> = [
    { id: 'all', label: 'Tous les plats', icon: UtensilsCrossed },
    { id: 'entrees', label: 'Entrées', icon: UtensilsCrossed },
    { id: 'plats-principaux', label: 'Plats Principaux', icon: UtensilsCrossed },
    { id: 'accompagnements', label: 'Accompagnements', icon: UtensilsCrossed },
    { id: 'desserts', label: 'Desserts', icon: UtensilsCrossed },
    { id: 'boissons', label: 'Boissons', icon: UtensilsCrossed },
  ];

  const filteredSections = activeCategory === 'all' 
    ? sections 
    : sections.filter(section => section.categorie === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-50">
      
      {/* Hero Header */}
      <section className="relative bg-secondary-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
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
              <UtensilsCrossed className="h-4 w-4 text-accent-400" />
              <span className="text-sm font-semibold text-accent-400">Notre Carte</span>
            </motion.div>

            <h1 className="text-white/90 text-5xl md:text-6xl font-heading font-bold mb-6">
              Découvrez nos saveurs
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Une sélection de plats traditionnels camerounais préparés avec passion 
              et des ingrédients authentiques importés directement d&apos;Afrique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <section className="sticky top-[88px] z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-4">
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all
                    ${activeCategory === category.id 
                      ? 'bg-primary-500 text-white shadow-lg scale-105' 
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-spacing">
        <div className="container-custom">
          {filteredSections.map((section) => (
            <div key={section.categorie} className="mb-20 last:mb-0">
              
              {/* Titre de section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-3">
                  {section.titre}
                </h2>
                {MENU_CATEGORIES[section.categorie] && (
                  <p className="text-neutral-600 text-lg">
                    {MENU_CATEGORIES[section.categorie].description}
                  </p>
                )}
              </motion.div>

              {/* Grille de plats */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {section.plats.map((plat, index) => (
                  <motion.div
                    key={plat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card hover className="group h-full">
                      <CardImage src={plat.image} alt={plat.nom} />
                      
                      <CardContent>
                        <CardHeader 
                          title={plat.nom}
                          badge={plat.badge}
                          badgeVariant={plat.badgeVariant}
                        />
                        
                        <CardDescription>
                          {plat.description}
                        </CardDescription>

                        {/* Indicateurs */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {plat.vegetarien && (
                            <Badge variant="success" className="flex items-center gap-1">
                              <Leaf className="h-3 w-3" />
                              Végétarien
                            </Badge>
                          )}
                          {plat.epice && (
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Flame className="h-3 w-3" />
                              {plat.epice === 'doux' && 'Épicé doux'}
                              {plat.epice === 'moyen' && 'Épicé moyen'}
                              {plat.epice === 'fort' && 'Épicé fort'}
                            </Badge>
                          )}
                          {!plat.disponible && (
                            <Badge variant="neutral">
                              Indisponible
                            </Badge>
                          )}
                        </div>

                        <CardFooter>
                          <span className="text-3xl font-bold text-primary-600">
                            {formatPrice(plat.prix)}
                          </span>
                        </CardFooter>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-secondary-900 py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Prêt à découvrir ces saveurs ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Réservez votre table dès maintenant et laissez-vous transporter
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all bg-primary-500 text-white hover:bg-primary-600 shadow-xl"
            >
              Réserver une table
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}