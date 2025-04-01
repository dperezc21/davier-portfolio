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
    projectName: "moca",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "https://github.com/dperezc21/moca",
    link: "https://moca-nu.vercel.app"
  },
  {
    projectName: "forti",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "https://github.com/dperezc21/forti",
  },
  {
    projectName: "product inventory",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "https://github.com/dperezc21/product-inventory",
  }
];

export const BACKEND_PROJECTS: Project[] = [
  {
    projectName: "cake shop",
    technologies: ["nodejs", "javascript", "mysql"],
    repository: "https://github.com/dperezc21/cake-shop-backend",
  },
  {
    projectName: "sequelize db model",
    technologies: ["nodejs", "typescript", "mysql"],
    repository: "https://github.com/dperezc21/sequelize-db-model",
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
    projectName: "report backend",
    technologies: ["nodejs", "typescript", "mongodb", "JSON"],
    repository: "https://github.com/dperezc21/reportBackend",
  },
  {
    projectName: "bankd",
    technologies: ["java", "spring boot", "mysql"],
    repository: "https://github.com/dperezc21/bankd",
  },
  {
    projectName: "franchise",
    technologies: ["java", "spring boot", "mysql"],
    repository: "https://github.com/dperezc21/franchise",
  },
  {
    projectName: "inventory",
    technologies: ["java", "spring boot", "mysql"],
    repository: "https://github.com/dperezc21/product-inventory-management",
  }
];

export const MAP_PROJECTS: Map<string, Project[]> = new Map([
  ['frontend', FRONTEND_PROJECTS],
  ['backend', BACKEND_PROJECTS]
])
