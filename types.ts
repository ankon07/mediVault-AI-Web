export interface NavItem {
  label: string;
  href: string;
}

export interface PillarContent {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  cta: string;
  color: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface UseCaseItem {
  title: string;
  description: string;
  icon: string;
}

export interface InsightItem {
  title: string;
  date: string;
  tag: string;
}

export interface GalleryItem {
  title: string;
  description: string;
  image: string; // Placeholder URL or path
  category: 'Core' | 'Intelligence' | 'Onboarding';
}

export interface ContentConfig {
  nav: NavItem[];
  hero: {
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  pillars: PillarContent[];
  stats: StatItem[];
  useCases: UseCaseItem[];
  insights: InsightItem[];
  gallery: GalleryItem[];
  careers: {
    headline: string;
    locations: string[];
    cta: string;
  };
  footer: {
    links: { category: string; items: string[] }[];
    copyright: string;
    team: string;
    email: string;
  };
}