import React, { useEffect, useState } from 'react'
import styles from './ExerciciosPage.module.scss'
import NavBarLogado from 'componentes/NavBarLogado'
import Card from 'componentes/Card'
/* import { NavLink } from 'react-router-dom' */


/* CATEGORIA
  1 = Tórax
  2 = Ombro
  3 = Costas
  4 = Abdômen
  5 = Bíceps
  6 = Pernas
  7 = Glúteo
*/

import axios from 'axios'

export default function Exercicios() {

  const [treinos, setTreinos] = useState('')

  axios.defaults.withCredentials = true;

  useEffect(() => {
    buscarTreinos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const buscarTreinos = () => {
    axios.get('http://localhost:3001/api/treinos/')
      .then((response) => {
        const treinosSalvos = {
          objeto: response.data.result
        }

        setTreinos(treinosSalvos)
        console.log(treinosSalvos.objeto);
      }).catch((err) => {
        console.log(err.response);
      });
  };

  if (treinos && treinos.objeto && treinos.objeto.length > 0) {
    let dados = treinos.objeto;
    console.log(dados);
  } else {
    console.log("Não há dados salvos ou o objeto está vazio.");
  }
  return (
    <>
      <header className={styles.header}>
        <NavBarLogado perfil shadow />
      </header>

      <main className={styles.main}>
        <h2 className={styles.main__titulo}>
          Bom Dia, <code>$nomeDoUsuario</code>!
        </h2>
        <section className={styles.exercicios}>
          <h1>Exercícios</h1>
        </section>

        <section className={styles.cards}>
          {/* <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to="/exercicio"
            end
          > */}
            {treinos.objeto?.map((treino) => (
              <Card
                key={treino.id_treino}
                categoria={treino.FK_id_cat}
                nome={treino.nome}

                to="/exercicio"
              />
            ))

            }

          {/* </NavLink> */}
        </section>

        <img src="./img1.jpg" alt="" />
      </main>
    </>
  )
}
