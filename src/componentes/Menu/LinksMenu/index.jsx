import React from 'react'
import styles from './LinksMenu.module.scss'

export default function LinksMenu({ icone, texto, alt }) {
  return (
    <div className={styles.linha}>
        <img src={icone} alt={alt} />
        {texto}
    </div>
  )
}
