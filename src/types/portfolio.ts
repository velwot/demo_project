export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'Full Stack' | 'Systems & Algorithms' | 'Web Apps' | 'Open Source';
  featured: boolean;
  artMotif: 'madhubani' | 'warli' | 'gond' | 'kalamkari';
}

export interface SkillCategory {
  category: 'Programming' | 'Web Development' | 'Tools & Technologies';
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Proficient', 'Experienced'
    icon?: string;
    motif: string; // Indian folk art line motif description
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  location: string;
  gradeOrGpa: string;
  achievements: string[];
  certifications: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Certification' | 'Academic' | 'Open Source';
  issuerOrEvent: string;
  year: string;
  description: string;
  badgeMotif: string;
}

export interface LearningJourneyItem {
  period: string;
  title: string;
  organization: string;
  type: 'Education' | 'Project Milestone' | 'Open Source' | 'Workshop' | 'Coding Practice';
  description: string;
  technologies: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}
