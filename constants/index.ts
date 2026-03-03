import { NavItem, SkillCard, Service, Project, SocialLink, Testimonial } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About me', href: '#about' },
  { label: 'My work', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
]

export const SKILL_CARDS: SkillCard[] = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    title: 'Experience',
    items: ['5+ years', 'Frontend', 'Full Stack'],
  },
  {
    title: 'Projects',
    items: ['20+ Projects', 'Web Apps', 'Designs'],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/camarguin', icon: 'github' },
  {
    name: 'Discord',
    url: 'https://discord.com/users/339129414803783681',
    icon: 'discord',
  },
  { name: 'Instagram', url: 'https://www.instagram.com/lgctechcoder', icon: 'instagram' },
  { name: 'Figma', url: 'https://www.figma.com/@lucasgerhardtde', icon: 'figma' },
  { name: 'Whatsapp', url: 'https://wa.me/17783183796', icon: 'whatsapp' },
]

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Web design',
    description: 'Craft beautiful and modern websites tailored to your brand.',
    icon: '🎨',
  },
  {
    id: 'mobile-app',
    title: 'Mobile app',
    description: 'Build responsive and intuitive mobile applications.',
    icon: '📱',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX design',
    description: 'Design user-centered interfaces with excellent user experience.',
    icon: '✨',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'mysquad',
    title: 'Mysquad',
    description:
      'Create your fantasy hockey team, pick real NHL/PWHL players, compete with friends in custom leagues, or challenge players worldwide.',
    image: '/projects/mysquad-project.png',
    link: 'https://mysquad-landingpage.vercel.app',
    tags: ['Firebase', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'perfilagro2.0',
    title: 'Perfilagro 2.0',
    description:
      'Enhanced agronomy jobs platform connecting companies with qualified professionals. Features comprehensive admin panel for managing candidates, job postings, and recruitment processes with streamlined workflows.',
    image: '/projects/perfilagro2.0-project.png',
    link: 'https://www.perfilagro.com.br',
    tags: ['Supabase', 'Next.js', 'Figma', 'Landing Page', 'Tailwind CSS'],
  },
  {
    id: 'combatly',
    title: 'Combatly',
    description:
      'A online turn‑based strategy game where players compete to control a dynamic map. Play with friends or against configurable AI difficulty levels, trade card sets to gain reinforcements, and climb the leaderboards.',
    image: '/projects/combatly-project.png',
    link: 'https://combatly-web.vercel.app',
    tags: ['Firebase', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'yuanway-teashop',
    title: 'Yuan Way Teashop',
    description:
      'Premium teashop landing page for a Taipei, Taiwan-based tea business. Features bilingual support with English and Traditional Chinese, showcasing products and creating an authentic tea experience online.',
    image: '/projects/teashop-project.png',
    link: 'https://yuanway.vercel.app',
    tags: ['Landing Page', 'i18n', 'Next.js'],
  },
  {
    id: 'travel-taiwan',
    title: 'Travel to Taiwan',
    description: 'Beautiful UI design showcasing Taiwan as a tourism destination. Learn about the country, its culture, attractions, and travel tips through an engaging design experience.',
    image: '/projects/traveltoTaiwan-project.png',
    type: 'design',
    link: 'https://www.instagram.com/p/CUiId0qFLDF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    tags: ['UI/UX Design', 'Figma', 'Tourism'],
  },
  {
    id: 'travel-vancouver',
    title: 'Travel to Vancouver',
    description: 'Stunning UI design showcasing Vancouver as a tourism destination. Discover the city through visual design, featuring attractions, activities, and travel information.',
    image: '/projects/traveltovancouver-project.png',
    type: 'design',
    link: 'https://www.instagram.com/p/CUabvX4ppr0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    tags: ['UI/UX Design', 'Figma', 'Tourism'],
  },
  {
    id: 'perfilagro',
    title: 'Perfilagro',
    description:
      'Agricultural jobs posting platform connecting professionals with opportunities in the farming industry.',
    image: '/projects/perfilagro-project.png',
    link: 'https://perfilagro.com.br',
    tags: ['Firebase', 'Chakra-UI', 'React'],
  },
  {
    id: 'stradalocadora',
    title: 'Strada Locadora',
    description:
      'A modern car rental and sales showcase platform. Dealers can display, showcase, and manage both rental and selling inventory with an intuitive interface.',
    image: '/projects/stradalocadora-project.png',
    link: 'https://www.stradalocadora.com.br',
    tags: ['Next.js', 'Tailwind', 'E-commerce'],
  },
  {
    id: 'reporembalagens',
    title: 'Repor Embalagens',
    description:
      'Food business package showcase platform with admin panel. Brazilian client solution featuring product management, admin dashboard, and custom product showcase for food packaging businesses.',
    image: '/projects/reporembalagens-project.png',
    link: 'https://www.reporembalagens.com.br',
    tags: ['Admin Panel', 'E-commerce', 'React'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Vinicius Tomaz',
    role: 'Co-Founder of Projete Informatica',
    text: "Lucas is an excellent professional, besides having a great didactic to teach programming in which I had the opportunity to participate in the development of the Projete's website, being a unique experience for me. I would recommend that companies get to know him as a person and as a professional, I can say that you will have a lot to gain.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Steve Kim',
    role: 'President of Synet Computer Inc.',
    text: 'I have known him for the whole year as a tech-head instructor. He worked as a scrum master a few times because he has a great leadership. He took care of website optimization, modification, and other maintenance for his group. His participation, punctuality, and enthusiasm fulfilled all the requirements any companies need.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Tyler Pace',
    role: 'Founder and CEO of Pro Caliber Lacrosse',
    text: 'Over two months, I had many requests and continuously changed my vision as the website started to come together. Lucas was patient with me, asked questions, made suggestions, and showed creativity and imagination by implementing things that were above and beyond what I could have thought of myself.',
    rating: 5,
  },
  {
    id: 4,
    name: '楊正輝 - Yan Cheng-Huei',
    role: 'Owner of Yuan Way Teashop, Taiwan',
    text: "As the owner of a small tea shop in Taiwan, I wanted a clean, modern website that could help attract more customers. Lucas not only delivered exactly what I had in mind, but he also made the whole process simple and stress-free. Since launching the new site, we've seen a strong increase in online inquiries and new visitors. His work truly made a difference for our business.",
    rating: 5,
  },
]
