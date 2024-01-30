import Image from 'next/image'

const Technologies = () => {
  return (
    <section id="technologies">
      <section className="About">
        <h2>TECNOLOGIAS Y HERRAMIENTAS</h2>
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
          src="/brands/python-color.svg"
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
          src="/brands/mongodb-color.svg"
          alt="inicio"
          width={45}
          height={45}
        />
      </section>
    </section>
  )
}

export default Technologies
