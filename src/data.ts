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
    'Full Stack Developer',
    'Java Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Backend Engineer',
    'CS Engineering Student',
  ],
}

export type Project = {
  id: string
  title: string
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
  challenges: string[]
  learnings: string[]
}

export const projects: Project[] = [
  {
    id: 'secure-voting',
    title: 'Secure Voting System',
    description:
      'An online voting system with SHA-256 password hashing ensuring vote integrity, one-vote-per-user enforcement, and secure user authentication.',
    longDesc:
      'Designed and developed to ensure voting security and integrity for small elections or polls. Implements industry-standard cryptography to protect user data.',
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
      'Implementing cryptographic hashing without backend frameworks',
      'Preventing duplicate votes with minimal database',
    ],
    learnings: [
      'Cryptography fundamentals in web security',
      'Authentication flow design',
      'Cybersecurity best practices',
    ],
  },
  {
    id: 'water-detection',
    title: 'Water Turbidity & Leakage Detection',
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
      'Hardware-software integration across platforms',
      'Sensor calibration for accuracy',
    ],
    learnings: [
      'IoT system architecture',
      'Hardware-software interfacing',
      'Real-time data processing',
    ],
  },
  {
    id: 'booking-system',
    title: 'Teacher–Student Booking Appointment',
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
      'Dynamic time slot rendering without a backend',
      'State management in vanilla JS',
    ],
    learnings: [
      'DOM manipulation best practices',
      'UX design for scheduling flows',
      'Responsive CSS layouts',
    ],
  },
  {
    id: 'catering-system',
    title: 'Catering Reservation & Ordering System',
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
      'Managing complex form state across multiple sections',
      'Building a cart-like food ordering flow without frameworks',
    ],
    learnings: [
      'Multi-step form UX patterns',
      'JavaScript state management',
      'Payment flow design',
    ],
  },
  {
    id: 'image-slider',
    title: 'Interactive Image Slider',
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
    challenges: ['Smooth animation timing without JavaScript animation libraries'],
    learnings: [
      'CSS transition mastery',
      'Vanilla JS event handling',
      'Responsive UI without frameworks',
    ],
  },
]

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#2563eb',
    glow: 'rgba(37,99,235,0.4)',
    icon: '🌐',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.4)',
    icon: '⚙️',
    skills: ['Java', 'Advanced Java', 'Python', 'Node.js', 'Express.js', 'C'],
  },
  {
    id: 'database',
    label: 'Database',
    color: '#0891b2',
    glow: 'rgba(8,145,178,0.4)',
    icon: '🗄️',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    color: '#059669',
    glow: 'rgba(5,150,105,0.4)',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'GitHub Copilot', 'Figma', 'Canva', 'GitHub Actions'],
  },
  {
    id: 'other',
    label: 'Methodologies',
    color: '#d97706',
    glow: 'rgba(217,119,6,0.4)',
    icon: '📐',
    skills: ['Agile', 'Scrum', 'Test Planning', 'Defect Tracking', 'API Testing', 'R Studio'],
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
  {
    id: 'c1',
    title: 'Certification of Excellence — Python',
    issuer: 'Great Learning',
    category: 'Programming',
    color: '#2563eb',
    icon: '🐍',
  },
  {
    id: 'c2',
    title: 'Certification of Excellence — Java Programming',
    issuer: 'Great Learning',
    category: 'Programming',
    color: '#7c3aed',
    icon: '☕',
  },
  {
    id: 'c3',
    title: 'Certification of Distinction — Pre University Education',
    issuer: 'Academic Achievement',
    category: 'Academic',
    color: '#d97706',
    icon: '🏆',
  },
  {
    id: 'c4',
    title: 'AI Tools and ChatGPT',
    issuer: 'be10x',
    category: 'AI',
    color: '#0891b2',
    icon: '🤖',
  },
  {
    id: 'c5',
    title: 'What is Generative AI',
    issuer: 'Generative AI Certification',
    category: 'AI',
    color: '#059669',
    icon: '✨',
  },
  {
    id: 'c6',
    title: 'Ethics in Generative AI',
    issuer: 'Generative AI Certification',
    category: 'AI',
    color: '#059669',
    icon: '⚖️',
  },
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
