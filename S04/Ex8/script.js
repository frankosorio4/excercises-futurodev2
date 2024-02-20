// Implemente uma função que determine se um número é par ou ímpar.

let numero = 8;

parImpar(numero);

function parImpar(n) {
    if (n % 2 === 0) {
        console.log(`${n} é par.`);
    }
    else {
        console.log(`${n} é ímpar.`);
    }
}