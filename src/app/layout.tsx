import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/shared/Footer/Footer'
import Navbar from './components/shared/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'diego velesaca | portfolio',
  description:
    '¡Hola! Soy diego, un desarrollador fullstack con experiencia en desarrollo web y aplicaciones. Visita mi portafolio para conocer mis proyectos y habilidades.',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
