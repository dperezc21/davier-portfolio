import {IconsValue} from './icons-path';

export interface Project {
  projectName: string;
  technologies: string[],
  repository: string,
  link?: string,
  technologiesIcons?: IconsValue[],
  description?: string,
  image?: string,
}

export const FRONTEND_PROJECTS: Project[] = [
  {
    projectName: "moca landing page",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "",
    link: "https://moca-landing-page-f8fa.vercel.app/",
    description: "Pagina Web que muestra los productos que ofrece la resposteria moca, con la intencion de dar a conocer el negocio y sus productos",
    image: "front-end/landing-page-moca.png"
  },
  /*{
    projectName: "moca",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "",
    link: "",
    description: ""
  },*/
  {
    projectName: "Drogueria: Salud vida plus",
    technologies: ["angularjs", "typescript", "HTML", "css"],
    repository: "https://github.com/dperezc21/pharmacy-app",
    link: "",
    description: "Aplicacion de escritorio para manejar la gestion de productos, control de inventarios de una farmacia",
    image: "front-end/pharmacy.png"
  },
  {
    projectName: "peluqueria",
    technologies: ["react native", "expo", "typescript", "HTML", "css"],
    repository: "",
    link: "",
    description: "App movil para tener manejo de las ganancias y forma de pago de los servicios ofrecidos en una peluqueria",
    image: "front-end/barber-shop.png"
  },
];

export const BACKEND_PROJECTS: Project[] = [
  /*{
    projectName: "cake shop",
    technologies: ["nodejs", "javascript", "mysql", "Json Web Token"],
    repository: "https://github.com/dperezc21/cake-shop-backend",
    description: "Proyecto para manejas datos de la reposteria MOCA, incluyendo autenticacion de usuarios"
  },*/
  {
    projectName: "Seguimiento de gastos",
    technologies: ["nodejs", "typescript", "JSON"],
    repository: "https://github.com/dperezc21/expense-tracker",
    description: "Proyecto para realizar segimiento de gastos, y visualizar gastos por categoria"
  },
  {
    projectName: "task tracker cli",
    technologies: ["nodejs", "javascript", "JSON"],
    repository: "https://github.com/dperezc21/task-tracker-cli",
    description: "Herramienta de línea de comandos diseñada para gestionar tareas sin necesidad de interfaces gráficas. Permite crear, listar, actualizar y eliminar tareas directamente desde la terminal"
  },
  {
    projectName: "Service de Drogueria",
    technologies: ["java", "spring boot", "mysql", "spring security", "Json Web Token"],
    repository: "https://github.com/dperezc21/pharmacy-service",
    description: "Servicio que maneja los datos de la Drogueria, brinda autenticacion de usuarios, maneja pedidos de productos por orden, realiza inventario de stock de los productos."
  },
  {
    projectName: "Servicio de QR",
    technologies: ["java", "spring boot"],
    repository: "https://github.com/dperezc21/quick-response",
    description: "Servicio util para generar QR, a partir de un texto",
    image: "/back-end/qr.png"
  }
];

export const MAP_PROJECTS: Map<string, Project[]> = new Map([
  ['frontend', FRONTEND_PROJECTS],
  ['backend', BACKEND_PROJECTS]
])
