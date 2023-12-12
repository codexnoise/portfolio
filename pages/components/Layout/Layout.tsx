import React, { FC, ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
