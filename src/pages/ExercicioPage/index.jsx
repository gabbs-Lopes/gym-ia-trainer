import React from 'react'
import styles from './ExercicioPage.module.scss'
/* import TensorFlow from 'componentes/TensorFlow' */

import BotaoVoltar from 'componentes/BotaoVoltar'
import supRetoImg from './supinoRetoBarra1.jpg'
import BotaoTF from 'componentes/BotaoTF'
import NavBarLogado from 'componentes/NavBarLogado'

export default function ExercicioPage() {
  return (
    <>
      <header>
        <NavBarLogado perfil shadow/>
      </header>

      <main>
        <section className={styles.carrousel}>
          <img
            className={styles.imgExercicio}
            src={supRetoImg}
            alt="execução supino reto"
          />

        </section>

        <div className={styles.voltar}>
          <BotaoVoltar texto="<- voltar" to='/exercicios' />
        </div>

        <section className={styles.tensorFlow}>
          <BotaoTF />
        </section>

      </main>

      <div className={styles.info}>
        <h2 className={styles.info__nome}>SUPINO RETO COM BARRA</h2>
        <div className={styles.info__passos}>
          <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur, doloribus!</p>
          <p>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur, doloribus!</p>
          <p>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur, doloribus!</p>
          <p>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur, doloribus!</p>
          <p>5. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur, doloribus!</p>
          <p>6. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur, doloribus!</p>
          <p>7. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur, doloribus!</p>
        </div>

        {/* <TensorFlow /> */}
      </div>
    </>

  )
}
