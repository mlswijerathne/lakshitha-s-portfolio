export const personalInfo = {
  name: "Lakshitha Wijerathne",
  title: "Computer Science Undergraduate",
  location: "Sri Lanka",
  email: "mlswijerathne@gmail.com",
  phone: "+94 766298167",
  github: "https://github.com/lakshitha-wijerathne",
  linkedin: "https://linkedin.com/in/lakshitha-wijerathne",
  medium: "https://medium.com/@lakshitha-wijerathne",
  objective: "I'm a computer science student with a strong interest in mathematics, data structures and algorithms, as well as both backend and frontend development. I've worked on several projects that have helped me build real-world coding experience and problem-solving skills. I look forward to applying my knowledge, continuing to learn, and growing as a developer through new opportunities and collaborations",
  experience: "3+ Years",
  completedProjects: "6+",
  happyCustomers: "98%"
};

export const education = [
  {
    degree: "BSC (Hons) in Computer Science - UGC (Reading)",
    institution: "NSBM Green University - Sri Lanka",
    gpa: "3.61",
    duration: "Current",
    description: "Current GPA – 3.61"
  },
  {
    degree: "G.C.E. O/L and A/L Examination", 
    institution: "St. Thomas' College - Matale, Sri Lanka",
    result: "Physical Science Stream (Result - CSS)",
    duration: "2012 – 2020"
  }
];

export const skills = {
  technical: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "React.js", level: 85 },
    { name: "Java", level: 80 },
    { name: "C#", level: 75 },
    { name: "Python", level: 82 },
    { name: "Dart/Flutter", level: 78 },
    { name: "ASP.NET", level: 75 },
    { name: "Firebase", level: 80 },
    { name: "SQL Server", level: 85 },
    { name: "Git/GitHub", level: 88 }
  ],
  categories: {
    "Programming Languages": ["HTML", "CSS", "JavaScript", "Java", "C", "C#", "Python", "Dart"],
    "Frameworks": ["ASP .NET", "Python Flask", "React.js"],
    "Web Development Technologies": ["RESTfull API", "REST API", "Web API"],
    "Mobile Application Development Technologies & Frameworks": ["Flutter", "Firebase", "API Integration"],
    "Tools": ["VScode", "Intellij Idea"],
    "Database Development": ["Firebase", "SQL Server Management", "MySQL"],
    "Version Control": ["Git", "GitHub"],
    "Concepts": ["Software Development Life Cycle (SDLC)", "Object-Oriented Programming (OOP)", "Mobile App Development Principles", "Agile Methodology"],
    "UI/UX": ["Canva", "Figma"],
    "Soft Skills": ["Leadership", "Time management", "Communication", "Self-Learner", "Problem-Solving", "Time Management", "Team Work"]
  }
};

export const projects = [
  {
    id: 1,
    title: "Online Auction Management System",
    year: "2024",
    description: "Developed a secure, real-time auction platform supporting user registration/login, live bidding, profile and bid management, and Stripe-integrated payments. Built robust admin tools for auction creation, user management, analytics monitoring, and payment oversight.",
    technologies: ["React", "Material-UI", "Tailwind CSS", "ASP.NET Core", "Entity Framework Core", "SQL Server", "JWT", "Stripe", "RESTful APIs"],
    github: "https://github.com/mlswijerathne/AuctionManagement/blob/main/README.md",
    category: "web",
    image: "/project-auction.jpg"
  },
  {
    id: 2,
    title: "Inventory Management System",
    year: "2025",
    description: "Developed a comprehensive inventory management solution using Flask API and React frontend with real-time stock tracking, purchase/sales management, low stock alerts, business intelligence dashboard, and modular architecture supporting full responsive UI.",
    technologies: ["React", "Tailwind CSS", "Axios", "Chart.js", "HeroIcons", "Vite", "Python Flask", "SQL Server", "pyodbc", "Flask-CORS"],
    github: "https://github.com/mlswijerathne/InventryManagementSystem/blob/main/README.md",
    category: "web",
    type: "Group Project",
    image: "/project-inventory.jpg"
  },
  {
    id: 3,
    title: "Waste Management System",
    year: "2024",
    description: "Developed a comprehensive Flutter mobile platform connecting residents, drivers, and city management through real-time location-aware waste collection services, featuring issue reporting, route management, vehicle tracking, special pickup requests, and administrative analytics dashboard.",
    technologies: ["Flutter (Dart)", "Firebase", "Google Maps SDK", "Geolocator", "Provider (State Management)"],
    github: "https://github.com/mlswijerathne/Waste-Management-System/blob/main/README.md",
    category: "mobile",
    image: "/project-waste.jpg"
  },
  {
    id: 4,
    title: "Finance Management System",
    year: "2024",
    description: "Developed a comprehensive web platform featuring AI-powered financial advice, real-time income/expense tracking and visualization, subscription management, savings goal setting, secure authentication, and automated payment reminders with personalized financial insights.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "React Router", "Joi (data validation)", "Axios"],
    github: "https://github.com/mlswijerathne/financeManagement/blob/test/README.md",
    category: "web",
    type: "Group Project",
    contribution: "Developed and integrated RESTful APIs between the frontend and backend using Axios for seamless data flow",
    image: "/project-finance.jpg"
  },
  {
    id: 5,
    title: "Food Order App",
    year: "2024",
    description: "Built a feature-rich mobile food ordering app using Flutter and Firebase, offering smooth navigation, real-time updates, secure authentication, order tracking, cart management, and a dedicated admin dashboard for restaurant-side operations.",
    technologies: ["Flutter (Dart)", "Firebase", "Firestore", "Firebase Authentication", "Cloud Functions", "Provider"],
    github: "https://github.com/mlswijerathne/food-order-app/blob/main/README.md",
    category: "mobile",
    image: "/project-foodorder.jpg"
  },
  {
    id: 6,
    title: "Oasis Protocol Platform",
    year: "2025",
    description: "Developed during Duothan 5.0 hackathon, this full-stack web platform enables management of algorithmic contests, team hackathons, and buildathons. Features include secure authentication, real-time leaderboards, automated code evaluation, role-based access, collaboration tools, and an advanced admin dashboard for event control and monitoring.",
    technologies: ["ASP.NET Core 8.0", "Entity Framework Core", "SQL Server", "React 19.1", "Tailwind CSS", "JWT", "Axios", "Recharts", "Framer Motion"],
    github: "https://github.com/mlswijerathne/oasis-protocol-platform/blob/main/README.md", // Change if actual repo differs
    category: "web",
    image: "/project-oasis.jpg"
  },


];

export const services = [
  {
    title: "Website Design & Development",
    description: "Our approach to website design is to create a website that strengthens your company's brand while ensuring ease of use and simplicity for your audience.",
    icon: "💻"
  },
  {
    title: "Website Development",
    description: "We develop professional and creative websites that meet your business requirements using the latest technologies and best practices.",
    icon: "🌐"
  },
  {
    title: "Logo Design",
    description: "Our goal is to design a professional and creative logo that makes your company's business stand out from the competition.",
    icon: "🎨"
  },
  {
    title: "Responsive Web Design",
    description: "Creating responsive websites that work perfectly on all devices and provide an optimal user experience across all platforms.",
    icon: "📱"
  }
];

export const achievements = [
  {
    title: "Eastern Cadet Band Member",
    organization: "St. Thomas' College, Matale",
    achievement: "All Island 2nd Runners Up (2019) and Band Leader (2020)",
    year: "2019-2020"
  },
  {
    title: "Duothon 5.0 Inter University Coding Competition",
    organization: "IEEE Student Branch NSBM",
    achievement: "Secured 5th place as Team 404_NotFound member",
    year: "July 2025"
  }
];

export const interests = {
  "AI & Machine Learning": [
    "Artificial Intelligence",
    "Machine Learning", 
    "Natural Language Processing",
    "Computer Vision",
    "Reinforcement Learning"
  ],
  "Security & Systems": [
    "Cybersecurity",
    "Information Security Analysis",
    "Computer Networks",
    "Embedded Systems",
    "Blockchain Technology"
  ],
  "Development": [
    "Software Engineering",
    "Web Development",
    "Mobile Computing",
    "Game Development",
    "UX/UI Design"
  ],
  "Data & Computing": [
    "Data Structures & Databases",
    "Cloud Computing",
    "Scientific Computing",
    "Algorithms & Computing Theory",
    "Bioinformatics"
  ]
};

export const references = [
  {
    name: "Pavithra Kankanamge",
    title: "Senior Lecturer",
    organization: "NSBM Green University - Sri Lanka",
    phone: "(+94)11 544 5000",
    email: "pavithras@nsbm.ac.lk"
  },
  {
    name: "Chinthaka Aravinda Hewage",
    title: "Director QA | UX & Frontend Framework",
    organization: "IFS (Industrial and Financial Systems)",
    address: "18th Floor, Orion Towers 1, 736 Dr. Danister De Silva Mawatha, Colombo 00900, SRI LANKA",
    phone: "(+94)77 058 8019",
    email: "greathew@gmail.com"
  }
];
