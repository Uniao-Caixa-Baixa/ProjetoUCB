const database = require('../db')
const Sequelize = require('sequelize')
const Style = require('./Style')
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
    tier:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    }
)

Game.belongsToMany(Style, {
    through:  GameStyle,
    constraint: true
})

Style.belongsToMany(Game, {
    through:  GameStyle,
    constraint: true
})

module.exports = Game