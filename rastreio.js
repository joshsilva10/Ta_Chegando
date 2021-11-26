const Sequelize = require('sequelize');
const database = require('./db');
     
const Rastreio = database.define('rastreio', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        lng: {type: Sequelize.STRING,
              unique: true},
        lat: {type: Sequelize.STRING,
                unique: true}
    })
     
    module.exports = Rastreio ;