# _Exercícios em JavaScript_

Este repositório consiste em alguns exercícios básicos de lógica, utilizando a linguagem JavaScript. Praticamos aqui a lógica de programação, incluindo conceitos como variáveis, condicionais (if-else), loops (while) e interações com o usuário (alert, prompt). Aqui encontrará **24 exercícios** simples, que possuem o intuito de exercita a lógica e fundamentos de programação, além de **quatro projetos** utilizando um interação com o usuário mais elaborada.

### 24 exercícios básicos

1) Crie um programa que utilize o `console.log` para exibir uma mensagem de boas-vindas.

```js
console.log('Boas vindas');
```

2) Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

```js
let nome = 'Raphael Escobar';
console.log(`Olá, ${nome}!`);
```

3) Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o `alert` para exibir a mensagem "Olá, [seu nome]!".

```js
let nome = 'Raphael Escobar';
alert(`Olá, ${nome}!`);
```

4) Utilize o `prompt` e faça a seguinte pergunta: `Qual a linguagem de programação que você mais gosta?`. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

```js
let linguagemPreferida = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);
```

5) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

```js
let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
```

6) Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

```js
let valor1 = 10;
let valor2 = 8;
let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
```

7)  Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

```js 
let idade = prompt('Digite a sua idade:');
if (idade > 17) {
    console.log('Você é maior de idade.');
} 
else {
    console.log('Você é menor de idade.');
}
```

8) Crie uma variável "numero" e peça um valor com `prompt` verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

```js
var numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    console.log("O número é positivo.");
} 
else if (numero < 0) {
    console.log("O número é negativo.");
}
else {
    console.log("O número é zero.");
}
```

9) Use um loop while para imprimir os números de 1 a 10 no console.

```js
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}
```

10) Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

```js
//Substitua pelo valor da nota que deseja testar.
let nota = 8;

if (nota >= 7) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}
```

11) Use o `Math.ramdon` para gerar qualquer número aleatório e exiba esse número no console.

```js 
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
```

12) Use o `Math.ramdon` para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

```js
let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);
```


13) Use o `Math.ramdon` para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

```js
let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);
```

14) Implemente uma função que verifique se uma pessoa é maior de idade.

```js
function verificarIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(verificarIdade(18));
```

15) Desenvolva uma função que valide se uma string é vazia ou não.

```js
function validarString(texto) {
    return texto === "" ? "String vazia" : "String não vazia";
}

console.log(validarString("Aqui há um texto?"));
console.log(validarString(""));
//Espaços são entendidos como caracteres.
console.log(validarString(" "));
```

16) Crie uma função que determine se um ano é bissexto

```js
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } 
    else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2025));
```

17) Implemente uma função que calcule a média de dois números, interrompendo a: execução se algum dos números não for válido.

```js
function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Um dos números não é válido.";
    }
    return (num1 + num2) / 2;
}

console.log(calcularMedia(8, 5));
```

18) Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

```js
function obterTamanhoArray(arr) {
    return arr.length;
}

const minhaLista = [1,2,3,4,5,6,7,8,9,10];
console.log(obterTamanhoArray(minhaLista));
```

19) Crie um array e utilize a função includes para verificar se um elemento específico está presente.

```js
const meuArray = [10, 20, 30, 40, 50];
console.log("O array contém o número 30?", meuArray.includes(30));
```

20) Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

```js
//Função que verifica se um elemento está presente no array.
function verificarElementoNoArray(arr, elemento) {
    return arr.includes(elemento);
}

const meuArray = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

//Utilizando a função para verificar a presença do elemento no array.
const elementoEstaPresente = verificarElementoNoArray(meuArray, elementoProcurado);

//Exibindo o resultado.
if (elementoEstaPresente) {
    console.log(`O elemento ${elementoProcurado} está presente no array.`);
}
else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`);
}
```

21) Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

```js
const palavras = ["maçã", "banana", "laranja", "uva"];
console.log("A palavra 'banana' está no array?", palavras.includes("banana"));
```

22) Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

```js
//Função que verifica se um objeto está presente no array.
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

//Array de objetos representando alunos.
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

//Objeto que queremos verificar se está presente no array.
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

//Utilizando a função para verificar a presença do objeto no array.
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

//Exibindo o resultado.
if (objetoEstaPresente) {
    console.log('O aluno está presente no array.');
} 
else {
    console.log('O aluno não está presente no array.');
}
```

23) Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

```js
function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } 
        else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);
```

24) Crie uma função, que dado um número de um a dez, a função gere a tabuada desse número.

```js
function tabuada() {
    let numero = prompt('Informe um número de 1 a 10 para fazermos a tabuada.');

    console.log(`Tabuada de ${numero}`);
    let c = 1;
    while (c <= 10) {
        console.log(`${n} x ${c} = ${n * c}`;
        c++;
    }
}

tabuada();
```

_**Você pode encontrar no diretório [js-individual] todos os exercícios separadamente**_

### Quatro projetos

--------------------------------------------------------------------------
#### Amigo Secreto

> A empresa a qual você trabalha, quer fazer um site para fazer o sorteo de amigo secreto de forma mais automática. A premissa é a seguinte: um usuário vai informar todos os funcionários que irão participar da brincadeira, e depois o próprio sistema irá sortear quem tirou quem.

```sh
Solução dentro do diretório [amigo-secreto]
```
--------------------------------------------------------------------------
#### Carrinho de Compras

> Uma empresa tem um lista de produtos, e esses produtos já tem seu preço determinado (tudo junto), sabendo disso, você deve desenvolver que dado um produto selecionado, e a quantidade informada, essa possível compra deve ir para o carrinho, até o usuário finalizar a sua compra.

```sh
Solução dentro do diretório [carrinho-compras]
```
--------------------------------------------------------------------------
#### Ingresso

> Uma empresa que vende ingressos de show, precisa desenvolver uma inteligência para não permitir que a quantidade de ingresso disponíveis seja vendida além da conta. Não esquecendo que a diferencça nos tipos de ingressos.

```sh
Solução dentro do diretório [ingresso]
```
--------------------------------------------------------------------------
#### Sorteador de Números

> O objeto desse site é sortear uma quantidade de números aleatoriamente dado o intervalo. Após o sorteo, o site exibe os números sorteados.

```sh
Solução dentro do diretório [sorteador-numeros]
```
--------------------------------------------------------------------------