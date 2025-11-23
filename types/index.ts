export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCard {
  title: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  designImages?: string[];
  tags?: string[];
  type?: 'web' | 'design';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}
