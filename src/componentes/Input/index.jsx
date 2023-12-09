import React from 'react'
import styles from './Input.module.scss'
import InputMask from 'react-input-mask'

export default function Input({ label, type, conexao, aoAlterado, placeholder, value, pai, double, mask}) {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={styles.divInput}>
            <label htmlFor={conexao}>{label}</label>
            <InputMask
                mask={mask}
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
