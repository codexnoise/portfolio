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
          <Image
            src="/icons/linkedin.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image src="/icons/github.svg" alt="inicio" width={45} height={45} />
          <Image src="/icons/twitter.svg" alt="inicio" width={45} height={45} />
          <Image
            src="/icons/whatsapp.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image
            src="/icons/instagram.svg"
            alt="inicio"
            width={50}
            height={50}
          />
        </div>
      </section>
    </section>
  )
}

export default Contact
