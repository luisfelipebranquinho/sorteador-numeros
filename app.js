


function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (de < ate && quantidade <= (ate - de + 1)){
        sorteador(quantidade, de, ate, sorteados, numero);
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
            alterarBotaoStatusAtivado();
    } else {
        if (de > ate) {
            alert('O campo Do Numero precisa ser menor que o campo Até o numero');
        }
        if ( quantidade > (de - ate + 1)){
            alert('Você colocar uma Quantidade maior que o Intervalo de Número');
        }
    }

}

function alterarBotaoStatusAtivado(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}

function alterarBotaoStatusDesativar(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao')) {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

/*
function alterarBotaoStatus(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
*/

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarBotaoStatusDesativar();
}

function sorteador(quantidade, de, ate, sorteados, numero){
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

}