import NavBar from 'componentes/NavBar'
import React from 'react'
import styles from './NotFound.module.scss'

import notFound from 'assets/notFound.png'
import Button from 'componentes/Button'

export default function NotFound() {
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
          <div className={styles.notFound__div}>
            <Button fixed saibaMais texto="Voltar" to=""/>
          </div>
        </section>
      </main>
    </>
  )
}
