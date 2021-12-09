const Sequelize = require('sequelize');
const database = require('./db');

const Entregador = database.define('entregadore',{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        is: /^[0-9a-f]{64}$/i
    },
    dataNasc: {
        type: Sequelize.DATEONLY
    },
    cpf: {type: Sequelize.STRING,
          unique: true},
   tipocnh: {
       type: Sequelize.CHAR(2),
     //  allowNull: false

   },
   cnh: {
    type: Sequelize.STRING,
   // allowNull: false
},
   veiculo: {
       type: Sequelize.STRING,
      // allowNull: false
   },

   placa: {
       type: Sequelize.STRING,
       allowNull: false
   }
  
})

module.exports = Entregador ;    






















/*class Entregador extends Cliente {
    constructor(cpf, nome, sobrenome, dtNasc, email, senha, cnhA, cnhB, cnhC, cnhD, cnhE, tpVeiculo, placaVeiculo){
        super(cpf, nome, sobrenome, dtNasc, email, senha)
        this.cnhA = cnhA
        this.cnhB = cnhB
        this.cnhC = cnhC
        this.cnhD = cnhD
        this.cnhE = cnhE
        this.tpVeiculo = tpVeiculo
        this.placaVeiculo = placaVeiculo
    }
    cadastrarent(){
        console.log(`nome: ${this.nome}, cnpj: ${this.cpf}`)
    }

}


const mc = new Entregador(12345678912,'th')

mc.cadastrarent()
*/