import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul className={styles.Navbar__list}>
        <li>
          <Link href="#home">
            <Image src="/icons/home.svg" alt="inicio" width={45} height={45} />
          </Link>
        </li>
        <li>
          <Link href="#about">
            <Image
              src="/icons/about.svg"
              alt="sobre mí"
              width={45}
              height={45}
            />
          </Link>
        </li>
        <li>
          <Link href="#technologies">
            <Image
              src="/icons/technologies.svg"
              alt="tecnologías y herramientas"
              width={45}
              height={45}
            />
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <Image
              src="/icons/projects.svg"
              alt="proyectos"
              width={45}
              height={45}
            />
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <Image
              src="/icons/contact.svg"
              alt="contacto"
              width={45}
              height={45}
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
