const database = require('../db')
const Sequelize = require('sequelize')

const User = database.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'comum'
    },
})

module.exports = User