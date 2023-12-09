import NavBarLogado from 'componentes/NavBarLogado'
import React from 'react'
import styles from '../Exercicio.module.scss'
import Carroussel from 'componentes/Carroussel'

import img1 from '../../../assets/imagens/exercicios/torax/SupinoInclinado/img1.jpg'
import img2 from '../../../assets/imagens/exercicios/torax/SupinoInclinado/img2.jpg'
import img3 from '../../../assets/imagens/exercicios/torax/SupinoInclinado/fitness-no-ginasio-levantamento-de-peso.jpg'

import pasta from 'assets/icones/pastaBranca.png'

import numero1 from 'assets/icones/numero1.png'
import numero2 from 'assets/icones/numero-2.png'
import numero3 from 'assets/icones/numero-3.png'
import numero4 from 'assets/icones/numero-4.png'
import numero5 from 'assets/icones/numero-5.png'
import numero6 from 'assets/icones/numero-6.png'

import RodapeWeb from 'componentes/RodapeWeb'


export default function SupinoInclinado() {
  return (
    <>

      <header>
        <NavBarLogado exercicio brancoCiano perfil fixed/>
      </header>

      <main>
        <section className={styles.container}>
          <div className={styles.container__carrousel}>
            <Carroussel exercicio img1={img1} img2={img2} img3={img3}/>
          </div>
          <div className={styles.container__backGround}>
              <div className={styles.container__backGround_DivTitulo}>
                <h1 className={styles.container__backGround_titulo}>Supino Inclinado 2</h1>
                <h1 className={styles.container__backGround_sombra}>Supino Inclinado 2</h1>
              </div>
          </div>

          <div className={styles.container__add}>
            <h2 className={styles.container__addTexto}>Adicionar a Biblioteca</h2>
            <img src={pasta} alt="pasta branca" />
          </div>
        </section>
        <section className={styles.passos}>
          <h2 className={styles.passos__titulo}>Passos Para Realizar O Exercício</h2>

            <table className={styles.passos__divPassos}>
            <tbody>
                <tr className={styles.passos__divPassos_div}>
                  <td> <img src={numero1} alt="numero 1" /> </td>
                  <td>Deite-se em um banco com um haltere em cada mão, os pés apoiados no 
                    chão, e os braços estendidos sobre o peito.</td>
                </tr>

                <tr className={styles.passos__divPassos_div}>
                  <td> <img src={numero2} alt="numero 1" /> </td>
                  <td>Abra os braços para os lados, mantendo uma leve flexão nos cotovelos, 
                    descendo os halteres até sentir um alongamento no peito.</td>
                </tr>

                <tr className={styles.passos__divPassos_div}>
                  <td> <img src={numero3} alt="numero 1" /> </td>
                  <td>Ao atingir a posição mais baixa, mantenha uma breve pausa, sentindo 
                    a tensão no peito.</td>
                </tr>

                <tr className={styles.passos__divPassos_div}>
                  <td> <img src={numero4} alt="numero 1" /> </td>
                  <td>Traga os halteres de volta à posição inicial, contraindo os músculos 
                    do peito durante o movimento.</td>
                </tr>

                <tr className={styles.passos__divPassos_div}>
                  <td> <img src={numero5} alt="numero 1" /> </td>
                  <td>Na posição inicial, os braços devem estar estendidos sobre o peito.</td>
                </tr>

                <tr className={styles.passos__divPassos_div}>
                  <td> <img src={numero6} alt="numero 1" /> </td>
                  <td>Mantenha uma curvatura natural na coluna, e ajuste a carga para um nível 
                    que desafie, mas permita uma boa forma.</td>
                </tr>

              </tbody>
            </table>

        </section>
      </main>

      <RodapeWeb />

    </>
  )
}
