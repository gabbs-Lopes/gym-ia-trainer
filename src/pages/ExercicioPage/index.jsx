import React from 'react'
import styles from './ExercicioPage.module.scss'
/* import TensorFlow from 'componentes/TensorFlow' */

import BotaoVoltar from 'componentes/BotaoVoltar'
import BotaoTF from 'componentes/BotaoTF'
import NavBarLogado from 'componentes/NavBarLogado'
import Carroussel from 'componentes/Carroussel'

import pontoPreto from 'assets/icones/circulo-preto.png'

export default function ExercicioPage() {
  return (
    <>
      <header>
        <NavBarLogado perfil shadow />
      </header>

      <main>
        <section className={styles.carrousel}>
          <Carroussel />
        </section>

        {/* botao de voltar */}
        <div className={styles.voltar}>
          <BotaoVoltar texto="<- voltar" to='/exercicios' />
        </div>

        <section className={styles.info}>
          <h2 className={styles.info__nome}>SUPINO RETO COM BARRA</h2>

          <div className={styles.info__divTitulo}>
            <h3 className={styles.info__titulo}>Instruções</h3>
          </div>

          <div className={styles.info__passos}>
            <table>
              <tr>
                <td><img src={pontoPreto} alt="ponto preto" /></td>
                <td><p>Afaste os pés.</p></td>
              </tr>

              <tr>
                <td><img src={pontoPreto} alt="ponto preto" /></td>
                <td><p>Alinhe-os com o quadril.</p></td>
              </tr>

              <tr>
                <td><img src={pontoPreto} alt="ponto preto" /></td>
                <td><p>Dobre os joelhos, empinando o bumbum</p></td>
              </tr>

              <tr>
                <td><img src={pontoPreto} alt="ponto preto" /></td>
                <td><p>AMantenha a coluna ereta.</p></td>
              </tr>

              <tr>
                <td><img src={pontoPreto} alt="ponto preto" /></td>
                <td><p>Faça o movimento de descida e subida mantendo a postura.</p></td>
              </tr>
            </table>
          </div>

        </section>
        
          {/* <TensorFlow /> */}
        <section className={styles.tensorFlow}>
          <BotaoTF />
        </section>

      </main>

    </>
  )
}
