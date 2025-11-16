'use client';

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="section-spacing bg-neutral-50">
      <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Prêt à découvrir ces saveurs ?
            </h2>
            <p className="text-whprimaryite/80 text-lg mb-8">
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
  );
}