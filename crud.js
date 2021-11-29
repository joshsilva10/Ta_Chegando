const database = require('./db');
const Cliente  = require('./cliente');
const Entregador  = require('./entregador');
const Rastreio  = require('./rastreio');
const Endereco = require('./endereco');
const Empresa = require('./empresa');
const Produtos = require('./produtos');

var  CrudCli = {
        //-----------CREATE CLIENTE--------------\\
      async createCli(cliObj)  {
    
 
        try {
            const resultado = await database.sync();
           // console.log(resultado);
            //resultado();
        } catch (error) {
            console.log(error);
        }
    
        const resultadoCreate = await Cliente.create({
            nome: cliObj.nome,// 'josue',
            sobrenome: cliObj.sobrenome, //'silva',
            email: cliObj.email, //'josue.gd10@gmail.com',
            senha: cliObj.senha, //'texuco',
            dataNasc: cliObj.dataNasc, //'1993-08-25',
            cpf: cliObj.cpf //'09703191425'
        })
        //console.log(resultadoCreate);
    },
    async createEmp(empObj)  {
    
 
        try {
            const resultado = await database.sync();
           // console.log(resultado);
            //resultado();
        } catch (error) {
            console.log(error);
        }
    
        const resultadoCreate = await Empresa.create({
            nome: empObj.nome,// 'josue',
            fantasia: empObj.fantasia, //'silva',
            email: empObj.email, //'josue.gd10@gmail.com',
            senha: empObj.senha, //'texuco',
            dataFund: empObj.dataFund, //'1993-08-25',
            cnpj: empObj.cnpj,
            tipoEmp: empObj.tipoEmp //'09703191425'
        })
        //console.log(resultadoCreate);
    },
    async valLogin(loginObj){

        try {
            const resultado = await database.sync();
            //console.log(resultado);
            //resultado();
        } catch (error) {
            console.log(error);
        }


    const cli = await Cliente.findOne({
        where:{email:loginObj.email,
        senha:loginObj.senha}
    }).then(function(artigos){
        
        var teste = artigos
        return teste
        //console.log(teste)
        //console.log("artigo " + artigos.dataValues.nome)

    })
    //console.log(cli);
    return cli;
    //console.log("artigo " + cli.dataValues.nome)
    //const cliPk = await Cliente.findByPk(1);
    //console.log(cliPk);

    },
    async capIdUser(cpf){

        try {
            const resultado = await database.sync();
            //console.log(resultado);
            //resultado();
        } catch (error) {
            console.log(error);
        }


    const cli = await Cliente.findOne({
        where:{cpf:cpf}
    }).then(function(artigos){
        
        var teste = artigos
        return teste
        //console.log(teste)
        //console.log("artigo " + artigos.dataValues.nome)

    })
    //console.log(cli);
    return cli;
    //console.log("artigo " + cli.dataValues.nome)
    //const cliPk = await Cliente.findByPk(1);
    //console.log(cliPk);

    },

    async valLoginEnt(loginObj){

        try {
            const resultado = await database.sync();
            //console.log(resultado);
            //resultado();
        } catch (error) {
            console.log(error);
        }


    const cli = await Entregador.findOne({
        where:{email:loginObj.email,
        senha:loginObj.senha}
    }).then(function(artigos){
        
        var teste = artigos
        return teste
        //console.log(teste)
        //console.log("artigo " + artigos.dataValues.nome)

    })
    //console.log(cli);
    return cli;
    //console.log("artigo " + cli.dataValues.nome)
    //const cliPk = await Cliente.findByPk(1);
    //console.log(cliPk);

    },
    async valLoginEmp(loginObj){

        try {
            const resultado = await database.sync();
            //console.log(resultado);
            //resultado();
        } catch (error) {
            console.log(error);
        }


    const cli = await Empresa.findOne({
        where:{email:loginObj.email,
        senha:loginObj.senha}
    }).then(function(artigos){
        
        var teste = artigos
        return teste
        //console.log(teste)
        //console.log("artigo " + artigos.dataValues.nome)

    })
    //console.log(cli);
    return cli;
    //console.log("artigo " + cli.dataValues.nome)
    //const cliPk = await Cliente.findByPk(1);
    //console.log(cliPk);

    },
    async capend(capObj){

        try {
            const resultado = await database.sync();
            //console.log(resultado);
            //resultado();
        } catch (error) {
            console.log(error);
        }


    const end = await Endereco.findOne({
        where:{idcli:capObj}
    }).then(function(artigos){
        
        var teste = artigos
        return teste
        //console.log(teste)
        //console.log("artigo " + artigos.dataValues.nome)

    })
    //console.log(cli);
    return end;
    //console.log("artigo " + cli.dataValues.nome)
    //const cliPk = await Cliente.findByPk(1);
    //console.log(cliPk);

    },

    

    async createEnt(EntObj){

        try {
            const resultado = await database.sync();
            //console.log(resultado);
            //resultado();
        } catch (error) {
           // console.log(error);
        }

        const resultadoCreateEnt = await Entregador.create({
            nome: EntObj.nome,// 'josue',
            sobrenome: EntObj.sobrenome, //'silva',
            email: EntObj.email, //'josue.gd10@gmail.com',
            senha: EntObj.senha, //'texuco',
            dataNasc: EntObj.dataNasc, //'1993-08-25',
            cpf: EntObj.cpf ,
            cnh: EntObj.cnh,// 'josue',
            veiculo: EntObj.veiculo, //'silva',
            placa: EntObj.placa, //'josue.gd10@gmail.com',
            //idcliente: EntObj.CliId, //'texuco',
            //'09703191425'
        })
        //console.log(resultadoCreateEnt);

    },
    async createEnd(EntObj){

        try {
            const resultado = await database.sync();
            //console.log(resultado);
            //resultado();
        } catch (error) {
           // console.log(error);
        }

        const resultadoCreateEnd = await Endereco.create({
            cep              : EntObj.cep,
            rua              : EntObj.rua,
            numero           : EntObj.numero,
            complemento      : EntObj.complemento,
            bairro           : EntObj.bairro,
            cidade           : EntObj.cidade,
            uf               : EntObj.uf,
            idcli            : EntObj.idcli
        })
        //console.log(resultadoCreateEnt);

    },
    async createProd(EntObj){

        try {
            const resultado = await database.sync();
            //console.log(resultado);
            //resultado();
        } catch (error) {
           // console.log(error);
        }

        const resultadoCreateProd = await Produtos.create({
            cep              : EntObj.cep,
            rua              : EntObj.rua,
            numero           : EntObj.numero,
            complemento      : EntObj.complemento,
            bairro           : EntObj.bairro,
            cidade           : EntObj.cidade,
            uf               : EntObj.uf,
            idcli            : EntObj.idcli
        })
        //console.log(resultadoCreateEnt);

    },


    async createRastreio(cliObj)  {
    
 
        try {
            const resultado = await database.sync();
           // console.log(resultado);
            //resultado();
        } catch (error) {
            console.log(error);
        }
    
        const resultadoCreate = await Rastreio.create({
            lat: cliObj.lat,// 'josue',
            long: cliObj.long
              })
        //console.log(resultadoCreate);
    }

}



       //-----------CREATE--------------\\
/*const createCli =  async (cliObj) => {
    
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
        resultado();
    } catch (error) {
        console.log(error);
    }

    const resultadoCreate = await Cliente.create({
        nome: cliObj.nome,// 'josue',
        sobrenome: cliObj.sobrenome, //'silva',
        email: cliObj.email, //'josue.gd10@gmail.com',
        senha: cliObj.senha, //'texuco',
        dataNasc: cliObj.dataNasc, //'1993-08-25',
        cpf: cliObj.cpf //'09703191425'
    })
    console.log(resultadoCreate);
};*/
//createCli();




        //-----------READ ALL--------------\\


const readCli = async () => {
    
 
    try {
        const resultado = await database.sync();
        //console.log(resultado);
        //resultado();
    } catch (error) {
        console.log(error);
    }
const cli = await Cliente.findAll();
console.log(cli);
const cliPk = await Cliente.findByPk(1);
console.log(cliPk);

};

    //-----------READ ONE--------------\\

const readCliOne = async () => {
    
 
    try {
          const resultado = await database.sync();
             //console.log(resultado);
         resultado();
    } catch (error) {
    console.log(error);
    }
       
const cliPk = await Cliente.findByPk(1);
console.log(cliPk);
        
    };
//readCli();


//-----------UPDATE--------------\\

const updtCli = async () => {
    
 
    try {
        const resultado = await database.sync();
        //console.log(resultado);
        resultado();
    } catch (error) {
        console.log(error);
    }
const updt = await Cliente.findByPk(7);
//console.log(produto);
updt.nome = "Dezza";

const resultadoSave = await updt.save();
console.log(resultadoSave);
};

//updtCli();


//-----------DELETE--------------\\
const delCli = async () => {
    
 
    try {
        const resultado = await database.sync();
        resultado();
    } catch (error) {
        console.log(error);
    }

    //---------MODULO 1 -------\\
    //Cliente.destroy({ where: { id: 2 }});

    //---------MODULO 2---------\\
    //const delClin = await Cliente.findByPk(1);
    //delClin.destroy();

};


//module.exports = readCliOne;
//module.exports = readCli;
//module.exports = updtCli;
//module.exports = delCli;
//module.exports = createCli;
module.exports = CrudCli;
