'use client';

import { useState } from 'react';
import dynamic from "next/dynamic";
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/src/lib/constants';
import { ReservationFormValues, reservationSchema } from '@/src/lib/validations/contact-schema';

const Map = dynamic(() => import("@/src/components/map"), { ssr: false });

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Reservation data:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: CONTACT_INFO.telephone,
      link: `tel:${CONTACT_INFO.telephone}`,
      description: 'Appelez-nous directement',
    },
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
      description: 'Écrivez-nous un message',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: `${CONTACT_INFO.adresse}, ${CONTACT_INFO.codePostal} ${CONTACT_INFO.ville}`,
      link: `https://maps.google.com/?q=${CONTACT_INFO.adresse}`,
      description: 'Venez nous rendre visite',
    },
  ];

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
              <Phone className="h-4 w-4 text-accent-400" />
              <span className="text-sm font-semibold text-accent-400">Contactez-nous</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white/90">
              Réservez votre table
            </h1>
            <p className="text-xl text-white/80">
              Nous sommes impatients de vous accueillir et de vous faire découvrir 
              nos saveurs authentiques. Réservez dès maintenant !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulaire et Infos */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Formulaire de réservation */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-6">
                  Formulaire de réservation
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6"
                    >
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      Réservation confirmée !
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Nous avons bien reçu votre demande de réservation. 
                      Nous vous contacterons sous peu pour la confirmer.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Faire une nouvelle réservation
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Nom complet"
                        placeholder="Jean Dupont"
                        {...register('nom')}
                        error={errors.nom?.message}
                        required
                      />

                      <Input
                        label="Email"
                        type="email"
                        placeholder="jean@example.com"
                        {...register('email')}
                        error={errors.email?.message}
                        required
                      />
                    </div>

                    <Input
                      label="Téléphone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      {...register('telephone')}
                      error={errors.telephone?.message}
                      required
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Date"
                        type="date"
                        {...register('date')}
                        error={errors.date?.message}
                        required
                      />

                      <Input
                        label="Heure"
                        type="time"
                        {...register('heure')}
                        error={errors.heure?.message}
                        required
                      />
                    </div>

                    <Input
                      label="Nombre de personnes"
                      type="number"
                      min="1"
                      max="20"
                      defaultValue="2"
                      {...register('nombrePersonnes', { valueAsNumber: true })}
                      error={errors.nombrePersonnes?.message}
                      required
                    />

                    <Textarea
                      label="Demande spéciale (optionnel)"
                      placeholder="Allergies, occasion spéciale, préférences..."
                      rows={4}
                      {...register('messageSpecial')}
                      error={errors.messageSpecial?.message}
                    />

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Réserver maintenant
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Informations de contact */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Méthodes de contact */}
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target={method.icon === MapPin ? '_blank' : undefined}
                    rel={method.icon === MapPin ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -5 }}
                    className="flex gap-4 p-6 rounded-xl bg-white hover:bg-primary-50 border border-neutral-200 hover:border-primary-500 transition-all shadow-md hover:shadow-lg group"
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center transition-colors">
                      <Icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">{method.title}</h3>
                      <p className="text-sm text-neutral-600 mb-1">{method.description}</p>
                      <p className="text-primary-600 font-medium text-sm">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Horaires */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-xl bg-accent-50 border border-accent-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-accent-500 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-secondary-900 text-lg">Horaires</h3>
                </div>
                
                <div className="space-y-3">
                  {CONTACT_INFO.horaires.map((horaire, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-secondary-900">{horaire.jours}</span>
                      <span className="text-neutral-600 text-sm">{horaire.heures}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-accent-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-xs font-semibold text-green-700">Ouvert maintenant</span>
                  </div>
                </div>
              </motion.div>

              {/* Réseaux sociaux */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-xl bg-white border border-neutral-200"
              >
                <h3 className="font-semibold text-secondary-900 mb-4">Suivez-nous</h3>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon === 'instagram' ? Instagram : Facebook;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-lg bg-neutral-100 hover:bg-primary-500 flex items-center justify-center transition-all group"
                      >
                        <Icon className="h-5 w-5 text-neutral-600 group-hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* Map (optionnel - placeholder) */}
      <section className="h-96 bg-neutral-200">
        <div className="h-full flex items-center justify-center text-neutral-500">
          <Map lat={48.8566} lng={2.3522} />
        </div>
      </section>

    </div>
  );
}