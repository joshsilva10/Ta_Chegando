
class Empresa extends Cliente {
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