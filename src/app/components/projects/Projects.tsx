import { FunctionComponent } from 'react'
import projectsList from './projects.json'
import { Project } from './types'
import styles from './Project.module.css'
import Image from 'next/image'

const ProjectCard: FunctionComponent<{ project: Project }> = ({ project }) => (
  <div className={styles.projects__project} key={project.name}>
    <figure>
      <Image
        src={`/images/${project.image}`}
        alt={project.image}
        width={360}
        height={626}
      />
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
    <section className="About">
      <h2>PROYECTOS</h2>
    </section>
    <div className={styles.projects__container}>
      {projectsList.projects.map((project: Project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </section>
)

export default Projects
