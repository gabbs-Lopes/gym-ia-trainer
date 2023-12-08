import React, { useState } from 'react'
import styles from './Cadastro.module.scss'
import Input from 'componentes/Input'
import BotaoSubmit from 'componentes/BotaoSubmit'
import LinkDefault from 'componentes/LinkDefault'
import halter from 'assets/iconeHalter2.png'

import axios from 'axios'
import Menu from 'componentes/Menu'


export default function Cadastro() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')
  const [tel, setTel] = useState('')
  const [data, setData] = useState('')

  /* const valueInput = e => setDados({ ...dados, email: email, senha: senha,}) */

  const validaForm = (e) => {
    e.preventDefault()

    console.log(nome, email, senha, tel, data)

    if (senha === confirmSenha) {
      aoSalvar()
    } else {
      console.log("as senhas nao são iguais")
    }

    setNome('')
    setEmail('')
    setSenha('')
    setConfirmSenha('')
    setTel('')
    setData('')
  }

  const aoSalvar = async () => {
    console.log(email, senha)

    const headers = {
      'headers': {
        'content-Type': 'application/json; charset=utf-8'
      }
    }
    const dadosUsuario = {
      nome: nome,
      email: email,
      senha: senha,
      tel: tel,
      data: data
    };

    axios.post('http://localhost:3001/api/usuario_unit', dadosUsuario)
      .then((resposta) => {
        console.log('Resposta do servidor:', resposta.data);
        alert('usuario cadastrado com sucesso');
      })
      .catch((error) => {
        console.error('Erro ao fazer a requisição:', error);
      });
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
            {/* <Input 
              label="Nome" 
              type="text" 
              conexao="nome" 
              placeholder="Digite seu nome"
            /> */}

            <Input
              label="Nome"
              type="text"
              conexao="nome"
              placeholder="Digite seu nome"
              aoAlterado={valor => setNome(valor)}
              value={nome}
            />

            <Input
              label="E-mail"
              type="email"
              conexao="email"
              placeholder="Digite seu email"
              aoAlterado={valor => setEmail(valor)}
              value={email}
            />

            <Input
              label="Senha"
              type="password"
              conexao="password"
              placeholder="Digite sua senha"
              aoAlterado={valor => setSenha(valor)}
              value={senha}
            />

            <Input
              label="Confirme sua senha"
              type="password"
              conexao="Confirm-password"
              placeholder="Confirme sua senha"
              aoAlterado={valor => setConfirmSenha(valor)}
              value={confirmSenha}
            />

            <div className={styles.cadastro__formDiv}>
              <Input
                label="Telefone"
                type="tel"
                conexao="telefone"
                placeholder="Digite seu telefone"
                aoAlterado={valor => setTel(valor)}
                value={tel}
                pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
              />

              <Input
                label="Data de Nascimento"
                type="date"
                conexao="ddn"
                placeholder=""
                aoAlterado={valor => setData(valor)}
                value={data}
              />
            </div>

            <BotaoSubmit type="submit" value="Cadastrar" />
          </form>
        </div>

        <div className={styles.cadastro__toCadastro}>
          <h3>Do you have an account?</h3>
          <LinkDefault azul texto="&lt; Sign in" to="/login" />
        </div>
      </main>
    </section>
  )
}


