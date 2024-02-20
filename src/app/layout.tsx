import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/shared/Footer/Footer'
import Navbar from './components/shared/Navbar/Navbar'
import 'tailwindcss/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '</> Diego Velesaca | Portfolio',
  description: 'Portfolio - Diego F Velesaca O Software Developer',
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
