/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GitHubCalendar } from 'react-github-calendar';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  ArrowLeft,
  Eye,
  FileText,
  BarChart3,
  Phone,
  Award,
  BookOpen,
  Calendar,
  ShieldCheck,
  GitCommitHorizontal,
  Star,
  FolderGit2,
  Activity
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- Assets ---
import profileImg from './assets/Lakshitha-profile.png';
import auctionImg from './assets/Auction.png';
import wasteImg from './assets/Waste.png';
import financeImg from './assets/Finance.png';
import lexicalImg from './assets/lexical.png';

// --- Types ---
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  year: string;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl: string;
  skills: string[];
}

// --- GitHub ---
const GITHUB_USERNAME = 'mlswijerathne';

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  followers: number;
}

function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        let allRepos: any[] = [];
        let page = 1;
        while (true) {
          const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`);
          const repos = await res.json();
          if (!Array.isArray(repos) || repos.length === 0) break;
          allRepos = allRepos.concat(repos);
          if (repos.length < 100) break;
          page++;
        }

        const totalStars = allRepos.reduce((sum: number, r: any) => sum + (r.stargazers_count || 0), 0);
        const totalForks = allRepos.reduce((sum: number, r: any) => sum + (r.forks_count || 0), 0);

        setStats({
          totalRepos: userData.public_repos || allRepos.length,
          totalStars,
          totalForks,
          followers: userData.followers || 0,
        });
      } catch (err) {
        console.error('Failed to fetch GitHub stats:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, [username]);

  return { stats, loading };
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Online Auction Management System',
    description: 'Secure real-time auction platform with user registration, live bidding, profile management, Stripe-integrated payments, and robust admin tools.',
    tags: ['React', 'ASP.NET Core', 'SQL Server', 'Stripe'],
    category: 'Web',
    image: auctionImg,
    liveUrl: '#',
    repoUrl: 'https://github.com/mlswijerathne/AuctionManagement/blob/main/README.md',
    year: '2024'
  },
  {
    id: '2',
    title: 'Waste Management System',
    description: 'Location-aware mobile platform connecting residents, drivers, and city management with real-time waste collection, issue reporting, and analytics.',
    tags: ['Flutter', 'Firebase', 'Google Maps', 'Provider'],
    category: 'Mobile',
    image: wasteImg,
    liveUrl: '#',
    repoUrl: 'https://github.com/mlswijerathne/Waste-Management-System/blob/main/README.md',
    year: '2024'
  },
  {
    id: '3',
    title: 'Finance Management System',
    description: 'AI-powered financial platform with income/expense tracking, subscription management, savings goals, and personalized insights.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Axios'],
    category: 'Web',
    image: financeImg,
    liveUrl: 'http://152.67.3.153/',
    repoUrl: 'https://github.com/mlswijerathne/financeManagement/blob/test/README.md',
    year: '2024'
  },
  {
    id: '4',
    title: 'Lexical Analyzer',
    description: 'Interactive lexical analysis tool with syntax highlighting, token analysis, history management, and PDF export capabilities.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    category: 'Web',
    image: lexicalImg,
    liveUrl: 'https://lexical-analyzer-delta.vercel.app',
    repoUrl: 'https://github.com/mlswijerathne/lexical-analyzer',
    year: '2025'
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Associate Software Engineer',
    company: 'BISTEC Global Services',
    period: 'Jan 2026 — PRESENT',
    description: 'Focused on Agent Development and Model Context Protocol (MCP). Building intelligent systems using Google ADK and Large Language Models.',
    isCurrent: true
  },
  {
    id: '2',
    role: 'Software Engineer Intern',
    company: 'BISTEC Global Services',
    period: 'Aug 2025 — Jan 2026',
    description: 'Worked with Python, ASP.NET Core, Next.js, Docker, Supabase, and Cloudflare. Gained hands-on experience with LLMs and AI integration.',
  },
  {
    id: '3',
    role: 'Technical Writer',
    company: 'Medium',
    period: 'Mar 2025 — Sep 2025',
    description: 'Published technical articles translating complex software engineering concepts into clear, accessible content for developers.',
  }
];

const SKILLS = {
  frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Flutter', 'TypeScript', 'JavaScript'],
  backend: ['ASP.NET Core', 'Python', 'Flask', 'Java', 'C#', 'Node.js'],
  databases: ['SQL Server', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase'],
  devops: ['Docker', 'Git/GitHub', 'Jenkins', 'Azure', 'AWS', 'Cloudflare'],
  ai: ['MCP', 'Agent Dev', 'Google ADK', 'LLMs', 'Prompt Engineering']
};

const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    issueDate: 'October 2025',
    expiryDate: 'October 2027',
    credentialId: '323322023OCI25AICFA',
    credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=2CE2289737F138E3D8CF83C9C3E691D25031A8B3DC8FF90FBAE2949D52B5896D',
    skills: ['AI', 'Machine Learning', 'OCI', 'Cloud Computing']
  },
  {
    id: '2',
    title: 'Docker Training Course for the Absolute Beginner',
    issuer: 'KodeKloud',
    issueDate: 'October 2025',
    credentialId: '8cb36898-661b-4fc0-92fb-fb26edb7fd82',
    credentialUrl: 'https://kodekloud.com/certificate-verification/8cb36898-661b-4fc0-92fb-fb26edb7fd82',
    skills: ['Docker', 'Containerization', 'DevOps']
  },
  {
    id: '3',
    title: 'Learn by Doing - Prompt Engineering 101',
    issuer: 'KodeKloud',
    issueDate: 'September 2025',
    credentialId: '7e82fdfd-34a6-4d97-835d-425f4ba4af99',
    credentialUrl: 'https://kodekloud.com/certificate-verification/7e82fdfd-34a6-4d97-835d-425f4ba4af99',
    skills: ['Prompt Engineering', 'AI']
  },
  {
    id: '4',
    title: 'Back-End Web Development with .NET',
    issuer: 'LinkedIn',
    issueDate: 'December 2024',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/aa0fe4347e51431a9a4297f13124a0fea87f040201c2c4457dd81bcf799910ef',
    skills: ['Back-End Development', '.NET Framework']
  },
  {
    id: '5',
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Canvas Credentials (Badgr)',
    issueDate: 'November 2024',
    credentialId: '6744375943453f06d99008e2',
    credentialUrl: 'https://badges.parchment.com/public/assertions/W6ixtovrSTadv0h2dc-6iA',
    skills: ['API Development', 'Postman', 'RESTful APIs']
  }
];

// --- Components ---

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl py-4 shadow-lg' : 'bg-transparent py-6'}`} style={isScrolled ? { backgroundColor: 'var(--nav-scrolled)' } : undefined}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] bg-clip-text text-transparent">
          Lakshitha.dev
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Work', 'Skills', 'Experience', 'Certifications', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-blue)] font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--accent-blue)] hover:text-[var(--accent-purple)] transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--accent-blue)]"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="p-2 text-[var(--accent-blue)]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--bg-primary)] border-t border-[var(--border-color)] p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Work', 'Skills', 'Experience', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--text-secondary)] text-lg font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'mailto' | 'error' | null>(null);
  const { stats: githubStats, loading: githubLoading } = useGitHubStats(GITHUB_USERNAME);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
        const mailtoLink = `mailto:mlswijerathne@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
        window.open(mailtoLink, '_blank');
        setSubmitStatus('mailto');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 8000);
        return;
      }

      const response = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'mlswijerathne@gmail.com',
        reply_to: formData.email,
      }, publicKey);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10" style={{ backgroundColor: 'var(--glow-blue)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] -z-10" style={{ backgroundColor: 'var(--glow-purple)' }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-[var(--text-secondary)] font-medium text-lg mb-4">Hi, I'm Lakshitha Wijerathne</h2>
            <h1 className="text-4xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[0.9]">
              Software <span className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] bg-clip-text text-transparent">Engineer</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Associate Software Engineer at BISTEC Global Services with hands-on experience in Agent Development and Model Context Protocol (MCP). Passionate about building intelligent systems and scalable backend architectures.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-[var(--accent-blue)] text-[var(--bg-primary)] font-bold rounded-lg hover:opacity-85 transition-all active:scale-[0.98]">
                Get In Touch
              </a>
            </div>

            <div className="flex gap-6 mt-12 text-[var(--text-secondary)]">
              <a href="https://github.com/mlswijerathne" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2">
                <Github size={18} />
                <span className="font-medium">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/lakshitha-wijerathne/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2">
                <Linkedin size={18} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="https://lakshithaa.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2">
                <BookOpen size={18} />
                <span className="font-medium">Medium</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* About / Bento Grid */}
        <section className="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              className="md:col-span-2 bg-[var(--bg-secondary)] p-8 md:p-12 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">About Me</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-8">
                  I'm an Associate Software Engineer at BISTEC Global Services with hands-on experience in Agent Development and Model Context Protocol (MCP). My journey spans full-stack development, AI/LLM integrations, and technical writing — continuously expanding expertise across cloud platforms and modern software engineering practices.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 md:gap-12">
                <div>
                  <p className="text-4xl font-bold text-[var(--accent-blue)]">1+</p>
                  <p className="text-sm text-[var(--text-secondary)]">Years Exp.</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--accent-purple)]">10+</p>
                  <p className="text-sm text-[var(--text-secondary)]">Projects Completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              className="bg-[var(--bg-card)] rounded-3xl overflow-hidden aspect-square md:aspect-auto"
            >
              <img
                src={profileImg}
                alt="Lakshitha Wijerathne"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Tech Ecosystem */}
        <section id="skills" className="py-16 md:py-24 bg-[var(--bg-secondary)]">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-16 text-center">
              Tech <span className="text-[var(--accent-blue)]">Ecosystem</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
              <SkillCategory icon={<Terminal size={20} />} title="Frontend" skills={SKILLS.frontend} />
              <SkillCategory icon={<Database size={20} />} title="Backend" skills={SKILLS.backend} />
              <SkillCategory icon={<Cpu size={20} />} title="Databases" skills={SKILLS.databases} />
              <SkillCategory icon={<Cloud size={20} />} title="DevOps" skills={SKILLS.devops} />
              <SkillCategory icon={<ShieldCheck size={20} />} title="AI & Agents" skills={SKILLS.ai} />
            </div>
          </div>
        </section>

        {/* Selected Artifacts */}
        <section id="work" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Selected <span className="text-[var(--accent-blue)]">Projects</span></h2>
              <p className="text-[var(--text-secondary)] text-lg">A collection of web and mobile applications built with modern technologies.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* The Trajectory */}
        <section id="experience" className="py-16 md:py-24 bg-[var(--bg-secondary)]">
          <div className="px-6 md:px-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-16">The <span className="text-[var(--accent-purple)]">Trajectory</span></h2>
            <div className="space-y-8">
              {EXPERIENCES.map((exp) => (
                <ExperienceItem key={exp.id} exp={exp} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-16 text-center">
            Professional <span className="text-[var(--accent-purple)]">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>

        {/* GitHub Ecosystem Stats */}
        <section className="py-16 md:py-24 bg-[var(--bg-secondary)]">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-12">
                <Github size={24} className="text-[var(--accent-blue)]" />
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  GitHub <span className="text-[var(--accent-blue)]">Ecosystem Stats</span>
                </h2>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: <FolderGit2 size={20} />, label: 'Repositories', value: githubStats?.totalRepos, color: 'var(--accent-blue)' },
                  { icon: <Star size={20} />, label: 'Stars Earned', value: githubStats?.totalStars, color: 'var(--accent-purple)' },
                  { icon: <Activity size={20} />, label: 'Forks', value: githubStats?.totalForks, color: 'var(--accent-blue)' },
                  { icon: <GitCommitHorizontal size={20} />, label: 'Followers', value: githubStats?.followers, color: 'var(--accent-purple)' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className="bg-[var(--bg-card)] p-6 md:p-8 rounded-2xl border border-[var(--border-color)] text-center"
                  >
                    <div className="flex justify-center mb-4" style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                    <p className="text-3xl md:text-4xl font-extrabold mb-2">
                      {githubLoading ? (
                        <span className="inline-block w-12 h-8 bg-[var(--bg-input)] rounded animate-pulse" />
                      ) : (
                        stat.value ?? '—'
                      )}
                    </p>
                    <p className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-[0.2em]">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Contribution Graph */}
              <div className="bg-[var(--bg-card)] p-6 md:p-8 rounded-2xl border border-[var(--border-color)] overflow-x-auto">
                <h3 className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <BarChart3 size={14} className="text-[var(--accent-blue)]" /> Contribution Activity
                </h3>
                <GitHubCalendar
                  username={GITHUB_USERNAME}
                  colorScheme={isDark ? 'dark' : 'light'}
                  blockSize={13}
                  blockMargin={4}
                  fontSize={12}
                  theme={{
                    dark: ['#1d1f27', '#2a4a8f', '#3b6cd4', '#5a8eff', '#b4c5ff'],
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-8">Get In <span className="text-[var(--accent-blue)]">Touch</span></h2>
              <p className="text-[var(--text-secondary)] text-lg mb-12 leading-relaxed max-w-lg">
                Whether you have a specific project in mind or want to discuss collaborations and opportunities, feel free to reach out.
              </p>

              <div className="space-y-8">
                <ContactInfo icon={<Mail size={20} />} label="Email" value="mlswijerathne@gmail.com" href="mailto:mlswijerathne@gmail.com" />
                <ContactInfo icon={<Phone size={20} />} label="Phone" value="+94 766298167" href="tel:+94766298167" />
                <ContactInfo icon={<MapPin size={20} />} label="Location" value="Sri Lanka" />
              </div>
            </div>

            <div className="bg-[var(--bg-secondary)] p-8 md:p-10 rounded-[2rem]">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--success-bg)', borderWidth: 1, borderColor: 'var(--success-border)' }}>
                  <p className="font-medium text-sm" style={{ color: 'var(--success-text)' }}>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              {submitStatus === 'mailto' && (
                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--info-bg)', borderWidth: 1, borderColor: 'var(--info-border)' }}>
                  <p className="font-medium text-sm" style={{ color: 'var(--info-text)' }}>Your email client should open. If not, send directly to mlswijerathne@gmail.com</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'var(--error-bg)', borderWidth: 1, borderColor: 'var(--error-border)' }}>
                  <p className="font-medium text-sm" style={{ color: 'var(--error-text)' }}>Failed to send message. Please try again or contact me directly.</p>
                </div>
              )}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-secondary)]">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[var(--bg-input)] border-none rounded-xl p-4 text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent-blue)] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-secondary)]">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-[var(--bg-input)] border-none rounded-xl p-4 text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent-blue)] transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-[var(--bg-input)] border-none rounded-xl p-4 text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent-blue)] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can we work together?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-[var(--bg-input)] border-none rounded-xl p-4 text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent-blue)] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--accent-blue)] text-[var(--bg-primary)] font-bold rounded-xl hover:opacity-85 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--bg-footer)] py-12 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold text-[var(--accent-purple)]">Lakshitha.dev</div>
          <div className="flex gap-8 text-[var(--text-secondary)] text-sm">
            <a href="https://github.com/mlswijerathne" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/lakshitha-wijerathne/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors">LinkedIn</a>
            <a href="https://lakshithaa.medium.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-blue)] transition-colors">Medium</a>
          </div>
          <p className="text-[var(--text-secondary)] text-sm text-center md:text-right">
            &copy; 2026 Lakshitha Wijerathne. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// --- Sub-components ---

const SkillCategory = ({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) => (
  <div className="space-y-6">
    <h4 className="font-mono text-[var(--accent-purple)] text-xs tracking-[0.2em] uppercase flex items-center gap-2">
      {icon} {title}
    </h4>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <div key={skill} className="px-4 py-2 bg-[var(--bg-input)] rounded-lg flex items-center gap-2 group hover:bg-[var(--hover-bg)] transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)]"></span>
          <span className="text-sm font-medium">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ project }: { project: Project; key?: string }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="group bg-[var(--bg-secondary)] rounded-2xl overflow-hidden border border-[var(--border-color)]"
  >
    <div className="aspect-video relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-footer)] to-transparent opacity-60" />
      <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-[var(--bg-primary)] text-[var(--accent-blue)] rounded-full backdrop-blur-sm">
        {project.year}
      </span>
    </div>
    <div className="p-5">
      <div className="flex gap-1.5 mb-3 flex-wrap">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase bg-[var(--bg-input)] text-[var(--accent-purple)] rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-base font-bold mb-2 group-hover:text-[var(--accent-blue)] transition-colors leading-tight">{project.title}</h3>
      <p className="text-[var(--text-secondary)] text-xs mb-5 line-clamp-2 leading-relaxed">{project.description}</p>
      <div className="flex gap-4">
        {project.liveUrl !== '#' && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold hover:text-[var(--accent-blue)] transition-colors">
            <Eye size={13} /> Live Demo
          </a>
        )}
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-bold hover:text-[var(--accent-blue)] transition-colors">
          <Code2 size={13} /> Source
        </a>
      </div>
    </div>
  </motion.div>
);

const ExperienceItem = ({ exp }: { exp: Experience; key?: string }) => (
  <div className={`relative bg-[var(--bg-card)] p-6 md:p-10 rounded-2xl border-l-4 ${exp.isCurrent ? 'border-[var(--accent-blue)]' : 'border-[var(--border-color)]'}`}>
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
      <h4 className="text-xl font-bold">{exp.role}</h4>
      <span className="text-xs font-mono text-[var(--text-secondary)] tracking-widest">{exp.period}</span>
    </div>
    <p className="text-[var(--accent-purple)] font-medium mb-4">{exp.company}</p>
    <p className="text-[var(--text-secondary)] leading-relaxed">{exp.description}</p>
  </div>
);

const CertificationCard = ({ cert }: { cert: Certification; key?: string }) => (
  <motion.a
    href={cert.credentialUrl}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -4 }}
    className="block bg-[var(--bg-secondary)] p-6 md:p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--accent-blue)] transition-all group"
  >
    <div className="flex items-start gap-4 mb-5">
      <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card)] flex items-center justify-center text-[var(--accent-purple)] border border-[var(--border-color)] flex-shrink-0">
        <Award size={22} />
      </div>
      <div className="min-w-0">
        <h4 className="font-bold text-base leading-tight group-hover:text-[var(--accent-blue)] transition-colors line-clamp-2">{cert.title}</h4>
        <p className="text-[var(--accent-purple)] text-sm font-medium mt-1">{cert.issuer}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 text-[var(--text-secondary)] text-xs font-mono mb-5">
      <Calendar size={12} />
      <span>{cert.issueDate}</span>
      {cert.expiryDate && <span className="text-[var(--text-secondary)]/50">— {cert.expiryDate}</span>}
    </div>
    <div className="flex flex-wrap gap-2">
      {cert.skills.map(skill => (
        <span key={skill} className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase bg-[var(--bg-input)] text-[var(--text-secondary)] rounded-full">
          {skill}
        </span>
      ))}
    </div>
    <div className="mt-5 flex items-center gap-1 text-xs text-[var(--accent-blue)] opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink size={12} /> View Credential
    </div>
  </motion.a>
);

const StatItem = ({ label, value }: { label: string, value: string }) => (
  <div className="text-center md:text-left">
    <p className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-[0.2em] mb-3">{label}</p>
    <p className="text-4xl md:text-5xl font-extrabold">{value}</p>
  </div>
);

const ContactInfo = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
  <div className="flex items-center gap-4 md:gap-5 min-w-0">
    <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[var(--bg-card)] flex items-center justify-center text-[var(--accent-blue)] border border-[var(--border-color)] flex-shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-widest mb-1">{label}</p>
      {href ? (
        <a href={href} className="font-medium text-base md:text-lg hover:text-[var(--accent-blue)] transition-colors truncate block">{value}</a>
      ) : (
        <p className="font-medium text-base md:text-lg">{value}</p>
      )}
    </div>
  </div>
);
