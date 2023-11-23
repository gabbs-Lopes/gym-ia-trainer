import React from 'react'
import styles from './InputPerfil.module.scss'

export default function InputPerfil({ type, label, conexao, placeholder, editarDados}) {
  return (
    <div className={editarDados ? styles.divInput : ''}>
        <label htmlFor={conexao}>{label}</label>
        <input 
          name={conexao}
          id={conexao}
          type={type} 
          placeholder={placeholder}
          /* value="" */
        />
    </div>
  )
}
