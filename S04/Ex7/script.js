//Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

let hora = 19;

cumprimentos(hora);

function cumprimentos(h){
    if (h>=1 && h<12){
        console.log("Bom Dia.");
    }
    else if (h>=12 && h<19){
        console.log("Boa Tarde.");
    }
    else {
        console.log("Boa Noite.");
    }
}