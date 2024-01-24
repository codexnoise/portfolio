import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.Navbar__list}>
        <li>
          <Link href="#home">
            <Image src="/icons/home.svg" alt="inicio" width={37} height={37} />
          </Link>
        </li>
        <li>
          <Link href="#about-me">
            <Image
              src="/icons/about.svg"
              alt="sobre mí"
              width={37}
              height={37}
            />
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <Image
              src="/icons/projects.svg"
              alt="proyectos"
              width={37}
              height={37}
            />
          </Link>
        </li>
        <li>
          <Link href="/#contact-me">
            <Image
              src="/icons/contact.svg"
              alt="contacto"
              width={37}
              height={37}
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
