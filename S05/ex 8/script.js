// No arquivo JavaScript, selecione elementos HTML (por exemplo, o elemento que contém o nome do usuário) e atualize seu conteúdo dinamicamente usando o JavaScript.


let nome = document.getElementById('liNome');
let inputNome = document.getElementById('inputNome');
let idade = document.getElementById('liIdade');
let inputIdade = document.getElementById('inputIdade');
let nacionalidade = document.getElementById('liNacionalidade');
let profissao = document.getElementById('liProfissao');

function mudarNome(){
    nome.innerText = 'Nome: ' + inputNome.value;
    nome.style.background = 'lightgreen'
}

function mudarIdade(){
    idade.innerText = 'Idade: ' + inputIdade.value + ' anos';
    idade.style.background = 'lightgreen'
}

// function boasVindas(){
//     alert("Seja bem-vindo ao meu site.")
// }