const database = require('../db')
const Sequelize = require('sequelize')

const videoCard = database.define('videocard', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    modelo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tier:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = videoCard