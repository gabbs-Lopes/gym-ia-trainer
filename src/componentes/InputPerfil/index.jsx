import React from 'react'
import styles from './InputPerfil.module.scss'

export default function InputPerfil({ type, label, conexao, placeholder, editarDados, required}) {
  return (
    <div className={editarDados ? styles.divInput : ''}>
        <label htmlFor={conexao}>
          {label}
          {required ? <strong style={{color: "red"}}>*</strong> : ""}          
        </label>
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
