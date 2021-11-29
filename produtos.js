const Sequelize = require('sequelize');
const database = require('./db');
     
const Produtos = database.define('produto', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        cpfCliente: {type: Sequelize.STRING
              },
        descricao: {type: Sequelize.STRING
              },
        cpfEntregador: {type: Sequelize.STRING
                },
        codRastreio: {type: Sequelize.STRING,
            unique: true
        },
        numero:{type: Sequelize.STRING},
        rua:{type: Sequelize.STRING},
        cep: {type: Sequelize.STRING},
        bairro: {type: Sequelize.STRING},
        cidade:{type: Sequelize.STRING},
        uf:{type: Sequelize.STRING}
        
    })
     
    module.exports = Produtos ;