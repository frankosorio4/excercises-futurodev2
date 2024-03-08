console.log("script.js")

const frutas = [
    { fruit: "Maça", price: 1.25, codigo: "F001" },
    { fruit: "Banana", price: 0.75, codigo: "F002" },
    { fruit: "Laranja", price: 1.00, codigo: "F003" },
    { fruit: "Pera", price: 1.50, codigo: "F004" },
    { fruit: "Mango", price: 2.99, codigo: "F005" },
    { fruit: "Abacaxi", price: 3.50, codigo: "F006" },
    { fruit: "Morango", price: 4.25, codigo: "F007" },
    { fruit: "Blueberry", price: 5.75, codigo: "F008" },
    { fruit: "Melancia", price: 4.99, codigo: "F009" },
    { fruit: "Kiwi", price: 2.75, codigo: "F010" },
];

let itemInput = document.getElementById("inputNameCod");
let divResult = document.getElementById("divResult");

function buscarItem(event){
    event.preventDefault();
    let digitado = itemInput.value;
    console.log(digitado);

    if (digitado===''){
        return
    };

    let result = frutas.findIndex(
        fruta => (
            fruta.fruit.toLowerCase() === digitado.toLowerCase()
            ||
            fruta.codigo.toLowerCase() === digitado.toLowerCase()
        )
    );
    
    if (result === -1){
        divResult.textContent = 'O produto não existe.';
        divResult.style.color = 'red';
        divResult.style.fontWeight = '600';
    }
    else{
        let item = frutas[result];
        let f = item.fruit
        let p =item.price
        divResult.textContent = f + ' = ' + p + '$';
        divResult.style.color = 'blue';
        divResult.style.fontWeight = '600';
    }

}