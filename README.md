# Lakshitha Wijerathne - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring dark/light mode toggle and smooth animations.

## 🚀 Features

- **Modern Design**: Clean and professional UI design based on contemporary portfolio trends
- **Dark/Light Mode**: Toggle between dark and light themes with system preference detection
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Interactive Sections**: 
  - Hero section with animated background
  - About section with personal info and skills
  - Services showcase
  - Portfolio projects with filtering
  - Contact form with validation
- **Performance Optimized**: Built with Vite for fast development and optimal bundle size

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: Framer Motion
- **Icons**: Heroicons & Lucide React
- **Routing**: React Router DOM
- **Language**: JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lakshitha-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header with theme toggle
│   │   └── Footer.jsx          # Footer with contact info
│   └── sections/
│       ├── Hero.jsx            # Landing section
│       ├── About.jsx           # About me and skills
│       ├── Services.jsx        # Services offered
│       ├── Portfolio.jsx       # Projects showcase
│       └── Contact.jsx         # Contact form and info
├── context/
│   └── ThemeContext.jsx        # Dark/light mode context
├── data/
│   └── portfolioData.js        # All portfolio content data
├── hooks/                      # Custom React hooks
├── utils/                      # Utility functions
└── assets/                     # Static assets
```

## 🎨 Customization

### Personal Information
Update your personal details in `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Projects
Add your projects to the `projects` array in `src/data/portfolioData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    github: "https://github.com/username/repo",
    category: "web", // or "mobile"
    // ... other details
  }
];
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using:
- Tailwind CSS dark mode classes
- React Context for state management
- Local storage for preference persistence
- System preference detection

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📞 Contact

Lakshitha Wijerathne - [mlswijerathne@gmail.com](mailto:mlswijerathne@gmail.com)

---

⭐ Star this repository if you found it helpful!
