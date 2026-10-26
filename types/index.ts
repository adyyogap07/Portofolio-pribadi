export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools";

export interface Profile {
  fullName: string;
  headline: string;
  tagline: string;
  bio: string;
  email: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  avatar?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  cvUrl?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description?: unknown; // Portable Text block array
  thumbnail?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  gallery?: Array<{
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  }>;
  techStack: string[];
  category?: string;
  featured?: boolean;
  order?: number;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  _id: string;
  name: string;
  category: SkillCategory;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
  order?: number;
}

export interface Experience {
  _id: string;
  kind: "work" | "education";
  organization: string;
  title: string;
  startDate: string;
  endDate?: string;
  description?: string;
}
