let usuario = prompt(" 🛎️ Saudações, digite seu nome: "); // Solicita o nome do usuário

let ListaDeHospedes = []; // Inicializa a lista de hóspedes

let Quartos = [ // Cria um array com os quartos e seus estados (livre ou ocupado)
    ['quarto1', 'livre'],
    ['quarto2', 'livre'],
    ['quarto3', 'livre'],
    ['quarto4', 'livre'],
    ['quarto5', 'livre'],
    ['quarto6', 'livre'],
    ['quarto7', 'livre'],
    ['quarto8', 'livre'],
    ['quarto9', 'livre'],
    ['quarto10', 'livre'],
    ['quarto11', 'livre'],
    ['quarto12', 'livre'],
    ['quarto13', 'livre'],
    ['quarto14', 'livre'],
    ['quarto15', 'livre'],
    ['quarto16', 'livre'],
    ['quarto17', 'livre'],
    ['quarto18', 'livre'],
    ['quarto19', 'livre'],
    ['quarto20', 'livre'],

]; 

// ... até 'quarto20'

// Função para realizar o login
function login (){

    let senha = parseInt(prompt(" 🛎️ Por gentileza, digite sua senha: ")); // Solicita a senha

    if (senha === 2678){ // Verifica se a senha está correta

        saudaçao(); // Chama a função de saudação

    } 
    
    else {
        alert("Senha Inválida! Tente novamente."); // Mensagem de erro

        login(); // Rechama a função para tentar novamente
    }
}

// Função para dar as boas-vindas ao usuário
function saudaçao (){

    alert("Olá " + usuario + "! É um imenso prazer ter você por aqui, seja bem vindo(a) ao Yana Bliss! 🏨✈️ ");

    HOME(); // Chama a função HOME
}

// Função principal que apresenta as opções ao usuário
function HOME() {

    var opçoes = parseInt(prompt('Por gentileza, selecione uma opção: 1) Reserva de Quartos | 2) Cadastro de Hóspedes | 3) Abastecimento de Carros | 4) Manutenção | 5) Sair'));
    
    switch (opçoes){ // Verifica a opção escolhida

        case 1:
            reserva_quartos(); // Chama a função de reserva de quartos
            break;

        case 2:
            cadastro_hospedes(); // Chama a função de cadastro de hóspedes
            break;

        case 3:
            abastecer_carros(); // Chama a função de abastecimento de carros
            break;

        case 4:
            manutençao(); // Chama a função de manutenção
            break;

        case 5:
            SAIR(); // Chama a função para sair
            break;  

        default:
            ERRO(); // Chama a função de erro
    }
}		

// Função para reservar quartos
function reserva_quartos() {

    alert('HOTEL Yana Bliss - RESERVA DE QUARTOS');
    
    let Diaria = parseFloat(prompt("Qual o valor padrão da Diária ?")); // Solicita o valor da diária
    let Dias = parseInt(prompt("Quantas diárias serão necessárias ?")); // Solicita a quantidade de diárias

    // Validação dos dados
    if (Diaria < 0 || Dias > 30 || Dias < 1 ||  isNaN(Diaria) || isNaN(Dias)) {

        alert("Dados Inválidos");

        reserva_quartos(); // Rechama a função em caso de dados inválidos
    }    

    var calculoDiaria = Diaria * Dias; // Calcula o valor total da hospedagem

    var exibiçaoCalculo = alert("O valor de " + Dias +  " dias de hospedagem é de: R$ " + calculoDiaria + "."); // Exibe o cálculo

    let Hosp = prompt("Por gentileza, qual o nome do Hóspede ?"); // Solicita o nome do hóspede
    
    let EscolhaQuartos = parseInt(prompt("Insira o N° do Quarto (1-20)")) - 1; // Solicita o número do quarto

    // Verifica se o quarto escolhido é válido
    if (EscolhaQuartos < 0 || EscolhaQuartos >= 20) {

        alert("Por gentileza, Sr(a) " + usuario + ". Verifique os dados, este quarto não existe!");

        reserva_quartos(); // Rechama a função em caso de quarto inválido
    }

    // Verifica se o quarto está ocupado
    if (Quartos[EscolhaQuartos][1] === "ocupado") {

        alert("Dá não men, escolhe outro aí pai");

        EscolhaQuartos = parseInt(prompt("Insira o N° do Quarto (1-20)")) - 1; // Solicita novo quarto
    } 
    
    else {

        Quartos[EscolhaQuartos][1] = "ocupado"; // Marca o quarto como ocupado

        alert("Quarto Livre !");
    }

    let Confirmaçao = prompt("Sr(a) " + usuario +  ". Deseja confirmar a hospedagem para " + Hosp + ", por " + Dias + " dias para o quarto N° " + (EscolhaQuartos + 1) + " por: R$" + calculoDiaria + " ? (S/N)");

    if (Confirmaçao.toUpperCase() === "S") {
        
        alert("Sr(a) " + usuario + ", a reserva para " + Hosp + " foi efetuada com sucesso!"); // Confirma a reserva

        alert(Quartos.join("  |  ")); // Exibe a lista de quartos

        HOME(); // Retorna ao menu principal

    } 
    
    else {

        HOME(); // Retorna ao menu principal se a reserva não for confirmada
    }
}

// Função para cadastrar hóspedes
function cadastro_hospedes() {

    alert("HOTEL Yana Bliss - CADASTRO DE HÓSPEDES");
  
    var opçoesCadastro = parseInt(prompt('Selecione uma opção: 1) Cadastrar | 2) Pesquisar | 3) Listar | 4) Sair')); // Apresenta opções de cadastro

    switch (opçoesCadastro){

        case 1:
            cadastrar(); // Chama a função de cadastrar
            break;

        case 2:
            pesquisa_de_hospedes(); // Chama a função de pesquisa
            break;

        case 3:
            listar_hospedes(); // Chama a função de listar hóspedes
            break;

        case 4:
            Sair2(); // Chama a função para sair
            break;

        default:
            Erro2(); // Chama a função de erro
    }

    // Função para cadastrar hóspedes
    function cadastrar (){

        var DiariaPadrao = parseFloat(prompt("Qual o valor padrão da diária ?")); // Solicita o valor padrão da diária
  
        if (DiariaPadrao < 0 || isNaN(DiariaPadrao)) { // Valida o valor da diária

            alert("Dado Inválido! Insira um valor válido.");

            cadastro_hospedes(); // Rechama a função em caso de dado inválido
        }
  
        var totalHospedagem = 0; // Inicializa o total da hospedagem
        var gratuidade = 0; // Contador para gratuidade
        var meia = 0; // Contador para meia

        while (true) { // Loop para cadastro de hóspedes

            var nome_hospede = prompt("Qual o nome do Hóspede ?"); // Solicita o nome do hóspede

            if (nome_hospede.toUpperCase()  === "PARE") { // Verifica se o usuário quer parar

                alert("Cadastro Finalizado!"); // Mensagem de finalização

                break; // Sai do loop

            }

            var idade_hospede = prompt("Qual a idade do Hóspede ?"); // Solicita a idade do hóspede

            // Classifica o hóspede de acordo com a idade
            if (idade_hospede <= 6) {

                ListaDeHospedes.push({"Hospede" : `${nome_hospede}`, "Idade" : `${idade_hospede}`, "Tipo_Pagamento" : "Gratuito", "Valor_a_ser_pago": (DiariaPadrao - DiariaPadrao) });

            } 
            
            else if (idade_hospede >= 60) {

                ListaDeHospedes.push({"Hospede" : `${nome_hospede}`, "Idade" : `${idade_hospede}`, "Tipo_Pagamento" : "Meia", "Valor_a_ser_pago": (DiariaPadrao / 2).toFixed(2) });

            } 
            
            else {

                ListaDeHospedes.push({"Hospede" : `${nome_hospede}`, "Idade" : `${idade_hospede}`, "Tipo_Pagamento" : "Inteira", "Valor_a_ser_pago": (DiariaPadrao - 0) });
            }
  
            // Valida a idade do hóspede
            if (idade_hospede < 0 || isNaN(idade_hospede)) {

                alert("Idade inválida! Insira uma idade válida.");

                continue; // Continua o loop para tentar novamente
            }

            // Atualiza contadores de gratuidade e meia
            if (idade_hospede <= 6) {

                gratuidade++;

                alert(nome_hospede +  " cadastrada(o) com sucesso." + nome_hospede +  " possui gratuidade.");

            } 
            
            else if (idade_hospede >= 60) {

                meia++;
                totalHospedagem +=  DiariaPadrao / 2;

                alert(nome_hospede +  " cadastrada(o) com sucesso." + nome_hospede +  " paga meia.");

            } 
            
            else {

                totalHospedagem += DiariaPadrao;

                alert(nome_hospede +  " cadastrada(o) com sucesso.");
            }

            // Exibe o valor total das hospedagens
            alert("Sr(a) " + usuario + ", o valor total das hospedagens é: " + totalHospedagem.toFixed(2) + " ;" + gratuidade + " gratuidade(s); " + meia + " meia(s)");  
        }
    }
  
    // Função para pesquisar hóspedes
    function pesquisa_de_hospedes (){

        nome_hospede = prompt("Qual o nome do Hóspede que deseja pesquisar ?"); // Solicita o nome do hóspede

        let hospedeEncontrado = ListaDeHospedes.find(hospede => hospede.nome.toLowerCase() === nome_hospede.toLowerCase()); // Busca o hóspede na lista

        if (hospedeEncontrado){ 
            // Se encontrado
            alert(`Hóspede ${hospedeEncontrado.nome} foi encontrado(a)!`); // Mensagem de sucesso

        } 
        
        else {

            alert("Hóspede não encontrado(a)!"); // Mensagem de erro

        }
    }

    // Função para listar hóspedes
    function listar_hospedes (){

        if (ListaDeHospedes.length === 0) { // Verifica se a lista está vazia

            alert("Nenhum hóspede cadastrado!"); // Mensagem de alerta

        } 
        
        else {

            alert(ListaDeHospedes.join("  |  ")); // Exibe a lista de hóspedes

        }
    }

    function Sair2 (){

        HOME(); // Retorna ao menu principal
    }
}

// Função para abastecer carros
function abastecer_carros() {

    alert('HOTEL Yana Bliss - ABASTECER');

    var tanque = 42; // Capacidade do tanque

    // Solicita os valores dos combustíveis em dois postos
    var AlcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil ?"));
    var GasolinaWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil ?"));
    var AlcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol ?"));
    var GasolinaStark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol ?"));

    // Função para calcular se é vantajoso abastecer com álcool
    function PorcentagemAlcool (valorAlcool, valorGasolina) {
        return valorAlcool <= (valorGasolina * 0.7); // Retorna verdadeiro se álcool for mais vantajoso
    }

    // Calcula o custo para abastecer os tanques
    var AbastecerAlcoolWayne = AlcoolWayne * tanque;
    var AbastecerGasolinaWayne = GasolinaWayne * tanque;
    var AbastecerAlcoolStark = AlcoolStark * tanque;
    var AbastecerGasolinaStark = GasolinaStark * tanque;

    // Verifica a melhor opção de abastecimento
    var WayneBeneficio = PorcentagemAlcool(AlcoolWayne, GasolinaWayne) ? "alcool" : "gasolina";
    var StarkBeneficio = PorcentagemAlcool(AlcoolStark, GasolinaStark) ? "alcool" : "gasolina";

    // Compara os preços e informa o melhor abastecimento
    if (WayneBeneficio === "alcool" && StarkBeneficio === "alcool") {

        if (AbastecerAlcoolWayne < AbastecerAlcoolStark) {

            alert("É mais barato abastecer com álcool no posto Wayne Oil.");

        } 
        
        else {

            alert("É mais barato abastecer com álcool no posto Stark Petrol.");

        }

    } 
    
    else if (WayneBeneficio === "gasolina" && StarkBeneficio === "gasolina") {

        if (AbastecerGasolinaWayne < AbastecerGasolinaStark) {

            alert("É mais barato abastecer com gasolina no posto Wayne Oil.");

        } 
        
        else {

            alert("É mais barato abastecer com gasolina no posto Stark Petrol.");

        }

    } 
    
    else {

        if (AbastecerAlcoolWayne < AbastecerGasolinaWayne && AbastecerAlcoolWayne < AbastecerAlcoolStark && AbastecerAlcoolWayne < AbastecerGasolinaStark) {

            alert("É mais barato abastecer com álcool no posto Wayne Oil.");

        } 
        
        else if (AbastecerGasolinaWayne < AbastecerAlcoolWayne && AbastecerGasolinaWayne < AbastecerAlcoolStark && AbastecerGasolinaWayne < AbastecerGasolinaStark) {

            alert("É mais barato abastecer com gasolina no posto Wayne Oil.");

        } 
        
        else if (AbastecerAlcoolStark < AbastecerGasolinaStark) {

            alert("É mais barato abastecer com álcool no posto Stark Petrol.");

        } 
        
        else {

            alert("É mais barato abastecer com gasolina no posto Stark Petrol.");

        }
    }

    HOME(); // Retorna ao menu principal
}

// Função para manutenção
function manutençao (){

    var ValorMinimo = null; // Inicializa o valor mínimo

    var EmpresaMaisBarata = ""; // Inicializa o nome da empresa mais barata

    var continuar = "S"; // Controle para continuar o loop

    while (continuar.toUpperCase() === "S") {

        var nome_da_empresa = prompt("Qual o nome da empresa ?"); // Solicita o nome da empresa

        var valor_do_aparelho = parseFloat(prompt("Qual o valor por aparelho ?")); // Solicita o valor por aparelho

        var quantidade_de_aparelhos = parseInt(prompt("Qual a quantidade de aparelhos ?")); // Solicita a quantidade de aparelhos

        var desconto = parseFloat(prompt("Qual a porcentagem do desconto ?")); // Solicita a porcentagem de desconto

        var quantidade_minima = parseInt(prompt("Qual a quantidade mínima para conseguir o desconto ?")); // Solicita a quantidade mínima para o desconto


        var valorTotal = valor_do_aparelho * quantidade_de_aparelhos; // Calcula o valor total

        // Calcula o valor da manutenção considerando o desconto
        var valor_da_manutençao;

        if (quantidade_de_aparelhos >= quantidade_minima) {

            var valorDesconto = (valorTotal * desconto) / 100;

            valor_da_manutençao = valorTotal - valorDesconto;

        } 
        
        else {

            valor_da_manutençao = valorTotal;

        }

        alert("O serviço da " + nome_da_empresa + " custará R$ " + valor_da_manutençao.toFixed(2)); // Exibe o valor da manutenção

        // Verifica se é o menor orçamento
        if (ValorMinimo === null || valor_da_manutençao < ValorMinimo) {

            ValorMinimo = valor_da_manutençao;

            EmpresaMaisBarata = nome_da_empresa;
        }

        continuar = prompt("Deseja informar novos dados? (S/N)"); // Pergunta se o usuário quer continuar
    }

    alert("O orçamento de menor valor é o de " + EmpresaMaisBarata + " por R$ " + ValorMinimo.toFixed(2)); // Exibe a empresa mais barata
}

// Função para tratar erros
function ERRO() {

    alert('Por favor, informe um número entre 1 e 4'); // Mensagem de erro

    HOME(); // Retorna ao menu principal
}

// Função para tratar erros no cadastro
function Erro2() {

    alert('Por favor, informe um número entre 1 e 4'); // Mensagem de erro

    cadastro_hospedes(); // Retorna à função de cadastro
}

// Função para sair do sistema
function SAIR() {

    var confirma = confirm('Você deseja sair?'); // Pergunta ao usuário se deseja sair

    if (confirma) {

        window.close(); // Fecha a janela se o usuário confirmar

    } 
    
    else {

        HOME(); // Retorna ao menu principal

    }
}

// Inicia o processo chamando a função de login

login();
