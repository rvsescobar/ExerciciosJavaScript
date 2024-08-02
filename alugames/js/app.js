//Variável global para contabilizar os jogos alugados.
let jogosAlugados = 0;

//Método para exibir no console, quanto jogos estão alugados.
function exibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

//Método para alterar o status dos jogo com base no ID informado.
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    console.log(`id: ${id}`);
    console.log('Nome do Jogo:' + nomeJogo.textContent);

    //Verificar se a lista de classes CSS contém a classe informada.
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        //Adiciona uma confirmação antes de devolver o jogo.
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';

            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';

        jogosAlugados++;
    }

    exibirJogosAlugados();
}

//Inicializa a contagem considerando que os jogos já começam alugados.
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibirJogosAlugados();
});