let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    console.log(`Produto: ${produto.value}`);
    console.log(`Quantidade: ${quantidade}`);

    //Verificar se o produto selecionado é válido.
    if (!produto | produto.trim() == "") {
        alert("Selecione um produto válido.");
        return;
    }


    // Verificar se a quantidade inserida é válida.
    if (isNaN(quantidade) | quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);

    console.log(`Nome Produto: ${nomeProduto}`);
    console.log(`Valor Unitário: ${valorUnitario}`);

    let preco = quantidade * valorUnitario;

    console.log(`Preço: ${preco}`);

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
                           <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
                           </section>`;

    totalGeral += preco;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = ''; 
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}