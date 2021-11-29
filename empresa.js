
const Sequelize = require('sequelize');
const database = require('./db');
     
const Empresa = database.define('empresa', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        cnpj: {type: Sequelize.STRING,
            unique: true},
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fantasia: {
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
        dataFund: {
            type: Sequelize.DATEONLY
        },
        tipoEmp: {type: Sequelize.STRING,
            unique: true}
    })
     
    module.exports = Empresa ;    





/*class Empresa extends Cliente {
    constructor(cpf, nome, sobrenome, dtNasc, email, senha, tipoEmp){
        super(cpf,nome, sobrenome, dtNasc, email, senha)
        this.tipoEmp = tipoEmp
    }
    openEmp(){
        console.log(`nome: ${this.nome}, cnpj: ${this.cpf}`)
    }

}


const mc = new Empresa(12345678912342,'bombril')

mc.openEmp()

*/



