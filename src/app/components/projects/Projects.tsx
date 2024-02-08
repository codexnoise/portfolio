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
        <div className={styles.project__technologies}>
          <h3>Tecnologias usadas:</h3>
          {project.techStack.map((tech: string) => (
            <div
              key={tech}
              className={styles.project__img__container}
              data-description="React"
            >
              <Image
                key={tech}
                src={`/brands/${tech}.svg`}
                alt={`${tech}_logo`}
                width={40}
                height={40}
              />
            </div>
          ))}
        </div>
        <div className={styles.project__links}>
          <a
            href={project.github}
            target="_blank"
            className={styles.project__links__github__link}
          >
            <Image
              src="/icons/github.svg"
              alt="github_icono"
              width={25}
              height={25}
            />
            Github{' '}
          </a>
          <a
            href={project.url}
            target="_blank"
            className={styles.project__links__github__link}
          >
            <Image
              src="/icons/url.svg"
              alt="url_icono"
              width={25}
              height={25}
            />
            Preview{' '}
          </a>
        </div>
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




