/**
 * Types communs utilisés dans toute l'application
 */

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  categorie?: 'plats' | 'restaurant' | 'evenements';
};

export type Testimonial = {
  id: string;
  nom: string;
  avatar?: string;
  note: number;
  commentaire: string;
  date: string;
};