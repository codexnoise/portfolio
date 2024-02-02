import Image from 'next/image'

const Contact = () => {
  return (
    <section id="contact">
      <section className="About">
        <h2>CONTACTO</h2>
        <p>
          👩🏽‍💻 Te invito a que mantengamos contacto a través de mis redes
          sociales:, ó si deseas puedes escribirme un mail.
        </p>
        <a href="mailto:diegovo@outlook.com">✉️</a>
        <div>
          <Image
            src="/icons/linkedin.svg"
            alt="inicio"
            width={450}
            height={45}
          />
          <Image src="/icons/github.svg" alt="inicio" width={45} height={45} />
          <Image
            src="/icons/whatsapp.svg"
            alt="inicio"
            width={45}
            height={45}
          />
          <Image src="/icons/twitter.svg" alt="inicio" width={45} height={45} />
          <Image
            src="/icons/instagram.svg"
            alt="inicio"
            width={45}
            height={45}
          />
        </div>
      </section>
    </section>
  )
}

export default Contact
