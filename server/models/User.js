const Sequelize = require('sequelize')
const db = require('./db')

const User = db.define('usuarios', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull:false
    }
})

User.sync()

module.exports = User
