import {
  GraduationCap,
  Briefcase,
  Rocket,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { NavLink, ProjectType, ExperienceType } from "./types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const CardsData = [
  {
    icon: GraduationCap,
    title: "Engineering Student",
    description:
      "Final-year student at Faculty of Engineering, Minia University — Communications & Electronics Engineering, Class of 2026.",
  },
  {
    icon: Briefcase,
    title: "Freelance Experience",
    description:
      "Completed 3+ real-world freelance projects, delivering production-ready React & Next.js applications for clients.",
  },
  {
    icon: Rocket,
    title: "Self-Driven Builder",
    description:
      "Continuously building personal projects and exploring modern web technologies to sharpen my skills and stay ahead.",
  },
];

const dev = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
export const skills = [
  { name: "React", icon: dev + "react/react-original.svg" },
  { name: "Next.js", icon: dev + "nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: dev + "typescript/typescript-original.svg" },
  { name: "JavaScript", icon: dev + "javascript/javascript-original.svg" },
  { name: "Tailwind CSS", icon: dev + "tailwindcss/tailwindcss-original.svg" },
  { name: "HTML5", icon: dev + "html5/html5-original.svg" },
  { name: "CSS3", icon: dev + "css3/css3-original.svg" },
  { name: "Git", icon: dev + "git/git-original.svg" },
  { name: "GitHub", icon: dev + "github/github-original.svg" },
  { name: "Redux", icon: dev + "redux/redux-original.svg" },
  { name: "Figma", icon: dev + "figma/figma-original.svg" },
  { name: "Vite", icon: dev + "vitejs/vitejs-original.svg" },
];

export const projects: ProjectType[] = [
  {
    title: "Smart Solar Power Management System",
    description:
      "Graduation project — a full-stack, real-time monitoring & operations platform for solar power systems. Unifies IoT telemetry, AI insights, team collaboration, and enterprise-grade auth in a bilingual (AR/EN) web app with role-based dashboards.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Realtime", "AI"],
    color: "from-primary/20 to-accent/10",
    image:
      "https://my-code-canvas-10.lovable.app/assets/solar-project-DvBEKR2T.png",
    featured: true,
    github:
      "https://github.com/eslamshaban060/Smart-Solar-Power-Management-System-My-graduation",
    live: "https://solar-management-swart.vercel.app/",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with Next.js, Stripe integration, and responsive design. Supports RTL for Arabic markets.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    color: "from-primary/20 to-accent/10",
    image:
      "https://cdn.dribbble.com/userupload/27552292/file/original-e2e8e565bf4e1392cfea7e3537b28447.jpg",
    github: "https://github.com/eslamshaban060",
    live: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Real-time analytics dashboard with interactive charts, data filtering, and dark mode support.",
    tech: ["React", "Recharts", "React Query", "Tailwind CSS"],
    color: "from-accent/20 to-primary/10",
    image:
      "https://cdn.dribbble.com/userupload/27552292/file/original-e2e8e565bf4e1392cfea7e3537b28447.jpg",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task manager with drag-and-drop, real-time updates, and team features.",
    tech: ["React", "TypeScript", "Zustand", "Supabase"],
    color: "from-primary/15 to-secondary/20",
    image:
      "https://cdn.dribbble.com/userupload/27552292/file/original-e2e8e565bf4e1392cfea7e3537b28447.jpg",
  },
  {
    title: "Portfolio Generator",
    description:
      "A tool that helps developers create stunning portfolios with customizable templates and themes.",
    tech: ["Next.js", "Framer Motion", "MDX", "Tailwind CSS"],
    color: "from-accent/15 to-primary/15",
    image:
      "https://cdn.dribbble.com/userupload/27552292/file/original-e2e8e565bf4e1392cfea7e3537b28447.jpg",
  },
];

export const ContactData = [
  { icon: Mail, label: "eslamshaban060@gmail.com" },
  { icon: Phone, label: "+20 100 6407 387" },
  { icon: MapPin, label: "AL - Minya , Egypt" },
];

export const experiences: ExperienceType[] = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    period: "2024 — Present",
    location: "Remote",
    description:
      "Delivering production-ready React & Next.js apps for international clients, focusing on performance, accessibility, and clean architecture.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Startup",
    period: "2023 — 2024",
    location: "Minya, Egypt",
    description:
      "Built reusable UI component libraries, integrated REST APIs, and improved the design system used across multiple internal dashboards.",
    tech: ["React", "Redux", "TypeScript", "Storybook"],
  },
  {
    role: "Communications & Electronics Engineering",
    company: "Minia University",
    period: "2021 — 2026",
    location: "Minya, Egypt",
    description:
      "Final-year engineering student combining a strong technical foundation with hands-on web development and real client work on the side.",
    tech: ["DSP", "Electronics", "Algorithms", "Math"],
  },
];
