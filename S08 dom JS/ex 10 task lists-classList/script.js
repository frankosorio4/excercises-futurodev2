console.log("script.js");

let tarefasCreadasLocalSt = [];

function adicionarTarefa() {
    let input = document.getElementById('inputTarefa');
    let divListaTarefas = document.getElementById('divListaTarefas');

    if (input.value === '') {
        alert('Digite uma tarefa para adicionar na lista.')
        return;
    }
    
    // creating the father element
    let divTarefa = document.createElement('div');
    divTarefa.setAttribute('class','divTarefa');
    //spanTarefa.classList('divTarefa')

    //adding the input task to a span
    let spanTarefa = document.createElement('span');
    // spanTarefa.append(document.createTextNode(input.value));
    spanTarefa.textContent =input.value.trim();
    // spanTarefa.setAttribute('class', 'spanTarefa');
    spanTarefa.classList = 'spanTarefa';
    divTarefa.appendChild(spanTarefa);

    //creating buttons
    let divBotoes = document.createElement('div');
    let botaoConcluir = document.createElement('button');
    let botaoRemover = document.createElement('button');

    //setting the div for buttons
    divBotoes.classList = 'divBotoes';

    //setting attributes of buttons
    botaoConcluir.classList = 'btn';
    botaoConcluir.textContent ='Concluir';
    botaoConcluir.style.backgroundColor = 'green';
    botaoConcluir.style.color = 'white';
    botaoConcluir.onclick = function (){
        divTarefa.classList.toggle("completed");
        //set the atribute or unset the attribute if it is already set
    }
    divBotoes.appendChild(botaoConcluir);

    botaoRemover.setAttribute('class', 'btn');
    botaoRemover.append(document.createTextNode('Remover'));
    botaoRemover.style.backgroundColor = 'red';
    botaoRemover.style.color = 'white';
    botaoRemover.onclick = function (){
        let text = 'Deseja remover a tarefa?'
        if (confirm(text) == true){
            divTarefa.remove()
        }
    }
    divBotoes.appendChild(botaoRemover);
    //saving div buttons inside div task
    divTarefa.appendChild(divBotoes);
    //console.log(divBotoes);

    //settting attributes od div task an append to HTML
    divTarefa.classList = 'divTarefa';
    divListaTarefas.appendChild(divTarefa);
    //console.log(divTarefa);

    // for local store
    // let tempTask = {
    //     task : input.value,
    //     stage : 'new'
    // };

    input.value = "";
    //tarefasCreadasLocalSt.push(tempTask);
    //localStorage.setItem('tarefasCreadas', JSON.stringify(tarefasCreadasLocalSt));
}

// ------------notas CLASSLIST------------------------
//Para establecer una nueva clase a un elemento usamos
//element.setAttribute('class', 'name_class'); 
//ó directamente
//elelemnt.classList = 'name_class'
//este ultimo comando accesa directamenete a DOMTokenList (the list of CSS classes associated with an HTML element) de la pagina y adjunta esa nueva classe al elemento seleccionado.
// hay 3 metodos que se aplican junto a classList
//element.classList.add()
//element.classList.remove()
//element.classList.toggle()

//https://medium.com/@shivani.007/classlist-in-javascript-b73cfc598e70
