import React from 'react'
import styles from './NavLogado.module.scss'
import Menu from 'componentes/Menu'
import imgPerfilTeste from 'assets/fotosPerfil/hiroHamada.jpg'
import Logo from 'componentes/Logo'
import { Link } from 'react-router-dom'

export default function NavBarLogado({ perfil, shadow }) {

  return (
    <nav className={`
        ${styles.navBar}
        ${shadow ? styles.shadow : ''}
      `}>

      {perfil
        ? ''
        : <Link to="/perfil">
            <img
              className={styles.navBar__fotoPerfil}
              src={imgPerfilTeste}
              alt="imagem do hiro hamada"
            />
          </Link>
      }


      <Logo shadow={shadow} />

      <Menu config />
    </nav>
  )
}
