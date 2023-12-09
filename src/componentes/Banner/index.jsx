import React from 'react'
import styles from './Banner.module.scss'
import NavBar from 'componentes/NavBar'
import Button from 'componentes/Button'

import titulo from 'assets/titulo.png'

export default function index({ botao }) {

  return (
    <header className={styles.banner}>
      <NavBar padrao button={botao}/>
      <div className={styles.banner__btn}>
        <div className={styles.banner__t}>
          <img src={titulo} alt="titulo" />
          <h2>Tecnologia & Inovação Num só lugar. </h2>
        </div>
        <Button banner texto="Experimente Agora" to="/exercicios"/>
      </div>
    </header>
  )
}
