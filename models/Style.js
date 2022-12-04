const database = require('../db')
const Sequelize = require('sequelize')

const Style = database.define('style', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
    }
)

module.exports = Style