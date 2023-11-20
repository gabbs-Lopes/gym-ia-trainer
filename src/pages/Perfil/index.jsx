import React, { useState } from 'react'
import imgPerfil from 'assets/fotosPerfil/fidel.png'
import styles from './Perfil.module.scss'
import NavBarLogado from 'componentes/NavBarLogado'
import '../../styles/globalStyles.scss'
import InputPerfil from 'componentes/InputPerfil'
import iconeEditar from '../../assets/icones/editar.png'
/* const db = require('./db.js'); */

export default function Perfil() {

  // aqui, dps eu me viro pra passar pro elemento
  


const [togglePerfil, setTogglePerfil] = useState(false)

  /*function TogglePerfil() {
    setTogglePerfil(!togglePerfil)
  }*/
  
  console.log(togglePerfil)
  return (
    <>
      <header>
        <NavBarLogado shadow perfil/>
      </header>

      <main className={styles.main}>
        <section className={styles.left}>
          <div className={styles.left__perfilToggle}>            
            <div 
              className={`${styles.left__menu} 
              ${styles.left__dados}`}
              onClick={() => setTogglePerfil(!togglePerfil)}
            >
              <h2>Account Info</h2>
              <p>Details about your personal information</p>
            </div>
            <div className={`${styles.left__menu} ${styles.left__config}`}>
              <h2>Account Setting</h2>
              <p>customize and manage your account</p>
            </div>
          </div>
        </section>

        <section className={styles.right}>
          <h1 className={styles.right__titulo}>Account Info</h1>
          <div className={styles.right__dadosPrincipais}>
            <div className={styles.right__dadosPrincipais_div}>
              <div className={styles.right__dadosPrincipais_divImg}>
                <img className={styles.right__dadosPrincipais_divImg__img} src={imgPerfil} alt="fidel castro" />
                <img 
                  className={styles.right__dadosPrincipais_divImg__icone} 
                  src={iconeEditar} 
                  alt="icone editar foto" 
                />
              </div>
              <div className={styles.right__dadosPrincipais_divNome}>
                <h2>Fidel Castro Mendes</h2>
                <p>profile-pic.jpg</p>
              </div>
            </div>
            <button className={styles.right__dadosPrincipais_btn}>Update</button>
          </div>

          <div className={styles.right__editarDados}>
            <h2>Change User Information Here</h2>
            <form action="">
              <div className={styles.right__editarDados_divInputs}>
                <InputPerfil 
                  editarDados
                  type="text" 
                  label="Full Name*" 
                  conexao="name" 
                  placeholder="Digite seu Nome Completo"
                />

                <InputPerfil 
                  editarDados
                  type="email" 
                  label="Email Address*" 
                  conexao="email" 
                  placeholder="Digite seu E-mail"
                />

                <InputPerfil 
                  editarDados
                  type="password" 
                  label="Password*" 
                  conexao="password" 
                  placeholder="Digite sua Senha"
                />

                <InputPerfil 
                  editarDados
                  type="tel" 
                  label="Phone Number*" 
                  conexao="tel" 
                  placeholder="(xx) xxxxx-xxxx"
                />

              </div>
              <button className={styles.right__editarDados_btn}>Update</button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
