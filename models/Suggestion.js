const database = require('../db')
const Sequelize = require('sequelize')

const User = require('./User')

const Suggestion = database.define('suggestion', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    componente:{
        type: Sequelize.STRING,
        allowNull: false  
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false  
    }
});

Suggestion.belongsTo(User, {
    constraint: true,
    foreignKey:'Userid'
});

module.exports = Suggestion