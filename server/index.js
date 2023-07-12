const express = require('express');
const cors = require('cors')
const app = express()
const User = require('./models/User')

app.use(express.json())

app.use((req, res, next) => {
    // permitir qualquer endereço fazer a requisição
    res.header("Access-Control-Allow-Origin", "*")
    // Tipos de métodos que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    // Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type")
    // Executar o cors
    app.use(cors())
    // Quando não houver erro, continue o processamento 
    next()
})

app.get("/", async (req, res) => {
    res.send("Olá monkey | Página Inicial")
})

app.post("/cadastro", async (req, res) => {

    console.log(req.body)

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Falha ao tentar cadastrar um novo usuário!"
        })
    })
})

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001")
})