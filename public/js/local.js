//const Cliente = require('../../cliente');
//const createCli = require('../../crud');
//import {createCli} from "../../crud.js";
//import crud from '../../crud';
function logar(a){
    localStorage.setItem("cliente", a);
}



function cad(){
    cadastro = localStorage.getItem("cliente")
    if(cadastro == 1){
        window.location.href = "cadastro";
    }else if(cadastro == 2){
        window.location.href = "cadastroent";
    } else if (cadastro == 3){
        window.location.href = "cadastroemp";
    } else{
        window.location.href = "home";
    }
}


function cadCli(){
    
}
//openEmp()