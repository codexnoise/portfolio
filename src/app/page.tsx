import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Technologies from './components/technologies/Technologies'

export default function Home() {
  return (
    <main>
      <About />
      <Technologies />
      {/* <Projects />*/}
      <Contact />
    </main>
  )
}
