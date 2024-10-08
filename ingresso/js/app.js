//Método para comprar ingresso do tipo pista com base da quantidade informada.
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

//Método para comprar ingresso do tipo cadeira superior com base da quantidade informada.
function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

//Método para comprar ingresso do tipo cadeira inferior com base da quantidade informada.
function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

//Método para comprar ingresso.
function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    console.log(`Tipo ingresso: ${tipo.value}`);
    console.log(`Quantidade: ${qtd.value}`);

    //Verificar se a quantidade é um número positivo.
    if (isNaN(qtd) | qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if (tipo.value == 'pista') {
        console.log('Selecionado tipo pista');
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        console.log('Selecionado tipo superior');
        comprarSuperior(qtd);
    } else {
        console.log('Selecionado tipo inferior');
        comprarInferior(qtd);
    }

    document.getElementById('qtd').value = '';
}