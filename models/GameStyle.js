const database = require('../db')
const Sequelize = require('sequelize')

const GameStyle = database.define('game_style', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    }
)

module.exports = GameStyle