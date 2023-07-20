import React from 'react'
import styles from './Menu.module.scss'

import Button from 'componentes/Button'

import Menu from 'componentes/Menu'
import Logo from 'componentes/Logo'

export default function NavInicio() {

  return (
    <nav className={styles.menu}>
      <Logo />

      <Button texto='Entrar' to='/login' />
      <Menu />
    </nav>
  )
}


