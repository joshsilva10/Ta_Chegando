
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


function back(){
    cadastro = localStorage.getItem("cliente")
    if(cadastro == 1){
        window.location.href = "menuprincipal";
    }else if(cadastro == 2){
        window.location.href = "menuprincipal-entregador";
    } else if (cadastro == 3){
        window.location.href = "menuprincipal-empresa";
    } else{
        //window.location.href = "home";
    }
}


function backprod(){
    cadastro = localStorage.getItem("cliente")
    if(cadastro == 1){
        window.location.href = "/endereco";
    }else if(cadastro == 2){
        window.location.href = "/encomendas";
    } else if (cadastro == 3){
        window.location.href = "/produtos";
    } else{
        //window.location.href = "home";
    }
}


function backend(){
  
        window.location.href = "/endereco";
    
}