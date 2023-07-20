import React from 'react'
import styles from './Menu.module.scss'

import Button from 'componentes/Button'

import logo from 'assets/logo.png'
import Menu from 'componentes/Menu'

export default function NavInicio() {

  return (
    <nav className={styles.menu}>
      <img src={logo} className={styles.menu__logo} alt='logo Gym IA Trainer' />

      <Button texto='Entrar' to='/login' />
      <Menu />
    </nav>
  )
}


