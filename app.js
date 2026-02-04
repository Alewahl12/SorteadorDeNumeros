//Funcao para sortear quantidade de numeros especificada ao clicar no botao e mostrar na tela
function sortear(){
    let quantidadeNumeros = document.getElementById('quantidade').value;
    
    for (i = quantidadeNumeros;i>0;i--){
        gerarNumeroAleatorio();
    }
    let mensagemNumerosSorteados = document.getElementById('resultado');
    mensagemNumerosSorteados.innerHTML = `Números sorteados: ${numerosSorteados}`;
    numerosSorteados = [];
}

//Funcao para gerar numero aleatório e adicionar na lista de numerosSorteados se nao for repetido (se ainda nao tiver o numero na lista)
function gerarNumeroAleatorio(){
    let numeroMax = document.getElementById('ate').value;
    let numeroMin = document.getElementById('de').value;
    let numeroEscolhido = parseInt(Math.random()*numeroMax)+1;
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(numeroMin,numeroMax);
    } else {
        numerosSorteados.push(numeroEscolhido);
    }
}

let numerosSorteados = [];
