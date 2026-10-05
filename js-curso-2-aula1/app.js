
let limiteDeNumeros = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let vidas = 6;

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
            exibirTextoTela('p', `O número secreto é menor! Vidas Restantes (${vidas - 1}) `);
        } else {
            exibirTextoTela('p', `O número secreto é maior! Vidas Restantes (${vidas - 1})`);
        }
        tentativas++;
        vidas--;
        limparCampo();
     }
     if (vidas == 0) {
        exibirTextoTela('h1', 'Você Perdeu!');
        exibirTextoTela('p', `Reinicie e tente novamente! O número era ${numeroSecreto}!` )
        document.querySelector('input').setAttribute('disabled',true);
        document.getElementById('chutar').setAttribute('disabled',true);
        document.getElementById('reiniciar').removeAttribute('disabled');
     }
}


function gerarNumeroAleatorio() {
    let numeroSecreto = parseInt(Math.random() * limiteDeNumeros + 1);
    return numeroSecreto;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';  
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    vidas = 6;
    mensagemInicial();
    document.getElementById('chutar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled',true);
    habilitarCampo();
}