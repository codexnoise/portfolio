export interface Project {
  name: string
  description: string
  image: string
  url: string
  github: string
  techStack: { tech: string; name: string }[]
}

export interface ProjectObj {
  projects: Project[]
}
