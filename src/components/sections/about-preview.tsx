'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { RESTAURANT_FEATURES } from '@/src/lib/constants';

export function AboutPreview() {
  const features = RESTAURANT_FEATURES;

  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-custom">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image principale */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about/chef-cooking.jpg"
                alt="Notre chef en cuisine"
                width={600}
                height={700}
                className="w-full h-auto"
                priority
              />
            </motion.div>

            {/* Card flottante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5, rotate: 2 }}
              className="absolute -bottom-8 -right-8 p-6 rounded-2xl bg-white shadow-xl max-w-xs border-t-4 border-primary-500"
            >
              <div className="text-5xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-secondary-900 font-semibold mb-1">Années d&apos;Excellence</div>
              <div className="text-sm text-neutral-600">
                Au service de la gastronomie africaine
              </div>
            </motion.div>

            {/* Motif décoratif */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-10 -left-10 w-32 h-32 border-4 border-accent-500/20 rounded-full"
            />
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 mb-6"
            >
              <Heart className="h-4 w-4" />
              <span className="text-sm font-semibold">Notre Histoire</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900 mb-6">
              Une aventure culinaire familiale
            </h2>

            <div className="space-y-4 text-neutral-700 leading-relaxed mb-8">
              <p className="text-lg">
                Depuis plus de 15 ans, nous partageons notre passion pour la cuisine camerounaise 
                avec les gourmets parisiens. Chaque plat raconte une histoire, chaque saveur 
                évoque un souvenir.
              </p>
              <p>
                Notre restaurant est né du rêve de faire découvrir les trésors culinaires du Cameroun. 
                Aujourd&apos;hui, nous sommes fiers d&apos;être une référence de la gastronomie africaine, 
                tout en gardant l&apos;esprit familial qui nous caractérise.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.titre}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                      <Icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">{feature.titre}</h3>
                      <p className="text-sm text-neutral-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl"
              >
                En savoir plus sur nous
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-12 border-t border-neutral-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Plats au menu' },
              { value: '1000+', label: 'Clients par mois' },
              { value: '4.9/5', label: 'Note moyenne' },
              { value: '100%', label: 'Fait maison' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}