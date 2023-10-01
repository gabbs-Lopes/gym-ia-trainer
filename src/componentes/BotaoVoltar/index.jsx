import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './BotaoVoltar.module.scss'
import seta from './seta-esquerda.png'

export default function BotaoVoltar({texto, to}) {
  return (
    <button>
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            <img className={styles.voltar} src={seta} alt="seta para esquerda" />
        </NavLink>
    </button>
  )
}
