export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  year: string;
  company?: string;
  confidential?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl: string;
  skills: string[];
}

export interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const GITHUB_USERNAME = 'mlswijerathne';
export const MEDIUM_USERNAME = 'lakshithaa';

/* ──────────────────────────────────────────────────────────────
 * SITE CONFIG — edit copy here. Everything visible on the page
 * pulls from this file so content lives in one place.
 * ────────────────────────────────────────────────────────────── */

export const SITE = {
  name: 'Lakshitha',
  brand: 'lakshitha.dev',
  role: 'Associate Software Engineer',
  email: 'lakshitha.dev@outlook.com',
  website: 'https://lakshitha.dev',
  github: 'https://github.com/mlswijerathne',
  linkedin: 'https://www.linkedin.com/in/lakshitha-wijerathne/',
  medium: 'https://medium.com/@lakshithaa',
  upwork: 'https://www.upwork.com/freelancers/~01a0bb041b5efe1541',
};

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export const WRITING_META = {
  heading: 'Writing & thoughts',
  intro:
    'Notes from the work — short pieces on engineering, AI agents, and the patterns I keep coming back to.',
  ctaLabel: 'Read on Medium',
};

const HERO_IMAGE_BASE =
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&fm=webp';

export const HERO = {
  tagline: 'AI Agent Developer & n8n Automation Expert',
  headline1: 'Innovative',
  headline2: 'Software Engineer',
  intro:
    'I build clean, reliable, and thoughtful web and mobile experiences — from clear interfaces to dependable backends and AI-powered features.',
  ctaLabel: 'Explore my work',
  ctaHref: '#projects',
  image: `${HERO_IMAGE_BASE}&w=800&q=75`,
  imageSrcSet: [
    `${HERO_IMAGE_BASE}&w=480&q=70 480w`,
    `${HERO_IMAGE_BASE}&w=800&q=75 800w`,
    `${HERO_IMAGE_BASE}&w=1200&q=80 1200w`,
    `${HERO_IMAGE_BASE}&w=1600&q=82 1600w`,
  ].join(', '),
  imageSizes: '(min-width: 1024px) 58vw, (min-width: 768px) 50vw, 100vw',
  imageAlt: 'Abstract AI and automation visual',
};

export const HERO_STATS: { value: string; symbol: string; label: string }[] = [
  { value: '20', symbol: '+', label: 'Projects delivered' },
  { value: '3', symbol: '+', label: 'Years experience' },
];

export const AVAILABILITY = {
  status: 'Available for new projects',
};

export const PROCESS_META = {
  eyebrow: 'How I work',
  heading: 'From first message to shipped',
  intro:
    'A simple, low-risk way to work together — clear scope, steady updates, and no surprises. The same process my Upwork clients rely on.',
};

export const PROCESS: { step: string; title: string; description: string }[] = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We talk through your goal, scope, and what success looks like — no jargon, just a clear plan.',
  },
  {
    step: '02',
    title: 'Proposal & milestones',
    description:
      'You get a fixed scope, timeline, and milestones, so you always know what is happening and when.',
  },
  {
    step: '03',
    title: 'Build & iterate',
    description:
      'I ship in increments with regular updates — you review and refine as the work takes shape.',
  },
  {
    step: '04',
    title: 'Deliver & support',
    description:
      'Full handover with docs and deployment, plus post-launch support to keep things running.',
  },
];

export const TESTIMONIALS_META = {
  eyebrow: 'Social proof',
  heading: 'What people say',
  intro:
    'Feedback from teams, mentors, and collaborators I have built with.',
};

export const CONTACT_META = {
  eyebrow: "Let's work together",
  heading: 'Have a project in mind?',
  intro:
    "Tell me what you're building — an AI agent, an automation, or a full web or mobile app. I usually reply within 24 hours and can hop on a quick call to scope it out.",
  responseTime: 'Replies within 24 hours',
  points: [
    'Free 20-minute scoping call',
    'Clear milestones & fixed scope',
    'Post-launch support included',
  ],
  upworkCtaLabel: 'Hire me on Upwork',
  emailCtaLabel: 'Email me directly',
};

const ABOUT_IMAGE_BASE =
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&fm=webp';

export const ABOUT = {
  year: '2022',
  tagline: 'AI Agent Developer & n8n Automation Expert',
  heading: 'Built on logic, driven by craft',
  intro:
    'I started writing code in 2022 and have spent the years since shipping production software — from real-time auction platforms to AI-driven agents. I care about clean architecture, predictable systems, and details that hold up under pressure.',
  bullets: [
    'Clean code practices',
    'On-time delivery',
    'Problem-solving mindset',
    'Continuous learning',
    'Team collaboration',
  ],
  ctaLabel: 'Know more about me',
  ctaHref: '#contact',
  image: `${ABOUT_IMAGE_BASE}&w=800&q=78`,
  imageSrcSet: [
    `${ABOUT_IMAGE_BASE}&w=480&q=72 480w`,
    `${ABOUT_IMAGE_BASE}&w=800&q=78 800w`,
    `${ABOUT_IMAGE_BASE}&w=1100&q=80 1100w`,
  ].join(', '),
  imageSizes: '(min-width: 768px) 42vw, 100vw',
  imageAlt: 'Engineer at work',
};

export const SERVICES: {
  title: string;
  description: string;
  icon: 'ai' | 'mobile' | 'web' | 'agent' | 'n8n';
}[] = [
  {
    title: 'AI Development',
    description:
      'Production-ready AI features with LLMs, RAG pipelines, and prompt engineering — practical, not hype.',
    icon: 'ai',
  },
  {
    title: 'Web Development',
    description:
      'Modern, responsive web apps with React, Next.js, Spring Boot, and .NET — fast and accessible.',
    icon: 'web',
  },
  {
    title: 'Mobile Development',
    description:
      'Cross-platform mobile apps with Flutter — one codebase, native feel on iOS and Android.',
    icon: 'mobile',
  },
  {
    title: 'Agent Development',
    description:
      'Autonomous AI agents with MCP and Google ADK — tool-use, memory, and reliable orchestration.',
    icon: 'agent',
  },
  {
    title: 'N8N Development',
    description:
      'Workflow automation that connects your stack — webhooks, integrations, and custom nodes.',
    icon: 'n8n',
  },
];

export const PROJECTS_META = {
  heading: 'Featured projects',
  intro:
    'From web platforms to mobile and AI-driven tools — selected work that shows how I think and build.',
  ctaLabel: 'View all projects',
  ctaHref: SITE.github,
  statValue: '5',
  statSymbol: '',
  statLabel: 'Selected for showcase',
};

import type { TechIconSlug } from '../components/TechIcon';

export const TECH: { name: string; slug: TechIconSlug; group: 'Languages' | 'Frameworks' | 'Tools' }[] = [
  // Languages
  { name: 'JavaScript', slug: 'javascript', group: 'Languages' },
  { name: 'TypeScript', slug: 'typescript', group: 'Languages' },
  { name: 'Python', slug: 'python', group: 'Languages' },
  { name: 'Java', slug: 'openjdk', group: 'Languages' },
  // Frameworks
  { name: 'React', slug: 'react', group: 'Frameworks' },
  { name: 'Next.js', slug: 'nextdotjs', group: 'Frameworks' },
  { name: 'Node.js', slug: 'nodedotjs', group: 'Frameworks' },
  { name: 'Spring Boot', slug: 'spring', group: 'Frameworks' },
  { name: '.NET', slug: 'dotnet', group: 'Frameworks' },
  { name: 'FastAPI', slug: 'fastapi', group: 'Frameworks' },
  { name: 'Flutter', slug: 'flutter', group: 'Frameworks' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', group: 'Frameworks' },
  // Tools
  { name: 'Docker', slug: 'docker', group: 'Tools' },
  { name: 'PostgreSQL', slug: 'postgresql', group: 'Tools' },
  { name: 'Git', slug: 'git', group: 'Tools' },
  { name: 'Firebase', slug: 'firebase', group: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Production AI Agent Platform',
    description:
      'Designing and shipping production AI agents for enterprise workflows — Model Context Protocol integrations, tool-use orchestration, and reliable LLM-driven automation.',
    tags: ['MCP', 'Google ADK', 'Python', 'FastAPI', 'LLMs'],
    category: 'AI',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&fm=webp&w=1400&q=82',
    liveUrl: '#',
    repoUrl: '#',
    year: '2026',
    company: 'BISTEC Global Services',
    confidential: true,
  },
  {
    id: '5',
    title: 'Agentic AI Travel Planner',
    description:
      'Multi-agent system that generates personalized multi-day itineraries from a user\'s budget, dates, and travel style — destination researcher, accommodation finder, and activity recommender agents calling external tools autonomously, with a conversational UI to re-plan any day. Cut trip planning from ~3 hours to under 2 minutes.',
    tags: ['LangChain', 'OpenAI GPT-4', 'FastAPI', 'n8n', 'Google Places API'],
    category: 'AI',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&fm=webp&w=1400&q=82',
    liveUrl: '#',
    repoUrl: '#',
    year: '2025',
  },
  {
    id: '2',
    title: 'Real-Time Auction Platform',
    description:
      'Real-time bidding engine with Stripe-integrated escrow, role-based admin tooling, and concurrent-update handling for fair, high-traffic auctions.',
    tags: ['React', 'ASP.NET Core', 'SQL Server', 'Stripe'],
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&fm=webp&w=1400&q=82',
    liveUrl: '#',
    repoUrl: 'https://github.com/mlswijerathne/AuctionManagement/blob/main/README.md',
    year: '2024',
  },
  {
    id: '3',
    title: 'AI Finance Management Platform',
    description:
      'AI-driven personal finance app with automated transaction categorization, subscription monitoring, and goal-based savings insights — deployed and live.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Axios'],
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&fm=webp&w=1400&q=82',
    liveUrl: 'http://152.67.3.153/',
    repoUrl: 'https://github.com/mlswijerathne/financeManagement/blob/test/README.md',
    year: '2024',
  },
  {
    id: '4',
    title: 'Smart Waste Coordination App',
    description:
      'Cross-platform mobile app coordinating residents, drivers, and city operators — live geolocation routing, incident reporting, and operational analytics.',
    tags: ['Flutter', 'Firebase', 'Google Maps', 'Provider'],
    category: 'Mobile',
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&fm=webp&w=1400&q=82',
    liveUrl: '#',
    repoUrl: 'https://github.com/mlswijerathne/Waste-Management-System/blob/main/README.md',
    year: '2024',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Associate Software Engineer',
    company: 'BISTEC Global Services',
    period: 'Jan 2026 — Present',
    description: 'Focused on Agent Development and Model Context Protocol (MCP). Building intelligent systems using Google ADK and Large Language Models.',
    isCurrent: true,
  },
  {
    id: '2',
    role: 'Software Engineer Intern',
    company: 'BISTEC Global Services',
    period: 'Aug 2025 — Jan 2026',
    description: 'Worked with Python, ASP.NET Core, Next.js, Docker, Supabase, and Cloudflare. Gained hands-on experience with LLMs and AI integration.',
  },
  {
    id: '4',
    role: 'AI Agent Developer (Freelance)',
    company: 'Upwork',
    period: 'Sep 2025 — Present',
    description: 'Building AI agents, chatbots, and n8n automation workflows for small and medium businesses — LangChain, OpenAI, FastAPI, and end-to-end API integration, owning projects from design to deployment.',
  },
  {
    id: '3',
    role: 'Technical Writer',
    company: 'Medium',
    period: 'Mar 2025 — Sep 2025',
    description: 'Published technical articles translating complex software engineering concepts into clear, accessible content for developers.',
  },
];

export const SKILLS: Record<string, string[]> = {
  Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Flutter', 'TypeScript', 'JavaScript'],
  Backend: ['ASP.NET Core', 'Python', 'Flask', 'Java', 'C#', 'Node.js'],
  Databases: ['SQL Server', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase'],
  DevOps: ['Docker', 'Git/GitHub', 'Jenkins', 'Azure', 'AWS', 'Cloudflare'],
  'AI & Agents': ['MCP', 'Agent Dev', 'Google ADK', 'LLMs', 'Prompt Engineering'],
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    issueDate: 'October 2025',
    expiryDate: 'October 2027',
    credentialId: '323322023OCI25AICFA',
    credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=2CE2289737F138E3D8CF83C9C3E691D25031A8B3DC8FF90FBAE2949D52B5896D',
    skills: ['AI', 'Machine Learning', 'OCI', 'Cloud Computing'],
  },
  {
    id: '2',
    title: 'Docker Training Course for the Absolute Beginner',
    issuer: 'KodeKloud',
    issueDate: 'October 2025',
    credentialId: '8cb36898-661b-4fc0-92fb-fb26edb7fd82',
    credentialUrl: 'https://kodekloud.com/certificate-verification/8cb36898-661b-4fc0-92fb-fb26edb7fd82',
    skills: ['Docker', 'Containerization', 'DevOps'],
  },
  {
    id: '3',
    title: 'Learn by Doing - Prompt Engineering 101',
    issuer: 'KodeKloud',
    issueDate: 'September 2025',
    credentialId: '7e82fdfd-34a6-4d97-835d-425f4ba4af99',
    credentialUrl: 'https://kodekloud.com/certificate-verification/7e82fdfd-34a6-4d97-835d-425f4ba4af99',
    skills: ['Prompt Engineering', 'AI'],
  },
  {
    id: '4',
    title: 'Back-End Web Development with .NET',
    issuer: 'LinkedIn',
    issueDate: 'December 2024',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/aa0fe4347e51431a9a4297f13124a0fea87f040201c2c4457dd81bcf799910ef',
    skills: ['Back-End Development', '.NET Framework'],
  },
  {
    id: '5',
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Canvas Credentials (Badgr)',
    issueDate: 'November 2024',
    credentialId: '6744375943453f06d99008e2',
    credentialUrl: 'https://badges.parchment.com/public/assertions/W6ixtovrSTadv0h2dc-6iA',
    skills: ['API Development', 'Postman', 'RESTful APIs'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Project Lead',
    role: 'Team Lead',
    company: 'BISTEC Global Services',
    content: 'Lakshitha demonstrates exceptional problem-solving skills and a deep understanding of modern software architecture. His work on MCP and Agent Development has been instrumental to our team\'s success.',
  },
  {
    id: '2',
    name: 'University Supervisor',
    role: 'Senior Lecturer',
    company: 'NSBM Green University',
    content: 'One of the most dedicated students I\'ve mentored. Lakshitha consistently delivers high-quality projects and shows a genuine passion for emerging technologies and continuous learning.',
  },
  {
    id: '3',
    name: 'Open Source Collaborator',
    role: 'Developer',
    company: 'GitHub Community',
    content: 'Working with Lakshitha on open-source projects has been a great experience. His code is clean, well-documented, and he brings creative solutions to complex technical challenges.',
  },
];
