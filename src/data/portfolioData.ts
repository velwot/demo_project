/* ── Types ────────────────────────────────────────────────────── */

export interface PersonalInfo {
  name: string;
  title: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  problem: string;
  solution: string;
  technologies: string[];
  github: string;
  demo: string;
  iconType: 'web' | 'data' | 'mobile' | 'security';
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
}

/* ── Data ─────────────────────────────────────────────────────── */

export const personalInfo: PersonalInfo = {
  name: 'Narayan',
  title: 'IT Student • Developer • Problem Solver',
  intro: 'I build practical digital experiences while exploring software development, technology and creative problem solving. Currently pursuing my degree in Information Technology, I combine academic learning with hands-on project development.',
  email: 'narayan@example.com',
  github: 'https://github.com/narayan',
  linkedin: 'https://linkedin.com/in/narayan',
};

export const skills: SkillCategory[] = [
  {
    category: 'Programming',
    items: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Web Development',
    items: ['React', 'HTML / CSS', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Docker', 'Linux', 'Postman'],
  },
  {
    category: 'Other Technologies',
    items: ['Data Structures', 'Algorithms', 'REST APIs', 'Agile', 'Problem Solving'],
  },
];

export const projects: Project[] = [
  {
    name: 'StudySync',
    problem: 'Students struggle to organize group study sessions and share resources effectively across different platforms and schedules.',
    solution: 'A real-time collaborative study platform with shared notes, video rooms, and intelligent scheduling that adapts to each group member.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/narayan/studysync',
    demo: 'https://studysync.demo.com',
    iconType: 'web',
  },
  {
    name: 'CodeTracker',
    problem: 'Tracking coding progress across multiple platforms like LeetCode, HackerRank and GitHub is fragmented and time-consuming.',
    solution: 'A unified dashboard that aggregates coding activity, visualizes progress patterns, and provides insights to improve learning efficiency.',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'Chart.js'],
    github: 'https://github.com/narayan/codetracker',
    demo: 'https://codetracker.demo.com',
    iconType: 'data',
  },
  {
    name: 'FarmConnect',
    problem: 'Small-scale farmers lack direct access to urban markets, resulting in low profits and food waste due to middleman dependency.',
    solution: 'A digital marketplace connecting farmers directly to buyers with real-time pricing, delivery logistics, and quality verification.',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Razorpay'],
    github: 'https://github.com/narayan/farmconnect',
    demo: 'https://farmconnect.demo.com',
    iconType: 'mobile',
  },
  {
    name: 'SecureVault',
    problem: 'Managing passwords securely without trusting cloud services is challenging for privacy-conscious users.',
    solution: 'An encrypted local-first password manager with zero-knowledge architecture, biometric unlock, and cross-device sync via peer-to-peer.',
    technologies: ['TypeScript', 'Electron', 'SQLite', 'AES-256'],
    github: 'https://github.com/narayan/securevault',
    demo: 'https://securevault.demo.com',
    iconType: 'security',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2018',
    title: 'Secondary School',
    description: 'Built my first website using HTML and CSS. Discovered the magic of seeing code come to life in a browser.',
  },
  {
    year: '2020',
    title: 'Higher Secondary',
    description: 'Discovered programming through Python. Fell in love with problem solving and algorithmic thinking.',
  },
  {
    year: '2022',
    title: 'B.Tech in IT',
    description: 'Started formal computer science education. Dived deep into data structures, databases, and software engineering.',
  },
  {
    year: '2023',
    title: 'First Real Projects',
    description: 'Built real-world applications that solved actual problems. Learned the value of user-centered design.',
  },
  {
    year: '2024',
    title: 'Developer Internship',
    description: 'Worked as a full-stack developer intern. Gained experience with production systems and team collaboration.',
  },
  {
    year: '2025',
    title: 'Present',
    description: 'Contributing to open source, building my portfolio, and preparing for a career in software development.',
  },
];

export const achievements: Achievement[] = [
  { title: 'Smart India Hackathon Finalist' },
  { title: 'AWS Cloud Practitioner Certified' },
  { title: 'LeetCode 500+ Problems Solved' },
  { title: 'Hacktoberfest Contributor' },
  { title: 'Web Development Workshop Lead' },
];
