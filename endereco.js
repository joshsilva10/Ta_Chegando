const Sequelize = require('sequelize');
const database = require('./db');
     
const Endereco = database.define('endereco', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        cpfcnpj: {
            type: Sequelize.STRING
        },
        numero:{
            type: Sequelize.STRING},
        complemento: {
            type: Sequelize.STRING,
            allowNull: false},
        rua:{type: Sequelize.STRING,
            allowNull: false},
        cep: {type: Sequelize.STRING,
            allowNull: false},
        bairro: {type: Sequelize.STRING,
            allowNull: false},
        cidade:{type: Sequelize.STRING,
            allowNull: false},
        uf:{type: Sequelize.STRING,
            allowNull: false}
        
    })
     
    module.exports = Endereco ;