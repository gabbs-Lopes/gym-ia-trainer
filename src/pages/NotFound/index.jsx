import NavBar from 'componentes/NavBar'
import React from 'react'
import styles from './NotFound.module.scss'

import { useNavigate } from 'react-router-dom'

import notFound from 'assets/notFound.png'
import Button from 'componentes/Button'

export default function NotFound() {

  const navegar = useNavigate()

  return (
    <>
      <header>
        <NavBar button/>
      </header>

      <main>
        <section className={styles.notFound}>
          <img className={styles.notFound__img} src={notFound} alt="" />
          <div className={styles.notFound__divH1}>
            <h1 className={styles.notFound__t1}>calma ai,</h1>
            <h1 className={styles.notFound__t2}>campeão!</h1>
          </div>
          <p className={styles.notFound__p}>Não foi possível encontrar a página que você buscava.</p>
          <div 
            className={styles.notFound__div}
            onClick={() => {
              navegar(-1)
              console.log("clicado")
            }}
          >
            <Button fixed saibaMais texto="Voltar" to=""/>
          </div>
        </section>
      </main>
    </>
  )
}
