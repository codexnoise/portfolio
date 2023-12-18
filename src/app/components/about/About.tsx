import Image from 'next/image'
import '../../globals.css'

const About = () => {
  return (
    <>
      <section className="About">
        <h1>Diego F. Velesaca O.</h1>
        <h2>Desarrollador de Software FullStack</h2>
      </section>
      <div className="Description">
        <Image
          src="/images/home_image.jpg"
          alt="profile"
          width={512}
          height={320}
        />
        <div className="Description__text">
          <p>
            Soy un desarrollador de software FullStack con experiencia en
            desarrollo web, aplicaciones móviles y servicios de internet. Me
            encanta trabajar en proyectos colaborativos y me gusta aprender
            nuevas tecnologías. Apasionado por la tecnología, autodidacta,
            proactivo, orientado alconstante aprendizaje. Capaz de resolver
            problemas y desarrollarsoluciones creativas e innovadoras mediante
            pensamiento crítico,buenas prácticas,código limpio y eficiente. Me
            destaco por mi trabajoindividual, tengo una comunicación asertiva
            cuando se trata de lainteracción con el equipo de trabajo.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
