import React from 'react'
import styles from './Painel.module.scss'

import iconeUsuarios from '../../../assets/icones/usuarios2.png'
import iconeTreinos from '../../../assets/icones/nuvemVerde.png'


export default function Painel() {
  return (
    <div className={styles.main}>
        <h2>Geral | Painel</h2>

        <div className={styles.cards}>
            <div className={styles.cards__card}>
                <img src={iconeUsuarios} alt="icone com 3 representações de pessoas" />
                <h2>287</h2>
                <h3>Usuários</h3>
            </div>

            <div className={styles.cards__card}>
                <img src={iconeTreinos} alt="icone de nuvem com uma seta para baixo" />
                <h2>32</h2>
                <h3>Treinos Salvos</h3>
            </div>
        </div>
    </div>
  )
}
