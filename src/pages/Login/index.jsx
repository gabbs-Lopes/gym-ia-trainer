import MenuHamburguer from 'componentes/Menu/MenuHamburguer'
import React from 'react'
import styles from './Login.module.scss'
import muck from 'assets/iconeMuck2.png'
import Input from 'componentes/Input'
import BotaoSubmit from 'componentes/BotaoSubmit'
import LinkForm from 'componentes/LinkForm'

export default function Login() {

  function abrirMenu() {

    console.log("oi")
  }

  return (
    <section className={styles.login}>
      <header className={styles.login__menu}>
        <MenuHamburguer abrirMenu={abrirMenu}/>
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
