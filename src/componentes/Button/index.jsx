import React from 'react'
import styles from './Button.module.scss'
import { NavLink } from 'react-router-dom'

export default function Button({ texto, to, saibaMais, fixed, banner }) {
  return (
    <button className={`
      ${saibaMais ? styles.btnSaibaMais : styles.button}
      ${fixed ? styles.btnFixed : ""}
      ${banner ? styles.btnBanner : ""}
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
