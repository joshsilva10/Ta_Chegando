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
        cpfEmpresa: {type: Sequelize.STRING
              },
        produto:{ type: Sequelize.STRING
        },
        descricao: {type: Sequelize.STRING
              },
        cpfEntregador: {type: Sequelize.STRING
                },
        codRastreio: {type: Sequelize.STRING,
            unique: true
        },
        endEmpresa:{type: Sequelize.INTEGER},
        endCliente:{type: Sequelize.INTEGER},
        statusTrk:{type: Sequelize.STRING}
        
    })
     
    module.exports = Produtos ;