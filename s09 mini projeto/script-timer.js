console.log('script-timer.js');

let divMinutes = document.getElementById('divMinutes');
let divSeconds = document.getElementById('divSeconds');
// let divMs = document.getElementById('divMs');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let body = document.querySelector('body');
let titleTimer = document.getElementById('titleTimer');
let divExercises = document.getElementById('divExercises');

//to vary the duration of the intervals of time
let secondsSet = 10;//defaul 60 task
let minutesSet = 1;//default 25 task
let minutesSet2 = 1;//default 5 excercise
divMinutes.innerHTML = formatTime(minutesSet);

//default timer configuration
let interval;
let msCounter = 1000;//1000
let secondsCounter = secondsSet;
let minutesCounter = minutesSet;
let startInterval = true;// To allow start only start once the interval and avoid to start again without pause first
let currentSession = 'task-time';

function startTimer() {
    if (startInterval) {
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
        startInterval = false;
        interval = setInterval(updateTimer, 10);
    }
}

function updateTimer(){
    msCounter -= 10;
    if (msCounter === 0) {
        msCounter = 1000;
        secondsCounter--;
        if (secondsCounter != -1){
            divSeconds.innerHTML = formatTime(secondsCounter);
        }
        if (secondsCounter == -1 && minutesCounter == 0) {
            //validation switch schedule
            if(currentSession ==='task-time'){
                currentSession ='ecercise-time';
                divExercises.style.display = 'block';
                showExcercise();
                secondsCounter = secondsSet+1;//delay
                minutesCounter = minutesSet2;
                body.style.backgroundColor = 'rgb(134, 187, 216)';
                titleTimer.innerHTML = 'Excercise Timer';
                divMinutes.innerHTML = `${formatTime(minutesSet2)}`;
                divSeconds.innerHTML = '00';
            }else{
                currentSession = 'task-time';
                divExercises.style.display = 'none';
                secondsCounter = secondsSet+1;//delay
                minutesCounter = minutesSet;
                body.style.backgroundColor = 'rgb(246, 174, 45)';
                titleTimer.innerHTML = 'Task Timer';
                divMinutes.innerHTML = `${formatTime(minutesSet)}`;
                divSeconds.innerHTML = '00';
            }
            //secondsCounter--;
        }
    }
    if (secondsCounter === -1) {
        secondsCounter = secondsSet;
    }
    if (secondsCounter === secondsSet) {
        minutesCounter--;
        secondsCounter--;
        divMinutes.innerHTML = formatTime(minutesCounter);
        divSeconds.innerHTML = formatTime(secondsCounter);
    }
}

function resetTimer() {
    clearInterval(interval);
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    body.style.backgroundColor = 'rgb(246, 174, 45)';
    titleTimer.innerHTML = 'Task Timer';
    startInterval = true;
    //divTimer
    divMinutes.innerHTML = `${formatTime(minutesSet)}`;
    divSeconds.innerHTML = '00';
    //parameters
    msCounter = 1000;
    secondsCounter = secondsSet;
    minutesCounter = minutesSet;
}

function pauseTimer() {
    if (!startInterval) {
        clearInterval(interval);
        startInterval = true;
        startBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMs(time) {
    return time < 100 ? `0${time}`.padStart(3, "0") : time;
}


//---------------------------------------------------------------------
//--------------------- API -------------------------------------------
//---------------------------------------------------------------------

const nameExercise = document.getElementById('nameExercise');
const difficultyExercise = document.getElementById('difficultyExercise');
const descriptionExercise = document.getElementById('descriptionExercise');
let listExercises =[];
let exerciseActual = 0;// to go throught the array (index)
let offset = 0;//to new request
// fetch('https://api.api-ninjas.com/v1/exercises?type=stretching&offset=20'// to obtain the next list as a seacrh browser we vary the last number

function requestExercises(){
    let l ='https://api.api-ninjas.com/v1/exercises?type=stretching';
    fetch(l+`&offset=${offset}`,{
        method: 'GET',
        headers: {'X-Api-Key': 'j1AKczm+K6sdLu/F1QUhEw==XyymCozQErXeuzGs'},
        contentType: 'application/json',
    })
    .then((response) => response.json())
    .then(dados => {
        listExercises = dados;// in the array
        console.log(listExercises);
        //exerciseActual++;
    })
    .catch(error => console.log(error))
}

requestExercises();// when load page

function showExcercise(){
    showExcerciseDiv();
    console.log(exerciseActual); 
    if (exerciseActual === 9){
        exerciseActual = 0;
        getExercises();
        return;
    }
    exerciseActual++;
    offset += 10;
}

function showExcerciseDiv() {
    nameExercise.innerText = listExercises[exerciseActual].name;
    difficultyExercise.innerText = listExercises[exerciseActual].difficulty;
    descriptionExercise.innerText = listExercises[exerciseActual].instructions;
}

