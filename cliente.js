/*class Cliente {
    constructor(cpf, nome, sobrenome, dtNasc, email, senha){
        this.cpf = cpf
        this.nome = nome
        this.sobrenome = sobrenome
        this.dtNasc = dtNasc
        this.email = email
        this.senha = senha
    }

    
    }*/


    const Sequelize = require('sequelize');
    const database = require('./db');
     
    const Cliente = database.define('cliente', {
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
        cpf: {type: Sequelize.STRING}
    })
     
    module.exports = Cliente ;    

