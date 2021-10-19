const express = require('express');
const app = express();
const Cliente = require("./cliente");
const bodyParser = require('body-parser');
const sequelize = require('./db');
const {createCli} = require('./crud');
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

app.post('/cadastrado', function(req, res){ 
     
    Cliente.create({
        nome: req.body.nome,
	    sobrenome: req.body.sobrenome,
        senha: req.body.password,
        email: req.body.txtEmail,
        dataNasc: req.body.data,
        cpf: req.body.cpf
        
    }).then(function(){
        //res.redirect('/save')
        res.render('../views/login');
    }).catch(function(erro){
        res.send("nao cadastrado "+erro)
    })
    
    //res.render('cadastro');
})


app.listen(3000, function(){
    console.log("okay");
})