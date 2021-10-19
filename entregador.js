
class Entregador extends Cliente {
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