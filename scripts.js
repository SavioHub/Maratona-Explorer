// teste = true
// const livro = {
//     nome: "do mil ao milhao",
//     id: 22
// }

// function testeFunction(id, nome){
//     console.log("Testando essa bagaça")
//     console.log('o id do meu livro = '+id,' e o nome dele = ' +nome)
// }

// if (teste == true)
// {
//     testeFunction(livro.id, livro.nome)
// }

// function soma(a,b){
//     return a+b;
// }

// const multiplica = soma(20, 20) * 3;

// console.log(multiplica);
// console.log(soma(30,30)*2);

//variaveis
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

//gerar numeros aleattorios
const totalResposta = respostas.length; //total de resposta no array
const numeroAleatorio = Math.floor(Math.random() * totalResposta)
//Math.floor(Math.random()) é arendondamento por piso, sempre será zero
//Math.floor(Math.random() * 19) o numero aleatório vai multiplicar por um valor, no caso o 19, com isso vai gerar um resultado inteiro

console.log(numeroAleatorio)


//dados de entrada
//dados de saida