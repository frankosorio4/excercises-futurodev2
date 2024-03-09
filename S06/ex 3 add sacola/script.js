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
let btnConsultar = document.getElementById("btnConsultar");
let btnLimpar = document.getElementById("btnLimpar");
let divResult = document.getElementById("divResult");
let btnSacola = document.getElementById("btnSacola");
let tablaSacola = document.querySelector("#tablaSacola tbody");
//let tablaSacola = document.getElementById("tablaSacola");

let itemSacola = '';// VARIABLE para guardar item generado en buscarItem()
let sacola = [] ;// array para guardar objetos de la sacola

function limpar(){
    //event.preventDefault();
    // accesar y modificar atributo VALUE  de la input
    itemInput.value = '';
    // limpar a divResult
    divResult.textContent = '';
    // borrar variable temporal para sacola
    itemSacola = '';
}

function buscarItem(event){
    event.preventDefault();
    itemSacola = '';
    let resultBusqueda = [];
    let digitado = itemInput.value;
    console.log(digitado);

    if (digitado===''){
        divResult.textContent = '';
        divResult.style.backgroundColor = 'white';
        return
    };

    resultBusqueda = frutas.findIndex(
        fruta => (
            fruta.fruit.toLowerCase() === digitado.toLowerCase()
            ||
            fruta.codigo.toLowerCase() === digitado.toLowerCase()
        )
    );
    
    if (resultBusqueda === -1){
        divResult.textContent = 'O produto não existe.';
        divResult.style.color = 'red';
        divResult.style.fontWeight = '600';
    }
    else{
        let item = frutas[resultBusqueda];
        let f = item.fruit
        let p =item.price
        divResult.textContent = f + ' = ' + p + '$';
        divResult.style.color = 'blue';
        divResult.style.fontWeight = '600';
        itemSacola = item;
    }
}

function addSacola(){
    //console.log(itemSacola != '');
    if (itemSacola != ''){
        sacola.push(itemSacola);
        console.log('sacola',sacola);
        addRowToTabla();
        //itemSacola = '';
    };
}

function addRowToTabla(){
    if (sacola.length > 0){
        sacola.forEach((item) => {
            // Create a table row
            const tableRow = document.createElement("tr"); 
          
            // Create data cells for each property and set content
            const fruitCell = document.createElement("td");
            fruitCell.textContent = item.fruit;
            tableRow.appendChild(fruitCell);
          
            const priceCell = document.createElement("td");
            // Add dollar sign for formatting
            priceCell.textContent = `$${item.price}`; 
            tableRow.appendChild(priceCell);
          
            // Append the table row to the table body
            tablaSacola.appendChild(tableRow);
        });
    }
}
