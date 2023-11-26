import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import styles from './Login.module.scss'

import Input from 'componentes/Input'
import BotaoSubmit from 'componentes/BotaoSubmit'
import Menu from 'componentes/Menu'

import axios from 'axios'

import muck from 'assets/iconeMuck2.png'
import LinkDefault from 'componentes/LinkDefault'

export default function Login() {


  /* const [statusUser, setStatusUser] = useState('') */

  // Para Fidel Castro Mendes
  const [emailLogin, setEmailLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')

  const submitLogin = (e) => {
    e.preventDefault()

    console.log(emailLogin, senhaLogin)

    findUser()

    setEmailLogin('')
    setSenhaLogin('')
  }

  const navigate = useNavigate()

  /* const headers = {
    'headers': {
      withCredentials: true
    }
  } */


  
  const findUser = async () => {
    
    axios.post('http://localhost:3001/api/login', {
      email: emailLogin,
      senha: senhaLogin
    })
    .then(res => {
      console.log("res do index");
      if(res.data.message) {
        alert(/* res.data.Message */ "!")
        console.log("if monkey")
      } else {
        console.log("else macaco")
      }
      /* console.log(result) */
      console.log(res)
    })
  }
  
  
  useEffect(() => {
    axios.defaults.withCredentials = true; 
    axios.get("http://localhost:3001/api/loggedin")
    .then((res) => {
      if (res.data.loggedIn === true) {
        console.log(res.data.loggedIn)
        console.log(res.data.user)
        console.log("requisição get funcionou") 
      } else { 
        console.log(res.data.loggedIn)
        console.log("requisição get fail") 
      }
    })
  }, [])

  return (
    <section className={styles.login}>
      <header className={styles.login__menu}>
        <Menu />
      </header>

      <main>
        <div className={styles.login__signIn}>
          <img src={muck} alt="icone de um muck" />
          <h2>Sign in</h2>
        </div>

        <div className={styles.login__form}>
          <form action="" onSubmit={submitLogin}>
            <Input 
              label="E-mail" 
              type="text" 
              conexao="email" 
              placeholder="Digite seu email"
              aoAlterado={value => setEmailLogin(value)}
              value={emailLogin}
            />

            <Input 
              label="Senha" 
              type="text" 
              conexao="password" 
              placeholder="Digite sua senha"
              aoAlterado={value => setSenhaLogin(value)}
              value={senhaLogin}
            />

            <BotaoSubmit type="submit" value="Entrar"/>
          </form>
        </div>

        <div className={styles.login__toCadastro}>
          <h3>Don't have an account?</h3>
          <LinkDefault azul texto="Sign up &gt;" to="/cadastro"/>
        </div>
      </main>
    </section>
  )
}