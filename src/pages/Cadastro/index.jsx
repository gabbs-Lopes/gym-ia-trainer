import React, { useState } from 'react'
import styles from './Cadastro.module.scss'
import Input from 'componentes/Input'
import BotaoSubmit from 'componentes/BotaoSubmit'
import LinkForm from 'componentes/LinkForm'
import halter from 'assets/iconeHalter2.png'

import axios from 'axios'
import Menu from 'componentes/Menu'


export default function Cadastro() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')

  const [dados, setDados] = useState({
    email: '',
    senha: ''
  })

  /* const valueInput = e => setData({ ...data, email: email, senha: senha,}) */

  const validaForm = (e) => {
    e.preventDefault()  

    if(senha === confirmSenha) {
      setDados({ ...dados, email: email, senha: senha,})
      aoSalvar()
    } else {
      console.log("as senhas nao são iguais")
    }

    setEmail('')
    setSenha('')
    setConfirmSenha('')
  }

  const aoSalvar = async () => {
    console.log(email, senha)

    const headers = {
      'headers': {
        'content-Type': 'application/json'
      }
    }

    await axios.post('http://localhost:3001/cadastro', dados, headers)
    .then((response) => {
      console.log(response.data.mensagem)
    }).catch((err) => {
      console.log(err.response.data.mensagem)
    })
  }

  return (
    <section className={styles.cadastro}>
      <header className={styles.cadastro__menu}>
        <Menu />
      </header>

      <main>
        <div className={styles.cadastro__signIn}>
          <img src={halter} alt="icone de um halter" />
          <h2>Sign Up</h2>
        </div>

        <div className={styles.cadastro__form}>
          <form action="" onSubmit={validaForm}>
          <Input 
              label="Nome" 
              type="text" 
              conexao="nome" 
              placeholder="Digite seu nome"
            />

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
