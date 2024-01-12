import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <Image src="/icons/home.svg" alt="profile" width={50} height={50} />
      <Image src="/icons/projects.svg" alt="profile" width={50} height={50} />
      <Image src="/icons/about.svg" alt="profile" width={50} height={50} />
      <Image src="/icons/home.svg" alt="profile" width={50} height={50} />
    </nav>
  )
}

export default Navbar
