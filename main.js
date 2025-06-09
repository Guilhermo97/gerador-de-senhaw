document.querySelector('.parametro-senha_botao');
const numeroSenha = document.querySelector('.parametro-senha_texto');
numeroSenha.textContent = 5;
let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelector('.parametro-senha_botao');
botoes[0].onclick = diminuirTamanho;

console.log(botoes);

function diminuirTamanho(){
    tamanhoSenha = tamanhoSenha -1;
    numeroSenha.textContent = tamanhoSenha
}