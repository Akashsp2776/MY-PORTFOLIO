export const personal = {
  name: 'Akash SP',
  title: 'Computer Science Engineering Student',
  email: 'akashsp1971@gmail.com',
  phone: '+91 9686336227',
  location: 'Tarikere, Chikkamagalur · Bengaluru, Karnataka',
  github: 'https://github.com/Akashsp2776',
  linkedin: 'https://linkedin.com/in/akash-sp',
  university: 'Presidency University, Bengaluru',
  tagline: 'Building software that solves real-world problems.',
  summary:
    "I'm a second-year CSE student at Presidency University with strong skills in Java, C, and full-stack development. I've built impactful projects in AI and cybersecurity, including a secure voting system and an IoT-based water monitoring solution. I bring a solid foundation in coding, problem-solving, and a passion for using technology to drive real-world innovation.",
  roles: [
    'Computer Science Engineering Student',
    'Full Stack Developer',
    'Java Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Open to Software Engineering Internships',
  ],
}

export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  longDesc: string
  tech: string[]
  category: 'Web' | 'Security' | 'IoT' | 'UI'
  status: 'Completed' | 'In Progress' | 'Planning'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  highlights: string[]
  image: string
  accent: string
  github: string
  demo: string
  features: string[]
  challenges: { challenge: string; solution: string }[]
  learnings: string[]
  futureImprovements: string[]
  timeline: { phase: string; duration: string }[]
  architecture: string
}

export const projects: Project[] = [
  {
    id: 'secure-voting',
    title: 'Secure Voting System',
    tagline: 'Cryptographically secure online voting with SHA-256 hashing',
    description:
      'An online voting system with SHA-256 password hashing ensuring vote integrity, one-vote-per-user enforcement, and secure user authentication.',
    longDesc:
      'Designed and developed to ensure voting security and integrity for small elections or polls. Implements industry-standard cryptography to protect user data and prevent tampering.',
    tech: ['Python', 'HTML', 'CSS', 'SHA-256', 'Authentication'],
    category: 'Security',
    status: 'Completed',
    difficulty: 'Advanced',
    highlights: [
      'SHA-256 password hashing for secure credential storage',
      'One vote per user strictly enforced',
      'Only registered users can vote',
      'Clean polling interface',
    ],
    image:
      'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#7c3aed',
    github: 'https://github.com/Akashsp2776/secure-voting-system',
    demo: '#',
    features: [
      'Secure user registration & login',
      'SHA-256 password hashing',
      'One-vote-per-user enforcement',
      'Real-time vote counting',
      'Responsive polling UI',
    ],
    challenges: [
      {
        challenge: 'Implementing cryptographic hashing without backend frameworks',
        solution: 'Used Python hashlib to implement SHA-256 hashing from scratch, ensuring passwords were never stored in plaintext.',
      },
      {
        challenge: 'Preventing duplicate votes with minimal database',
        solution: 'Maintained a voted-users set checked before each ballot submission, rejecting duplicates at the application layer.',
      },
    ],
    learnings: [
      'Cryptography fundamentals in web security',
      'Authentication flow design',
      'Cybersecurity best practices',
    ],
    futureImprovements: [
      'Add blockchain-based vote verification',
      'Implement biometric voter authentication',
      'Build real-time results dashboard',
    ],
    timeline: [
      { phase: 'Research & Design', duration: '1 week' },
      { phase: 'Core Development', duration: '2 weeks' },
      { phase: 'Security Testing', duration: '1 week' },
    ],
    architecture: 'Client → Python Flask Server → SQLite DB (SHA-256 hashed credentials)',
  },
  {
    id: 'water-detection',
    title: 'Water Turbidity & Leakage Detection',
    tagline: 'IoT-powered real-time water quality monitoring across environments',
    description:
      'IoT system using Arduino and Raspberry Pi with Python and Java to monitor water quality and detect leakage in real time across industrial and smart-building environments.',
    longDesc:
      'A hardware-software IoT solution targeting water quality monitoring in treatment plants, industrial waste management, offices, smart buildings, and water tanks.',
    tech: ['Arduino', 'Raspberry Pi', 'Python', 'Java', 'IoT', 'Sensors'],
    category: 'IoT',
    status: 'Completed',
    difficulty: 'Advanced',
    highlights: [
      'Real-time turbidity & leakage detection',
      'Arduino + Raspberry Pi hardware integration',
      'Python & Java sensor data processing',
      'Smart building IoT applications',
    ],
    image:
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#0891b2',
    github: '#',
    demo: '#',
    features: [
      'Live sensor data monitoring',
      'Turbidity threshold alerts',
      'Leakage detection algorithms',
      'Multi-environment deployment',
      'Data logging & reporting',
    ],
    challenges: [
      {
        challenge: 'Hardware-software integration across platforms',
        solution: 'Used serial communication between Arduino and Raspberry Pi, with Python processing sensor data and Java handling alert logic.',
      },
      {
        challenge: 'Sensor calibration for accuracy',
        solution: 'Implemented a calibration routine that baselined sensor readings against known water samples before deployment.',
      },
    ],
    learnings: [
      'IoT system architecture',
      'Hardware-software interfacing',
      'Real-time data processing',
    ],
    futureImprovements: [
      'Cloud dashboard for remote monitoring',
      'Machine learning for predictive maintenance',
      'Mobile app with push notifications',
    ],
    timeline: [
      { phase: 'Hardware Setup', duration: '2 weeks' },
      { phase: 'Software Development', duration: '3 weeks' },
      { phase: 'Testing & Deployment', duration: '1 week' },
    ],
    architecture: 'Sensors → Arduino → Raspberry Pi (Python/Java) → Alert System',
  },
  {
    id: 'booking-system',
    title: 'Teacher–Student Booking Appointment',
    tagline: 'Intuitive scheduling system for academic appointments',
    description:
      'An intuitive scheduling system allowing students to book appointments with teachers by selecting teacher, date, and time slot — with confirmation popup.',
    longDesc:
      'Streamlines teacher–student scheduling with a clean, responsive booking interface. Designed to reduce scheduling conflicts and improve communication.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    status: 'In Progress',
    difficulty: 'Intermediate',
    highlights: [
      'Teacher selection interface',
      'Interactive date & time slot picker',
      'Booking confirmation popup',
      'Responsive across devices',
    ],
    image:
      'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#2563eb',
    github: '#',
    demo: '#',
    features: [
      'Teacher directory & selection',
      'Date picker with availability',
      'Time slot management',
      'Confirmation modal',
      'Responsive UI',
    ],
    challenges: [
      {
        challenge: 'Dynamic time slot rendering without a backend',
        solution: 'Used vanilla JavaScript to dynamically generate time slot DOM elements based on selected teacher and date.',
      },
      {
        challenge: 'State management in vanilla JS',
        solution: 'Implemented a lightweight state object pattern to track selected teacher, date, and slot across the booking flow.',
      },
    ],
    learnings: [
      'DOM manipulation best practices',
      'UX design for scheduling flows',
      'Responsive CSS layouts',
    ],
    futureImprovements: [
      'User Authentication (JWT)',
      'Node.js + Express Backend',
      'Email Notifications',
      'Admin Dashboard',
      'MongoDB Database Integration',
    ],
    timeline: [
      { phase: 'UI Design', duration: '1 week' },
      { phase: 'Frontend Development', duration: '2 weeks' },
      { phase: 'Backend Integration (ongoing)', duration: 'In progress' },
    ],
    architecture: 'Browser → JavaScript State → DOM Render (planned: React + Node.js + MongoDB)',
  },
  {
    id: 'catering-system',
    title: 'Catering Reservation & Ordering System',
    tagline: 'Full catering platform with reservations, ordering, and payments',
    description:
      'Full catering platform with reservation form, food ordering with quantities, and multiple payment methods (Cash, UPI, Card) in a responsive interface.',
    longDesc:
      'A complete catering management solution for event planning — from capturing guest details to food selection and payment collection.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    status: 'Completed',
    difficulty: 'Intermediate',
    highlights: [
      'Reservation form with event details',
      'Multi-item food ordering with quantities',
      'Cash, UPI, and Card payment options',
      'Responsive design',
    ],
    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#d97706',
    github: '#',
    demo: '#',
    features: [
      'Reservation form (event type, date, guest count)',
      'Food ordering with quantity controls',
      'Multiple payment method selection',
      'Order summary & confirmation',
      'Mobile-first responsive design',
    ],
    challenges: [
      {
        challenge: 'Managing complex form state across multiple sections',
        solution: 'Structured the form into discrete sections (reservation, menu, payment) each with isolated state, merged at submission.',
      },
      {
        challenge: 'Building a cart-like food ordering flow without frameworks',
        solution: 'Created a JavaScript cart module that tracked items, quantities, and totals with real-time DOM updates.',
      },
    ],
    learnings: [
      'Multi-step form UX patterns',
      'JavaScript state management',
      'Payment flow design',
    ],
    futureImprovements: [
      'Backend with order management database',
      'Admin dashboard for catering staff',
      'Integration with payment gateways',
    ],
    timeline: [
      { phase: 'Design & Planning', duration: '1 week' },
      { phase: 'Development', duration: '2 weeks' },
      { phase: 'Testing & Polish', duration: '3 days' },
    ],
    architecture: 'Browser → JavaScript Cart Module → DOM Render (multi-section form)',
  },
  {
    id: 'image-slider',
    title: 'Interactive Image Slider',
    tagline: 'Smooth, responsive slider with auto-play and touch support',
    description:
      'A smooth, responsive image slider with manual and auto-play controls, transitions, and keyboard navigation built purely with HTML, CSS, and JavaScript.',
    longDesc:
      'A lightweight, framework-free image slider demonstrating mastery of CSS transitions and vanilla JavaScript DOM manipulation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'UI',
    status: 'Completed',
    difficulty: 'Beginner',
    highlights: [
      'Smooth CSS slide animations',
      'Auto-play with pause on hover',
      'Dot navigation indicators',
      'Fully responsive',
    ],
    image:
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    accent: '#059669',
    github: '#',
    demo: '#',
    features: [
      'Auto-play with configurable interval',
      'Manual prev/next controls',
      'Dot indicator navigation',
      'Touch/swipe support',
      'Responsive for all screen sizes',
    ],
    challenges: [
      {
        challenge: 'Smooth animation timing without JavaScript animation libraries',
        solution: 'Used CSS transition with cubic-bezier easing for slide transforms, triggered by class toggling in JavaScript.',
      },
    ],
    learnings: [
      'CSS transition mastery',
      'Vanilla JS event handling',
      'Responsive UI without frameworks',
    ],
    futureImprovements: [
      'Add lazy loading for images',
      'Implement keyboard arrow navigation',
      'Add thumbnail strip navigation',
    ],
    timeline: [
      { phase: 'Build', duration: '2 days' },
      { phase: 'Animation Polish', duration: '1 day' },
    ],
    architecture: 'Browser → JavaScript Slide Controller → CSS Transition → DOM',
  },
]

export type SkillGroup = {
  id: string
  label: string
  color: string
  glow: string
  icon: string
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.4)',
    icon: '🌐',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.4)',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Express.js', level: 65 },
      { name: 'REST APIs', level: 72 },
    ],
  },
  {
    id: 'languages',
    label: 'Programming Languages',
    color: '#0891b2',
    glow: 'rgba(8,145,178,0.4)',
    icon: '💻',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Advanced Java', level: 78 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 75 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    color: '#059669',
    glow: 'rgba(5,150,105,0.4)',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 78 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    color: '#d97706',
    glow: 'rgba(217,119,6,0.4)',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'IntelliJ IDEA', level: 80 },
      { name: 'GitHub Actions', level: 60 },
      { name: 'Figma', level: 70 },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.4)',
    icon: '🤖',
    skills: [
      { name: 'ChatGPT', level: 88 },
      { name: 'GitHub Copilot', level: 82 },
      { name: 'Generative AI', level: 75 },
      { name: 'Prompt Engineering', level: 78 },
    ],
  },
]

export const experiences = [
  {
    id: 'internpe',
    company: 'INTERNPE',
    role: 'Java Developer Intern',
    period: 'July 2024 – April 2025',
    type: 'Internship',
    color: '#7c3aed',
    highlights: [
      'Developed and optimized Java-based applications using OOP, improving system performance and real-world coding standards in a collaborative environment.',
      'Worked with Git, MySQL, and IntelliJ IDEA to debug, test, and deploy scalable solutions — hands-on experience in backend logic, database connectivity, and version control.',
      'Contributed to agile team sprints, participated in code reviews, and implemented new features that enhanced app functionality.',
    ],
  },
  {
    id: 'unifiedmentor',
    company: 'Unified Mentor Private Limited',
    role: 'Software Engineering Intern',
    period: '2024',
    type: 'Internship',
    color: '#2563eb',
    highlights: [
      'Gained practical software engineering experience working on real-world projects.',
      'Applied Java and web development skills in a professional team setting.',
    ],
  },
]

export const education = [
  {
    id: 'btech',
    institution: 'Presidency University, Bengaluru',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    period: '2023 – 2027',
    status: 'Current',
    color: '#2563eb',
    highlights: ['Full Stack Development', 'Data Structures & Algorithms', 'Java & OOP', 'Database Systems'],
  },
  {
    id: 'pu',
    institution: 'PACE UM PU COLLEGE, Shivamogga',
    degree: 'Senior Secondary (12th)',
    field: 'Science — PCMB',
    period: '2021 – 2023',
    status: 'Completed',
    color: '#7c3aed',
    highlights: ['Percentage: 91.5%'],
  },
  {
    id: 'school',
    institution: 'Sharadha Residential School',
    degree: 'Higher Secondary (10th)',
    field: '',
    period: '2018 – 2021',
    status: 'Completed',
    color: '#0891b2',
    highlights: ['Percentage: 90.36%'],
  },
]

export const certifications = [
  { id: 'c1', title: 'Certification of Excellence — Python', issuer: 'Great Learning', category: 'Programming', color: '#2563eb', icon: '🐍' },
  { id: 'c2', title: 'Certification of Excellence — Java Programming', issuer: 'Great Learning', category: 'Programming', color: '#7c3aed', icon: '☕' },
  { id: 'c3', title: 'Certification of Distinction — Pre University Education', issuer: 'Academic Achievement', category: 'Academic', color: '#d97706', icon: '🏆' },
  { id: 'c4', title: 'AI Tools and ChatGPT', issuer: 'be10x', category: 'AI', color: '#0891b2', icon: '🤖' },
  { id: 'c5', title: 'What is Generative AI', issuer: 'Generative AI Certification', category: 'AI', color: '#059669', icon: '✨' },
  { id: 'c6', title: 'Ethics in Generative AI', issuer: 'Generative AI Certification', category: 'AI', color: '#059669', icon: '⚖️' },
]

export const techJourney = [
  { year: '2020', tech: 'C', icon: '🔤', desc: 'Started programming fundamentals' },
  { year: '2021', tech: 'Java', icon: '☕', desc: 'Object-Oriented Programming & Core Java' },
  { year: '2022', tech: 'Python', icon: '🐍', desc: 'Scripting, automation & data projects' },
  { year: '2022', tech: 'HTML & CSS', icon: '🌐', desc: 'Web foundations & responsive design' },
  { year: '2023', tech: 'JavaScript', icon: '⚡', desc: 'Dynamic UIs & DOM manipulation' },
  { year: '2023', tech: 'Git & GitHub', icon: '🔗', desc: 'Version control & open source' },
  { year: '2023', tech: 'MySQL', icon: '🗄️', desc: 'Relational databases & SQL queries' },
  { year: '2024', tech: 'Advanced Java', icon: '🚀', desc: 'JDBC, Multithreading & Collections' },
  { year: '2024', tech: 'Node.js', icon: '💚', desc: 'Backend development & REST APIs' },
  { year: '2024', tech: 'React', icon: '⚛️', desc: 'Component-based frontend architecture' },
  { year: '2024', tech: 'AI Tools', icon: '🤖', desc: 'ChatGPT, Copilot & Generative AI' },
  { year: '2025', tech: 'Full Stack', icon: '🏗️', desc: 'End-to-end product development' },
]

export const currentlyBuilding = [
  {
    id: 'cb1',
    title: 'Teacher–Student Booking Appointment v2',
    progress: 45,
    description: 'Adding authentication, backend, notifications, and an admin dashboard.',
    upcoming: [
      'User Authentication (JWT)',
      'Node.js + Express Backend',
      'Email Notifications',
      'Admin Dashboard',
      'MongoDB Database Integration',
    ],
    eta: 'Q3 2025',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
  },
]

export const stats = [
  { label: 'Projects Built', value: 5, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'Certifications', value: 6, suffix: '' },
  { label: 'Internship Months', value: 10, suffix: '' },
]

export const learningJourney = [
  { year: '2020', title: 'Started Programming', desc: 'Began with C — learned loops, functions, and pointers.', color: '#2563eb' },
  { year: '2021', title: 'Discovered Java', desc: 'Fell in love with OOP, collections, and multithreading.', color: '#7c3aed' },
  { year: '2022', title: 'Explored Python & Web', desc: 'Built automation scripts and learned HTML/CSS foundations.', color: '#0891b2' },
  { year: '2023', title: 'Full Stack Journey Begins', desc: 'Mastered JavaScript, Git, MySQL, and started React.', color: '#059669' },
  { year: '2024', title: 'Internships & AI', desc: 'Java Developer Intern at INTERNPE, explored AI tools and generative AI.', color: '#d97706' },
  { year: '2025', title: 'Engineering at Scale', desc: 'Building full-stack products, contributing to open source, seeking top internships.', color: '#a855f7' },
]
