/**
 * Types pour le formulaire de contact et réservation
 */

export type ContactFormData = {
  nom: string;
  email: string;
  telephone: string;
  message: string;
};

export type ReservationFormData = {
  nom: string;
  email: string;
  telephone: string;
  date: string;
  heure: string;
  nombrePersonnes: number;
  messageSpecial?: string;
};

export type ContactInfo = {
  adresse: string;
  ville: string;
  codePostal: string;
  telephone: string;
  email: string;
  horaires: {
    jours: string;
    heures: string;
  }[];
};