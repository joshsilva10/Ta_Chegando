const express = require('express');
const app = express();
const Cliente = require("./cliente");
const bodyParser = require('body-parser');
const sequelize = require('./db');
const {createCli} = require('./crud');
const Crud = require('./crud');
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
    res.render('../views/login');
})
app.get('/menuprincipal', function(req, res){
    res.render('../views/menuprincipal');
})
app.get('/recuperar', function(req, res){
    res.render('../views/recuperar');
})
app.get('/cadastro', function(req, res){
    res.render('../views/cadastro');
})
app.get('/cadastroemp', function(req, res){
    res.render('../views/cadastroemp');
})
app.get('/cadastroent', function(req, res){
    res.render('../views/cadastroent');
})


app.post('/cadastro', function(req, res){

    function cliObj(){
        var Cli          = {};
        return Cli;
    }
    
    let cadCli       = cliObj();
    cadCli.nome      = req.body.nome;
    cadCli.sobrenome = req.body.sobrenome;
    cadCli.senha     = req.body.password
    cadCli.email      = req.body.txtEmail
    cadCli.dataNasc  = req.body.data
    cadCli.cpf       = req.body.cpf
    console.log(cadCli);
    //Crud.create(cadCli);
    //Crud.create(cadCli)
    let result = (async ()=>{
        console.log('cadCli');
        await Crud.createCli(cadCli)
    })();
    result.then(function(){
        //res.redirect('/save')
        res.render('../views/login');
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
        console.log('loginCli');
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
        res.render('../views/menuprincipal');
    }).catch(function(erro){
        //window.alert("nao cadastrado "+erro)
        res.send("nao cadastrado "+erro)
    })
    
})


app.listen(3000, function(){
    console.log("okay");
})
