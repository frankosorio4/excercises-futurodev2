//Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, negativo ou zero. Exiba os valores no console.log().

let number = 0;

signNumber(number);

function signNumber(n) {
    if (n < 0) {
        console.log(`${n} is a negative number.`);
    }
    else if (n == 0) {
        console.log(`The number is zero.`);
    }
    else {
        console.log(`${n} is a positive number.`);
    }
}