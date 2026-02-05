//Funcao para sortear quantidade de numeros especificada ao clicar no botao e mostrar na tela
function sortear(){
    let numeroMax = parseInt(document.getElementById('ate').value);
    let numeroMin = parseInt(document.getElementById('de').value);
    let quantidadeNumeros = document.getElementById('quantidade').value;
    let mensagemNumerosSorteados
    if (quantidadeNumeros > numeroMax){

        mensagemNumerosSorteados = document.getElementById('resultado');
        mensagemNumerosSorteados.innerHTML = 'A quantidade de números não pode ser maior que o número máximo!';
        
    }else{
        for (i = quantidadeNumeros;i>0;i--){
            gerarNumeroAleatorio(numeroMax,numeroMin);
        }
        mensagemNumerosSorteados = document.getElementById('resultado');
        mensagemNumerosSorteados.innerHTML = `Números sorteados: ${numerosSorteados}`;

        let botaoReiniciar = document.getElementById('btn-reiniciar');
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    }

}

//Funcao para gerar numero aleatório e adicionar na lista de numerosSorteados se nao for repetido (se ainda nao tiver o numero na lista)
function gerarNumeroAleatorio(numMax, numMin){
    let numeroEscolhido = parseInt(Math.random()*(numMax - numMin + 1)+numMin);
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(numMax,numMin);
    } else {
        numerosSorteados.push(numeroEscolhido);
    }
}

function reiniciar(){
    numerosSorteados = [];

    let mensagemNumerosSorteados = document.getElementById('resultado');
    mensagemNumerosSorteados.innerHTML = 'Números sorteados:  nenhum até agora'

    let quantidadeNumeros = document.getElementById('quantidade');
    quantidadeNumeros.value = '';

    let numeroMax = document.getElementById('ate');
    numeroMax.value = '';
    
    let numeroMin = document.getElementById('de');
    numeroMin.value = '';    
    
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}

let numerosSorteados = [];
