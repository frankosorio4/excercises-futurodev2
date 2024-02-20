//Use um switch para exibir mensagens diferentes com base em uma condição.

let numero = 3;

numeroDia(numero);

function numeroDia(n) {
    switch (n) {
        case 1:
            console.log("O dia é Segunda");
            break;
        case 2:
            console.log("O dia é Terça");
            break;
        case 3:
            console.log("O dia é Quarta");
            break;
        case 4:
            console.log("O dia é Quinta");
            break;
        case 5:
            console.log("O dia é Sexta");
            break;
        case 6:
            console.log("O dia é Sabado");
            break;
        case 7:
            console.log("O dia é Domingo");
            break;
    }
}