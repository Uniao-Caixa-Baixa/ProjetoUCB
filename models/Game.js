const database = require('../db')
const Sequelize = require('sequelize')
const Estilo = require('./Estilo')
const GameStyle = require('./GameStyle')

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
    ram:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    armazenamento:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tier:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    }
)

Game.belongsToMany(Estilo, {
    through:  GameStyle,
    constraint: true
})

Estilo.belongsToMany(Game, {
    through:  GameStyle,
    constraint: true
})

module.exports = Game