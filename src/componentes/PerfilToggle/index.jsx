import React from 'react'
import styles from './PerfilToggle.module.scss'

export default function PerfilToggle({ titulo, subtitulo, img, alt, estadoToggle, mudaEstado}) {
  return (
    <div className={`
        ${styles.item} 
        ${estadoToggle ? styles.info : styles.config}
        `}
        onClick={mudaEstado}
    >
        <div>
          <img src={img} alt={alt} />
          <h2>{titulo}</h2>
        </div>
        <p>{subtitulo}</p>
    </div>
  )
}
