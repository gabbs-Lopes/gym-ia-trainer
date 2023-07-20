import React from 'react'
import styles from './Card.module.scss'

import exExrcicio from 'assets/imagens/exercicios/crucifixoInclinado.jpg'
import ex2Exrcicio from 'assets/imagens/exercicios/roscaDiretaComBarra.png'
import ex3Exrcicio from 'assets/imagens/exercicios/agachamentoLivre.png'

export default function Card() {
    return (
        <>
            <div 
                className={styles.card} 
                style={{backgroundColor: "rgb(255, 84, 84)"}}>
                <img
                    className={styles.card__img}
                    src={exExrcicio}
                    alt="foto da execução de um crucifixo inclinado com halteres"
                />
                <div className={styles.card__info}>
                    <h3>Crucifixo Inclinado com Halteres</h3>
                    {/* <p>Peito</p> */}
                </div>
            </div>

            <div className={styles.card}>
                <img
                    className={styles.card__img}
                    src={ex2Exrcicio}
                    alt="foto da execução de um crucifixo inclinado com halteres"
                />
                <div 
                    className={styles.card__info} 
                    style={{backgroundColor: "rgb(33, 83, 250)"}}>
                    <h3>Rosca Direta com Barra</h3>
                    {/* <p>Peito</p> */}
                </div>
            </div>

            <div className={styles.card}>
                <img
                    className={styles.card__img}
                    src={ex3Exrcicio}
                    alt="foto da execução de um crucifixo inclinado com halteres"
                />
                <div 
                    className={styles.card__info} 
                    style={{backgroundColor: "rgb(43, 145, 73)"}}>
                    <h3>Crucifixo Inclinado com Halteres</h3>
                    {/* <p>Peito</p> */}
                </div>
            </div>

            <div 
                className={styles.card}
                style={{borderBottom: "2px solid rgb(255, 84, 84)"}}>
                <img
                    className={styles.card__img}
                    src={exExrcicio}
                    alt="foto da execução de um crucifixo inclinado com halteres"
                />
                <div className={styles.card__info}>
                    <h3>Crucifixo Inclinado com Halteres</h3>
                    {/* <p>Peito</p> */}
                </div>
            </div>
        </>
    )
}
