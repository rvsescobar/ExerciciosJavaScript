function juntarArrays(ar1, ar2) {
    let ar = [];
    for (let el of ar1) {
        ar.push(el);
    }

    for (let el of ar2) {
        ar.push(el);
    }

    return ar;
}

let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
let ar = juntarArrays(ar1, ar2);
console.log(ar);