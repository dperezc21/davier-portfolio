import {IconsValue} from './icons-path';

export interface Project {
  projectName: string;
  technologies: string[],
  repository: string,
  link?: string,
  technologiesIcons?: IconsValue[]
}

export const FRONTEND_PROJECTS: Project[] = [
  {
    projectName: "moca landing page",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "",
    link: "https://moca-landing-page-f8fa.vercel.app/"
  },
  {
    projectName: "moca",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "",
    link: ""
  },
  {
    projectName: "Sistema de gestion de farmacia",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "https://github.com/dperezc21/pharmacy-app",
    link: ""
  },
  {
    projectName: "peluqueria",
    technologies: ["react native", "expo", "typescript", "HTML", "css"],
    repository: "",
    link: ""
  },
];

export const BACKEND_PROJECTS: Project[] = [
  {
    projectName: "cake shop",
    technologies: ["nodejs", "javascript", "mysql"],
    repository: "https://github.com/dperezc21/cake-shop-backend",
  },
  {
    projectName: "expense tracker",
    technologies: ["nodejs", "typescript", "JSON"],
    repository: "https://github.com/dperezc21/expense-tracker",
  },
  {
    projectName: "tack tracker cli",
    technologies: ["nodejs", "javascript", "JSON"],
    repository: "https://github.com/dperezc21/task-tracker-cli",
  },
  {
    projectName: "pharmacy service",
    technologies: ["java", "spring boot", "mysql", "spring security"],
    repository: "https://github.com/dperezc21/pharmacy-service",
  },
  {
    projectName: "Quick Response",
    technologies: ["java", "spring boot"],
    repository: "https://github.com/dperezc21/quick-response",
  }
];

export const MAP_PROJECTS: Map<string, Project[]> = new Map([
  ['frontend', FRONTEND_PROJECTS],
  ['backend', BACKEND_PROJECTS]
])
