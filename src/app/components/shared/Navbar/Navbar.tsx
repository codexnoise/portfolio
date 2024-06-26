'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'
import { useCallback } from 'react'

const Navbar = () => {

  const onShowMenu = useCallback(() => {
    const iconoMenu = document.querySelector(
      `.${styles.Navbar__mobile__icon}`,
    ) as HTMLElement
    const navbar = document.querySelector(`.${styles.Navbar}`) as HTMLElement

    if (iconoMenu && navbar) {
      iconoMenu.style.display = 'none'
      navbar.style.display = 'flex'
      navbar.style.width = '100%'
      navbar.style.position = 'fixed'
    }
  }, [])

  const onHideMenu = useCallback(() => {
    const iconoMenu = document.querySelector(
      `.${styles.Navbar__mobile__icon}`,
    ) as HTMLElement
    const navbar = document.querySelector(`.${styles.Navbar}`) as HTMLElement

    if (iconoMenu && navbar && window.innerWidth <= 640) {
      navbar.style.display = 'none'
      iconoMenu.style.display = 'flex'
      iconoMenu.style.width = '100%'
      iconoMenu.style.position = 'fixed'
    }
  }, [])

  return (
    <>
      <div className={styles.Navbar__mobile__icon} id="button-menu-mobile">
        <button onClick={onShowMenu}>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            />
          </svg>
        </button>
      </div>
      <nav className={styles.Navbar}>
        <ul className={styles.Navbar__list}>
          <li>
            <Link href="#home" onClick={onHideMenu}>
              <svg
                role="img"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M5.37 1.222a1 1 0 0 1 1.26 0l3.814 3.09A1.5 1.5 0 0 1 11 5.476V10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7H5v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5.477a1.5 1.5 0 0 1 .556-1.166zm4.445 3.866L6 2L2.185 5.088A.5.5 0 0 0 2 5.477V10h2V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h2V5.477a.5.5 0 0 0-.185-.389"
                />
              </svg>
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={onHideMenu}>
              <svg
                role="img"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M6 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3.5 3h-5A1.5 1.5 0 0 0 2 7.5c0 1.116.459 2.01 1.212 2.615C3.953 10.71 4.947 11 6 11c1.053 0 2.047-.29 2.788-.885C9.54 9.51 10 8.616 10 7.5A1.5 1.5 0 0 0 8.5 6m-5 1h5a.5.5 0 0 1 .5.5c0 .817-.325 1.423-.838 1.835C7.636 9.757 6.88 10 6 10c-.88 0-1.636-.243-2.162-.665C3.325 8.923 3 8.317 3 7.5a.5.5 0 0 1 .5-.5"
                />
              </svg>
              <span>Sobre mí</span>
            </Link>
          </li>
          <li>
            <Link href="#technologies" onClick={onHideMenu}>
              <svg
                role="img"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M1 3.5A1.5 1.5 0 0 1 2.5 2h7A1.5 1.5 0 0 1 11 3.5v5A1.5 1.5 0 0 1 9.5 10h-7A1.5 1.5 0 0 1 1 8.5zM2.5 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm2.585 10A1.5 1.5 0 0 0 6.5 14h3A5.5 5.5 0 0 0 15 8.5v-1a1.5 1.5 0 0 0-1-1.415V8.5A4.5 4.5 0 0 1 9.5 13zM4.5 12a1.5 1.5 0 0 1-1.415-1H9.5A2.5 2.5 0 0 0 12 8.5V4.085A1.5 1.5 0 0 1 13 5.5v3A3.5 3.5 0 0 1 9.5 12z"
                ></path>
              </svg>
              <span>Tecnologías</span>
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={onHideMenu}>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M8.75 13A2.25 2.25 0 0 1 11 15.25v3.5A2.25 2.25 0 0 1 8.75 21h-3.5A2.25 2.25 0 0 1 3 18.75v-3.5A2.25 2.25 0 0 1 5.25 13zm10 0A2.25 2.25 0 0 1 21 15.25v3.5A2.25 2.25 0 0 1 18.75 21h-3.5A2.25 2.25 0 0 1 13 18.75v-3.5A2.25 2.25 0 0 1 15.25 13zm-10 1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75m10 0h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75M8.75 3A2.25 2.25 0 0 1 11 5.25v3.5A2.25 2.25 0 0 1 8.75 11h-3.5A2.25 2.25 0 0 1 3 8.75v-3.5A2.25 2.25 0 0 1 5.25 3zm10 0A2.25 2.25 0 0 1 21 5.25v3.5A2.25 2.25 0 0 1 18.75 11h-3.5A2.25 2.25 0 0 1 13 8.75v-3.5A2.25 2.25 0 0 1 15.25 3zm-10 1.5h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75m10 0h-3.5a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75"
                />
              </svg>
              <span>Proyectos</span>
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={onHideMenu}>
              <svg
                role="img"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M1 4.75C1 3.784 1.784 3 2.75 3h10.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25zM2.75 4a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75zM9.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM5.261 7.714a1.357 1.357 0 1 0 0-2.714a1.357 1.357 0 0 0 0 2.714m-1.403.678A.858.858 0 0 0 3 9.25a1.67 1.67 0 0 0 1.265 1.62l.053.014c.62.155 1.267.155 1.886 0l.054-.013a1.67 1.67 0 0 0 1.265-1.62a.858.858 0 0 0-.858-.859z"
                />
              </svg>
              <span>Contacto</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
