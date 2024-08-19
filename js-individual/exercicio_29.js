function LocalizarMaior(ar) {
    let max = ar[0];
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }
    }

    return max;
}

let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max = LocalizarMaior(ar);
console.log("Maior número: ", max);