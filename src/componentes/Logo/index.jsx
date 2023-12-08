import React from 'react'
import styles from './Logo.module.scss'

import logoPretoCiano from './logoPretoCiano.png'
import logoPreto from './logoTeste.png'
import logoPadrao from './logo.png'
import logoAdmin from './logoAdmin.png'

export default function Logo({ shadow, logo, admin }) {
  return (
    <div>
      {logo
        ? <img src={logoPadrao} className={styles.logoPadrao} alt='logo Gym IA Trainer' />
        : shadow ? <img src={logoPreto} className={styles.logoShadow} alt='logo Gym IA Trainer' />
        : admin ? <img src={logoAdmin} className={styles.logoAdmin} alt='logo Gym IA Trainer' />
        : <img src={logoPretoCiano} className={styles.logo} alt='logo Gym IA Trainer' />
      }
    </div>
  )
}
