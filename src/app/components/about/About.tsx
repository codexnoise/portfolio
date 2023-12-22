import Image from 'next/image'
import '../../globals.css'

const PLACEHOLDER_BLUR_IMAGE =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAGWAooDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAEEAwIG/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD54BXMAAAAVFAAAABABQAAAAAAABFQAAAAEAFQABFQBFQBFQBFQEABEVAEAVEVFERUARUARUFAAAEAAAAAAFAQUARVRQAAUABUUAAAAAAGsBWAAAABUAUQBUAAAUAAAAAAAARUAAAABABUAARUARUARUARUBAARFQEAFRFRREVAEVAEVBQAABAAAAAABQAUBEUAFABQAFRQAAAAAAawFYAAAAABQAAAAAAAAAAAAABFQAAAAEAFQABFQBFQBFQBFQEABEVAQAVEVFERUAQAEVBQBAAAAAAAABQEFAEUAFABRFAVFAAAAAAQawGmAAAAAAUAAAAAAAAAAAAABAAAAAEEAVUAARUARUARUBAAQAERUBABURUURFQEABABQBAAAAAAAABRFQUAFABQBBUUBUAUAAAABBrAaYAAABQAAAAAAAAAABAAUAEEAAAABAAFVAAEVAEVAEVAQAERUARUBEVBRFRREVAQAEAFAEAABAAABRFAVFQFRQFRQURQFRRAAFAAAAABrAVkAAAAAAAAAQAAAAAAAAEAAAAABFQUABAAQABFRRAARFQBFQBABEVBURUARUURFQABFAAEAAAAABUUBUEFVFAVFAVFAVFAAEFRQAAAAagFZAAUQQUQBRAFAAAAAAAAEAAAAAAAQAURUAABAAEAEAURFQBFQEBAEVBURUBARQRUAARRFQAAABAAAVBRQEFABVQBQAUAFAAVFAAAABqAGAAAAAAAABUAUQBRAAAAAAAAAAEFAAEVAEVAAQAAEBAEVFBABEVAQEFEVARFRRAEAAVAAAEAAAAAAFABRFBRFBQAURQFRQAAUQBQEGoBWAAAAAAAAAAAAAAAAAAAAAAUQAAAQABAARUARUARUAQFEBAEVARFQVEVAQEUAEURUAAQAAAAAAAAURQFQBVQBVRQFRQAAURQAAAAagBhRAFEAUQBRAFEAUAAAAAAAAEFVAAAAQAAQAAEAAQAEAEBAEVFEBAEAVEVARFQAEFAAAEAAAAAAAABUAUAFEUFABRFBRFAABQEAAGoQVhRFAAAAAAAAAAAAFAAAAAAAAEAAABAARUABAAAQEARUBAFERUBEVBURUAQBRAAAQAAAAAAAAAAAAURQFQBVRQFQBQAURQAEFEAagFZAAAAAAAAUQBRAFEAUQBRAFQAAAAAEAAEAAAQAEVAEAEBAEVAQEUEEFEEABBQBAAAAAAAAAAAAAAAVFAAFURQURRBUBVAEUQBRBBqAVkAAVAFEAUQBQAAAAAAAAAAABAAAAEAAAQAAQAEARUAQAQEAQFEQBURUAQBQBAAAAAAAAAAAAAAAABQAABVABRFBRBBQAAAahBWFEAUQBRAFAAAAAAAAAAAAAABAVAAAAQAAQAABABAQBFQBBAEVARFRVQEFAEAAAAAAAAAAAAAAAAAABUUAAUVAFEUFEAUBAABqEBhRAFEAUQBRAFAAAAAAAAAAAABAUQUAABAAEAAAQAEAEBAEEARUFRFRQQEUAAAAAAAAAAAAAAAAAAAAABQAABQAFEAUAABBpAGFEAUQBRAFEAUQBQAAAAAAAAAAQFEAAABBQBAAQFQAEAEBAEEFEVAQEAAFAAAAAAAAAAAAAAAAAAAAAAFQBQAABQAAAAAGkQRhRFAAAABRAFEAUQBRAFEUAAAQBRAFEAAABAAEUAQAEABAEVAEEFEABAFAAAAAAAAAAAAAAAAAAAAAAAAAAFQBRFAAFAAAAaBBGFEAUQBRAFEAUAFEAUQBRAFEAUQBRAAAAQBUAAQABAARQBAEAUQQBFQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRAFEAUQB3EEZUQBRAFVAFEAUQBRAFEUAAAAAAAEBRAFEAAQFQAEABAAQFBBBQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdRBGVEUBUAUQBRAFEAVUAUQBRAFEAUQBRAFQQFEAVAAEAAQFQQAEFAFBAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdBAZUQBRAFEEFEAVXlQUQBRAFEAUQBRAFEAUQAAAEAVAAEBQEAAUEAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6EBFEAUQBQAFQBRBBRARRFAAAAAAAAAAAEAVAFAABAABVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFEAUQBRFAAAAEFQQUQBRFAAAAAAAAAAAAAEAAAAFUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQBRAFAAAEAAFQQUQBRAFQAAFAAUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQBQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='

const About = () => {
  return (
    <>
      <section className="About">
        <h1>Diego F. Velesaca O.</h1>
        <h2>Desarrollador de Software FullStack</h2>
      </section>
      <div className="Description">
        <div className="Description__imageContainer">
          <Image
            src="/images/home_image.jpg"
            alt="profile"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_BLUR_IMAGE}
          />
        </div>
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
