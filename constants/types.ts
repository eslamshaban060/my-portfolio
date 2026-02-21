// types of text in hero and about me sections
export interface TextType {
  p1: string;
  title1: string;
  title12: string;
  section: string;
  p2: string;
  p3: string;
}

// navlinks types
export interface NavLink {
  label: string;
  href: string;
}
// project types
export interface ProjectType {
  title: string;
  description: string;
  tech: string[];
  color: string;
  image: string;
}
