console.log('script-api.js')

const divExercises = document.getElementById('divExercises');

let listExercises =[];
let exerciseActual = 0;
let offset = 0;

let changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {
    exibirExercise();
    console.log(exerciseActual); 
    if (exerciseActual === 9){
        exerciseActual = 0;
        getExercises();
        return;
    }
    exerciseActual++;
    offset += 10;
}
)

function getExercises(){
    // fetch('https://api.api-ninjas.com/v1/exercises?type=stretching&offset=20'// to obtain more that 10
    fetch('https://api.api-ninjas.com/v1/exercises?type=stretching',{
        method: 'GET',
        headers: {'X-Api-Key': 'j1AKczm+K6sdLu/F1QUhEw==XyymCozQErXeuzGs'},
        contentType: 'application/json',
    })
    .then((response) => response.json())
    .then(dados => {
        listExercises = dados;
        exibirExercise()
        console.log(exerciseActual);
        exerciseActual++;
    })
    .catch(error => console.log(error))
}

getExercises()

function exibirExercise() {
    const nameExercise = document.getElementById('nameExercise');
    const difficultyExercise = document.getElementById('difficultyExercise');
    const descriptionExercise = document.getElementById('descriptionExercise');

    nameExercise.innerText = listExercises[exerciseActual].name;
    difficultyExercise.innerText = listExercises[exerciseActual].difficulty;
    descriptionExercise.innerText = listExercises[exerciseActual].instructions;
}
