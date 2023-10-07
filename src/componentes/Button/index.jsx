import React from 'react'
import styles from './Button.module.scss'
import { NavLink } from 'react-router-dom'

export default function Button({ texto, to, saibaMais, fixed }) {
  return (
    <button className={`
      ${saibaMais ? styles.btnSaibaMais : styles.button}
      ${fixed ? styles.btnFixed : ""}
    `}>
      <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {texto}
        </NavLink>
    </button>
  )
}
