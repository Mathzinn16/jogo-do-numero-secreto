let listaNumerosSorteados = []
let limiteDeNumeros = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function habilitarCampo(){
    document.querySelector('input').removeAttribute('disabled');
}

function mensagemInicial() {
exibirTextoTela('h1', 'Jogo do número secreto');
exibirTextoTela('p', `Escolha um número entre 1 e ${limiteDeNumeros}`);
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
     if (chute == numeroSecreto) {
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('input').setAttribute('disabled',true);
     } else {
        if (chute > numeroSecreto) {
            exibirTextoTela('p', 'O número secreto é menor');
        } else {
            exibirTextoTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
     }
}

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * limiteDeNumeros + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;
    console.log(listaNumerosSorteados);
    if(quantidadeElementosLista == limiteDeNumeros) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroAleatorio);
        return numeroAleatorio;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';  
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    habilitarCampo();
}