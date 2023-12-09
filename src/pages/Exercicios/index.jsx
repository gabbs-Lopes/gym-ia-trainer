import React, { useEffect, useState } from 'react'
import styles from './ExerciciosPage.module.scss'
import NavBarLogado from 'componentes/NavBarLogado'
import Card from 'componentes/Card'
/* import { NavLink } from 'react-router-dom' */

import iconeTorax from '../../assets/icones/torax.png'
import iconeOmbro from '../../assets/icones/ombro.png'
import iconeCostas from '../../assets/icones/costas.png'
import iconeAbdomen from '../../assets/icones/abdomen.png'
import iconeBiceps from '../../assets/icones/biceps.png'
import iconePernas from '../../assets/icones/perna.png'
import iconeGluteo from '../../assets/icones/gluteo.png'
import iconePasta from '../../assets/icones/pasta.png'
import iconeCasa from '../../assets/icones/casaCiano.png'

//imagens

import imgSupino from 'assets/imagens/exercicios/torax/Supino/img1.jpg'
import imgSupinoInclinado from 'assets/imagens/exercicios/torax/SupinoInclinado/img1.jpg'
import imgFlexao from 'assets/imagens/exercicios/torax/Flexao/img1.jpg'
import imgCrunch from 'assets/imagens/exercicios/abdomen/Crunch/img1.jpg'
import imgPrancha from 'assets/imagens/exercicios/abdomen/Prancha/img1.jpg'
import imgRosca from 'assets/imagens/exercicios/biceps/Rosca/img1.jpg'
import imgRoscaComBarra from 'assets/imagens/exercicios/biceps/RoscaComBarra/img1.jpg'
import imgRoscaComHalter from 'assets/imagens/exercicios/biceps/RoscaComHalter/img1.jpg'
import imgBarraFixa from 'assets/imagens/exercicios/costas/BarraFixa/img1.jpg'
import imgRemadaMaquina from 'assets/imagens/exercicios/costas/RemadaMaquina/img1.jpg'
import imgStiff from 'assets/imagens/exercicios/gluteo/Stiff/img2.jpg'
import imgPassada from 'assets/imagens/exercicios/gluteo/Passada/img1.jpg'
import imgElevacaoPelvica from 'assets/imagens/exercicios/gluteo/ElevacaoPelvica/img1.jpg'
import imgRemadaAlta from 'assets/imagens/exercicios/ombros/RemadaAlta/img1.jpg'
import imgElevacaoLateral from 'assets/imagens/exercicios/ombros/ElevacaoLateral/img1.jpg'
import imgDesenvolvimento from 'assets/imagens/exercicios/ombros/Desenvolvimento/img1.jpg'
import imgAgachamentoLivre from 'assets/imagens/exercicios/pernas/AgachamentoLivre/img1.jpg'
import imgLegPress from 'assets/imagens/exercicios/pernas/LegPress/img1.jpg'
import imgTerra from 'assets/imagens/exercicios/pernas/LevantamentoTerra/img1.jpg'


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
import { Link } from 'react-router-dom'

export default function Exercicios() {

  const [treinos, setTreinos] = useState('')
  const [filtro, setFiltro] = useState("all")

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

  console.log(filtro)
  return (
    <>
      <header className={styles.header}>
        <NavBarLogado preto fixed perfil shadow/>
      </header>

      <main className={styles.main}>
        <section className={styles.left}>
          <h2 className={styles.left__titulo}>
            Olá, <code>$nomeDoUsuario</code>!
          </h2>

          <div className={styles.left__router}>
            <Link className={styles.left__router_div} to="/">
                <img src={iconeCasa} alt="icone Casa" />
                <h3>Início</h3>
            </Link>
          </div>

          <div className={styles.linha}></div>

          <div className={styles.left__arquivo}>
            <div className={styles.left__arquivo_div}>
              <img src={iconePasta} alt="icone Pasta" />
              <h3>Biblioteca</h3>
            </div>
          </div>

          <div className={styles.linha}></div>

          <div className={styles.left__filtro}>
            <h2 className={styles.left__filtro_titulo}>Filtre Por Categoria:</h2>
            <table>
              <tbody>
                <tr className={`
                  ${styles.left__filtro_div}
                  ${filtro === "Tórax"? styles.left__filtro_select : ''}
                `}
                  onClick={() => setFiltro("Tórax")}
                >
                  <td><img src={iconeTorax} alt="icone Tórax" /></td>
                  <td>Tórax</td>
                </tr>
                <tr className={`
                  ${styles.left__filtro_div}
                  ${filtro === "Ombro"? styles.left__filtro_select : ''}
                `}
                  onClick={() => setFiltro("Ombro")}
                >
                  <td><img src={iconeOmbro} alt="icone Ombro" /></td>
                  <td>Ombro</td>
                </tr>
                <tr className={`
                  ${styles.left__filtro_div}
                  ${filtro === "Costas"? styles.left__filtro_select : ''}
                `}
                  onClick={() => setFiltro("Costas")}
                >
                  <td><img src={iconeCostas} alt="icone costas" /></td>
                  <td>Costas</td>
                </tr>
                <tr className={`
                  ${styles.left__filtro_div}
                  ${filtro === "Abdômen"? styles.left__filtro_select : ''}
                `}
                  onClick={() => setFiltro("Abdômen")}
                >
                  <td><img src={iconeAbdomen} alt="icone abdomen" /></td>
                  <td>Abdômen</td>
                </tr>
                <tr className={`
                  ${styles.left__filtro_div}
                  ${filtro === "Bíceps"? styles.left__filtro_select : ''}
                `}
                  onClick={() => setFiltro("Bíceps")}
                >
                  <td><img src={iconeBiceps} alt="icone Bíceps" /></td>
                  <td>Bíceps</td>
                </tr>
                <tr className={`
                  ${styles.left__filtro_div}
                  ${filtro === "Pernas"? styles.left__filtro_select : ''}
                `}
                  onClick={ () => setFiltro("Pernas")}
                >
                  <td><img src={iconePernas} alt="icone Pernas" /></td>
                  <td>Pernas</td>
                </tr>
                <tr className={`
                  ${styles.left__filtro_div}
                  ${filtro === "Glúteo"? styles.left__filtro_select : ''}
                `}
                  onClick={ () => setFiltro("Glúteo")}
                >
                  <td><img src={iconeGluteo} alt="icone Gluteo" /></td>
                  <td>Glúteo</td>
                </tr>
              </tbody>
            </table>
            <h3 className={styles.left__filtro_limpar} 
              onClick={() => setFiltro("all")}
            >Limpar Filtro</h3>
          </div>

          {/* <div className={styles.linha}></div> */}
        </section>

        <section className={styles.right}>

          <div className={styles.exercicios}>
            <h2>Exercícios | {filtro}</h2>
          </div>

          <section className={styles.cards}>

            <Card
              filtro={filtro}
              categoria="Tórax"
              img={imgSupino}
              nome="Supino"
              to="/exercicios/Supino"
            />

            <Card
              filtro={filtro}
              categoria="Tórax"
              img={imgSupinoInclinado}
              nome="Supino Inclinado"
              to="/exercicios/SupinoInclinado"
            />

            <Card
              filtro={filtro}
              categoria="Tórax"
              img={imgFlexao}
              nome="Flexão"
              to="/exercicios/Flexao"
            />

            <Card
              filtro={filtro}
              categoria="Abdômen"
              img={imgCrunch}
              nome="Crunch"
              to="/exercicios/Crunch"
            />

            <Card
              filtro={filtro}
              categoria="Abdômen"
              img={imgPrancha}
              nome="Prancha"
              to="/exercicios/Prancha"
            />

            <Card
              filtro={filtro}
              categoria="Bíceps"
              img={imgRosca}
              nome="Rosca alternada"
              to="/exercicios/RoscaAlternada"
            />

            <Card
              filtro={filtro}
              categoria="Bíceps"
              img={imgRoscaComBarra}
              nome="Rosca Com Barra"
              to="/exercicios/RoscaComBarra"
            />

            <Card
              filtro={filtro}
              categoria="Bíceps"
              img={imgRoscaComHalter}
              nome="Rosca Com Halter"
              to="/exercicios/RoscaComHalter"
            />

            <Card
              filtro={filtro}
              categoria="Costas"
              img={imgBarraFixa}
              nome="Barra Fixa"
              to="/exercicios/BarraFixa"
            />

            <Card
              filtro={filtro}
              categoria="Costas"
              img={imgRemadaMaquina}
              nome="Remada Máquina"
              to="/exercicios/RemadaMaquina"
            />

            <Card
              filtro={filtro}
              categoria="Glúteo"
              img={imgStiff}
              nome="Stiff"
              to="/exercicios/Stiff"
            />

            <Card
              filtro={filtro}
              categoria="Glúteo"
              img={imgElevacaoPelvica}
              nome="Elevação Pélvica"
              to="/exercicios/ElecavaoPelvica"
            />

            <Card
              filtro={filtro}
              categoria="Glúteo"
              img={imgPassada}
              nome="Passada"
              to="/exercicios/Passada"
            />

            <Card
              filtro={filtro}
              categoria="Ombro"
              img={imgRemadaAlta}
              nome="Remada Alta"
              to="/exercicios/RemadaAlta"
            />

            <Card
              filtro={filtro}
              categoria="Ombro"
              img={imgElevacaoLateral}
              nome="Elevação Lateral"
              to="/exercicios/ElevacaoLateral"
            />

            <Card
              filtro={filtro}
              categoria="Ombro"
              img={imgDesenvolvimento}
              nome="Desenvolvimento"
              to="/exercicios/Desenvolvimento"
            />

            <Card
              filtro={filtro}
              categoria="Pernas"
              img={imgAgachamentoLivre}
              nome="Agachamento Livre"
              to="/exercicios/AgachamentoLivre"
            />

            <Card
              filtro={filtro}
              categoria="Pernas"
              img={imgLegPress}
              nome="Leg Press"
              to="/exercicios/LegPress"
            />

            <Card
              filtro={filtro}
              categoria="Pernas"
              img={imgTerra}
              nome="Levantamento Terra"
              to="/exercicios/LevantamentoTerra"
            />

          </section>
        </section>

        <img src="./img1.jpg" alt="" />
      </main>
    </>
  )
}
