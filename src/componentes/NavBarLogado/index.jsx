import React from 'react'
import styles from './NavLogado.module.scss'
import Menu from 'componentes/Menu'
import imgPerfilTeste from 'assets/fotosPerfil/fidel.png'
import Logo from 'componentes/Logo'
import { Link } from 'react-router-dom'

export default function NavBarLogado({ perfil, clean, dark, admin }) {

  return (
    <nav className={`
        ${styles.navBar}
        ${clean ? styles.clean : ''}
        ${dark ? styles.dark : ''}
      `}>

      {perfil
        ? <div className={styles.usuario}>
          <div className={styles.foto}>
            <Link to="/perfil">
              <img
                className={styles.navBar__fotoPerfil}
                src={imgPerfilTeste}
                alt="imagem do hiro hamada"
              />
            </Link>
          </div>

          {admin
            ? <div className={styles.usuario__dados}>
              <h2 className={styles.usuario__dados_nome}>Administrador</h2>
              <h3 className={styles.usuario__dados_status}><strong>&middot;</strong> Online</h3>
            </div>
            : ''
          }
        </div>
        : ''
      }


      <Logo clean={clean} admin={admin} />

      <div className={styles.menu}>
        <Menu blue />
      </div>
    </nav>
  )
}
