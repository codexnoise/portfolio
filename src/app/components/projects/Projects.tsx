import { FunctionComponent } from 'react'
import projectsList from './projects.json'
import { Project } from './types'

const ProjectCard: FunctionComponent<{ project: Project }> = ({ project }) => (
  <div className="card" key={project.name}>
    <figure>
      <img src={project.image} alt={project.name} />
      <figcaption>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          Ver proyecto
        </a>
      </figcaption>
    </figure>
  </div>
)

const Projects = () => (
  <section id="projects">
    <h2>Proyectos</h2>
    <div className="project__container">
      {projectsList.projects.map((project: Project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </section>
)

export default Projects
