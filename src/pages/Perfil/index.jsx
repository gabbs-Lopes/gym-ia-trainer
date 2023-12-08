import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import styles from './Perfil.module.scss'
import '../../styles/globalStyles.scss'

import NavBarLogado from 'componentes/NavBarLogado'
import InputPerfil from 'componentes/InputPerfil'
/* import { div } from '@tensorflow/tfjs' */
/* const db = require('./db.js'); */

import axios from 'axios'

import imgPerfil from 'assets/fotosPerfil/fidel.png'
import iconeEditar from '../../assets/icones/editar.png'
import iconeSettings from '../../assets/icones/iconeSettings.png'
import iconeInfo from '../../assets/icones/info.png'
import PerfilToggle from 'componentes/PerfilToggle'
import PopUpPerfil from 'componentes/PopUpPerfil'

export default function Perfil() {

  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  const [values, setValues] = useState({
    email: '',
    nome: '',
    senha: '',
    data_nascim: '',
    telefone_celular: '',
    id: '',
  })

  const [nomeUsuario, setNomeUsuario] = useState('')

  const alterarDados = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const updateUsuario = async (e) => {
    e.preventDefault()

    try {
      await axios.put('http://localhost:3001/api/usuario_unit/' + values.id, values);
      console.log("Usuário atualizado com sucesso!");
      alert('Dados atualizados com sucesso!');
      setValues({ ...values });
      pegaOsDadosDoUsuario()
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  }

  // aqui, dps eu me viro pra passar pro element

  useEffect(() => {
    pegaOsDadosDoUsuario()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function pegaOsDadosDoUsuario() {
    axios.get('http://localhost:3001/api/verify')
      .then((res) => {
        if (res.data.id && res.data.Status === "Success") {
          const id = res.data.id;
          axios.get('http://localhost:3001/api/usuario_unit/' + id)
            .then((res) => {
              setValues({
                ...values,
                email: res.data.result.email,
                nome: res.data.result.nome,
                senha: res.data.result.senha,
                data_nascim: res.data.result.data_nascim,
                telefone_celular: res.data.result.telefone_celular,
                id: res.data.result.id

              })

              setNomeUsuario(res.data.result.nome)

            })
        } else {
          navigate('/naoTenteSeuOtario');
          console.log("valor do id: " + res.data.id);
        }
      })
  }

  const [togglePerfil, setTogglePerfil] = useState(true)

  console.log(togglePerfil)

  const [mostrarPopUp, setMostrarPopUp] = useState(false);

  const abrirPopUp = () => {
    setMostrarPopUp((mostrarPopUp) => !mostrarPopUp);

    console.log("clicado", mostrarPopUp)
  };

  return (
    <>
      <header>
        <NavBarLogado perfil clean />
      </header>

      <main className={styles.main}>
        <section className={styles.left}>
          <div className={styles.left__perfilToggle}>
            <PerfilToggle
              titulo="Infomações Perfil"
              subtitulo="Details about your personal information"
              img={iconeInfo}
              alt="icone de configuração"
              estadoToggle={togglePerfil}
              mudaEstado={() => setTogglePerfil(true)}
            />

            <PerfilToggle
              titulo="Configurações"
              subtitulo="customize and manage your account"
              img={iconeSettings}
              alt="icone de configuração"
              estadoToggle={togglePerfil}
              mudaEstado={() => setTogglePerfil(false)}
            />
          </div>
        </section>

        <section className={styles.right}>
          {togglePerfil
            ? <div className={styles.info}>
              <h1 className={styles.info__titulo}>Account Info</h1>
              <div className={styles.info__dadosPrincipais}>
                <div className={styles.info__dadosPrincipais_div}>
                  <div
                    className={styles.info__dadosPrincipais_divImg}
                    onClick={abrirPopUp}
                  >
                    <img className={styles.info__dadosPrincipais_divImg__img} src={imgPerfil} alt="fidel castro" />
                    <img
                      className={styles.info__dadosPrincipais_divImg__icone}
                      src={iconeEditar}
                      alt="icone editar foto"
                    />
                  </div>

                  {mostrarPopUp && <PopUpPerfil alterarEstado={abrirPopUp} />}

                  <div
                    className={styles.info__dadosPrincipais_divNome}
                  >
                    <h2>{nomeUsuario}</h2>
                    <p>profile-pic.jpg</p>
                  </div>
                </div>
                <button className={styles.info__dadosPrincipais_btn}>Update</button>
              </div>

              <div className={styles.info__editarDados}>
                <h2>Alterar dados Pessoais</h2>
                <form onSubmit={updateUsuario} action="">
                  <div className={styles.info__editarDados_divInputs}>

                    <InputPerfil
                      editarDados
                      type="text"
                      label="Full Name"
                      conexao="nome"
                      placeholder="Full Name"
                      value={values.nome}
                      alterarDados={alterarDados}
                      obrigatorio
                    />

                    <InputPerfil
                      editarDados
                      type="email"
                      label="Email Address"
                      conexao="email"
                      placeholder="Email Address"
                      value={values.email}
                      alterarDados={alterarDados}
                      obrigatorio
                    />

                    <InputPerfil
                      editarDados
                      type="password"
                      label="Password"
                      conexao="senha"
                      placeholder="*******"
                      value={"*******"}
                      alterarDados={alterarDados}
                      obrigatorio
                    />

                    <InputPerfil
                      editarDados
                      type="tel"
                      label="Phone Number"
                      conexao="telefone_celular"
                      placeholder="Phone Number"
                      value={values.telefone_celular}
                      alterarDados={alterarDados}
                    />

                  </div>
                  <button className={styles.info__editarDados_btn}>Update</button>
                </form>
              </div>
            </div>
            : <div className={styles.settings}>
              <h1 className={styles.info__titulo}>Account Settings</h1>
            </div>
          }
        </section>
      </main>
    </>
  )
}
