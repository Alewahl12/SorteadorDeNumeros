//Funcao para sortear quantidade de numeros especificada ao clicar no botao e mostrar na tela
function sortear(){
    let quantidadeNumeros = document.getElementById('quantidade').value;
    
    for (i = quantidadeNumeros;i>0;i--){
        gerarNumeroAleatorio();
    }
    let mensagemNumerosSorteados = document.getElementById('resultado');
    mensagemNumerosSorteados.innerHTML = `Números sorteados: ${numerosSorteados}`;

    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');

}

//Funcao para gerar numero aleatório e adicionar na lista de numerosSorteados se nao for repetido (se ainda nao tiver o numero na lista)
function gerarNumeroAleatorio(){
    let numeroMax = parseInt(document.getElementById('ate').value);
    let numeroMin = parseInt(document.getElementById('de').value);
    let numeroEscolhido = parseInt(Math.random()*(numeroMax - numeroMin + 1)+numeroMin);
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(numeroMin,numeroMax);
    } else {
        numerosSorteados.push(numeroEscolhido);
    }
}

function reiniciar(){

    
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');

    let mensagemNumerosSorteados = document.getElementById('resultado');
    mensagemNumerosSorteados.innerHTML = 'Números sorteados:  nenhum até agora'
    numerosSorteados = [];

    let quantidadeNumeros = document.getElementById('quantidade');
    quantidadeNumeros.value = '';

    let numeroMax = document.getElementById('ate');
    numeroMax.value = '';
    
    let numeroMin = document.getElementById('de');
    numeroMin.value = '';

}

let numerosSorteados = [];
