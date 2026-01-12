
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
  ctaText?: string;
  category?: string;
}

export enum Page {
  Home = 'home',
  Services = 'services',
  Training = 'offres',
  Events = 'evenements',
  WebDev = 'creation_site',
  Branding = 'branding',
  SocialMedia = 'reseaux_sociaux',
  Contact = 'contact'
}
