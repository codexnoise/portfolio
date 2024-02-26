import Image from 'next/image'
import styles from './About.module.css'

const PLACEHOLDER_BLUR_IMAGE =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAGWAooDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAEEAwIG/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD54BXMAAAAVFAAAABABQAAAAAAABFQAAAAEAFQABFQBFQBFQBFQEABEVAEAVEVFERUARUARUFAAAEAAAAAAFAQUARVRQAAUABUUAAAAAAGsBWAAAABUAUQBUAAAUAAAAAAAARUAAAABABUAARUARUARUARUBAARFQEAFRFRREVAEVAEVBQAABAAAAAABQAUBEUAFABQAFRQAAAAAAawFYAAAAABQAAAAAAAAAAAAABFQAAAAEAFQABFQBFQBFQBFQEABEVAQAVEVFERUAQAEVBQBAAAAAAAABQEFAEUAFABRFAVFAAAAAAQawGmAAAAAAUAAAAAAAAAAAAABAAAAAEEAVUAARUARUARUBAAQAERUBABURUURFQEABABQBAAAAAAAABRFQUAFABQBBUUBUAUAAAABBrAaYAAABQAAAAAAAAAABAAUAEEAAAABAAFVAAEVAEVAEVAQAERUARUBEVBRFRREVAQAEAFAEAABAAABRFAVFQFRQFRQURQFRRAAFAAAAABrAVkAAAAAAAAAQAAAAAAAAEAAAAABFQUABAAQABFRRAARFQBFQBABEVBURUARUURFQABFAAEAAAAABUUBUEFVFAVFAVFAVFAAEFRQAAAAagFZAAUQQUQBRAFAAAAAAAAEAAAAAAAQAURUAABAAEAEAURFQBFQEBAEVBURUBARQRUAARRFQAAABAAAVBRQEFABVQBQAUAFAAVFAAAABqAGAAAAAAAABUAUQBRAAAAAAAAAAEFAAEVAEVAAQAAEBAEVFBABEVAQEFEVARFRRAEAAVAAAEAAAAAAFABRFBRFBQAURQFRQAAUQBQEGoBWAAAAAAAAAAAAAAAAAAAAAAUQAAAQABAARUARUARUAQFEBAEVARFQVEVAQEUAEURUAAQAAAAAAAAURQFQBVQBVRQFRQAAURQAAAAagBhRAFEAUQBRAFEAUAAAAAAAAEFVAAAAQAAQAAEAAQAEAEBAEVFEBAEAVEVARFQAEFAAAEAAAAAAAABUAUAFEUFABRFBRFAABQEAAGoQVhRFAAAAAAAAAAAAFAAAAAAAAEAAABAARUABAAAQEARUBAFERUBEVBURUAQBRAAAQAAAAAAAAAAAAURQFQBVRQFQBQAURQAEFEAagFZAAAAAAAAUQBRAFEAUQBRAFQAAAAAEAAEAAAQAEVAEAEBAEVAQEUEEFEEABBQBAAAAAAAAAAAAAAAVFAAFURQURRBUBVAEUQBRBBqAVkAAVAFEAUQBQAAAAAAAAAAABAAAAEAAAQAAQAEARUAQAQEAQFEQBURUAQBQBAAAAAAAAAAAAAAAABQAABVABRFBRBBQAAAahBWFEAUQBRAFAAAAAAAAAAAAAABAVAAAAQAAQAABABAQBFQBBAEVARFRVQEFAEAAAAAAAAAAAAAAAAAABUUAAUVAFEUFEAUBAABqEBhRAFEAUQBRAFAAAAAAAAAAAABAUQUAABAAEAAAQAEAEBAEEARUFRFRQQEUAAAAAAAAAAAAAAAAAAAAABQAABQAFEAUAABBpAGFEAUQBRAFEAUQBQAAAAAAAAAAQFEAAABBQBAAQFQAEAEBAEEFEVAQEAAFAAAAAAAAAAAAAAAAAAAAAAFQBQAABQAAAAAGkQRhRFAAAABRAFEAUQBRAFEUAAAQBRAFEAAABAAEUAQAEABAEVAEEFEABAFAAAAAAAAAAAAAAAAAAAAAAAAAAFQBRFAAFAAAAaBBGFEAUQBRAFEAUAFEAUQBRAFEAUQBRAAAAQBUAAQABAARQBAEAUQQBFQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRAFEAUQB3EEZUQBRAFVAFEAUQBRAFEUAAAAAAAEBRAFEAAQFQAEABAAQFBBBQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdRBGVEUBUAUQBRAFEAVUAUQBRAFEAUQBRAFQQFEAVAAEAAQFQQAEFAFBAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdBAZUQBRAFEEFEAVXlQUQBRAFEAUQBRAFEAUQAAAEAVAAEBQEAAUEAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6EBFEAUQBQAFQBRBBRARRFAAAAAAAAAAAEAVAFAABAABVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFEAUQBRFAAAAEFQQUQBRFAAAAAAAAAAAAAEAAAAFUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQBRAFAAAEAAFQQUQBRAFQAAFAAUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQBQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=='

const About = () => {
  return (
    <>
      <section className={styles.Home} id="home">
        <h1>{'<DIEGO F. VELESACA O./>'}</h1>
        <h2>DESARROLLADOR DE SOFTWARE FULLSTACK</h2>
      </section>
      <section className={styles.About} id="about">
        <div className={styles.Description}>
          <div className={styles.Description__imageContainer}>
            <Image
              src="/images/home_image.png"
              alt="profile"
              fill
              placeholder="blur"
              blurDataURL={PLACEHOLDER_BLUR_IMAGE}
            />
          </div>
          <div className={styles.Description__text}>
            <p>
              ¡Hola! Soy Ingeniero electrónico de profesión y desarrollador de
              software por vocación. Me apasiona el aprendizaje continuo y la
              resolución de problemas a través de la creatividad y el
              pensamiento crítico. Con experiencia en el desarrollo de software,
              estoy emocionado por seguir creciendo y contribuir al desarrollo
              de soluciones tecnológicas innovadoras.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
