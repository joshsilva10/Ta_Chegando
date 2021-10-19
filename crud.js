const database = require('./db');
const Cliente  = require('./cliente');


       //-----------CREATE--------------\\
const createCli = async () => {
    
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
        resultado();
    } catch (error) {
        console.log(error);
    }

    const resultadoCreate = await Cliente.create({
        nome: 'josue',
        sobrenome: 'silva',
        email: 'josue.gd10@gmail.com',
        senha: 'texuco',
        dataNasc: '1993-08-25',
        cpf: '09703191425'
    })
    console.log(resultadoCreate);
};
//createCli();




        //-----------READ ALL--------------\\


const readCli = async () => {
    
 
    try {
        const resultado = await database.sync();
        //console.log(resultado);
        resultado();
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


module.exports = readCliOne;
module.exports = readCli;
module.exports = updtCli;
module.exports = delCli;
//module.exports = createCli;