import React, { useState, useEffect } from 'react'
import Banner from 'componentes/Banner'
import styles from './Home.module.scss'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import Rodape from 'componentes/Rodape'

import imgPNE from 'assets/jovemDesportista.png'
import Button from 'componentes/Button'
import Carroussel from 'componentes/Carroussel'


export default function Home() {

  const [auth, setAuth] = useState('')
  /* const [message, setMessage] = useState('')
  const [name, setId] = useState('') */

  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3001/api/verify')
    .then(res =>{
      if (res.data.Status === "Success"){
        setAuth(true)
        console.log("id: ", res.data.id)
        navigate('/')
      } else {
        setAuth(false)
        /* setMessage("error: ", res.data.Error) */
      }
    })
    /* .then(err => console.log(err)) */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(auth)

  return (
    <>
      {auth ? <Banner styles={styles.Banner} /> : <Banner styles={styles.Banner} botao/>}
      <main>
        <section className={styles.porqueNosEscolher}>
          <div className={styles.porqueNosEscolher__div} >
            <img 
            id='sobreNos'
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
