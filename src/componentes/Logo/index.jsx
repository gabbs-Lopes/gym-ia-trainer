import React from 'react'
import logo from 'assets/logo.png'
import logoPreto from 'assets/logoPreto.png'
import styles from './Logo.module.scss'

export default function Logo({ preto }) {
  return (
    <div>
      {preto
        ? <img src={logoPreto} className={styles.logo} alt='logo Gym IA Trainer' />
        : <img src={logo} className={styles.logo} alt='logo Gym IA Trainer' />
      }
    </div>
  )
}
