import React from 'react'
import styles from './LinkForm.module.scss'
import { NavLink } from 'react-router-dom'

export default function LinkForm({ children, to }) {
    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}