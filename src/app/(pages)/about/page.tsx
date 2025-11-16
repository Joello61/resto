'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { RESTAURANT_FEATURES } from '@/src/lib/constants';

export default function AboutPage() {
  const values = RESTAURANT_FEATURES;

  const timeline = [
    { year: '2010', event: 'Ouverture du restaurant avec 20 places assises' },
    { year: '2013', event: 'Agrandissement et nouvelle salle de 50 places' },
    { year: '2016', event: 'Prix du meilleur restaurant africain de Paris' },
    { year: '2019', event: 'Lancement du service de livraison' },
    { year: '2023', event: 'Rénovation complète et nouveau menu' },
  ];

  const team = [
    {
      name: 'Marie Nkeng',
      role: 'Chef Cuisinière',
      image: '/images/team/chef-marie.jpg',
      description: '25 ans d\'expérience en cuisine traditionnelle',
    },
    {
      name: 'Paul Mballa',
      role: 'Chef Pâtissier',
      image: '/images/team/chef-paul.jpg',
      description: 'Spécialiste des desserts africains',
    },
    {
      name: 'Grace Fotso',
      role: 'Responsable de Salle',
      image: '/images/team/grace.jpg',
      description: 'L\'âme de notre accueil chaleureux',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      
      {/* Hero */}
      <section className="relative bg-secondary-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/restaurant-story.jpg"
            alt="Notre histoire"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 to-secondary-900" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Heart className="h-4 w-4 text-accent-400" />
              <span className="text-sm font-semibold text-accent-400">Notre Histoire</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white/90">
              Plus qu&apos;un restaurant, une famille
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Depuis 2010, nous partageons notre passion pour la cuisine camerounaise 
              avec les gourmets parisiens. Chaque plat raconte une histoire, 
              chaque saveur évoque un souvenir du pays.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-6">
                Comment tout a commencé
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p className="text-lg">
                  Tout a commencé dans une petite cuisine de 15m² à Yaoundé, où notre grand-mère 
                  préparait les meilleurs plats du quartier. Ces recettes, transmises avec amour, 
                  sont devenues le cœur de notre restaurant.
                </p>
                <p>
                  En 2010, armés de passion et de quelques économies, nous avons ouvert les portes 
                  de notre premier restaurant à Paris. L&apos;objectif était simple : partager l&apos;authenticité 
                  de la cuisine camerounaise avec le monde entier.
                </p>
                <p>
                  Aujourd&apos;hui, plus de 15 ans plus tard, nous continuons à servir ces mêmes recettes 
                  traditionnelles, préparées avec les mêmes ingrédients importés du Cameroun, 
                  et surtout, avec le même amour.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/images/about/founders.jpg"
                alt="Les fondateurs"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Ce qui guide notre cuisine et notre service au quotidien
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.titre}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="h-16 w-16 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {value.titre}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Notre parcours
            </h2>
            <p className="text-lg text-neutral-600">
              15 ans d&apos;aventure culinaire
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-primary-200" />
                )}
                
                {/* Dot */}
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-primary-500 border-4 border-white shadow-lg" />
                
                {/* Content */}
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {item.year}
                  </div>
                  <p className="text-neutral-700">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-secondary-900 mb-4">
              Notre équipe
            </h2>
            <p className="text-lg text-neutral-600">
              Les artistes derrière vos plats préférés
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-600">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary-900 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '15+', label: 'Années d\'expérience' },
              { value: '50+', label: 'Plats au menu' },
              { value: '10K+', label: 'Clients par an' },
              { value: '4.9/5', label: 'Note moyenne' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-accent-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}