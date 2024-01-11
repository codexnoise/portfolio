import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <Image src="/icons/home.svg" alt="profile" width={100} height={100} />
      <button>Home</button>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
    </nav>
  )
}

export default Navbar
