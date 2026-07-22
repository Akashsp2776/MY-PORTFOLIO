export interface TechStackItem { name: string; role: string; }
export interface TimelinePhase { phase: string; duration: string; tasks: string[]; }
export interface ChallengeItem { challenge: string; solution: string; }

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  objectives: string[];
  solution: string;
  techStack: TechStackItem[];
  architecture: string;
  features: string[];
  timeline: TimelinePhase[];
  challenges: ChallengeItem[];
  lessons: string[];
  futureImprovements: string[];
  technologies: string[];
  status: string;
  difficulty: string;
  image: string;
  github?: string;
  liveDemo?: string;
}

export const profile = {
  name: 'Akash SP',
  firstName: 'Akash',
  lastName: 'SP',
  roles: ['Full Stack Developer', 'Java Engineer', 'AI Enthusiast', 'Problem Solver'],
  rolesDisplay: 'FULL STACK DEVELOPER / JAVA ENGINEER / AI ENTHUSIAST',
  summary: 'Building premium software experiences with modern web technologies, scalable Java systems, and AI-driven solutions.',
  email: 'akashsp.dev@gmail.com',
  phone: '+91 90000 00000',
  github: 'https://github.com/akashsp',
  linkedin: 'https://linkedin.com/in/akashsp',
  resume: '#',
  location: 'Bengaluru, Karnataka, India',
};

export const about = {
  whoIAm: "I'm a final-year Computer Science Engineering student who loves turning ideas into working software. From building full-stack web applications to experimenting with machine learning models, I thrive at the intersection of engineering and creativity.",
  whatIDo: "I specialize in backend systems with Java and Spring Boot, craft responsive frontends with React, and explore AI/ML to solve real-world problems. I believe in writing code that is not just functional but maintainable, tested, and well-documented.",
  philosophy: "Software engineering is about people, not just code. Every line I write is aimed at making someone's life easier — whether it's a user interacting with an interface or a developer reading my code six months later.",
  stats: [
    { label: 'Years Coding', value: '4+' },
    { label: 'Projects Built', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Cups of Coffee', value: '∞' },
  ],
};

export const skillCategories = [
  {
    name: 'Languages',
    icon: 'Code',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'SQL', level: 75 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'Redux', level: 75 },
      { name: 'Framer Motion', level: 72 },
    ],
  },
  {
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Spring Boot', level: 82 },
      { name: 'Node.js/Express', level: 78 },
      { name: 'REST APIs', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    name: 'AI/ML & Cloud',
    icon: 'Atom',
    skills: [
      { name: 'TensorFlow', level: 65 },
      { name: 'Scikit-learn', level: 70 },
      { name: 'Docker', level: 62 },
      { name: 'AWS', level: 55 },
      { name: 'Git/GitHub', level: 90 },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'smart-attendance-system',
    title: 'Smart Attendance System',
    shortDescription: 'AI-powered face recognition attendance system with real-time detection and automated reporting.',
    overview: 'A computer vision-based attendance system that uses facial recognition to automatically mark attendance in classrooms and workplaces. The system processes live video feeds, identifies individuals in real-time, and maintains a secure, tamper-proof attendance log with an intuitive dashboard for administrators.',
    problem: 'Traditional attendance systems are manual, time-consuming, and prone to proxy attendance. Institutions needed a contactless, automated solution that is both accurate and respects privacy concerns.',
    objectives: [
      'Achieve 95%+ facial recognition accuracy in varied lighting conditions',
      'Process video feeds in real-time with minimal latency',
      'Build a clean admin dashboard for attendance management',
      'Ensure data privacy through on-device processing where possible',
    ],
    solution: 'Built a Python-based system using OpenCV for face detection and a pre-trained deep learning model for recognition. The backend runs on Flask with a PostgreSQL database for attendance records. A React frontend provides administrators with real-time monitoring, analytics, and exportable reports.',
    techStack: [
      { name: 'Python', role: 'Core logic' },
      { name: 'OpenCV', role: 'Face detection' },
      { name: 'Flask', role: 'Backend API' },
      { name: 'React', role: 'Dashboard' },
      { name: 'PostgreSQL', role: 'Database' },
    ],
    architecture: 'Video Capture → Face Detection (Haar Cascade) → Face Recognition (dlib) → Database Logging → REST API → React Dashboard. Each stage runs asynchronously for real-time performance.',
    features: [
      'Real-time face detection and recognition from live video',
      'Automated attendance marking with timestamp logging',
      'Admin dashboard with live monitoring and analytics',
      'CSV/PDF attendance report generation',
      'Student registration with photo capture',
      'Liveness detection to prevent photo spoofing',
    ],
    timeline: [
      { phase: 'Research & Planning', duration: '2 weeks', tasks: ['Literature survey', 'Model selection', 'Architecture design'] },
      { phase: 'Core Development', duration: '4 weeks', tasks: ['Face detection pipeline', 'Recognition model', 'Database schema', 'REST API'] },
      { phase: 'Frontend & Integration', duration: '3 weeks', tasks: ['React dashboard', 'Real-time video stream', 'Report generation', 'Testing'] },
    ],
    challenges: [
      { challenge: 'Low accuracy in poor lighting conditions', solution: 'Implemented histogram equalization and adaptive thresholding as preprocessing steps, improving accuracy from 78% to 96%.' },
      { challenge: 'High latency in real-time video processing', solution: 'Moved face detection to a separate thread and used frame skipping (every 3rd frame), reducing CPU usage by 60% without accuracy loss.' },
      { challenge: 'Preventing proxy attendance using photos', solution: 'Added liveness detection using eye blink analysis to ensure the subject is a live person, not a photograph.' },
    ],
    lessons: [
      'Preprocessing is often more impactful than model selection for computer vision tasks',
      'Threading and frame-skipping are essential for real-time video applications',
      'User privacy must be a first-class concern, not an afterthought',
    ],
    futureImprovements: [
      'Add multi-camera support for larger spaces',
      'Implement cloud-based model training for improved accuracy',
      'Build a mobile app for self-attendance in remote scenarios',
    ],
    technologies: ['Python', 'OpenCV', 'Flask', 'React', 'PostgreSQL'],
    status: 'Completed',
    difficulty: 'Advanced',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/akashsp',
  },
  {
    slug: 'devconnect-platform',
    title: 'DevConnect',
    shortDescription: 'A social platform for developers to showcase projects, collaborate, and find hackathon teammates.',
    overview: 'DevConnect is a full-stack web application where developers create profiles, share projects, find collaborators, and join hackathons. It features real-time chat, project discovery with smart filtering, and a matching algorithm that pairs developers based on complementary skills.',
    problem: 'Developers often struggle to find collaborators with the right skill sets for projects and hackathons. Existing platforms are either too general or lack project-focused collaboration tools.',
    objectives: [
      'Build a developer-first social platform with project portfolios',
      'Implement a skill-based matching algorithm for team formation',
      'Enable real-time communication between collaborators',
      'Create a discovery feed with smart filtering and recommendations',
    ],
    solution: 'Built with the MERN stack. Implemented JWT authentication, real-time messaging with Socket.io, and a recommendation engine that matches developers based on complementary skills and project interests.',
    techStack: [
      { name: 'React', role: 'Frontend' },
      { name: 'Node.js/Express', role: 'Backend' },
      { name: 'MongoDB', role: 'Database' },
      { name: 'Socket.io', role: 'Real-time chat' },
      { name: 'JWT', role: 'Authentication' },
    ],
    architecture: 'Client-server architecture with a RESTful API for CRUD and Socket.io for real-time features. The matching engine runs as a background service computing skill compatibility using weighted cosine similarity.',
    features: [
      'Developer profiles with skill tags and project portfolios',
      'Skill-based teammate matching for hackathons',
      'Real-time direct messaging with Socket.io',
      'Project discovery feed with tech stack filters',
      'Hackathon event listings with team registration',
      'Notification system for collaboration requests',
    ],
    timeline: [
      { phase: 'Design & Prototyping', duration: '2 weeks', tasks: ['UI/UX wireframes', 'API design', 'Database schema'] },
      { phase: 'Backend Development', duration: '3 weeks', tasks: ['Auth system', 'REST API', 'Matching engine', 'Socket.io'] },
      { phase: 'Frontend & Integration', duration: '3 weeks', tasks: ['React components', 'Real-time chat UI', 'Testing', 'Deployment'] },
    ],
    challenges: [
      { challenge: 'Matching algorithm accuracy was low with sparse skill data', solution: 'Implemented a hybrid approach combining cosine similarity with category-based matching, improving relevant matches by 40%.' },
      { challenge: 'Socket.io connection drops on mobile networks', solution: 'Added automatic reconnection with exponential backoff and message queuing, ensuring messages are delivered after temporary disconnections.' },
    ],
    lessons: [
      'Real-time features require careful handling of edge cases (disconnections, partial messages)',
      'A good matching algorithm needs both precision and recall to be useful',
    ],
    futureImprovements: [
      'Add video call integration for remote collaboration',
      'Implement AI-powered project recommendations',
      'Add GitHub contribution graph on profiles',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    status: 'In Progress',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/akashsp',
    liveDemo: '#',
  },
  {
    slug: 'stock-sentiment-analyzer',
    title: 'Stock Sentiment Analyzer',
    shortDescription: 'NLP-powered tool that analyzes financial news sentiment to predict short-term stock movements.',
    overview: 'A machine learning project that scrapes financial news articles, performs sentiment analysis using NLP models, and correlates sentiment scores with stock price movements. The system provides a dashboard with sentiment trends, price predictions, and confidence intervals.',
    problem: 'Individual investors lack access to sophisticated sentiment analysis tools. There was a need for an accessible tool that aggregates news sentiment and presents actionable insights.',
    objectives: [
      'Scrape and process financial news from multiple sources',
      'Achieve 80%+ accuracy in sentiment classification',
      'Correlate sentiment with short-term price movements',
      'Build an intuitive dashboard for non-technical users',
    ],
    solution: 'Used Python with NLTK and VADER for sentiment analysis, yfinance for stock data, and BeautifulSoup for web scraping. Built a Flask API backend with a React frontend dashboard.',
    techStack: [
      { name: 'Python', role: 'Core logic' },
      { name: 'NLTK/VADER', role: 'NLP sentiment' },
      { name: 'Flask', role: 'Backend API' },
      { name: 'React', role: 'Dashboard' },
      { name: 'yfinance', role: 'Stock data' },
    ],
    architecture: 'News Scraper → Preprocessing → Sentiment Analysis → Correlation Engine → Flask API → React Dashboard. Pipeline runs on schedule for fresh data.',
    features: [
      'Real-time sentiment analysis of financial news',
      'Stock price prediction with confidence intervals',
      'Interactive dashboard with sentiment vs. price charts',
      'Customizable watchlist for tracked stocks',
      'Historical sentiment trend analysis',
      'Alert system for significant sentiment shifts',
    ],
    timeline: [
      { phase: 'Research', duration: '1 week', tasks: ['NLP model research', 'Data source identification'] },
      { phase: 'Development', duration: '3 weeks', tasks: ['Scraper', 'Sentiment model', 'Correlation engine', 'API', 'Dashboard'] },
      { phase: 'Testing & Refinement', duration: '1 week', tasks: ['Backtesting', 'UI polish', 'Deployment'] },
    ],
    challenges: [
      { challenge: 'Financial news contained sarcasm and mixed sentiment', solution: 'Fine-tuned VADER with a domain-specific financial lexicon, improving accuracy from 72% to 84% on financial text.' },
      { challenge: 'Scraping rate limits and IP blocks', solution: 'Implemented a rotating proxy pool and rate limiting with exponential backoff.' },
    ],
    lessons: [
      'Domain-specific NLP models significantly outperform general-purpose ones',
      'Rate limiting and respectful scraping practices are essential for sustainability',
    ],
    futureImprovements: [
      'Integrate social media sentiment (Twitter/Reddit)',
      'Add BERT-based models for improved accuracy',
      'Build mobile app with push notifications',
    ],
    technologies: ['Python', 'NLTK', 'Flask', 'React', 'BeautifulSoup'],
    status: 'Completed',
    difficulty: 'Intermediate',
    image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/akashsp',
  },
  {
    slug: 'campus-navigation-ar',
    title: 'Campus Navigator AR',
    shortDescription: 'Augmented reality campus navigation app that overlays directions on live camera feed.',
    overview: 'A mobile AR application that helps students and visitors navigate large college campuses. By pointing their phone camera at buildings, users see overlaid directions, building names, and points of interest.',
    problem: 'New students and visitors often get lost on large campuses. Traditional 2D maps are hard to orient with, and physical signage is inconsistent.',
    objectives: [
      'Build an AR interface that overlays directions on live camera feed',
      'Achieve accurate location tracking within 5 meters',
      'Support offline navigation with cached maps',
    ],
    solution: 'Built with React Native and AR.js. Used device GPS and compass for positioning, with QR code fallback for indoor navigation. Backend provides campus map data through a REST API.',
    techStack: [
      { name: 'React Native', role: 'Mobile app' },
      { name: 'AR.js', role: 'AR layer' },
      { name: 'Node.js', role: 'Backend' },
      { name: 'PostgreSQL', role: 'Map data' },
    ],
    architecture: 'Mobile client fetches map data from backend, caches it locally, and renders AR overlays using device sensors (GPS, compass, accelerometer).',
    features: [
      'AR overlay with directional arrows on live camera feed',
      'Building identification with tap-to-view details',
      'Turn-by-turn walking directions',
      'Offline mode with cached campus maps',
      'QR code scanning for indoor location detection',
    ],
    timeline: [
      { phase: 'Research & Setup', duration: '2 weeks', tasks: ['AR framework evaluation', 'Campus mapping', 'Sensor calibration'] },
      { phase: 'Core Development', duration: '4 weeks', tasks: ['AR rendering', 'Location tracking', 'Backend API', 'Offline caching'] },
      { phase: 'Polish & Testing', duration: '2 weeks', tasks: ['UI polish', 'Field testing', 'Performance optimization'] },
    ],
    challenges: [
      { challenge: 'GPS drift caused AR overlays to misalign with buildings', solution: 'Implemented sensor fusion combining GPS, compass, and accelerometer with a Kalman filter, reducing drift by 70%.' },
      { challenge: 'AR rendering performance on older devices', solution: 'Reduced polygon count in AR markers and implemented level-of-detail rendering, maintaining 30fps on mid-range devices.' },
    ],
    lessons: [
      'Sensor fusion is critical for accurate AR positioning',
      'Performance budgets must account for the lowest-spec target devices',
    ],
    futureImprovements: [
      'Add indoor AR navigation using SLAM',
      'Integrate with campus event schedules',
      'Add multi-language support',
    ],
    technologies: ['React Native', 'AR.js', 'Node.js', 'PostgreSQL'],
    status: 'Planned',
    difficulty: 'Advanced',
    image: 'https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const currentlyBuilding = {
  title: 'CodeCanvas — AI-Powered Code Visualizer',
  description: 'A web tool that takes any GitHub repository and generates interactive, animated visualizations of its architecture — showing how modules connect, data flows through the system, and dependencies interact.',
  progress: 65,
  tech: ['React', 'D3.js', 'Python', 'AST Parsing', 'FastAPI'],
  updates: [
    'Finished the AST parser that extracts module relationships from Python and JavaScript repos',
    'Built the D3.js force-directed graph visualization with zoom and pan',
    'Working on the animation engine that shows data flow through the system',
    'Next: GitHub OAuth integration and repository import pipeline',
  ],
  learnings: [
    'Abstract Syntax Trees are a powerful tool for static code analysis',
    'Force-directed graphs need careful tuning to be both informative and performant',
    'Building a visual tool makes you appreciate good API design even more',
  ],
};

export const techJourney = [
  { year: '2021', title: 'First Line of Code', description: 'Started with C programming in first semester. Built a CLI calculator and fell in love with problem-solving through code.', tech: ['C', 'Linux'] },
  { year: '2022', title: 'Discovering Java & OOP', description: 'Dived deep into Java, Object-Oriented Programming, and Data Structures. Built my first full application — a library management system.', tech: ['Java', 'MySQL', 'Swing'] },
  { year: '2023', title: 'Full Stack & React', description: 'Explored web development with React and Node.js. Built multiple full-stack projects and started contributing to open source.', tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'] },
  { year: '2024', title: 'AI/ML & Advanced Systems', description: 'Ventured into machine learning and AI. Built computer vision and NLP projects. Started exploring system design and cloud architecture.', tech: ['Python', 'TensorFlow', 'Docker', 'AWS'] },
  { year: '2025', title: 'Building & Scaling', description: 'Working on AI-powered developer tools and preparing for software engineering roles. Focused on clean architecture, testing, and scalable systems.', tech: ['Spring Boot', 'Kubernetes', 'FastAPI', 'React'] },
];

export const certifications = [
  { title: 'AWS Certified Solutions Architect — Associate', issuer: 'Amazon Web Services', year: '2024', credentialId: 'AWS-PSA-2024-001', skills: ['Cloud Architecture', 'AWS Services', 'Scalability'] },
  { title: 'Meta Front-End Developer Professional Certificate', issuer: 'Meta (via Coursera)', year: '2023', credentialId: 'META-FED-2023-042', skills: ['React', 'JavaScript', 'UI/UX'] },
  { title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI (via Coursera)', year: '2024', credentialId: 'DLAI-ML-2024-117', skills: ['Machine Learning', 'Neural Networks', 'TensorFlow'] },
  { title: 'Java Full Stack Developer', issuer: 'Udemy', year: '2023', credentialId: 'UDMY-JFS-2023-889', skills: ['Java', 'Spring Boot', 'React'] },
];

export const education = [
  {
    degree: 'B.E. in Computer Science & Engineering',
    institution: 'Visvesvaraya Technological University',
    duration: '2021 — 2025',
    grade: 'CGPA: 8.5/10',
    coursework: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management Systems', 'Computer Networks', 'Machine Learning', 'Software Engineering'],
    highlights: ['Final-year project: AI-powered Smart Attendance System', 'Technical lead for college coding club', 'Organized 2 hackathons with 200+ participants'],
  },
  {
    degree: 'Pre-University (PCMC)',
    institution: 'Government PU College',
    duration: '2019 — 2021',
    grade: 'Percentage: 92%',
    coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    highlights: ['Topper in Computer Science', 'Participated in state-level math olympiad'],
  },
];
