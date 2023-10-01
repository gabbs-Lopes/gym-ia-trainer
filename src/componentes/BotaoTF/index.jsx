import React from 'react'
import styles from './BotaoTF.module.scss'
import img from './imgTF.png'

export default function BotaoTF() {
  return (
    <button className={styles.btn}>
        <img src={img} alt="logo tensorFlow" />
    </button>
  )
}
