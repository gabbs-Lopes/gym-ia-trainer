import NavBarLogado from 'componentes/NavBarLogado'
import React from 'react'
import styles from '../Exercicio.module.scss'
import Carroussel from 'componentes/Carroussel'

import img1 from '../../../assets/imagens/exercicios/abdomen/Crunch/img1.jpg'
import img2 from '../../../assets/imagens/exercicios/abdomen/Crunch/img2.jpg'

import pasta from 'assets/icones/pastaBranca.png'

import numero1 from 'assets/icones/numero1.png'
import numero2 from 'assets/icones/numero-2.png'
import numero3 from 'assets/icones/numero-3.png'
import numero4 from 'assets/icones/numero-4.png'
import numero5 from 'assets/icones/numero-5.png'
import numero6 from 'assets/icones/numero-6.png'

import RodapeWeb from 'componentes/RodapeWeb'


export default function Crunch() {
  return (
    <>

      <header>
        <NavBarLogado exercicio brancoCiano perfil fixed />
      </header>

      <main>
        <section className={styles.container}>
          <div className={styles.container__carrousel}>
            <Carroussel exercicio img1={img1} img2={img2} />
          </div>
          <div className={styles.container__backGround}>
            <div className={styles.container__backGround_DivTitulo}>
              <h1 className={styles.container__backGround_titulo}>Crunch</h1>
              <h1 className={styles.container__backGround_sombra}>Crunch</h1>
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
                <td>Passo 1: Deite-se de costas com os joelhos dobrados e os pés apoiados no chão. Coloque as mãos atrás da cabeça, sem puxar o pescoço.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero2} alt="Passo 2" /> </td>
                <td>Passo 2: Contraia os músculos abdominais e levante os ombros em direção aos joelhos, mantendo o queixo afastado do peito.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero3} alt="Passo 3" /> </td>
                <td>Passo 3: No ponto mais alto, contraia os músculos abdominais e mantenha a posição por um breve momento.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero4} alt="Passo 4" /> </td>
                <td>Passo 4: Baixe lentamente o tronco de volta ao chão, mantendo a tensão nos músculos abdominais.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero5} alt="Passo 5" /> </td>
                <td>Passo 5: Toque levemente o solo com as costas antes de iniciar o próximo crunch.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero6} alt="Passo 6" /> </td>
                <td>Passo 6: Evite puxar o pescoço, concentre-se em contrair os músculos abdominais e respire de maneira controlada.</td>
              </tr>
            </tbody>
          </table>

        </section>
      </main>

      <RodapeWeb />

    </>
  )
}
