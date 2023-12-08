import React from 'react'
import styles from './Treino.module.scss'

export default function Treino() {
  return (
    <div className={styles.container}>
        <h2>Geral | Treinos</h2>

        <h1>Inserir exercicio</h1>

        <form action="">
            <section className={styles.formLeft}>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
            </section>

            <section className={styles.formRight}>
                
            </section>
        </form>
    </div>
  )
}
