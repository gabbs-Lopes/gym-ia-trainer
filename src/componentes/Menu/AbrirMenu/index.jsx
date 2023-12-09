import React from 'react'
import { ReactComponent as Hamburguer } from 'assets/menuHamburguer.svg'
import styles from './MenuHamburguer.module.scss'
import iconeConfig from 'assets/icones/iconeConfig.png'
import hambPreto from 'assets/icones/hambPreto.png'

export default function AbrirMenu({ mudaEstadoMenu, config, blue, preto }) {

  /* function abrir() {
    return setMenuAtivo = true
  } */

  return (
    <div onClick={ mudaEstadoMenu }>
      {config
        ? <img src={iconeConfig} alt="icone de engrenagem" />
        : preto ? <img src={hambPreto} alt="icone menu preto" />
        : <Hamburguer
        className={styles.menuHamburguer}
      />
      }
    </div>
  )
}
