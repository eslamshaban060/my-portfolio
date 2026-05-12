import { StaticImageData } from "next/image";

export interface TextType {
  p1: string;
  title1: string;
  title12: string;
  section: string;
  p2: string;
  p3: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ProjectType {
  title: string;
  description: string;
  tech: string[];
  color: string;
  image: string | StaticImageData;
  featured?: boolean;
  github?: string;
  live?: string;
}

export interface ExperienceType {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  tech: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover: string;
  tags: string[];
  content: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}
