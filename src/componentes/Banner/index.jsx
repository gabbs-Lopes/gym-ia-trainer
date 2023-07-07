import React from 'react'
import styles from './Banner.module.scss'
import Menu from 'componentes/Menu'

export default function index() {
  return (
    <header className={styles.banner}>
      <Menu />
      <div className={styles.banner__texto}>
        <h2><strong>Tenologia</strong> e <strong>evolução</strong> num só lugar</h2>
      </div> 
    </header>
  )
}
