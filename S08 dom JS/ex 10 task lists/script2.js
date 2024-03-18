console.log('script2');

function adicionarTarefa(){
    let input = document.getElementById('inputTarefa');
    let divTarefa = document.createElement('div');
    
    divTarefa.textContent = input.value;
    
    let completeButton = document.createElement("button");
    completeButton.classList = 'btn';
    completeButton.textContent = "Concluir";
    completeButton.style.backgroundColor = 'red';
    completeButton.onclick= function(){
        divTarefa.classList.toggle('completed')
    }
    divTarefa.appendChild(completeButton)
    
    
    let divListaTarefas = document.getElementById('divListaTarefas');
    console.log('entro');
    divTarefa.classList = 'divTarefa';
    divListaTarefas.appendChild(divTarefa);

}