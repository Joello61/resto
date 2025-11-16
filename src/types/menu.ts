/**
 * Types pour le système de menu du restaurant
 */

export type MenuCategory = 
  | 'entrees' 
  | 'plats-principaux' 
  | 'accompagnements' 
  | 'desserts' 
  | 'boissons';

export type MenuItem = {
  id: string;
  nom: string;
  description: string;
  prix: number;
  image: string;
  categorie: MenuCategory;
  badge?: string;
  badgeVariant?: 'primary' | 'secondary' | 'accent' | 'success';
  ingredients?: string[];
  allergenes?: string[];
  vegetarien?: boolean;
  epice?: 'doux' | 'moyen' | 'fort';
  disponible?: boolean;
};

export type MenuSection = {
  categorie: MenuCategory;
  titre: string;
  description?: string;
  plats: MenuItem[];
};