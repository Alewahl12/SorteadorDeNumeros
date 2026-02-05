//Funcao para sortear quantidade de numeros especificada ao clicar no botao e mostrar na tela e ativar o botao reiniciar
function sortear(){
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMin = parseInt(document.getElementById('de').value);
    let numeroMax = parseInt(document.getElementById('ate').value);

    if (quantidadeNumeros > numeroMax){

        respostaBotaoSortear('A quantidade de números não pode ser maior que o número máximo!');
        
    }else{
        for (i = quantidadeNumeros;i>0;i--){
            gerarNumeroAleatorio(numeroMax,numeroMin);
        }
        respostaBotaoSortear(`Números sorteados: ${numerosSorteados}`);
        ativarDesativarBotaoReiniciar('container__botao-desabilitado','container__botao');
    }

}

//Funcao para imprimir a resposta na tela ao clicar no botao  sortear
function respostaBotaoSortear(mensagem){
    let mensagemNumerosSorteados = document.getElementById('resultado');
    mensagemNumerosSorteados.innerHTML = `${mensagem}`;
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

//Funcao para reiniciar e limpar valores nas caixas, limpar a lista de numeros sorteados e desativar o botao reiniciar
function reiniciar(){
    numerosSorteados = [];
    reiniciarTexto();
    ativarDesativarBotaoReiniciar('container__botao','container__botao-desabilitado');
}

//Funcao para ativar e desativar o botao reiniciar
function ativarDesativarBotaoReiniciar(atributoAtual, atributoNovo){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove(`${atributoAtual}`);
    botaoReiniciar.classList.add(`${atributoNovo}`);

}

//Funcao para reiniciar os textos e campos ao clicar no botao reiniciar
function reiniciarTexto(){
    let mensagemNumerosSorteados = document.getElementById('resultado');
    mensagemNumerosSorteados.innerHTML = 'Números sorteados:  nenhum até agora'

    let quantidadeNumeros = document.getElementById('quantidade');
    quantidadeNumeros.value = '';

    let numeroMax = document.getElementById('ate');
    numeroMax.value = '';
    
    let numeroMin = document.getElementById('de');
    numeroMin.value = '';    
}

let numerosSorteados = [];
