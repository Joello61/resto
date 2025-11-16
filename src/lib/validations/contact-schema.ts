import { z } from 'zod';

/**
 * Schéma de validation pour le formulaire de contact
 */
export const contactSchema = z.object({
  nom: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  
  email: z
    .string()
    .email('Adresse email invalide')
    .min(1, 'L\'email est requis'),
  
  telephone: z
    .string()
    .regex(
      /^(\+33|0)[1-9](\s?\d{2}){4}$/,
      'Numéro de téléphone invalide (ex: 06 12 34 56 78 ou +33 6 12 34 56 78)'
    ),
  
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

/**
 * Schéma de validation pour le formulaire de réservation
 */
export const reservationSchema = z.object({
  nom: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  
  email: z
    .string()
    .email('Adresse email invalide')
    .min(1, 'L\'email est requis'),
  
  telephone: z
    .string()
    .regex(
      /^(\+33|0)[1-9](\s?\d{2}){4}$/,
      'Numéro de téléphone invalide'
    ),
  
  date: z
    .string()
    .min(1, 'La date est requise')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'La date doit être aujourd\'hui ou dans le futur'),
  
  heure: z
    .string()
    .min(1, 'L\'heure est requise')
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Format d\'heure invalide (HH:MM)'),
  
  nombrePersonnes: z
    .number()
    .min(1, 'Au moins 1 personne')
    .max(20, 'Maximum 20 personnes par réservation'),
  
  messageSpecial: z
    .string()
    .max(500, 'Le message ne peut pas dépasser 500 caractères')
    .optional(),
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;