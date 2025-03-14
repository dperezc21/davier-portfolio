
export interface Project {
  projectName: string;
  technologies: string[],
  repository: string,
  link?: string
}

export const FRONTEND_PROJECTS: Project[] = [
  {
    projectName: "moca",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "https://github.com/dperezc21/moca",
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
    technologies: ["nodejs", "typescript", "json"],
    repository: "https://github.com/dperezc21/expense-tracker",
  },
  {
    projectName: "tack tracker cli",
    technologies: ["nodejs", "javascript", "json"],
    repository: "https://github.com/dperezc21/task-tracker-cli",
  },
  {
    projectName: "repost backend",
    technologies: ["nodejs", "typescript", "mongodb", "json"],
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
]
