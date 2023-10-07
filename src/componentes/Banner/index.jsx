import React from 'react'
import styles from './Banner.module.scss'
import NavBar from 'componentes/NavBar'
import Button from 'componentes/Button'

export default function index() {
  return (
    <header className={styles.banner}>
      <NavBar button/>
      <div className={styles.banner__btn}>
        <Button banner texto="Experimente Agora" to="/exercicios"/>
      </div>
    </header>
  )
}
