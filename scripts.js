//variaveis
//faz a busca do elemento no arquivo HTML
const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");


const respostas =[
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function fazerPergunta(){

    if (inputPergunta.value == ""){
        alert("Input vazio, preencha para fazer uma pergunta");
        return 0;
    }

const perguntaFeita = "<div>" + inputPergunta.value + "</div>"

//gerar numeros aleatorios
const totalResposta = respostas.length; //total de resposta no array
const numeroAleatorio = Math.floor(Math.random() * totalResposta)
//Math.floor(Math.random()) é arendondamento por piso, sempre será zero
//Math.floor(Math.random() * 19) o numero aleatório vai multiplicar por um valor, no caso o 19, com isso vai gerar um resultado inteiro

console.log(inputPergunta.value)
perguntaFeita.innerHTML = inputPergunta.value  

// console.log(respostas[numeroAleatorio])
elementoResposta.innerHTML = respostas[numeroAleatorio] 
//vai fazer a busca de um indice aleatório na lista de resposta e 
//aparecerá a resposta na tela  ao invés de aparecer no console

}



//dados de entrada
//dados de saida    