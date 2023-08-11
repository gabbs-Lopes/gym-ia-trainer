import React from 'react'
import logo from './logoPretoCiano.png'
import logoPreto from './logoTeste.png'
import styles from './Logo.module.scss'

export default function Logo({ shadow }) {
  return (
    <div>
      {shadow
        ? <img src={logo} className={styles.logo} alt='logo Gym IA Trainer' />
        : <img src={logoPreto} className={styles.logoShadow} alt='logo Gym IA Trainer' />
      }
    </div>
  )
}
