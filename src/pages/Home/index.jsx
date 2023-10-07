import Banner from 'componentes/Banner'
import React from 'react'
import styles from './Home.module.scss'

import Rodape from 'componentes/Rodape'

import imgPNE from 'assets/jovemDesportista.png'
import Button from 'componentes/Button'
import Carroussel from 'componentes/Carroussel'


export default function Home() {
  return (
    <>
      <Banner styles={styles.Banner} />
      <main>
        <section className={styles.porqueNosEscolher}>
          <div className={styles.porqueNosEscolher__div} >
            <img 
            src={imgPNE} 
            alt="Jovem desportista amarrando cadarço na academia" 
            />
          </div>
          
          <h2 className={styles.porqueNosEscolher__titulo}>Por Que Nos Escolher?</h2>
          <h3 className={styles.porqueNosEscolher__subtitulo}>Sobre a GymIA</h3>

          <p className={styles.porqueNosEscolher__texto}>A GymIA é uma empresa no ramo de personal trainer com IA e qualidade
            de vida que tem como objetivo principal facilitar e melhorar a
            experiência de um praticante de atividade físicas, tanto convencionais,
            quanto de rendimento, encurtando as barreiras existentes nesse âmbito
            que impedem o seu desenvolvimento.</p>
          <p className={styles.porqueNosEscolher__texto}>
            Imagine ter um parceiro de treino sempre ao seu lado, pronto para 
            fornecer orientação especializada, motivação inabalável e correções 
            precisas para aprimorar sua técnica. A GymIA Trainer oferece exatamente 
            isso e muito mais.</p>

          <div className={styles.botao}>
            <Button saibaMais texto="Saiba Mais" to="/sobreNos" />
          </div>
        </section>

        <section className={styles.destaques}>
          <h1 className={styles.destaques__titulo}>Destaques</h1>
          <h2 className={styles.destaques__subtitulo}>Nós oferecemos suporte em diversos treinos</h2>
          <div className={styles.destaques__carrousel}>
            <Carroussel homePage/>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  )
}
