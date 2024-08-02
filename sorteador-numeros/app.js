//Método para alterar os status dos botões através do tratamento das classes de HTML.
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

//Método para obter um número aleatório.
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Método para sortear os números de acordo com os dados obtidos na página.
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById('resultado');

    console.log(`Quantidade: ${quantidade}`);
    console.log(`De: ${de}`);
    console.log(`Até: ${ate}`);

    //Verificar se as variáveis são números válidos.
    if (!Number.isInteger(quantidade) | !Number.isInteger(de) | !Number.isInteger(ate)) {
        resultado.innerHTML = '<label class="texto__paragrafo">"Quantidade",  "Do número"  e "Até o número" devem ser preeenchido. Verifique!</label>';
        return;
    }

    if (quantidade <= 0) {
        resultado.innerHTML = '<label class="texto__paragrafo">A quantidade de números sorteados deve ser maior que zero.</label>';
        return;
    }

    if (de >= ate) {
        resultado.innerHTML = '<label class="texto__paragrafo">Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!</label>';
        return;
    }

    if (quantidade > (ate - de + 1)) {
        resultado.innerHTML = 'Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!';
        return;
    }

    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        //Verificar se o número obtidos já se encontra dentro do array.
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    console.log(`Sorteados: ${sorteados}`);

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotao();
}

//Método para reiniciar a página.
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}