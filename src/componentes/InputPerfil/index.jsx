import React from 'react'
import styles from './InputPerfil.module.scss'

import InputMask from 'react-input-mask';

export default function InputPerfil({ type, 
  label, conexao, placeholder, editarDados, 
  alterarDados, obrigatorio, value, mask}) {

  const handleInputChange = (e) => {
    alterarDados(e);
  };

  return (
    <div className={editarDados ? styles.divInput : ''}>
        <label htmlFor={conexao}>
          {label}
          {obrigatorio ? <strong style={{color: "red"}}>*</strong> : ""}          
        </label>

        <InputMask 
          mask={mask}
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
