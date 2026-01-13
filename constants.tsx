
import { Page, ServiceCardProps } from './types';

export const COLORS = {
  primary: '#000000',
  secondary: '#FFFFFF',
  accent: '#c9a24d',
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/by_nexalli?igsh=c2lmdW15d3BqODQ=",
  youtube: "https://youtube.com/@novacreationbynexalli?si=RSwa7WUMWInwDw_i",
  tiktok: "https://www.tiktok.com/@nbynexalli?_r=1&_t=ZN-931A04EUdCY",
  facebook: "https://www.facebook.com/share/1D6j3goT3p/",
  whatsapp: "https://api.whatsapp.com/send/?phone=33768859792&text&type=phone_number&app_absent=0"
};

export interface ProductProps extends ServiceCardProps {
  objective?: string;
  points: string[];
  imageUrl: string;
  priceInfo?: string;
  delay?: string;
}

export const WEB_PRODUCTS: ProductProps[] = [
  {
    title: "1. Site vitrine professionnel (WordPress)",
    description: "Un site clair, complet, professionnel et adapté à votre activité.",
    points: ["5 à 7 pages", "Design moderne & Responsive", "Installation sécurité", "Emails professionnels"],
    icon: "fa-desktop",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    priceInfo: "Asso : dès 500 € | Ent. : dès 790 €",
    delay: "7 à 12 jours"
  },
  {
    title: "2. Site e-commerce (WooCommerce)",
    description: "Votre boutique commerciale complète et adaptée à votre activité.",
    points: ["10 à 15 pages", "Paiement & Facturation", "Gestion des produits", "Emails automatisés"],
    icon: "fa-cart-shopping",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    priceInfo: "Asso : dès 850 € | Ent. : dès 1 200 €",
    delay: "14 à 21 jours"
  },
  {
    title: "3. Site web “One Page” professionnel",
    description: "Un site web clair et rapide en une seule page (chemin de vente).",
    points: ["1 page optimisée", "Formulaire de contact", "Adapté mobile", "Vitesse fulgurante"],
    icon: "fa-bolt",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bbda48652ad8?q=80&w=1000&auto=format&fit=crop",
    priceInfo: "Asso : 300 € | Ent. : 450 €",
    delay: "48 à 72h"
  },
  {
    title: "4. Site web rapide (Express)",
    description: "Inclus petite page vitrine (2 à 4 sections), design simple et propre.",
    points: ["Design propre", "Hébergement possible", "Maintenance optionnelle", "Idéal petit budget"],
    icon: "fa-rocket",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    priceInfo: "Asso : dès 500 € | Ent. : dès 790 €",
    delay: "7 à 12 jours"
  }
];

export const WEB_OPTIONS: ProductProps[] = [
  {
    title: "1. Refonte de site internet",
    description: "Modernisation complète et correction technique de votre site actuel.",
    points: ["Nouveau Design", "Migration technique", "Hébergement fiable", "Optimisation UX"],
    icon: "fa-arrows-rotate",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1581291518655-950393b7418c?q=80&w=1000&auto=format&fit=crop",
    priceInfo: "Asso : dès 350 € | Ent. : dès 500 €",
    delay: "5 à 10 jours"
  },
  {
    title: "2. L'hébergement & la maintenance",
    description: "Votre nom de domaine et serveurs fiables à moindre coût.",
    points: ["Partenaire Gringer", "Certificat SSL inclus", "Infogérance technique", "Idéal WordPress"],
    icon: "fa-server",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000&auto=format&fit=crop",
    priceInfo: "Selon formule Gringer",
    delay: "24h/48h"
  },
  {
    title: "3. Maintenance Nexalli + Gringer",
    description: "Mises à jour, sauvegardes et sécurité renforcée (recommandé).",
    points: ["Mises à jour WordPress", "Sauvegardes régulières", "Support technique", "Sécurité active"],
    icon: "fa-shield-halved",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    priceInfo: "30 € / mois",
    delay: "Récurrence Mensuelle"
  },
  {
    title: "4. Quelques options supplémentaires",
    description: "Services sur demande pour booster votre croissance.",
    points: ["Rédaction SEO (10-30€)", "Page sup (40-60€)", "Optimisation SEO (120€)", "Blog (40€)"],
    icon: "fa-plus-circle",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    priceInfo: "Sur devis",
    delay: "Sur demande"
  }
];

export const TRAINING_PRODUCTS: any[] = []; // Gardé pour compatibilité de structure

export const NAV_ITEMS = [
  { id: Page.Home, label: 'Accueil', icon: 'fa-house' },
  { id: Page.Services, label: 'Services', icon: 'fa-layer-group' },
  { id: Page.Training, label: 'Formations', icon: 'fa-book' },
  { id: Page.Events, label: 'Événements', icon: 'fa-calendar-star' },
  { id: Page.WebDev, label: 'Web', icon: 'fa-code' },
  { id: Page.Branding, label: 'Branding', icon: 'fa-pen-nib' },
  { id: Page.SocialMedia, label: 'Social', icon: 'fa-share-nodes' },
  { id: Page.Contact, label: 'Contact', icon: 'fa-envelope' },
];
