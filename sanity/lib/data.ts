import { client } from "./client";
import {
  allProjectsQuery,
  experiencesQuery,
  featuredProjectsQuery,
  profileQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  skillsQuery,
} from "./queries";
import { sanityCacheTags } from "./cache-tags";
import { projectId } from "../env";
import { cacheTag } from "next/cache";

export interface SanityImage {
  url?: string | null;
  alt?: string | null;
}

export interface SanityProfile {
  fullName?: string | null;
  headline?: string | null;
  tagline?: string | null;
  bio?: string | null;
  email?: string | null;
  location?: string | null;
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  avatar?: SanityImage | null;
  cvUrl?: string | null;
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description?: string | null;
  thumbnail?: SanityImage | null;
  gallery?: SanityImage[] | null;
  techStack?: string[] | null;
  category?: string | null;
  demoUrl?: string | null;
  repoUrl?: string | null;
  featured?: boolean | null;
  highlights?: string[] | null;
}

export interface SanitySkill {
  _id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "tools";
  level?: number | null;
  icon?: string | null;
}

export interface SanityExperience {
  _id: string;
  kind: "work" | "education";
  organization: string;
  title: string;
  startDate: string;
  endDate?: string | null;
  description?: string | null;
}

export async function getProfile() {
  if (!projectId.trim()) return null;
  return getCachedProfile();
}

async function getCachedProfile() {
  "use cache";
  return client.fetch<SanityProfile | null>(profileQuery);
}

export async function getFeaturedProjects() {
  if (!projectId.trim()) return [];
  return getCachedFeaturedProjects();
}

async function getCachedFeaturedProjects() {
  "use cache";
  cacheTag(sanityCacheTags.projects);
  return client.fetch<SanityProject[]>(featuredProjectsQuery);
}

export async function getAllProjects() {
  if (!projectId.trim()) return [];
  return getCachedAllProjects();
}

async function getCachedAllProjects() {
  "use cache";
  cacheTag(sanityCacheTags.projects);
  return client.fetch<SanityProject[]>(allProjectsQuery);
}

export async function getProjectBySlug(slug: string) {
  if (!projectId.trim()) return null;
  return getCachedProjectBySlug(slug);
}

async function getCachedProjectBySlug(slug: string) {
  "use cache";
  cacheTag(sanityCacheTags.projects);
  return client.fetch<SanityProject | null>(projectBySlugQuery, { slug });
}

export async function getProjectSlugs() {
  if (!projectId.trim()) return [];
  return getCachedProjectSlugs();
}

async function getCachedProjectSlugs() {
  "use cache";
  cacheTag(sanityCacheTags.projects);
  return client.fetch<string[]>(projectSlugsQuery);
}

export async function getSkills() {
  if (!projectId.trim()) return [];
  return getCachedSkills();
}

async function getCachedSkills() {
  "use cache";
  return client.fetch<SanitySkill[]>(skillsQuery);
}

export async function getExperiences() {
  if (!projectId.trim()) return [];
  return getCachedExperiences();
}

async function getCachedExperiences() {
  "use cache";
  return client.fetch<SanityExperience[]>(experiencesQuery);
}
