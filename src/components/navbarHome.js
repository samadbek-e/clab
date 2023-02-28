import React from 'react'
import styles from './styles/navbar.module.css'
import logo from '../assets/image_1clabLogo.svg'
const NavbarHome = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <picture>
                <source type='image/webp' />
            <img loading='lazy' role='presentation' src={logo} alt="hello" />
            </picture>
        </div>
        <div className={styles.navButtons}>
          <button className={styles.nav_signup_btn}>Ro'yxatdan O'tish</button>
          <button className={styles.nav_login_btn}>Kirish</button>
        </div>
    </div>
  )
}

export default NavbarHome