// 💻 Centralized Portfolio Data Configuration
// Edit this file to customize details across the entire portfolio.

export const profile = {
  firstName: 'Lakshay',
  lastName: 'Pahwa',
  fullName: 'Lakshay Pahwa',
  initials: 'LP',
  role: 'Full-Stack Developer',
  location: 'Noida, Uttar Pradesh, India',
  email: 'lakshaypahwa47@gmail.com',
  phone: '+91-6396339806',
  avatar: '/Dp.JPG', // Path relative to public directory (served at root)
  professions: [
    'Full-Stack Developer',
    'React.js • Node.js • MongoDB • MySQL',
    'Open to internships and jobs',
  ],
  bio1: 'Hi, I’m Lakshay Pahwa — a Full-Stack Developer passionate about building high-performance, robust, and scalable web applications. I specialize in the MERN stack, TypeScript, and database optimization, with a strong focus on clean API design and modern UI/UX.',
  bio2: 'I have hands-on experience designing RESTful APIs, implementing real-time communication via WebSockets, and automating test suites. I enjoy resolving performance bottlenecks and building tools that make interaction intuitive and efficient.',
  bio3: 'B.Tech CSE student at BIET Jhansi with hands-on internship experience in API development, authentication architectures, and test automation. Proven problem solver with a LeetCode rating of 1817 (Top 6%) and expertise in JavaScript, Python, and SQL.',
}

export const socialLinks = [
  { img: '/github.png', title: 'GitHub', link: 'https://github.com/pahwajii' },
  { img: '/linkedin.png', title: 'LinkedIn', link: 'https://www.linkedin.com/in/lakshay-pahwa-a45991251' },
  { img: '/gmail.png', title: 'Email', link: 'mailto:lakshaypahwa47@gmail.com' },
  { img: '/whatsapp.png', title: 'WhatsApp', link: 'https://wa.me/+916396339806' },
  { img: '/insta.png', title: 'Instagram', link: 'https://www.instagram.com/_._.lakshayyyyy._._' },
  { img: '/facebook.png', title: 'Facebook', link: 'https://www.facebook.com/lakshaypahwa' },
]

export const leetcodeLink = 'https://leetcode.com/u/pahwajii/'

export const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Bundelkhand Institute of Engineering & Technology (BIET)',
    location: 'Jhansi, Uttar Pradesh, India',
    status: 'Graduated / Final Year',
    gpa: 'CGPA: 8.19/10.00',
    years: '2022 – 2026',
    icon: 'FaUniversity',
  }
]

export const experience = [
  {
    role: 'SDE Intern',
    company: 'Hanabi Technologies',
    duration: 'Dec 2025 – Feb 2026',
    highlights: [
      'Built and deployed 6+ RESTful APIs consumed by React-based client apps; validated endpoint behavior across full request-response cycles using Postman.',
      'Integrated OpenAI content-moderation API (video, audio, text) achieving ~95% classification accuracy with robust error handling and retry logic.',
      'Authored API contracts and 15+ Jest unit/integration test scenarios covering failure paths, supporting CI workflows and continuous code quality standards.'
    ]
  },
  {
    role: 'Developer Intern',
    company: 'Good Dopamine Technologies Pvt. Ltd.',
    duration: 'Nov 2025 – Dec 2025',
    highlights: [
      'Engineered Node.js/Express APIs following MVC architecture for a collaborative video-editor; participated in design reviews and agile sprint planning.',
      'Implemented RBAC permission handling (3 user roles) with detailed access-control logic; maintained documentation to enable team-wide knowledge sharing.'
    ]
  },
  {
    role: 'SDE Intern',
    company: 'Veridia.io',
    duration: 'Sept 2025 – Oct 2025',
    highlights: [
      'Debugged MySQL/MongoDB query patterns and restructured indexing strategies, reducing average query execution time by ~20%.',
      'Identified API performance bottlenecks via structured profiling; applied Redis caching to cut response time by ~15% and documented scalability recommendations.'
    ]
  }
]

export const projects = [
  {
    title: '💼 CareerOS — AI-Powered Job Tracker & Resume Suite',
    desc: 'A production-grade, full-stack career suite featuring a job application CRM (Kanban, List, Calendar, and Analytics views), AI-assisted job description extraction, and an automated headless-Chrome rendering pipeline for generating high-fidelity tailored resumes in PDF, DOCX, and LaTeX formats.',
    ss: '/careeros.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Puppeteer', 'Tailwind CSS', 'Vite', 'Render', 'Vercel'],
    live: 'https://career-os-job-tracker-app.vercel.app/',
    code: 'https://github.com/pahwajii/CareerOs',
  },
  {
    title: '📹 FeedTube — Video & Social Media Platform',
    desc: 'A full-stack media platform featuring video upload & streaming via Multer and Cloudinary, custom playlists, subscription management, and a Twitter-like micro-blogging timeline for real-time user tweets.',
    ss: '/feedtube.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Multer', 'Tailwind CSS'],
    live: 'https://chai-backendd.vercel.app/',
    code: 'https://github.com/pahwajii/chai-backendd',
  },
  {
    title: '📚 Research Paper Reading Tracker',
    desc: 'Full-stack web app with React/TypeScript frontend (Recharts analytics: funnel, scatter, stacked bar) and Node.js/Express REST backend; deployed on Vercel + Render.',
    ss: '/research-paper.png',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'JWT', 'Recharts'],
    live: 'https://research-paper-vert.vercel.app/',
    code: 'https://github.com/pahwajii/research_paper',
  },
  {
    title: '💬 Post-It — Real-Time Social Media Platform',
    desc: 'Built a full-stack social platform with real-time WebSocket messaging (Socket.io), REST API backend, and jQuery/AJAX frontend for zero-reload feed and notification updates.',
    ss: '/postit.png',
    tech: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Socket.io', 'jQuery', 'AJAX', 'HTML', 'CSS'],
    live: 'https://social-web-xi.vercel.app',
    code: 'https://github.com/pahwajii/social_web',
  },
  {
    title: '📊 Gemini Analyst Research Tool',
    desc: 'A web-based document intelligence portal that digests financial earnings transcripts (PDF, DOCX, TXT) using the Gemini LLM. Generates structured, analyst-ready summaries covering tone, confidence levels, key concerns, forward guidance, and growth initiatives, with JSON and CSV exports.',
    ss: '/research-portal.png',
    tech: ['React', 'Node.js', 'Express', 'Gemini API', 'Cloudinary', 'Multer', 'Tailwind CSS'],
    live: 'https://research-tool-chi-nine.vercel.app/',
    code: 'https://github.com/pahwajii/Research_tool',
  },
  {
    title: '🟢 Plinko Lab — Provably Fair Game',
    desc: 'A deterministic 12-row Plinko game implementation built with Next.js and Prisma. Features an interactive visual peg board, bet placing controls with a slider, a provably fair commit-reveal scheme with cryptographic verification, and a live API route for recent round logs.',
    ss: '/plinko-lab.png',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'SQLite', 'Jest'],
    live: 'https://plinko-lab-drab.vercel.app',
    code: 'https://github.com/pahwajii/plinko-lab',
  },
  {
    title: '💳 Subscription-based Payment System (Razorpay)',
    desc: 'Webhook-based payment reconciliation covering full subscription lifecycle; reduced failed-transaction fallthrough by ~40% via Regex-based event classification and retry logic.',
    ss: '/razorpay-integration.png',
    tech: ['Node.js', 'MySQL', 'Razorpay API', 'Webhooks', 'Jest', 'OOP'],
    live: '#',
    code: 'https://github.com/pahwajii/razorpay_integration',
  },
  {
    title: '💼 Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://myweb-gold-seven.vercel.app',
    code: 'https://github.com/pahwajii/Myweb.git',
  },
  {
    title: '🤖 AI Mock — AI Mock Interview Platform',
    desc: 'An interactive AI-powered mock interview platform designed to help job seekers practice and improve their interview skills, featuring AI generated questions, real-time responses, and feedback.',
    ss: '/proj_ai_mock.png',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'PostgreSQL'],
    live: '#',
    code: 'https://github.com/pahwajii/ai-mock',
  },
  {
    title: '🎬 AI Clip Generator',
    desc: 'An AI-powered video/clip generator that supports text-to-image and image-to-image pipeline workflows, transforming static images or text prompts into dynamic animations.',
    ss: '/proj_clip_gen.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vite'],
    live: 'https://ai-clip-generator-two.vercel.app',
    code: 'https://github.com/pahwajii/Ai_clip_generator',
  },
  {
    title: '📚 Book Finder',
    desc: 'A React + Tailwind CSS web application to search, filter, and explore books using the OpenLibrary API, with built-in state management and advanced searching options.',
    ss: '/proj_book_finder.png',
    tech: ['React', 'Tailwind CSS', 'OpenLibrary API', 'JavaScript', 'HTML5', 'CSS3'],
    live: 'https://book-finder-six-red.vercel.app',
    code: 'https://github.com/pahwajii/book_finder',
  },
  {
    title: '🎥 Manim Animation Pipeline',
    desc: 'An AI-driven pipeline using Manim (Mathematical Animation Engine) to programmatically generate educational mathematical animations with synchronized audio and video effects.',
    ss: '/proj_manim.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Manim', 'Python', 'Node.js'],
    live: 'https://manim-animation.vercel.app',
    code: 'https://github.com/pahwajii/Manim-Animation',
  },
  {
    title: '📍 Real-Time Location Tracker',
    desc: 'A real-time geolocation streaming application using Socket.IO and Leaflet.js to map and track active client positions dynamically with zero page reloads.',
    ss: '/proj_realtime_tracker.png',
    tech: ['Node.js', 'Express', 'Socket.io', 'Leaflet.js', 'EJS', 'CSS3'],
    live: '#',
    code: 'https://github.com/pahwajii/realtime-tracker',
  },
  {
    title: '✨ Veridio Client Portal',
    desc: 'An interactive frontend layout built during the Veridio.io SDE internship, showcasing profile customization, clean dashboard navigation, and optimized UI rendering.',
    ss: '/proj_veridio.png',
    tech: ['React', 'Vite', 'CSS3', 'HTML5', 'ESLint'],
    live: 'https://veridio.vercel.app',
    code: 'https://github.com/pahwajii/veridio',
  },
  {
    title: '💬 ConvoHub — Real-Time Web Chat',
    desc: 'A real-time messaging application featuring instant direct messaging, live typing indicators, online/offline status tracking, and delivery receipts.',
    ss: '/proj_web_chat.png',
    tech: ['Node.js', 'Express', 'Socket.io', 'HTML5', 'CSS3', 'JavaScript'],
    live: '#',
    code: 'https://github.com/pahwajii/web_chat',
  },
  {
    title: '🛒 ShopWise Explorer',
    desc: 'A lightweight QuickCommerce Proof of Concept web application designed to validate API response times, product matching, and pricing comparison metrics.',
    ss: '/proj_shopwise.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'QuickCommerce API'],
    live: '#',
    code: 'https://github.com/pahwajii/shopwise_explorer',
  },
  {
    title: '🏢 Pahwajee Business Portal',
    desc: 'A custom-built business web application and landing page designed to establish a digital presence, handle inquiries, and show services.',
    ss: '/proj_pahwajee.png',
    tech: ['Python', 'Django', 'JavaScript', 'HTML5', 'CSS3'],
    live: '#',
    code: 'https://github.com/pahwajii/Pahwajee',
  },
  {
    title: '🏥 Healthcare Backend API',
    desc: 'A robust Django REST Framework backend service for healthcare management featuring JWT authentication, database schemas for patients/doctors, and CRUD APIs.',
    ss: '/proj_healthcare.png',
    tech: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'JWT'],
    live: '#',
    code: 'https://github.com/pahwajii/Healthcare_backend_django',
  },
  {
    title: '📈 KoinX Crypto Dashboard',
    desc: 'A responsive React-based financial dashboard simulating crypto holdings and capital gains. Displays tax pre-harvesting and post-harvesting models.',
    ss: '/proj_koinx.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'HTML5', 'CSS3'],
    live: '#',
    code: 'https://github.com/pahwajii/Koinx_assignment',
  },
]

export const skills = [
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
]

export const skillsRows = [
  [
    { title: 'Frontend Technologies', items: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'jQuery', 'AJAX'] },
    { title: 'Backend & APIs', items: ['Node.js', 'Express.js', 'REST API Design', 'MVC Architecture', 'Webhooks'] },
    { title: 'Databases & Cache', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase Firestore', 'Redis'] },
    { title: 'Tools & Testing', items: ['Git', 'Postman', 'Jest', 'Docker', 'Vercel', 'Render'] },
  ],
  [
    {
      title: 'Practices & Concepts',
      items: [
        'Agile/Scrum',
        'Code Reviews',
        'Performance Optimization',
        'Unit Testing',
        'Data Structures & Algorithms',
        'API Contracts'
      ],
    },
    {
      title: 'Soft Skills / Achievements',
      items: [
        'GATE 2026 Qualified',
        'T&P Cell Secretary (200+ students)',
        'Problem Solving',
        'Teamwork & Collaboration',
        'Communication'
      ],
    },
  ],
]

export const certificates = {
  tech: [
    {
      title: 'GATE 2026 Qualified',
      org: 'IIT / GATE',
      date: '2026',
      img: '/certs/gate.png', // Placeholder SVG
      link: '#',
    },
    {
      title: 'Oracle Cloud Data Science Professional',
      org: 'Oracle',
      date: '2025',
      img: '/certs/oracledata.png', // Placeholder SVG
      link: '#',
    },
    {
      title: 'Oracle Cloud AI Foundations Associate',
      org: 'Oracle',
      date: '2025',
      img: '/certs/oracleAI.png', // Placeholder SVG
      link: '#',
    },
    {
      title: 'Software Engineering Job Simulation',
      org: 'Electronic Arts (EA) / Forage',
      date: '2025',
      img: '/certs/ea-forage.png',
      link: '#',
    },
    {
      title: 'Software Engineering Job Simulation',
      org: 'Accenture / Forage',
      date: '2025',
      img: '/certs/accenture-forage.png',
      link: '#',
    },
    {
      title: 'Data Science 101 (IBM)',
      org: 'CognitiveClass.ai / IBM',
      date: '2025',
      img: '/certs/ibm-ds.png',
      link: 'https://courses.cognitiveclass.ai/certificates/a4772c2d177348c68985dc22d969a429',
    },
  ],
  other: [
    {
      title: 'TCS CodeVita Season 13 Rank Certificate',
      org: 'Tata Consultancy Services (TCS)',
      date: '2025',
      img: '/certs/codevita.png',
      link: '#',
    },
    {
      title: 'Labmentix Common Aptitude Test (LCAT)',
      org: 'LABMENTIX',
      date: '2025',
      img: '/certs/lcat.png',
      link: '#',
    },
    {
      title: 'T&P Cell Secretary',
      org: 'BIET Jhansi',
      date: '2025-2026',
      img: '/certs/cert3.svg',
      link: '#',
    },
  ],
}

export const blogs = [
  {
    id: 1,
    title: 'Optimizing Database Queries at Scale',
    text: 'During my internship at Veridia.io, restructuring indexing strategies and analyzing query plans for MySQL and MongoDB helped reduce query execution time by 20%. DB indexing is one of the highest leverage optimizations you can make.',
  },
  {
    id: 2,
    title: 'Robust Content Moderation using OpenAI APIs',
    text: 'Integrating content moderation APIs for audio, text, and video requires robust error boundary checking and retry logic to avoid request failures. Achieving 95% classification accuracy makes automation feel magic.',
  },
  {
    id: 3,
    title: 'The Beauty of Test-Driven API Development',
    text: 'Writing comprehensive Jest integration tests before completing the REST routes ensures that API contracts are respected. It makes continuous integration (CI) workflows seamless and code reviews stress-free.',
  },
]

export const gallery = {
  personal: [
    {
      id: 1,
      caption: 'Organizing placement drives as Secretary of the T&P Cell at BIET Jhansi 📈',
      photos: ['/gallery/tpcdrive.jpg'],
    },
  ],
  projects: [
    {
      id: 1,
      caption: 'Deterministic Plinko peg board drop column simulation in Plinko Lab 🟢',
      photos: ['/gallery/plinko-lab.png'],
    },
    {
      id: 2,
      caption: 'Structured earnings transcript summary results in Gemini Analyst Research Tool 📊',
      photos: ['/gallery/research-portal.png'],
    },
  ],
  achievements: [
    {
      id: 1,
      caption: 'Achieved a rating of 1817 (Top 6%) on LeetCode with 300+ problems solved 🏆!',
      photos: ['/gallery/leet.png'],
    },
  ],
}
