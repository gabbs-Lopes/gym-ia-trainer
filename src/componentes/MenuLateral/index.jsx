import React from 'react'
import styles from './MenuLateral.module.scss'
import fechar from 'assets/icones/fechar.png'
import logo from 'assets/logoPreto.png'
import iconeDuvidas from 'assets/iconeDuvidas.png'
import { Link } from 'react-router-dom'

export default function MenuLateral({ mudaEstadoMenu, estado }) {
  return (
    <section id='btn' className={`
        ${styles.menuLateral}
        ${estado ? styles.menuLateral__open : ''}
      `}>
      <div className={styles.menuLateral__div}>
        <img src={logo} alt='logo Gym IA Trainer' />
        <img
          className={styles.menuLateral__fechar}
          src={fechar} alt="botao de fechar"
          onClick={mudaEstadoMenu}
        />
        <Link to="/exercicios">
          <button className={styles.menuLateral__btn}>Experimente agora</button>
        </Link>
        <div>
          <h3>Página Inicial</h3>
          <h3>Sobre nós</h3>
          <h3>Entre em contato</h3>
          <h3>Seja um franqueado</h3>
          <h3>Apoie o projeto</h3>
        </div>
      </div>

      <div className={styles.menuLateral__footer}>
        <img src={iconeDuvidas} alt="icone de duvidas" />
        <h2>Dúvidas frequentes</h2>
      </div>
    </section>
  )
}
