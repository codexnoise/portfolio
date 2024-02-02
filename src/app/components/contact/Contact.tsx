import Link from 'next/link'
import Image from 'next/image'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact">
      <section className="About">
        <h2>CONTACTO</h2>
        <p className={styles.Contact__text}>
          👩🏽‍💻 Te invito a que mantengamos contacto a través de mis redes sociales
          ó si deseas puedes escribirme un mail
          <a href="mailto:diegovo@outlook.com" className={styles.Contact__link}>
            {' '}
            ✉️
          </a>
        </p>
        <div className={styles.Contact__container}>
          <Link href="https://www.linkedin.com/in/diegovo/" target="_blank">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin_icono"
              width={45}
              height={45}
            />
          </Link>
          <Link href="https://github.com/codexnoise" target="_blank">
            <Image
              src="/icons/github.svg"
              alt="github_icono"
              width={45}
              height={45}
            />
          </Link>
          <Link href="https://twitter.com/codexnoise" target="_blank">
            <Image
              src="/icons/twitter.svg"
              alt="x_icono"
              width={45}
              height={45}
            />
          </Link>
          <Link href="https://wa.me/593983853525" target="_blank">
            <Image
              src="/icons/whatsapp.svg"
              alt="whatsapp_icono"
              width={45}
              height={45}
            />
          </Link>
          <Link href="https://instagram.com/codexnoise" target="_blank">
            <Image
              src="/icons/instagram.svg"
              alt="instagram_icono"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Contact
