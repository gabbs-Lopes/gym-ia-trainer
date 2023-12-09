import NavBarLogado from 'componentes/NavBarLogado'
import React from 'react'
import styles from '../Exercicio.module.scss'
import Carroussel from 'componentes/Carroussel'

import img1 from '../../../assets/imagens/exercicios/biceps/Rosca/img1.jpg'
import img2 from '../../../assets/imagens/exercicios/biceps/Rosca/img2.jpg'

import pasta from 'assets/icones/pastaBranca.png'

import numero1 from 'assets/icones/numero1.png'
import numero2 from 'assets/icones/numero-2.png'
import numero3 from 'assets/icones/numero-3.png'
import numero4 from 'assets/icones/numero-4.png'

import iconeCam from 'assets/icones/camera.png'

import RodapeWeb from 'componentes/RodapeWeb'
import { Link } from 'react-router-dom'


export default function RoscaAlternada() {
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
              <h1 className={styles.container__backGround_titulo}>Rosca Alternada</h1>
              <h1 className={styles.container__backGround_sombra}>Rosca Alternada</h1>
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
                <td>Passo 1: Fique em pé, pés na largura dos ombros, segure a barra à largura dos ombros.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero2} alt="Passo 2" /> </td>
                <td>Passo 2: Ombros para trás, coluna ereta, cotovelos próximos ao corpo.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero3} alt="Passo 3" /> </td>
                <td>Passo 3: Levante a barra em direção aos ombros, contraindo os bíceps.</td>
              </tr>

              <tr className={styles.passos__divPassos_div}>
                <td> <img src={numero4} alt="Passo 4" /> </td>
                <td>Passo 4: Levante a barra até os ombros, evitando forçar o cotovelo além da linha dos quadris.</td>
              </tr>
            </tbody>
          </table>
          
          <Link to="/tfRosca">
            <div className={styles.linkTF}>
              <img src={iconeCam} alt="icone de câmera" />
              <h2>Utilizar Detecção de Pose</h2>
            </div>
          </Link>
        </section>
      </main>

      <RodapeWeb />

    </>
  )
}
