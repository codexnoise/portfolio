import Image from 'next/image'
import styles from './Technologies.module.css'

const Technologies = () => {
  return (
    <section id="technologies">
      <section className="About">
        <h2>TECNOLOGIAS Y HERRAMIENTAS</h2>
        <div className={styles.technologies__container}>
          <Image
            src="/brands/ts-logo-128.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/javascript-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/nextdotjs-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/react-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/html5-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/css3-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/nodedotjs-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/python-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/fastapi-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/mysql-color.svg"
            alt="inicio"
            width={60}
            height={60}
          />
          <Image
            src="/brands/postgresql-color.svg"
            alt="inicio"
            width={60}
            height={60}
          />
          <Image
            src="/brands/mongodb-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/git-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/brands/github-color.svg"
            alt="inicio"
            width={45}
            height={45}
          />
        </div>
      </section>
    </section>
  )
}

export default Technologies
