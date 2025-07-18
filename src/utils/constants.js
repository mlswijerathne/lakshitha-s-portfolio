// Navigation items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Interests', href: '#interests' },
  { name: 'Contact', href: '#contact' }
];

// Project categories
export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'ALL' },
  { id: 'web', name: 'WEB PROJECTS' },
  { id: 'mobile', name: 'MOBILE APPS' }
];

// Theme options
export const THEME_OPTIONS = {
  LIGHT: 'light',
  DARK: 'dark'
};

// Social media platforms
export const SOCIAL_PLATFORMS = {
  GITHUB: 'github',
  LINKEDIN: 'linkedin',
  MEDIUM: 'medium',
  TWITTER: 'twitter',
  INSTAGRAM: 'instagram'
};

// Skill levels
export const SKILL_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert'
};

// Animation durations
export const ANIMATION_DURATION = {
  FAST: 0.3,
  MEDIUM: 0.5,
  SLOW: 0.8,
  VERY_SLOW: 1.2
};

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
};

// Contact form validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  MIN_LENGTH: 'Minimum length is',
  MAX_LENGTH: 'Maximum length is'
};

// Status types
export const STATUS_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'theme',
  LANGUAGE: 'language',
  USER_PREFERENCES: 'userPreferences'
};

// API endpoints (if needed for future expansion)
export const API_ENDPOINTS = {
  CONTACT_FORM: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  PROJECTS: '/api/projects'
};

// Color palette
export const COLORS = {
  PRIMARY: 'yellow',
  SECONDARY: 'orange',
  ACCENT: 'blue',
  SUCCESS: 'green',
  WARNING: 'yellow',
  ERROR: 'red',
  INFO: 'blue'
};
