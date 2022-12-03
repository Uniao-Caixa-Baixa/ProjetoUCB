const database = require('../db')
const Sequelize = require('sequelize')

const Game = database.define('game', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    tier:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    }
)

module.exports = Game