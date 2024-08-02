//Variável global para guardar um array de amigo informado.
let amigos = [];

//Método para adicionar os amigos.
function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    console.log(`Nome do amigo: ${amigo.value}`);
    console.log(`Lista: ${lista}`);
    
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent += ', ' + amigo.value;
    }

    amigo.value = '';
}

//Método para embaralhar a lista informada.
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//Método para fazer o sorteo dos amigos ocultos.
function sortear() {
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos!');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML += amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

//Método para reiniciar todo o processo.
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}