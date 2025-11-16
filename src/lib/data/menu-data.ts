import { MenuItem, MenuSection } from "@/src/types";

export const menuItems: MenuItem[] = [
  // Entrées
  {
    id: 'entree-1',
    nom: 'Beignets Haricot',
    description: 'Beignets croustillants de haricots rouges, servis avec une sauce pimentée maison',
    prix: 2500,
    image: '/images/menu/beignets-haricot.jpg',
    categorie: 'entrees',
    badge: 'Populaire',
    badgeVariant: 'primary',
    vegetarien: true,
    epice: 'moyen',
    disponible: true,
  },
  {
    id: 'entree-2',
    nom: 'Accras de Poisson',
    description: 'Beignets de poisson épicés, frits à la perfection',
    prix: 3000,
    image: '/images/menu/accras.jpg',
    categorie: 'entrees',
    epice: 'fort',
    disponible: true,
  },
  {
    id: 'entree-3',
    nom: 'Salade Africaine',
    description: 'Mélange de légumes frais, avocats et tomates, vinaigrette au citron',
    prix: 2000,
    image: '/images/menu/salade.jpg',
    categorie: 'entrees',
    vegetarien: true,
    epice: 'doux',
    disponible: true,
  },

  // Plats principaux
  {
    id: 'plat-1',
    nom: 'Ndolé',
    description: 'Feuilles de ndolé cuites avec des arachides, du poisson fumé et des crevettes',
    prix: 5500,
    image: '/images/menu/ndole.jpg',
    categorie: 'plats-principaux',
    badge: 'Spécialité',
    badgeVariant: 'accent',
    epice: 'moyen',
    disponible: true,
  },
  {
    id: 'plat-2',
    nom: 'Eru',
    description: 'Légume traditionnel cuit avec du poisson, de la viande et des épices',
    prix: 4500,
    image: '/images/menu/eru.jpg',
    categorie: 'plats-principaux',
    badge: 'Populaire',
    badgeVariant: 'primary',
    epice: 'doux',
    disponible: true,
  },
  {
    id: 'plat-3',
    nom: 'Poulet DG',
    description: 'Poulet sauté avec légumes variés et plantain mûr',
    prix: 6000,
    image: '/images/menu/poulet-dg.jpg',
    categorie: 'plats-principaux',
    badge: 'Best-seller',
    badgeVariant: 'success',
    epice: 'moyen',
    disponible: true,
  },
  {
    id: 'plat-4',
    nom: 'Koki de Haricot',
    description: 'Gâteau de haricots cuit à la vapeur dans des feuilles de bananier',
    prix: 4000,
    image: '/images/menu/koki.jpg',
    categorie: 'plats-principaux',
    vegetarien: true,
    epice: 'doux',
    disponible: true,
  },
  {
    id: 'plat-5',
    nom: 'Poisson Braisé',
    description: 'Poisson entier grillé et mariné aux épices africaines',
    prix: 7000,
    image: '/images/menu/poisson-braise.jpg',
    categorie: 'plats-principaux',
    epice: 'fort',
    disponible: true,
  },
  {
    id: 'plat-6',
    nom: 'Sauce Gombo',
    description: 'Sauce épaisse au gombo, viande et poisson fumé',
    prix: 5000,
    image: '/images/menu/sauce-gombo.jpg',
    categorie: 'plats-principaux',
    epice: 'moyen',
    disponible: true,
  },

  // Accompagnements
  {
    id: 'accomp-1',
    nom: 'Plantain Frit',
    description: 'Tranches de plantain mûr frites',
    prix: 1500,
    image: '/images/menu/plantain.jpg',
    categorie: 'accompagnements',
    vegetarien: true,
    disponible: true,
  },
  {
    id: 'accomp-2',
    nom: 'Manioc Frit',
    description: 'Bâtonnets de manioc frits croustillants',
    prix: 1500,
    image: '/images/menu/manioc.jpg',
    categorie: 'accompagnements',
    vegetarien: true,
    disponible: true,
  },
  {
    id: 'accomp-3',
    nom: 'Riz Jollof',
    description: 'Riz cuit dans une sauce tomate épicée',
    prix: 2000,
    image: '/images/menu/riz-jollof.jpg',
    categorie: 'accompagnements',
    vegetarien: true,
    epice: 'moyen',
    disponible: true,
  },

  // Desserts
  {
    id: 'dessert-1',
    nom: 'Beignets Banane',
    description: 'Beignets moelleux à la banane plantain',
    prix: 2000,
    image: '/images/menu/beignets-banane.jpg',
    categorie: 'desserts',
    vegetarien: true,
    disponible: true,
  },
  {
    id: 'dessert-2',
    nom: 'Gâteau Papaye',
    description: 'Gâteau tropical à la papaye fraîche',
    prix: 2500,
    image: '/images/menu/gateau-papaye.jpg',
    categorie: 'desserts',
    vegetarien: true,
    disponible: true,
  },

  // Boissons
  {
    id: 'boisson-1',
    nom: 'Jus de Bissap',
    description: 'Boisson traditionnelle à base d\'hibiscus',
    prix: 1500,
    image: '/images/menu/bissap.jpg',
    categorie: 'boissons',
    vegetarien: true,
    disponible: true,
  },
  {
    id: 'boisson-2',
    nom: 'Jus de Gingembre',
    description: 'Jus de gingembre frais, légèrement sucré',
    prix: 1500,
    image: '/images/menu/gingembre.jpg',
    categorie: 'boissons',
    vegetarien: true,
    disponible: true,
  },
  {
    id: 'boisson-3',
    nom: 'Jus de Bouye',
    description: 'Jus de fruit de baobab, riche en vitamine C',
    prix: 2000,
    image: '/images/menu/bouye.jpg',
    categorie: 'boissons',
    vegetarien: true,
    disponible: true,
  },
];

/**
 * Récupère les items d'une catégorie spécifique
 */
export function getMenuByCategory(category: string): MenuItem[] {
  return menuItems.filter((item) => item.categorie === category);
}

/**
 * Récupère un item par son ID
 */
export function getMenuItemById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}

/**
 * Récupère tous les items avec un badge spécifique
 */
export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter((item) => item.badge);
}

/**
 * Organise les items par section
 */
export function getMenuSections(): MenuSection[] {
  const categories = ['entrees', 'plats-principaux', 'accompagnements', 'desserts', 'boissons'] as const;
  
  return categories.map((categorie) => ({
    categorie,
    titre: categorie === 'plats-principaux' ? 'Plats Principaux' : 
           categorie.charAt(0).toUpperCase() + categorie.slice(1),
    plats: getMenuByCategory(categorie),
  }));
}