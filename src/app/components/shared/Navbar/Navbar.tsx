import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <Image src="/icons/home.svg" alt="inicio" width={37} height={37} />
      <Image src="/icons/about.svg" alt="sobre mí" width={37} height={37} />
      <Image src="/icons/projects.svg" alt="proyectos" width={37} height={37} />
      <Image src="/icons/contact.svg" alt="contacto" width={37} height={37} />
    </nav>
  )
}

export default Navbar
