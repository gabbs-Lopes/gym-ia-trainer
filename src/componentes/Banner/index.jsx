import React from 'react'
import styles from './Banner.module.scss'
import NavBar from 'componentes/NavBar'
import Button from 'componentes/Button'

export default function index({ botao }) {

  return (
    <header className={styles.banner}>
      <NavBar padrao button={botao}/>
      <div className={styles.banner__btn}>
        <Button banner texto="Experimente Agora" to="/exercicios"/>
      </div>
    </header>
  )
}
