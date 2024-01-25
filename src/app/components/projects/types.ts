export interface Project {
  name: string
  description: string
  image: string
  url: string
  github: string
  techStack: string[]
}

export interface ProjectObj {
  projects: Project[]
}
