// about section
import { GraduationCap, Briefcase, Rocket } from "lucide-react";
import { NavLink } from "./types";
import { ProjectType } from "./types";
// nav links
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// about me cards
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

export const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  //   {
  //     name: "Sass",
  //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  //   },
  //   {
  //     name: "Node.js",
  //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  //   },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
];

//  projects data

export const projects: ProjectType[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with Next.js, Stripe integration, and responsive design. Supports RTL for Arabic markets.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    color: "from-primary/20 to-accent/10",
    image:
      "https://cdn.dribbble.com/userupload/27552292/file/original-e2e8e565bf4e1392cfea7e3537b28447.jpg",
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
