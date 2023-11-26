import React, { useState, useEffect } from 'react'
import imgPerfil from 'assets/fotosPerfil/fidel.png'
import styles from './Perfil.module.scss'
import NavBarLogado from 'componentes/NavBarLogado'
import '../../styles/globalStyles.scss'
import InputPerfil from 'componentes/InputPerfil'
/* import { div } from '@tensorflow/tfjs' */
/* const db = require('./db.js'); */

import axios from 'axios'

import iconeEditar from '../../assets/icones/editar.png'
import iconeSettings from '../../assets/icones/iconeSettings.png'
import iconeInfo from '../../assets/icones/info.png'
import PerfilToggle from 'componentes/PerfilToggle'

export default function Perfil() {

  // aqui, dps eu me viro pra passar pro elemento

  axios.defaults.withCredentials = true;

  useEffect(()=>{
    axios.get('http://localhost:3001/api/loggedin')
      .then((res) => {
        if (res.data.LoggedIn === true) {
          console.log(res.data)
          console.log("abacate", res.data.user)
        } else {
          console.log("nao foi")
          console.log(res.data)
        }
      })
      .catch(err => console.log(err))
  }, [])

  /*   useEffect(() => {
    axios.get("http://localhost:3001/api/loggedin")
    .then((res) => {
      if (res.data.loggedIn === true) {
        console.log(res.data.loggedIn)
        console.log(res.data.user)
        console.log("requisição get funcionou") 
      } else { 
        console.log(res.data.loggedIn)
        console.log("requisição get fail") 
      }
    })
  }, []) */
  
  


const [togglePerfil, setTogglePerfil] = useState(true)
  
  console.log(togglePerfil)
  return (
    <>
      <header>
        <NavBarLogado shadow perfil/>
      </header>

      <main className={styles.main}>
        <section className={styles.left}>
          <div className={styles.left__perfilToggle}>
            <PerfilToggle 
              titulo="Infomações Perfil"
              subtitulo="Details about your personal information"
              img={iconeInfo}
              alt="icone de configuração"
              estadoToggle={togglePerfil}
              mudaEstado={() => setTogglePerfil(true)}
            />
            
            <PerfilToggle 
              titulo="Configurações"
              subtitulo="customize and manage your account"
              img={iconeSettings}
              alt="icone de configuração"
              estadoToggle={togglePerfil}
              mudaEstado={() => setTogglePerfil(false)}
            />
          </div>
        </section>

        <section className={styles.right}>
          {togglePerfil          
          ? <div className={styles.info}>
              <h1 className={styles.info__titulo}>Account Info</h1>
              <div className={styles.info__dadosPrincipais}>
                <div className={styles.info__dadosPrincipais_div}>
                  <div className={styles.info__dadosPrincipais_divImg}>
                    <img className={styles.info__dadosPrincipais_divImg__img} src={imgPerfil} alt="fidel castro" />
                    <img 
                      className={styles.info__dadosPrincipais_divImg__icone} 
                      src={iconeEditar} 
                      alt="icone editar foto" 
                    />
                  </div>
                  <div className={styles.info__dadosPrincipais_divNome}>
                    <h2>Fidel Castro Mendes</h2>
                    <p>profile-pic.jpg</p>
                  </div>
                </div>
                <button className={styles.info__dadosPrincipais_btn}>Update</button>
              </div>

              <div className={styles.info__editarDados}>
                <h2>Alterar dados Pessoais</h2>
                <form action="">
                  <div className={styles.info__editarDados_divInputs}>
                    <InputPerfil 
                      editarDados
                      type="text" 
                      label="Full Name" 
                      conexao="name" 
                      placeholder="Digite seu Nome Completo"
                      required
                    />

                    <InputPerfil 
                      editarDados
                      type="email" 
                      label="Email Address" 
                      conexao="email" 
                      placeholder="Digite seu E-mail"
                      required
                    />

                    <InputPerfil 
                      editarDados
                      type="password" 
                      label="Password" 
                      conexao="password" 
                      placeholder="Digite sua Senha"
                      required
                    />

                    <InputPerfil 
                      editarDados
                      type="tel" 
                      label="Phone Number" 
                      conexao="tel" 
                      placeholder="(xx) xxxxx-xxxx"
                    />

                  </div>
                  <button className={styles.info__editarDados_btn}>Update</button>
                </form>
              </div>
            </div>
          : <div className={styles.settings}>
              <h1 className={styles.info__titulo}>Account Settings</h1>
            </div>
          }
        </section>
      </main>
    </>
  )
}
