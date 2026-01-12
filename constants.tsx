
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
  whatsapp: "https://wa.me/33700000000" // Numéro à ajuster si nécessaire
};

export const TRAINING_OFFERS: ServiceCardProps[] = [
  { title: "Gérer son activité simplement avec Excel", description: "Optimisez vos flux de trésorerie et votre suivi client avec des outils automatisés sur mesure.", icon: "fa-file-excel" },
  { title: "Organisation & productivité digitale", description: "Maîtrisez l'écosystème cloud pour collaborer en temps réel et gagner 10h par semaine.", icon: "fa-bolt" },
  { title: "Gérer ses réseaux sociaux avec Excel", description: "Tableaux de bord stratégiques pour piloter votre croissance organique et payante.", icon: "fa-chart-line" },
  { title: "Excel facile pour débutants", description: "Apprenez les fondamentaux pour ne plus jamais craindre les feuilles de calcul complexes.", icon: "fa-graduation-cap" },
  { title: "Gestion d’association avec Excel", description: "Centralisez vos membres, cotisations et projets dans un outil unique et intuitif.", icon: "fa-users" },
  { title: "Les bases du digital pour entreprises", description: "Comprendre les leviers du Web 3.0 et de l'IA pour rester compétitif sur votre marché.", icon: "fa-briefcase" },
  { title: "Gérer son site WordPress seul", description: "Devenez le maître de votre contenu sans toucher à une seule ligne de code technique.", icon: "fa-wordpress" },
  { title: "Structurer sa communication digitale", description: "Créez une ligne éditoriale percutante qui transforme votre audience en ambassadeurs.", icon: "fa-bullhorn" },
  { title: "Optimiser son temps avec les bons outils", description: "Automatisez les tâches répétitives pour vous concentrer sur votre zone de génie.", icon: "fa-clock" },
  { title: "Les erreurs digitales qui coûtent cher", description: "Audit préventif pour protéger votre e-réputation et vos investissements publicitaires.", icon: "fa-exclamation-triangle" },
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
