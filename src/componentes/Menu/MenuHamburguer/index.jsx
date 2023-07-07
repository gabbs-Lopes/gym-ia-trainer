import React from 'react'
import { ReactComponent as Hamburguer } from 'assets/menuHamburguer.svg'
import styles from './MenuHamburguer.module.scss'

export default function MenuHamburguer({ abrirMenu }) {

  return (
    <div onClick={ abrirMenu }>
      <Hamburguer 
        className={styles.menuHamburguer}
      />
    </div>
  )
}
