import React from 'react'
import styles from './InputPerfil.module.scss'

export default function InputPerfil({ type, 
  label, conexao, placeholder, editarDados, 
  alterarDados, obrigatorio, value}) {

  const handleInputChange = (e) => {
    alterarDados(e);
  };

  return (
    <div className={editarDados ? styles.divInput : ''}>
        <label htmlFor={conexao}>
          {label}
          {obrigatorio ? <strong style={{color: "red"}}>*</strong> : ""}          
        </label>
        <input 
          name={conexao}
          id={conexao}
          type={type} 
          placeholder={placeholder}
          value={value}
          required

          onChange={handleInputChange} 
          onBlur={handleInputChange} 
        />
    </div>
  )
}
