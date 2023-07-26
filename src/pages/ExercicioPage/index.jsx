import React from 'react'
import styles from './ExercicioPage.module.scss'
import TensorFlow from 'componentes/TensorFlow'

export default function ExercicioPage() {
  return (
    <div className={styles}>
      <div>Exercicio Page</div>

      <TensorFlow />
    </div>
  )
}
