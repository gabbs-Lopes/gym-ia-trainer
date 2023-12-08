import React from 'react'
import styles from './Input.module.scss'

export default function Input({ label, type, conexao, aoAlterado, placeholder, value, pai, double}) {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={styles.divInput}>
            <label htmlFor={conexao}>{label}</label>
            <input 
                type={type} 
                id={conexao}  
                placeholder={placeholder}
                onChange={aoDigitado}
                value={value}
                pattern={pai}
            />
        </div>
    )
}
