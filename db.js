const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_tachegando', 'root', '8558', {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;
