export interface IconsValue {
  path: string,
  name: string
}

export const PROGRAMMING_LANGUAGE: IconsValue[] = [
  {
    name: "javascript",
    path: "/js.png"
  },
  {
    name: "typescript",
    path: "/typescript.png"
  },
  {
    name: "java",
    path: "/java.png"
  },
  {
    name: "python",
    path: "/piton.png"
  }
]

export const DATA_BASE: IconsValue[] = [
  {
    name: "mysql",
    path: "/mysql.png"
  },
  {
    name: "postgresql",
    path: "/postgre.png"
  },
  {
    name: "mongodb",
    path: "/mongodb.png"
  }
]

export const FRAMEWORKS: IconsValue[] = [
  {
    name: "nodejs",
    path: "/nodejs.png"
  },
  {
    name: "angularjs",
    path: "/angularjs.png"
  },
  {
    name: "spring boot",
    path: "/spring boot.png"
  }
]

export const OTHER_TECHNOLOGIES: IconsValue[] = [
  {
    name: "git",
    path: "/git.png",
  },
  {
    name: "HTML",
    path: "/html-5.png"
  },
  {
    name: "css",
    path: "/css-3.png"
  },
  {
    name: "JSON",
    path: "/json.png"
  },
]

export const ICONS_TECHNOLOGIES: IconsValue[] = [
  ...PROGRAMMING_LANGUAGE, ...FRAMEWORKS, ...DATA_BASE, ...OTHER_TECHNOLOGIES];
