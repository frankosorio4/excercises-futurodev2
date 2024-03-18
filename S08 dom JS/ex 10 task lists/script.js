console.log("script.js");

let tarefasCreadas = [];

function adicionarTarefa() {
    let input = document.getElementById('inputTarefa');
    let divListaTarefas = document.getElementById('divListaTarefas');

    if (input.value === '') {
        alert('Digite uma tarefa para adicionar na lista.')
        return;
    }
    
    // creating the father element
    let divTarefa = document.createElement('div');
    divTarefa.classList = 'divTarefa';

    //adding the input task to a span
    let spanTarefa = document.createElement('span');
    // spanTarefa.append(document.createTextNode(input.value));
    spanTarefa.textContent =input.value;
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
        console.log('entro');
        divTarefa.classList.toggle("completed");
        //set or unset the attribute
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

    input.value = "";
    tarefasCreadas.push(divTarefa);
}

// notas CLASSLIST------------------------
//en vez de usar 
//elelment.setAttribute('class', 'name_class'); 
//usamos
//elelemnt.classList = 'name_class'
//que guarda los elelmentos generados en DOM en una lista, de alli se pueden modificar posteriormente.