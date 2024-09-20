Dedico este repositório para a atividade: "Um Hotel em Terabithia."

# Ainda está em desenvolvimento! (falta a parte dos eventos)

# Um Hotel em Terabithia

Este projeto envolve a criação de um sistema modular para gerenciamento de um hotel fictício, com funcionalidades que facilitam o trabalho dos funcionários do hotel. O sistema é desenvolvido para aplicar conceitos de lógica de programação e boas práticas de software.

## Objetivo do Projeto

O objetivo principal é criar uma plataforma para os funcionários de um hotel utilizarem, realizando tarefas como reserva de quartos, cadastro de hóspedes, e agendamento de eventos. A solução será dividida em módulos independentes, cada um com uma função específica, e será desenvolvido um menu principal para facilitar a navegação entre as opções.

## Funcionalidades

### 1. **Sistema de Login**
- Exibe uma mensagem de boas-vindas ao funcionário com o nome do hotel.
- Solicita o nome do usuário e uma senha para autenticação. A senha correta é `2678`.
- Exibe a mensagem "Bem vindo ao Hotel {Nome do Hotel}, {Nome do Usuário}" após login bem-sucedido.

### 2. **Reserva de Quartos**
- O hotel possui 20 quartos inicialmente livres.
- Permite ao usuário inserir o valor da diária e a quantidade de dias de hospedagem, com validação de valores:
  - O valor da diária não pode ser negativo.
  - A quantidade de dias deve estar entre 1 e 30.
- Se os valores forem válidos, o nome do hóspede e o número do quarto (1-20) são solicitados.
- Se o quarto já estiver ocupado, o sistema pedirá que outro quarto seja escolhido.
- Confirma a reserva e exibe a lista de quartos e suas ocupações.

### 3. **Cadastro de Hóspedes (Gratuidade e Meia)**
- O programa recebe vários nomes de hóspedes e suas idades.
- Hóspedes com menos de 6 anos não pagam a diária (gratuidade).
- Hóspedes com mais de 60 anos pagam metade da diária.
- A entrada de dados é interrompida com a palavra "PARE".
- O sistema exibe a quantidade de gratuidades, meias hospedagens e o valor total das hospedagens.

### 4. **Pesquisa e Cadastro de Hóspedes**
- Permite cadastrar até 15 hóspedes.
- Possui um sistema de busca por nome, informando se o hóspede foi encontrado ou não.
- Exibe uma lista de todos os hóspedes cadastrados.
- Possui a opção de retornar ao menu principal.

### 5. **Gerenciamento de Eventos**
- O hotel oferece dois auditórios: Laranja (150 lugares + 70 cadeiras adicionais) e Colorado (350 lugares).
- O sistema permite ao usuário inserir o número de convidados e calcula o auditório ideal.
- Caso o número de convidados exceda a capacidade de ambos os auditórios, o sistema informa a impossibilidade de alocar o evento.

## Estrutura Modular
Cada funcionalidade foi projetada de forma modular, permitindo a fácil manutenção e expansão do sistema. O menu principal utiliza a estrutura `switch/case` para navegação entre as funcionalidades, e os módulos retornam ao menu inicial após a conclusão de suas tarefas.

## Como Executar o Sistema
1. Execute o código principal e siga as instruções na tela.
2. Ao acessar o sistema, informe o nome de usuário e a senha (2678).
3. Navegue pelo menu para escolher a funcionalidade desejada.

## Contribuição
- Nome do hotel, mensagens e valores são personalizáveis.
- O código foi desenvolvido de forma a incentivar a colaboração e a resolução de problemas em equipe.

## Conclusão
Este projeto tem como objetivo desenvolver habilidades de programação e análise de problemas em um contexto prático. Através do sistema modular, foi possível implementar várias funcionalidades comuns a um hotel, o que permite a expansão do projeto para incluir novos recursos.

## Autor
Este projeto foi desenvolvido como parte de exercícios de prática em programação, proposto pelo Professor Gabriel.
