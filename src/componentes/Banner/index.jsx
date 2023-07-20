import React from 'react'
import styles from './Banner.module.scss'
import NavInicio from 'componentes/NavInicio'

export default function index() {
  return (
    <header className={styles.banner}>
      <NavInicio />
      <div className={styles.banner__texto}>
        <h2><strong>Tecnologia</strong> e <strong>evolução</strong> num só lugar</h2>
      </div> 
    </header>
  )
}
