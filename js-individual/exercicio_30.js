function somarDigitos(n) {
    let s = n.toString(); 
    let soma = 0;
    for (var char of s) {
        let digito = parseInt(char);
        soma += digito;
    }
    
    return soma;
}

let resultado = somarDigitos(1235231);
console.log("Soma de todos os dígitos: ", resultado);