import { personalInfo } from '../data/portfolioData';

export const siteConfig = {
  name: personalInfo.name,
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.objective,
  url: 'https://lakshitha-portfolio.vercel.app',
  author: {
    name: personalInfo.name,
    email: personalInfo.email,
    url: personalInfo.github
  },
  keywords: [
    'portfolio',
    'web developer',
    'frontend developer',
    'react developer',
    'computer science',
    'sri lanka',
    'lakshitha wijerathne',
    'full stack developer',
    'mobile app developer',
    'flutter developer'
  ],
  social: {
    github: personalInfo.github,
    linkedin: personalInfo.linkedin,
    medium: personalInfo.medium,
    email: personalInfo.email,
    phone: personalInfo.phone
  },
  analytics: {
    // Add Google Analytics ID here when ready
    googleAnalyticsId: '',
    // Add other analytics tools
  },
  seo: {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: personalInfo.name,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${personalInfo.name} - Portfolio`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@lakshitha_dev', // Update with actual Twitter handle
      creator: '@lakshitha_dev'
    }
  },
  features: {
    darkMode: true,
    animations: true,
    contactForm: true,
    blog: false, // Can be enabled later
    testimonials: false, // Can be enabled later
    analytics: false // Enable when analytics is set up
  }
};

export default siteConfig;
