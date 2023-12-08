import React from 'react'
import styles from './TrUsuario.module.scss'

export default function TrUsuario({id, email, senha, nome, telefone, excluir}) {
  return (
    <>
      <td className={styles.campo}>{id}</td>
      <td className={styles.campo}>{nome}</td>
      <td className={styles.campo}>{email}</td>
      <td className={styles.campo}>{senha}</td>
      <td className={styles.campo}>{telefone ? telefone : "Campo Vazio"}</td>
      <td className={`${styles.campo} ${styles.excluir}`}
      onClick={() => excluir(id)}
      >
        Excluir
      </td>
    </>
  )
}
