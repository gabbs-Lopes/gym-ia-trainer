import React from 'react'
import styles from './LinkDefault.module.scss'
import { NavLink } from 'react-router-dom'

export default function LinkDefault({texto, to, azul}) {
    return (
        <NavLink
            className={`
                ${styles.link}
                ${azul ? styles.linkAzul : ""}
            `}
            to={to}
            end
        >
            {texto}
        </NavLink>
    )
}