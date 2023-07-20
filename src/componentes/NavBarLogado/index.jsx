import React from 'react'
import styles from './NavLogado.module.scss'
import Menu from 'componentes/Menu'
import imgPerfilTeste from 'assets/fotosPerfil/hiroHamada.jpg'
import Logo from 'componentes/Logo'

export default function NavBarLogado() {
  return (
    <nav className={styles.navBar}>
      <img 
        className={styles.navBar__fotoPerfil} 
        src={imgPerfilTeste} 
        alt="imagem do hiro hamada" 
      />

      <Logo preto/>

      <Menu config/>
    </nav>
  )
}
