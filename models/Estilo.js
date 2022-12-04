const database = require('../db')
const Sequelize = require('sequelize')

const Estilo = database.define('estilo', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false  
    }
});

module.exports = Estilo