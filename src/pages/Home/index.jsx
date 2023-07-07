import Banner from 'componentes/Banner'
import React from 'react'
import styles from './Home.module.scss'
import Rodape from 'componentes/Rodape'


export default function Home( ) {
  return (
    <>
      <Banner styles={styles.Banner} />
      <main>
        <section className={styles.valores}>
        </section>
      </main>

      <Rodape />
    </>
  )
}
