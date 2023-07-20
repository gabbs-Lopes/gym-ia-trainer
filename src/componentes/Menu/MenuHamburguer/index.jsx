import React from 'react'
import { ReactComponent as Hamburguer } from 'assets/menuHamburguer.svg'
import styles from './MenuHamburguer.module.scss'

export default function MenuHamburguer({ mudaEstadoMenu }) {

  /* function abrir() {
    return setMenuAtivo = true
  } */

  return (
    <div onClick={ mudaEstadoMenu }>
      <Hamburguer 
        className={styles.menuHamburguer}
      />
    </div>
  )
}
