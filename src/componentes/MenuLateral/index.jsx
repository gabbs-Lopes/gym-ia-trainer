import React, { useEffect, useState } from 'react'
import styles from './MenuLateral.module.scss'
import { Link } from 'react-router-dom'
import { Link as LinkSmooth } from 'react-scroll';
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import LinksMenu from 'componentes/Menu/LinksMenu'
import Logo from 'componentes/Logo'

import fechar from 'assets/icones/fechar.png'
import iconeDuvidas from 'assets/iconeDuvidas.png'
import iconeCasa from 'assets/icones/iconeCasa.png'
import iconeLogout from 'assets/icones/sair.png'

export default function MenuLateral({ mudaEstadoMenu, estado }) {

  const [auth, setAuth] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/api/verify')
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true)
          console.log("id: ", res.data.id)
          /* navigate('/perfil') */
        } else {
          setAuth(false)
          /* setMessage("error: ", res.data.Error) */
        }
      })
    /* .then(err => console.log(err)) */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  const logout = () => {
    axios.get('http://localhost:3001/api/logout/')
      .then(() => {
        navigate('/');
        window.location.reload()
      }).catch(err => console.log(err))
  }

  return (
    <section id='btn' /* onBlur={mudaEstadoMenu} */ className={`
        ${styles.menuLateral}
        ${estado ? styles.menuLateral__open : ''}
      `}>
      <div className={styles.menuLateral__div}>
        <Link to="/">
          <Logo shadow />
        </Link>

        <img
          className={styles.menuLateral__fechar}
          src={fechar} alt="botao de fechar"
          onClick={mudaEstadoMenu}
        />

        <Link to="/exercicios">
          <button className={styles.menuLateral__btn}>Experimente agora</button>
        </Link>

        <div className={styles.menuLateral__divLinks}>
          <Link className="link" to="/">
            <LinksMenu icone={iconeCasa} texto="Início" />
          </Link>

          <LinkSmooth
            className={styles.menuLateral__LinkDiv}
            onClick={mudaEstadoMenu}
            to="sobreNos"
            spy={true}
            smooth={true}
            offset={100}
            duration={800}
          >
            Sobre Nós
          </LinkSmooth>

          <Link className="link" to="/">
            <LinksMenu icone={iconeCasa} alt="icone de uma casa" texto="Entre em contato" />
          </Link>

          <Link className="link" to="/">
            <LinksMenu icone={iconeCasa} texto="Seja um farnqueado" />
          </Link>

          {auth ? 
            <Link className="link" to="/perfil">
              <LinksMenu icone={iconeCasa} texto="Perfil" />
            </Link>
            : <Link className="link" to="/login">
              <LinksMenu icone={iconeCasa} texto="Entrar" />
            </Link>
          }





          {auth ?
            <button onClick={() => logout()} className={styles.menuLateral__divLinks_sair}>
              <img src={iconeLogout} alt="icone sair" />
              Sair
            </button>
            : ''
          }
        </div>
      </div>

      <div className={styles.menuLateral__footer}>
        <img src={iconeDuvidas} alt="icone de duvidas" />
        <h2>Dúvidas frequentes</h2>
      </div>
    </section>
  )
}
