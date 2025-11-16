import { Award, Heart, Leaf, Music, Star, Users } from 'lucide-react';
import { ContactInfo, NavLink, SocialLink } from '../types';

/**
 * Informations du site
 */
export const SITE_INFO = {
  nom: 'Resto du Mboa',
  slogan: 'Saveurs authentiques de chez nous',
  description: 'Découvrez les délices de la cuisine camerounaise dans une ambiance chaleureuse et conviviale.',
} as const;

/**
 * Navigation principale
 */
export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Accueil' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'À propos' },
  { href: '/gallery', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

/**
 * Informations de contact
 */
export const CONTACT_INFO: ContactInfo = {
  adresse: '123 Avenue de la République',
  ville: 'Paris',
  codePostal: '75011',
  telephone: '+33 1 23 45 67 89',
  email: 'contact@restaurant-camerounais.fr',
  horaires: [
    {
      jours: 'Lundi - Vendredi',
      heures: '12h00 - 14h30 • 19h00 - 23h00',
    },
    {
      jours: 'Samedi - Dimanche',
      heures: '12h00 - 23h00',
    },
  ],
};

/**
 * Réseaux sociaux
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/restaurant-camerounais',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/restaurant-camerounais',
    icon: 'instagram',
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@restaurant-camerounais',
    icon: 'video',
  },
];

/**
 * Catégories du menu
 */
export const MENU_CATEGORIES = {
  entrees: {
    id: 'entrees',
    titre: 'Entrées',
    description: 'Pour bien commencer votre repas',
  },
  'plats-principaux': {
    id: 'plats-principaux',
    titre: 'Plats Principaux',
    description: 'Nos spécialités traditionnelles',
  },
  accompagnements: {
    id: 'accompagnements',
    titre: 'Accompagnements',
    description: 'Pour compléter votre plat',
  },
  desserts: {
    id: 'desserts',
    titre: 'Desserts',
    description: 'Une touche sucrée pour terminer',
  },
  boissons: {
    id: 'boissons',
    titre: 'Boissons',
    description: 'Boissons traditionnelles et modernes',
  },
} as const;

/**
 * Valeurs et points forts du restaurant
 */
export const RESTAURANT_FEATURES = [
  {
    titre: 'Cuisine Authentique',
    description: 'Recettes traditionnelles transmises de génération en génération',
    icon: Heart,
  },
  {
    titre: 'Ingrédients Frais',
    description: 'Produits importés directement d\'Afrique et marché local',
    icon: Leaf,
  },
  {
    titre: 'Ambiance Chaleureuse',
    description: 'Décor africain authentique et musique traditionnelle',
    icon: Music,
  },
  {
    titre: 'Service Attentionné',
    description: 'Notre équipe aux petits soins pour votre satisfaction',
    icon: Star,
  },
  {
      icon: Award,
      titre: 'Authenticité',
      description: 'Recettes traditionnelles respectées à la lettre',
    },
    {
      icon: Users,
      titre: 'Famille',
      description: 'Une ambiance chaleureuse comme à la maison',
    },
] as const;