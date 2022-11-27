const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'MEU_PC_RODA',
  'root',
  'root',
   {
     host: 'localhost',
     dialect: 'mysql'
   }
);

module.exports = sequelize