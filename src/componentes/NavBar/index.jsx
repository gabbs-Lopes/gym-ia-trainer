import React from 'react'
import styles from './NavBar.module.scss'

import Button from 'componentes/Button'

import Menu from 'componentes/Menu'
import Logo from 'componentes/Logo'

export default function NavBar({ shadow, button }) {

  return (
    <nav className={styles.menu}>
      <Logo shadow/>

      { button 
        ? <Button texto='Entrar' to='/login' /> 
        : ''
      }

      <Menu />
    </nav>
  )
}


