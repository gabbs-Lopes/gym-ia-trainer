import React from 'react'
import styles from './Card.module.scss'
import { NavLink } from 'react-router-dom'

export default function Card({ categoria, filtro, nome, img, to }) {
    return (
        <>
            {categoria === filtro || filtro === "all"
                ? <NavLink className={styles.link}
                    to={to}
                    end
                >
                    <div
                        className={styles.card}
                        /* style={{backgroundColor: "rgba(59, 59, 255, 0.884)"}} */>
                        <img
                            className={styles.card__img}
                            src={img}
                            alt="foto da execução de um crucifixo inclinado com halteres"
                        />
                        <div className={styles.card__info}>
                            <h3>{nome}</h3>
                            {/* <p>Peito</p> */}
                        </div>
                    </div>
                </NavLink>
                : ''
            }

        </>
    )
}
