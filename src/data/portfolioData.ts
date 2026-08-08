import { Project, SkillCategory, EducationItem, AchievementItem, LearningJourneyItem, SocialLinks } from '../types/portfolio';

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/velwot',
  linkedin: 'https://www.linkedin.com/in/narayan-p-601b2541a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  email: 'parmarnarayan2008@gmail.com'
};

export const ABOUT_TEXT = {
  headline: "Hi, I’m Narayan",
  roleTitle: "IT Student • Developer • Problem Solver",
  bioShort: "Information Technology student with a strong passion for software engineering, system design, and building intuitive digital products. I combine analytical algorithmic problem solving with clean, user-focused web applications.",
  educationTitle: "B.Tech in Information Technology",
  university: "Gujarat Technological University", // [Customizable Placeholder]
  location: "Gujarat, India",
  graduationYear: "2026",
  interests: [
    "Software Engineering & Architecture",
    "Algorithmic Problem Solving (C++ / Java)",
    "Full-Stack Web Development (React / Node.js)",
    "Database Systems & System Optimization",
    "Open Source & Collaborative Tech"
  ],
  careerGoals: "Driven to build performant, accessible digital products that solve real-world problems. Seeking software engineering internships and full-time technical roles."
};

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Technology (B.Tech) in Information Technology",
  institution: "Gujarat Technological University", // [Customizable Placeholder]
  years: "2022 – 2026 (Expected)",
  location: "Gujarat, India",
  gradeOrGpa: "CGPA: 8.8 / 10.0", // [Customizable Placeholder]
  achievements: [
    "Consistently ranked in top 5% of B.Tech IT department cohort",
    "Active Tech Coordinator in College Computer Society",
    "Completed core coursework: Data Structures, Operating Systems, DBMS, Computer Networks, Software Engineering"
  ],
  certifications: [
    "Google Cloud Generative AI Fundamentals",
    "Full Stack Web Development Certification",
    "Problem Solving (Intermediate) Certificate"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'C', level: 'Proficient', motif: 'Low-level Memory & Foundations' },
      { name: 'C++', level: 'Advanced', motif: 'Data Structures & Algorithms' },
      { name: 'Java', level: 'Proficient', motif: 'Object Oriented Programming' },
      { name: 'Python', level: 'Proficient', motif: 'Automation & Scripting' },
      { name: 'JavaScript', level: 'Advanced', motif: 'ES6+ & Asynchronous Logic' }
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML', level: 'Advanced', motif: 'Semantic Document Structure' },
      { name: 'CSS', level: 'Advanced', motif: 'Modern Layouts & Animations' },
      { name: 'JavaScript', level: 'Advanced', motif: 'Dynamic Web Logic' },
      { name: 'React', level: 'Advanced', motif: 'Component Architecture & State' },
      { name: 'Node.js', level: 'Intermediate', motif: 'RESTful APIs & Backend' }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 'Advanced', motif: 'Distributed Version Control' },
      { name: 'GitHub', level: 'Advanced', motif: 'Collaboration & CI Workflow' },
      { name: 'VS Code', level: 'Advanced', motif: 'Primary IDE & Extensions' },
      { name: 'Linux', level: 'Proficient', motif: 'Bash Shell & File Management' },
      { name: 'SQL', level: 'Proficient', motif: 'Relational Database Queries' }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'algo-visualizer',
    title: 'Algorithmic Visualizer & Problem Solver',
    shortDescription: 'Interactive educational web tool to visualize Sorting, Graph (BFS/DFS/Dijkstra), and Tree algorithms with step-by-step state execution.',
    fullDescription: 'Designed and implemented an interactive algorithm visualizer to help students grasp complex data structure operations visually. Supports speed control, custom input arrays, array step-back, and live code highlighting.',
    problemSolved: 'Transforms abstract algorithmic logic into real-time step-by-step visual state animations, improving conceptual clarity for CS learners.',
    technologies: ['C++', 'React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/velwot/algo-visualizer-demo',
    liveUrl: 'https://github.com/velwot',
    category: 'Systems & Algorithms',
    featured: true,
    artMotif: 'madhubani'
  },
  {
    id: 'task-pulse',
    title: 'TaskPulse — Real-Time Productivity Hub',
    shortDescription: 'Modern task and live age ticker application with dark/light mode, custom filter indicator pills, particle confetti, and persistent local storage.',
    fullDescription: 'A high-performance productivity application built with clean component architecture, CSS spring animations, real-time age milestone ticker, and custom tag categorization.',
    problemSolved: 'Eliminates clutter in daily goal management with instant local-first state updates, celebratory visual feedback, and responsive layout.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/velwot/demo_project',
    liveUrl: 'https://github.com/velwot',
    category: 'Web Apps',
    featured: true,
    artMotif: 'warli'
  },
  {
    id: 'smart-campus',
    title: 'Smart Campus Event & Resource Portal',
    shortDescription: 'Web portal for students and faculty to schedule lab sessions, register for tech workshops, and receive automated schedule notifications.',
    fullDescription: 'Full-stack application streamlines institutional lab booking and student tech club events with role-based access control, relational database queries, and responsive dashboard.',
    problemSolved: 'Replaces manual paper logbooks and email chains with automated conflict detection and real-time room availability scheduling.',
    technologies: ['Node.js', 'Express', 'React', 'SQL', 'Git'],
    githubUrl: 'https://github.com/velwot/smart-campus-portal',
    liveUrl: 'https://github.com/velwot',
    category: 'Full Stack',
    featured: true,
    artMotif: 'gond'
  },
  {
    id: 'ecotrack-analytics',
    title: 'EcoTrack — Sustainability Analytics Dashboard',
    shortDescription: 'Data visualization web dashboard for monitoring campus energy usage, waste metrics, and carbon emission targets.',
    fullDescription: 'Aggregates simulated IoT environmental sensor data to render interactive chart analytics, target tracking, and downloadable PDF sustainability summaries.',
    problemSolved: 'Converts raw sensor streams into actionable visual insights for green energy optimization.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    githubUrl: 'https://github.com/velwot/ecotrack-dashboard',
    liveUrl: 'https://github.com/velwot',
    category: 'Web Apps',
    featured: false,
    artMotif: 'kalamkari'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'National Student Hackathon Finalist',
    category: 'Hackathon',
    issuerOrEvent: 'TechFest 2024',
    year: '2024',
    description: 'Selected among top 15 teams out of 250+ entries. Developed a real-time crisis resource management platform within 36 hours.',
    badgeMotif: 'Warli Victory Star'
  },
  {
    id: 'ach-2',
    title: 'Google Cloud Skill Badge',
    category: 'Certification',
    issuerOrEvent: 'Google Cloud Skills Boost',
    year: '2024',
    description: 'Earned credentials in Generative AI, BigQuery ML, and Vertex AI model deployment.',
    badgeMotif: 'Madhubani Lotus Emblem'
  },
  {
    id: 'ach-3',
    title: 'Academic Distinction Award',
    category: 'Academic',
    issuerOrEvent: 'B.Tech IT Department',
    year: '2023 - 2024',
    description: 'Recognized for maintaining high academic standing in core Computer Science courses.',
    badgeMotif: 'Gond Crown Motif'
  },
  {
    id: 'ach-4',
    title: 'Open Source Contributor',
    category: 'Open Source',
    issuerOrEvent: 'GitHub Global Community',
    year: '2023 - Present',
    description: 'Contributed documentation fixes and UI bug resolved PRs to open-source developer repositories.',
    badgeMotif: 'Kalamkari Geometry'
  }
];

export const LEARNING_JOURNEY: LearningJourneyItem[] = [
  {
    period: '2024 – Present',
    title: 'Advanced Full-Stack Systems & Algorithm Mastery',
    organization: 'Self-Directed & Campus Projects',
    type: 'Project Milestone',
    description: 'Deepening expertise in C++ Data Structures, React modern state management, RESTful API backend architecture, and clean UI engineering.',
    technologies: ['C++', 'React', 'Node.js', 'SQL', 'TypeScript']
  },
  {
    period: '2023 – 2024',
    title: 'Core Computer Science Foundations',
    organization: 'B.Tech IT Curriculum',
    type: 'Education',
    description: 'Mastered Database Management Systems (DBMS), Operating Systems concurrency, Computer Networks, and Linux Shell Command utilities.',
    technologies: ['SQL', 'Linux', 'Java', 'Python', 'Git']
  },
  {
    period: '2022 – 2023',
    title: 'Programming Foundations & Web Development',
    organization: 'University & Independent Learning',
    type: 'Coding Practice',
    description: 'Learned fundamental structured programming in C, Object-Oriented paradigms in C++/Java, and semantic HTML5/CSS3 frontend principles.',
    technologies: ['C', 'C++', 'HTML', 'CSS', 'JavaScript']
  }
];
