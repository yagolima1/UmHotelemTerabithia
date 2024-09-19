let usuario = prompt(" 🛎️ Saudações, digite seu nome: ");

function login (){

    let senha = parseInt(prompt( " 🛎️ Por gentileza, digite sua senha: "));

    if (senha === 2678){
        saudaçao();
    }

    else {
        alert("Senha Inválida! Tente novamente.")
        login();
    }
}

    function saudaçao (){

    alert("Olá " + usuario + "! É um imenso prazer ter você por aqui, seja bem vindo(a) ao Yana Bliss! 🏨✈️ ");

    HOME();

    }

function HOME() {

    var opçoes = parseInt(prompt('Por gentileza, selecione uma opção: 1) Reserva de Quartos | 2) Cadastro de Hóspedes | 3) Abastecimento de Carros | 4) Sair'));

    switch (opçoes){

        case 1:
            reserva_quartos();
            break;

        case 2:
            cadastro_hospedes();
            break;
            
        case 3:
            abastecer_carros();
            break;
            
        case 4:
            SAIR();
            break;

        default:
            ERRO();
    }
}		

function reserva_quartos() {
    alert('HOTEL Yana Bliss - RESERVA DE QUARTOS');

    

























    inicio();
}

function cadastro_hospedes() {
    alert('HOTEL Yana Bliss - CADASTRO DE HÓSPEDES');
    inicio();
}

function abastecer_carros() {
    alert('HOTEL Yana Bliss - ABASTECER');
    inicio();
}

function ERRO() {
    
    alert('Por favor, informe um número entre 1 e 4');
    inicio();
}

function SAIR() {

    var confirma = confirm('Você deseja sair?');

    if (confirma) {

        window.close();
    } 

    else {
        HOME();
    }
}

login();
