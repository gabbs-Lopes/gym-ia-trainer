const Sequelize = require('sequelize')

const db = new Sequelize("GYM_IA", "root", "12345678", {
    host: 'localhost',
    dialect: 'mysql'
}) 

db.authenticate()
.then(function() {
    console.log("Conexao com banco de dados realizada com sucesso!")
}).catch(function() {
    console.log("Erro: Conexao com o banco de dados negada!")
})

module.exports = db