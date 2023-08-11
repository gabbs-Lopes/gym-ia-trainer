import React from 'react'
import { ReactComponent as Hamburguer } from 'assets/menuHamburguer.svg'
import styles from './MenuHamburguer.module.scss'
import iconeConfig from 'assets/icones/iconeConfig.png'

export default function AbrirMenu({ mudaEstadoMenu, config }) {

  /* function abrir() {
    return setMenuAtivo = true
  } */

  return (
    <div onClick={ mudaEstadoMenu }>
      {config
        ? <img src={iconeConfig} alt="icone de engrenagem" />
        : <Hamburguer
            className={styles.menuHamburguer}
          />
      }
    </div>
  )
}
