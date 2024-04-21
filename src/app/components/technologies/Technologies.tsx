import Image from 'next/image'
import styles from './Technologies.module.css'

const Technologies = () => {
  return (
    <section id="technologies">
      <section className={styles.technologies}>
        <h2>TECNOLOGIAS Y HERRAMIENTAS</h2>
        <div className={styles.technologies__container}>
          <Image
            src="/portfolio/brands/typescript.svg"
            alt="typescript_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/javascript.svg"
            alt="javascript_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/next.svg"
            alt="next_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/react.svg"
            alt="react_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/html5.svg"
            alt="html5_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/css3.svg"
            alt="css3_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/node.svg"
            alt="node_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/python.svg"
            alt="python_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/fastapi.svg"
            alt="fastapi_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/mysql.svg"
            alt="mysql_logo"
            width={60}
            height={60}
          />
          <Image
            src="/portfolio/brands/postgresql.svg"
            alt="postgresql_logo"
            width={60}
            height={60}
          />
          <Image
            src="/portfolio/brands/mongodb.svg"
            alt="mongodb"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/git.svg"
            alt="git_logo"
            width={45}
            height={45}
          />
          <Image
            src="/portfolio/brands/github.svg"
            alt="github_logo"
            width={45}
            height={45}
          />
        </div>
      </section>
    </section>
  )
}

export default Technologies
