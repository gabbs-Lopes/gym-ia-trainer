import NavBar from 'componentes/NavBar'
import React from 'react'
import styles from './NotFound.module.scss'

import notFound from 'assets/notFound.png'

export default function NotFound() {
  return (
    <>
      <header>
        <NavBar button/>
      </header>

      <main>
        <section className={styles.notFound}>
          <img className={styles.notFound__img} src={notFound} alt="" />
          <h1>calma ai, <strong>campeão!</strong></h1>
          <p>Não foi possível encontrar a página que você buscava.</p>
        </section>
      </main>
    </>
  )
}
