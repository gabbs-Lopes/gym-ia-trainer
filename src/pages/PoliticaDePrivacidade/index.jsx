import NavBar from 'componentes/NavBar'
import React from 'react'
import styles from './PoliticaDePrivacidade.module.scss'

export default function PoliticaDePrivacidade() {
  return (
    <>
        <NavBar />
        <main className={styles.main}>
            <h1 className={styles.main__titulo}>Política de Privacidade</h1>
        </main>
    </>
  )
}
