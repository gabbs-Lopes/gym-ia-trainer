import React from 'react'
import styles from './MenuLateral.module.scss'
import { Link } from 'react-router-dom'
import { Link as LinkSmooth } from 'react-scroll';

import LinksMenu from 'componentes/Menu/LinksMenu'
import Logo from 'componentes/Logo'

import fechar from 'assets/icones/fechar.png'
import iconeDuvidas from 'assets/iconeDuvidas.png'
import iconeCasa from 'assets/icones/iconeCasa.png'

export default function MenuLateral({ mudaEstadoMenu, estado }) {
  return (
    <section id='btn' /* onBlur={mudaEstadoMenu} */ className={`
        ${styles.menuLateral}
        ${estado ? styles.menuLateral__open : ''}
      `}>
      <div className={styles.menuLateral__div}>
        <Link to="/">
          <Logo preto />
        </Link>

        <img
          className={styles.menuLateral__fechar}
          src={fechar} alt="botao de fechar"
          onClick={mudaEstadoMenu}
        />

        <Link to="/exercicios">
          <button className={styles.menuLateral__btn}>Experimente agora</button>
        </Link>

        <div className={styles.menuLateral__divLinks}>
          <Link className="link" to="/">
            <LinksMenu icone={iconeCasa} texto="Início" />
          </Link>

          <LinkSmooth
            className={styles.menuLateral__LinkDiv}
            onClick={mudaEstadoMenu}
            to="sobreNos"
            spy={true}
            smooth={true}
            offset={100}
            duration={800}
          >
            <img src={iconeCasa} alt="icone de uma casa" />
            Sobre Nós
          </LinkSmooth>

          <Link className="link" to="/">
            <LinksMenu icone={iconeCasa} alt="icone de uma casa" texto="Entre em contato" />
          </Link>

          <Link className="link" to="/">
            <LinksMenu icone={iconeCasa} texto="Seja um farnqueado" />
          </Link>

          <Link className="link" to="/login">
            <LinksMenu icone={iconeCasa} texto="Entrar" />
          </Link>

          <button>Logout</button>
        </div>
      </div>

      <div className={styles.menuLateral__footer}>
        <img src={iconeDuvidas} alt="icone de duvidas" />
        <h2>Dúvidas frequentes</h2>
      </div>
    </section>
  )
}
