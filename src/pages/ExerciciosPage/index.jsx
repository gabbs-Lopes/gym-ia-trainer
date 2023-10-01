import React from 'react'
import styles from './ExerciciosPage.module.scss'
import NavBarLogado from 'componentes/NavBarLogado'
import Card from 'componentes/Card'
import { NavLink } from 'react-router-dom'

export default function ExerciciosPage() {
  return (
    <>
      <header className={styles.header}>
        <NavBarLogado perfil shadow />
      </header>

      <main className={styles.main}>
        <h2 className={styles.main__titulo}>
          Bom Dia, <code>$nomeDoUsuario</code>!
        </h2>
        <section className={styles.exercicios}>
          <h1>Exercícios</h1>
        </section>

        <section className={styles.cards}>
          <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to="/exercicio"
            end
          >            
            <Card to="/exercicio" />
          </NavLink>
        </section>
      </main>
    </>
  )
}
