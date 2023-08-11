import React, { useState } from 'react'
import styles from './Login.module.scss'

import Input from 'componentes/Input'
import BotaoSubmit from 'componentes/BotaoSubmit'
import LinkForm from 'componentes/LinkForm'
import Menu from 'componentes/Menu'

import muck from 'assets/iconeMuck2.png'

export default function Login() {

  // Para Fidel Castro Mendes
  const [emailLogin, setEmailLogin] = useState('')
  const [senhaLogin, setSenhaLogin] = useState('')

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
          <form action="">
            <Input label="E-mail" type="text" conexao="email" placeholder="Digite seu email"/>
            <Input label="Senha" type="text" conexao="password" placeholder="Digite sua senha"/>

            <BotaoSubmit type="submit" value="Entrar"/>
          </form>
        </div>

        <div className={styles.login__toCadastro}>
          <h3>Don't have an account?</h3>
          <LinkForm estilo="oi" children="Sign up &gt;" to="/cadastro"/>
        </div>
      </main>
    </section>
  )
}
