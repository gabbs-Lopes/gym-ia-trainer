import React from 'react'
import styles from './BotaoSubmit.module.scss'

export default function BotaoSubmit({ type, value}) {
  return (
    <input className={styles.btnSubmit} type={type} value={value} />
  )
}
