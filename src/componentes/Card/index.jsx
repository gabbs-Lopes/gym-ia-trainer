import React from 'react'
import styles from './Card.module.scss'

export default function Card({categoria, nome }) {
    return (
        <div 
            className={styles.card} 
            style={{backgroundColor: "rgba(59, 59, 255, 0.884)"}}>
            <img
                className={styles.card__img}
                src={`assets/imagens/${categoria}/${nome}/img1.jpg`}
                alt="foto da execução de um crucifixo inclinado com halteres"
            />
            <div className={styles.card__info}>
                <h3>{nome}</h3>
                {/* <p>Peito</p> */}
            </div>
        </div>
    )
}
