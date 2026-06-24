/**
 * Server-side content fetching.
 *
 * All site content lives in a Vercel Blob store. Previously each page fetched
 * this JSON client-side inside a `useEffect`, which meant crawlers and slow
 * connections saw a loading spinner instead of the actual content. Fetching
 * here (in Server Components) ships the content in the initial HTML, fixes SEO,
 * and lets Next.js cache the response.
 *
 * Helpers use `next: { revalidate: 3600 }` so the static HTML for each route is
 * regenerated at most once per hour — the underlying data rarely changes and is
 * already publicly cached in Vercel Blob.
 */

import { BLOB_BASE } from "./blob";

// Revalidate the cached response at most once per hour. The data is static and
// already publicly cached in Vercel Blob, so an aggressive cache is safe.
const REVALIDATE_SECONDS = 3600;

export interface AboutMe {
  body: {
    greeting: string;
    heading: string;
    description: string;
  };
}

export interface Project {
  id: string;
  name: string;
  description: string;
  "project-link": string;
  "project-demo": string;
  tools: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
}

export interface SkillData {
  languages: Skill[];
  databases: Skill[];
  tools: Skill[];
  frameworks: Skill[];
}

export interface Certification {
  id: string;
  badge: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${BLOB_BASE}/${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: HTTP ${response.status}`);
  }
  return (await response.json()) as T;
}

export function getAboutMe(): Promise<AboutMe> {
  return fetchJson<AboutMe>("aboutme.json");
}

export function getProjects(): Promise<Project[]> {
  return fetchJson<Project[]>("project-list.json");
}

export function getSkills(): Promise<SkillData> {
  return fetchJson<SkillData>("skill-list.json");
}

export function getCertifications(): Promise<Certification[]> {
  return fetchJson<Certification[]>("certifications.json");
}