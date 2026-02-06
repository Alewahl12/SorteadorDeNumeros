//Funcao para sortear quantidade de numeros especificada ao clicar no botao e mostrar na tela e ativar o botao reiniciar
function sortear(){
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMin = parseInt(document.getElementById('de').value);
    let numeroMax = parseInt(document.getElementById('ate').value);
    let numerosSorteados = [];
    let numeroGerado;

    if (quantidadeNumeros > numeroMax ){

        exibirMensagem('A quantidade de números não pode ser maior que o número máximo!');
        return;
    }else if((numeroMax-numeroMin+1) < quantidadeNumeros){
        exibirMensagem('Intervalo de numeros invalido!');
        return;

    }else{
        for (let i = quantidadeNumeros; i>0; i--){
            numeroGerado = gerarNumeroAleatorio(numeroMax,numeroMin);
            while(numerosSorteados.includes(numeroGerado)){
                numeroGerado = gerarNumeroAleatorio(numeroMax,numeroMin);
            }
            numerosSorteados.push(numeroGerado);
        }
        exibirMensagem(`Números sorteados: ${numerosSorteados}`);
        ativarDesativarBotaoReiniciar('container__botao-desabilitado','container__botao');
    }
}

//Funcao para imprimir a resposta na tela ao clicar no botao  sortear
function exibirMensagem(mensagem){
    let mensagemNumerosSorteados = document.getElementById('resultado');
    mensagemNumerosSorteados.innerHTML = `<label class="texto__paragrafo">${mensagem}</label>`;
}

//Funcao para gerar numero aleatório e adicionar na lista de numerosSorteados se nao for repetido (se ainda nao tiver o numero na lista)
function gerarNumeroAleatorio(numMax, numMin){
    return parseInt(Math.random()*(numMax - numMin + 1)+numMin);
}

//Funcao para reiniciar e limpar valores nas caixas, limpar a lista de numeros sorteados e desativar o botao reiniciar
function reiniciar(){
    numerosSorteados = [];
    reiniciarTexto();
    ativarDesativarBotaoReiniciar('container__botao','container__botao-desabilitado');
}

//Funcao para ativar e desativar o botao reiniciar
function ativarDesativarBotaoReiniciar(classeAtual, classeNova){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.classList.remove(`${classeAtual}`);
    botaoReiniciar.classList.add(`${classeNova}`);

}

//Funcao para reiniciar os textos e campos ao clicar no botao reiniciar
function reiniciarTexto(){

    exibirMensagem('Números sorteados:  nenhum até agora');

    let quantidadeNumeros = document.getElementById('quantidade');
    quantidadeNumeros.value = '';

    let numeroMax = document.getElementById('ate');
    numeroMax.value = '';
    
    let numeroMin = document.getElementById('de');
    numeroMin.value = '';    
}
