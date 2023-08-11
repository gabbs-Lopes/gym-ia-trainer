import React from 'react'
import imgPerfilTeste from 'assets/fotosPerfil/hiroHamada.jpg'
import styles from './Perfil.module.scss'
import NavBarLogado from 'componentes/NavBarLogado'

export default function Perfil() {
  return (
    <>
      <header>
        <NavBarLogado shadow perfil/>
      </header>

      <main>
        <section className={styles.dadosPerfil}>
          <div>
            <img 
              className={styles.dadosPerfil__fotoPerfil} 
              src={imgPerfilTeste} 
              alt="imagem de perfil do Hiro Hamada" 
            />

            <h2><em>Hiro</em><em>Hamada</em></h2>
          </div>
        </section>

        <section className={styles.info}>
          <h2>Minhas Informações:</h2>
        </section>
      </main>
    </>
  )
}
