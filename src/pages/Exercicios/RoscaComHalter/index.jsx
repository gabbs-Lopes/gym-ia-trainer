import NavBarLogado from 'componentes/NavBarLogado'
import React from 'react'
import styles from '../Exercicio.module.scss'
import Carroussel from 'componentes/Carroussel'

import img1 from '../../../assets/imagens/exercicios/biceps/RoscaComHalter/img1.jpg'

import pasta from 'assets/icones/pastaBranca.png'

import numero1 from 'assets/icones/numero1.png'
import numero2 from 'assets/icones/numero-2.png'
import numero3 from 'assets/icones/numero-3.png'
import numero4 from 'assets/icones/numero-4.png'
import numero5 from 'assets/icones/numero-5.png'
import numero6 from 'assets/icones/numero-6.png'

import RodapeWeb from 'componentes/RodapeWeb'


export default function RoscaComHalter() {
  return (
    <>

      <header>
        <NavBarLogado exercicio brancoCiano perfil fixed />
      </header>

      <main>
        <section className={styles.container}>
          <div className={styles.container__carrousel}>
            <Carroussel exercicio img1={img1} />
          </div>
          <div className={styles.container__backGround}>
            <div className={styles.container__backGround_DivTitulo}>
              <h1 className={styles.container__backGround_titulo}>Rosca Com Halter</h1>
              <h1 className={styles.container__backGround_sombra}>Rosca Com Halter</h1>
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
                <td> <img src={numero1} alt="Passo 1" /> </td>
                <td>Passo 1: Fique em pé, segurando um haltere em cada mão ao lado do corpo, com os pés na largura dos ombros.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero2} alt="Passo 2" /> </td>
                <td>Passo 2: Flexione os cotovelos, elevando os halteres em direção aos ombros, mantendo os braços próximos ao corpo.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero3} alt="Passo 3" /> </td>
                <td>Passo 3: Ao atingir o topo, contraia os músculos do bíceps e mantenha a posição por um instante.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero4} alt="Passo 4" /> </td>
                <td>Passo 4: Baixe os halteres de volta à posição inicial, estendendo os cotovelos de maneira controlada.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero5} alt="Passo 5" /> </td>
                <td>Passo 5: Estenda completamente os cotovelos na posição mais baixa, mantendo controle e estabilidade.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero6} alt="Passo 6" /> </td>
                <td>Passo 6: Mantenha a postura ereta, evite balanços excessivos e escolha um peso que desafie, mas permita uma boa forma.</td>
              </tr>
            </tbody>
          </table>

        </section>
      </main>

      <RodapeWeb />

    </>
  )
}
