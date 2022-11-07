const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'MEU_PC_RODA',
  'root',
  'admin',
   {
     host: 'localhost',
     dialect: 'mysql'
   }
);

module.exports = sequelize