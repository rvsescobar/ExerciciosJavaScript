function validarString(texto) {
    return texto === "" ? "String vazia" : "String não vazia";
}

console.log(validarString("Aqui há um texto?"));
console.log(validarString(""));
//Espaços são entendidos como caracteres.
console.log(validarString(" "));