const express = require('express');
const app = express();
const https = require('https');
var fs = require('fs');
const Cliente = require("./cliente");
const bodyParser = require('body-parser');
const sequelize = require('./db');
//const {createCli} = require('./crud');
const Crud = require('./crud');
//const createtest = require('./firebase');
const adiciOnar = require("./firebase")
//const {db} = require('firebase')
//const mapa = require("https://maps.googleapis.com/maps/api/js?key=AIzaSyAC1DXQau7-c5Pdzt0na-FA5P2VcJF8Zus&callback=mapInit")


//app.use('/scripts', express.static(__dirname + '/node_modules/firebase/firestore/dist/'));

app.get('/script.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/firebase/firebase-firestore.js');
});
app.get('/fireb.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/firebase/firebase-app.js');
});
app.get('/firebase-firestore.js.map', function(req, res) {
    res.sendFile(__dirname + '/node_modules/firebase/firebase-firestore.js.map');
});
app.get('/firebase-app.js.map', function(req, res) {
    res.sendFile(__dirname + '/node_modules/firebase/firebase-app.js.map');
});





var cpfcli
var idcli
var endecli
var endeemp
var idemp
var cpfemp

//var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
//var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

//var credentials = {key: privateKey, cert: certificate};
//var httpsServer = https.createServer(credentials, app);
//const { Sequelize } = require('sequelize/types');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) 

app.get('/', function(req, res){
    res.render('../views/index');
})

app.get('/home', function(req, res){
    res.render('../views/index');
})
app.get('/login', function(req, res){
    res.render('../views/cliente/login');
})

app.get('/produtos', function(req, res){
    res.render('../views/empresa/produtos');
})
app.post('/produtos', function(req, res){
    var trackid
    function cliObj(){
        var Cli          = {};
        return Cli;
    }
    let prod       = cliObj();
    let capuser = (async()=>{
        let val = await Crud.capIdUser(req.body.cpf)
        idcli = val.id
        console.log("id cliente",idcli)
    })() 
    
    capuser.then(function(){
            console.log("id cliente no endereco",idcli)
            let endcli=(async()=>{
                console.log("id cliente no endereco",idcli)
                let val = await Crud.capend(idcli)
                endecli = val.id
        
            })()

            endcli.then(function(){
                let endemp = (async()=>{
                    let val = await Crud.capend(idemp)
                    endeemp = val.id
            
                })()

                endemp.then(function(){
                    let track = (async()=>{
                        let val = await adiciOnar.fireb()
                        trackid = val.id
                
                    })()

                    track.then(function(){

                            prod.produto         = req.body.produto;
                            prod.descricao       = req.body.descricao;
                            prod.St              = req.body.status;
                            prod.codRastreio     = trackid;
                            prod.cpfCliente      = req.body.cpf;
                            prod.cpfEmpresa      = cpfemp;
                            prod.endCliente      = endecli;
                            prod.endEmpresa      = endeemp;
                            console.log(prod);
                            //Crud.create(cadCli);
                            //Crud.create(cadCli)
                            let resultCli = (async ()=>{
                                //console.log('cadCli');
                                await Crud.createProd(prod)
                                })();
                            resultCli.then(function(){
                                //res.redirect('/save')
                                res.redirect('/endereco');
                            }).catch(function(erro){
                                res.send("nao cadastrado "+erro)

                                })

                    }

                    ).catch(function(erro){
                                     res.send("Erro ao criar rastreio"+erro)
                                 })


                }).catch(function(erro){
                            res.send("Endereco da empresa nao encontrado"+erro)
                         })

                     }).catch(function(erro){
                        res.send("Endereco do cliente nao encontrado"+erro)
                     })
                }).catch(function(erro){
    res.send("Cliente nao encontrado"+erro)
        })
    //res.render('../views/empresa/produtos');
})

app.get('/login-entregador', function(req, res){

    res.render('../views/entregador/login-entregador');
})
app.get('/login-empresa', function(req, res){
    
    res.render('../views/empresa/login-empresa');
})
app.get('/menuprincipal', function(req, res){

    let seAll = (async ()=>{
        console.log('cadCli');
        teste = await Crud.selAllRastreio(cpfcli)
        return teste
    })();
    seAll.then(async function(){
        let result = await Promise.resolve(seAll)
    result.then(function(v){

        res.render('../views/cliente/menuprincipal',{trk:v});

    }).catch(function(erro){
        res.send("error",erro)
        //res.render('../views/cliente/menuprincipal');
    })         

    }).catch(function(erro){
        res.send("error",erro)
        //res.render('../views/cliente/menuprincipal');
    })  
    
 

    
})
app.get('/menuprincipal-entregador', function(req, res){
    res.render('../views/entregador/menuprincipal-entregador');
})
app.get('/endereco', function(req, res){
    res.render('../views/cliente/endereco');
})
app.get('/recuperar', function(req, res){
    res.render('../views/recuperar');
})
app.get('/cadastro', function(req, res){
    res.render('../views/cliente/cadastro');
})
app.get('/cadastroemp', function(req, res){
    res.render('../views/empresa/cadastroemp');
})
app.get('/cadastroent', function(req, res){
    res.render('../views/entregador/cadastroent');
})


app.post('/cadastro', function(req, res){

    function cliObj(){
        var Cli          = {};
        return Cli;
    }
    
    let cadCli       = cliObj();
    cadCli.nome      = req.body.nome;
    cadCli.sobrenome = req.body.sobrenome;
    cadCli.senha     = req.body.password;
    cadCli.email      = req.body.txtEmail;
    cadCli.dataNasc  = req.body.data;
    cadCli.cpf       = req.body.cpf;
    cpfcli           = req.body.cpf;
    console.log(cadCli);
    //Crud.create(cadCli);
    //Crud.create(cadCli)
    let resultCli = (async ()=>{
        console.log('cadCli');
        await Crud.createCli(cadCli)
    })();
    resultCli.then(function(){
        //res.redirect('/save')
        res.redirect('/endereco');
    }).catch(function(erro){
        res.send("nao cadastrado "+erro)
    })
    
})

app.post('/endereco', function(req, res){

    function cliObj(){
        var Cli          = {};
        return Cli;
    }

    
    let capuser = (async()=>{
        let val = await Crud.capIdUser(cpfcli)
        idcli = val.id

    })() 
    capuser.then(function(){
    let cadEnd              = cliObj();
    cadEnd.cep              = req.body.cep;
    cadEnd.rua              = req.body.rua;
    cadEnd.numero           = req.body.numero;
    cadEnd.complemento      = req.body.complemento;
    cadEnd.bairro           = req.body.bairro;
    cadEnd.cidade           = req.body.cidade;
    cadEnd.uf               = req.body.uf;
    cadEnd.idcli            = idcli;

    let cadendereco = (async()=>{
        let val = await Crud.createEnd(cadEnd)

    })()
    cadendereco.then(function(){
        res.redirect("/login")
    }).catch(function(erro){
        res.send("erro endereco"+erro)
    })


    }).catch(function(erro){
        console.log("erro =",erro)
        res.send("erro ="+erro)
    })
    

})


app.post('/cadastroent', function(req, res){
    function cliObj(){
        var Cli          = {};
        return Cli;
    }
    
    let cadEnt       = cliObj();
    cadEnt.nome      = req.body.nome;
    cadEnt.sobrenome = req.body.sobrenome;
    cadEnt.senha     = req.body.password;
    cadEnt.email     = req.body.txtEmail;
    cadEnt.dataNasc  = req.body.data;
    cadEnt.cpf       = req.body.cpf;
    cadEnt.cnh       = req.body.cnh;
    cadEnt.veiculo   = req.body.veiculo;
    cadEnt.placa     = req.body.txtPlaca;
   
   
    let resultCliEnt = (async ()=>{
        //console.log('cadCli');
        await Crud.createEnt(cadEnt)
    })();

    resultCliEnt.then(function(){
        
        
            
        res.redirect('/login-entregador');

                                    
    }).catch(function(erro){
        res.send("nao cadastrado "+erro)
    })
})

app.post('/cadastroemp', function(req, res){
    function cliObj(){
        var Cli          = {};
        return Cli;
    }
    
    let cadEmp       = cliObj();
    cadEmp.nome      = req.body.nome;
    cadEmp.fantasia  = req.body.fantasia;
    cadEmp.senha     = req.body.senha;
    cadEmp.email     = req.body.email;
    cadEmp.dataFund  = req.body.data;
    cadEmp.cnpj      = req.body.cnpj;
    cadEmp.tipoEmp   = req.body.tipo;
   
   
    let resultCliEnt = (async ()=>{
        //console.log('cadCli');
        await Crud.createEmp(cadEmp)
    })();

    resultCliEnt.then(function(){
        
        
            
        res.redirect('/endereco');

                                    
    }).catch(function(erro){
        res.send("nao cadastrado "+erro)
    })
})

app.post('/login', function(req, res){

    function loginObj(){
        var Cli          = {};
        return Cli;
    }
    
    let loginCli       = loginObj();
    
    loginCli.senha     = req.body.txtPswd
    loginCli.email      = req.body.txtEmail
    console.log(loginCli);

    let validator = (async ()=>{
        //console.log('loginCli');
        const val = await Crud.valLogin(loginCli)
        if(val.email == loginCli.email && val.senha == loginCli.senha){
            cpfcli = val.cpf
            
            return true
        }else{
            return false
        }
        //console.log("val1 "+val.sobrenome)
        //return val;

    })();
    //console.log("val"+validator.dataValues.nome)
    //Promise.resolve(validator)
    //Promise.reject(validator)
    
    validator.then(function(){
        //res.redirect('/save')
        res.redirect('/menuprincipal');
    }).catch(function(erro){
        //window.alert("nao cadastrado "+erro)
        res.send("nao cadastrado "+erro)
    })
    
})

app.post('/login-entregador', function(req, res){

    function loginObj(){
        var Cli          = {};
        return Cli;
    }
    
    let loginCli       = loginObj();
    
    loginCli.senha     = req.body.txtPswd
    loginCli.email      = req.body.txtEmail
    console.log(loginCli);

    let validator = (async ()=>{
        //console.log('loginCli');
        const val = await Crud.valLoginEnt(loginCli)
        if(val.email == loginCli.email && val.senha == loginCli.senha){
            cpfcli = val.cpf
            
            return true
        }else{
            return false
        }
        //console.log("val1 "+val.sobrenome)
        //return val;

    })();
    //console.log("val"+validator.dataValues.nome)
    //Promise.resolve(validator)
    //Promise.reject(validator)
    
    validator.then(function(){
        //res.redirect('/save')
        res.redirect('/menuprincipal-entregador');
    }).catch(function(erro){
        //window.alert("nao cadastrado "+erro)
        res.send("nao cadastrado "+erro)
    })
    
})
app.post('/login-empresa', function(req, res){

    function loginObj(){
        var Cli          = {};
        return Cli;
    }
    
    let loginCli       = loginObj();
    
    loginCli.senha     = req.body.txtPswd
    loginCli.email      = req.body.txtEmail
    console.log(loginCli);

    let validator = (async ()=>{
        //console.log('loginCli');
        const val = await Crud.valLoginEmp(loginCli)
        if(val.email == loginCli.email && val.senha == loginCli.senha){
            cpfemp = val.cpf
            
            return true
        }else{
            return false
        }
        //console.log("val1 "+val.sobrenome)
        //return val;

    })();
    //console.log("val"+validator.dataValues.nome)
    //Promise.resolve(validator)
    //Promise.reject(validator)
    
    validator.then(function(){
        //res.redirect('/save')
        res.redirect('/menuprincipal-entregador');
    }).catch(function(erro){
        //window.alert("nao cadastrado "+erro)
        res.send("nao cadastrado "+erro)
    })
    
})


//httpsServer.listen(3000, function(){
//    console.log("okay");})

function capCad(obj){
    console.log("obj = "+ obj.id)
    valor = obj.id
}



app.listen(3000, function(){
    console.log("okay");
})
