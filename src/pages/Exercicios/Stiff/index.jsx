import NavBarLogado from 'componentes/NavBarLogado'
import React from 'react'
import styles from '../Exercicio.module.scss'
import Carroussel from 'componentes/Carroussel'

import img1 from '../../../assets/imagens/exercicios/gluteo/Stiff/img1.jpg'
import img2 from '../../../assets/imagens/exercicios/gluteo/Stiff/img2.jpg'

import pasta from 'assets/icones/pastaBranca.png'

import numero1 from 'assets/icones/numero1.png'
import numero2 from 'assets/icones/numero-2.png'
import numero3 from 'assets/icones/numero-3.png'
import numero4 from 'assets/icones/numero-4.png'

import RodapeWeb from 'componentes/RodapeWeb'


export default function Stiff() {
  return (
    <>

      <header>
        <NavBarLogado exercicio brancoCiano perfil fixed/>
      </header>

      <main>
        <section className={styles.container}>
          <div className={styles.container__carrousel}>
            <Carroussel exercicio img1={img1} img2={img2}/>
          </div>
          <div className={styles.container__backGround}>
              <div className={styles.container__backGround_DivTitulo}>
                <h1 className={styles.container__backGround_titulo}>Stiff</h1>
                <h1 className={styles.container__backGround_sombra}>Stiff</h1>
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
                  <td>Fique em pé, pés na largura dos ombros, segure a barra à frente das coxas.</td>
                </tr>

                <tr className={styles.passos__divPassos_div}>
                  <td> <img src={numero2} alt="numero 1" /> </td>
                  <td>Mantenha as costas retas, ombros para trás, e segure a barra com pegada pronada.</td>
                </tr>

                <tr className={styles.passos__divPassos_div}>
                  <td> <img src={numero3} alt="numero 1" /> </td>
                  <td>Incline-se para frente a partir dos quadris, mantendo as pernas 
                    estendidas, até sentir um alongamento nos glúteos.</td>
                </tr>

                <tr className={styles.passos__divPassos_div}>
                  <td> <img src={numero4} alt="numero 1" /> </td>
                  <td>Desça a barra até pouco abaixo dos joelhos, mantendo as costas retas. 
                    Evite arredondar a coluna para prevenir lesões.</td>
                </tr>

              </tbody>
            </table>

        </section>
      </main>

      <RodapeWeb />

    </>
  )
}
