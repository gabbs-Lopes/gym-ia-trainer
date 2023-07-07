import React, { useState } from 'react'
import styles from './Cadastro.module.scss'
import MenuHamburguer from 'componentes/Menu/MenuHamburguer'
import Input from 'componentes/Input'
import BotaoSubmit from 'componentes/BotaoSubmit'
import LinkForm from 'componentes/LinkForm'
import halter from 'assets/iconeHalter2.png'

export default function Cadastro() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log(email, senha, confirmSenha)

    setEmail('')
    setSenha('')
    setConfirmSenha('')
  }

  return (
    <section className={styles.cadastro}>
      <header className={styles.cadastro__menu}>
        <MenuHamburguer/>
      </header>

      <main>
        <div className={styles.cadastro__signIn}>
          <img src={halter} alt="icone de um halter" />
          <h2>Sign Up</h2>
        </div>

        <div className={styles.cadastro__form}>
          <form action="" onSubmit={aoSalvar}>
            <Input 
              label="E-mail" 
              type="text" 
              conexao="email" 
              placeholder="Digite seu email"
              aoAlterado={valor => setEmail(valor)}
              value={email}
            />

            <Input 
              label="Senha" 
              type="text" 
              conexao="password" 
              placeholder="Digite sua senha"
              aoAlterado={valor => setSenha(valor)}
              value={senha}
            />

            <Input 
              label="Confirme sua senha" 
              type="text" 
              conexao="Confirm-password" 
              placeholder="Confirme sua senha"
              aoAlterado={valor => setConfirmSenha(valor)}
              value={confirmSenha}
            />

            <BotaoSubmit type="submit" value="Cadastrar"/>
          </form>
        </div>

        <div className={styles.cadastro__toCadastro}>
          <h3>Do you have an account?</h3>
          <LinkForm estilo="oi" children="&lt; Sign in" to="/login"/>
        </div>
      </main>
    </section>
  )
}
