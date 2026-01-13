
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

export const FORMATIONS_PRODUCTS: ProductProps[] = [
  {
    title: "1. Gérer son activité simplement avec Excel",
    objective: "Structurer et suivre son activité sans logiciel coûteux.",
    description: "Gagner une vision claire sur ses clients, revenus et dépenses.",
    points: ["Comprendre la structure d'activité", "Vision claire Revenus/Dépenses", "Organisation durable"],
    icon: "fa-file-excel",
    link: "https://nexalli.com/produit/excel-organisation-efficace-tome-1/",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bbda48652ad8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "2. Organisation & productivité digitale",
    objective: "Mieux s’organiser et réduire la charge mentale.",
    description: "Retrouvez une organisation plus claire au quotidien.",
    points: ["Réduire la charge mentale", "Apprendre à prioriser", "Habitudes simples et efficaces"],
    icon: "fa-bolt",
    link: "https://nexalli.com/produit/organisation-productivite-digitale-tome-2/",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "3. Gérer ses réseaux sociaux avec Excel",
    objective: "Organiser sa communication sans stress.",
    description: "Arrêtez de poster au hasard et sans stratégie.",
    points: ["Quoi et quand publier", "Vision claire de présence", "Cohérence d'image en ligne"],
    icon: "fa-hashtag",
    link: "https://nexalli.com/produit/gerer-ses-reseaux-sociaux-avec-excel/",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "4. Excel facile pour débutants",
    objective: "Comprendre Excel sans peur ni complexité.",
    description: "Prenez confiance en vous en partant de zéro.",
    points: ["Zéro jargon inutile", "Progresser rapidement", "Uniquement l'utile"],
    icon: "fa-graduation-cap",
    link: "https://nexalli.com/produit/tome-4-excel-facile-pour-debutants/",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "5. Gestion d’association avec Excel",
    objective: "Simplifier la gestion associative.",
    description: "Facilitez le travail des bénévoles et la structure.",
    points: ["Gestion courante simplifiée", "Vision claire et structurée", "Gain de temps pour l'action"],
    icon: "fa-users",
    link: "https://nexalli.com/produit/excel-facile-pour-debutants/",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "6. Les bases du digital",
    objective: "Comprendre le digital sans jargon.",
    description: "Savoir par où commencer sans se disperser.",
    points: ["Pas de termes compliqués", "Éviter les erreurs courantes", "Vision rassurante"],
    icon: "fa-globe",
    link: "https://nexalli.com/produit/comprendre-le-digital/",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "7. Gérer son site WordPress seul",
    objective: "Être autonome sur son site WordPress.",
    description: "Devenez autonome sur votre site internet sans code.",
    points: ["Ne plus dépendre d'un prestataire", "Comprendre sans technique", "Économiser sur la gestion"],
    icon: "fa-wordpress",
    link: "https://nexalli.com/produit/gerer-site-wordpress-seul/",
    imageUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "8. Structurer sa communication digitale",
    objective: "Arrêter de communiquer au hasard.",
    description: "Comprendre le pourquoi, le comment et pour qui.",
    points: ["Cohérence et crédibilité", "Lien Site Web / Réseaux", "Communication sereine"],
    icon: "fa-bullhorn",
    link: "https://nexalli.com/produit/structurer-communication-digitale/",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "9. Optimiser son temps",
    objective: "Travailler mieux, pas plus.",
    description: "Installer une organisation durable et sereine.",
    points: ["Mieux organiser ses journées", "Réduire les pertes de temps", "Équilibre retrouvé"],
    icon: "fa-hourglass-half",
    link: "https://nexalli.com/produit/optimiser-temps-outils-digitaux/",
    imageUrl: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "10. Les erreurs digitales coûteuses",
    objective: "Éviter les mauvaises décisions digitales.",
    description: "Protégez votre temps et votre budget efficacement.",
    points: ["Décisions digitales sécurisées", "Comprendre les pièges", "Prendre du recul stratégique"],
    icon: "fa-shield-halved",
    link: "https://nexalli.com/produit/mauvais-outils-digitaux/",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
  }
];

export const EVENT_TYPES: ProductProps[] = [
  {
    title: "1. Événements professionnels",
    description: "Lancements, conférences et séminaires pour entreprises.",
    points: ["Lancement produit/service", "Conférences & Séminaires", "Événements internes", "Rencontres clients"],
    icon: "fa-building",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "2. Événements associatifs",
    description: "Actions citoyennes, solidaires et institutionnelles.",
    points: ["Événements solidaires", "Conférences / Débats", "Sensibilisation", "Assemblées générales"],
    icon: "fa-hand-holding-heart",
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04cb21c7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "3. Lancements de projets & marques",
    description: "Visibilité maximale pour vos nouveaux concepts.",
    points: ["Lancement de marque", "Présentation de projet", "Événements de visibilité", "Suivi Avant/Après"],
    icon: "fa-rocket",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
  }
];

export const EVENT_ENTERPRISE_PACKS: ProductProps[] = [
  {
    title: "1. Événement Essentiel – Entreprise",
    description: "L'organisation de base pour un événement réussi.",
    points: ["Analyse des objectifs", "Organisation & Planning", "Coordination générale", "Conseils communication"],
    icon: "fa-calendar-check",
    priceInfo: "À partir de 1 200 €",
    delay: "2 à 4 semaines",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1475721027187-40aeae739574?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "2. Événement Pro – Entreprise",
    description: "Accompagnement complet et présence opérationnelle.",
    points: ["Organisation complète", "Coordination prestataires", "Communication multi-supports", "Supervision Jour J"],
    icon: "fa-crown",
    priceInfo: "À partir de 2 500 €",
    delay: "3 à 6 semaines",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "3. Lancement de Projet / Marque",
    description: "Stratégie événementielle de haute volée.",
    points: ["Stratégie événementielle", "Branding événementiel", "Communication 360", "Suivi post-événement"],
    icon: "fa-gem",
    priceInfo: "Sur devis",
    delay: "Selon projet",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const EVENT_ASSOCIATION_PACKS: ProductProps[] = [
  {
    title: "1. Événement Associatif Essentiel",
    description: "Organisation simplifiée adaptée aux budgets associatifs.",
    points: ["Organisation globale", "Coordination simple", "Aide à la communication", "Suivi dédié"],
    icon: "fa-people-group",
    priceInfo: "À partir de 600 €",
    delay: "2 à 4 semaines",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "2. Événement Associatif Complet",
    description: "Prise en charge totale pour votre structure.",
    points: ["Organisation complète", "Coordination Jour J", "Communication adaptée", "Supports visuels"],
    icon: "fa-medal",
    priceInfo: "À partir de 1 000 €",
    delay: "3 à 5 semaines",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "3. Événement Solidaire / Citoyen",
    description: "Projets à impact social et subventionnés.",
    points: ["Analyse du besoin", "Projets subventionnés", "Impact social", "Expertise solidaire"],
    icon: "fa-earth-africa",
    priceInfo: "Sur devis (budget asso)",
    delay: "Selon projet",
    link: SOCIAL_LINKS.whatsapp,
    imageUrl: "https://images.unsplash.com/photo-1469571483333-f33f917a9821?q=80&w=1000&auto=format&fit=crop"
  }
];

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
