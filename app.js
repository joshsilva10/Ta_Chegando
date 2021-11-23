const express = require('express');
const app = express();
const https = require('https');
var fs = require('fs');
const Cliente = require("./cliente");
const bodyParser = require('body-parser');
const sequelize = require('./db');
const {createCli} = require('./crud');
const Crud = require('./crud');
//const createtest = require('./firebase');
const adiciOnar = require("./firebase")
//const {db} = require('firebase')

var valor
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
    //adiciOnar.upTracker('')
    res.render('../views/cliente/login');
})
app.get('/login-entregador', function(req, res){
    
    res.render('../views/entregador/login-entregador');
})
app.get('/menuprincipal', function(req, res){
    res.render('../views/cliente/menuprincipal');
})
app.get('/menuprincipal-entregador', function(req, res){
    res.render('../views/entregador/menuprincipal-entregador');
})
app.get('/menuprincipal', function(req, res){
    res.render('../views/menuprincipal');
})
app.get('/recuperar', function(req, res){
    res.render('../views/recuperar');
})
app.get('/cadastro', function(req, res){
    res.render('../views/cliente/cadastro');
})
app.get('/cadastroemp', function(req, res){
    res.render('../views/cadastroemp');
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
    console.log(cadCli);
    //Crud.create(cadCli);
    //Crud.create(cadCli)
    let resultCli = (async ()=>{
        console.log('cadCli');
        await Crud.createCli(cadCli)
    })();
    resultCli.then(function(){
        //res.redirect('/save')
        res.redirect('/login');
    }).catch(function(erro){
        res.send("nao cadastrado "+erro)
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
    cadEnt.email      = req.body.txtEmail;
    cadEnt.dataNasc  = req.body.data;
    cadEnt.cpf       = req.body.cpf;
    cadEnt.cnh = req.body.cnh;
    cadEnt.veiculo = req.body.veiculo;
    cadEnt.placa = req.body.txtPlaca;
   
   
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
