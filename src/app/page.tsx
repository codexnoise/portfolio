import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
