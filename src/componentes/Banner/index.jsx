import React from 'react'
import styles from './Banner.module.scss'
import NavBar from 'componentes/NavBar'

export default function index() {
  return (
    <header className={styles.banner}>
      <NavBar button />
      <div className={styles.banner__texto}>
        <h2><strong>Tecnologia</strong> e <strong>evolução</strong> num só lugar</h2>
      </div>
    </header>
  )
}
