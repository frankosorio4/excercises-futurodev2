console.log('script-timer.js');

//TTML elements
let body = document.querySelector('body');
let divInfo = document.getElementById('divInfo');
let titleTimer = document.getElementById('titleTimer');
let divMinutes = document.getElementById('divMinutes');
let divSeconds = document.getElementById('divSeconds');
let divExercises = document.getElementById('divExercises');
// buttons
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let endExerciseBtn = document.getElementById('endExerciseBtn');
let resetBtn = document.getElementById('resetBtn');

//SETTING the interval duration
let secondsSet = 5;//defaul 60 sec work-time
let minutesSet = 1;//default 25 min work-time
let minutesSet2 = 1;//default 5 min excercise-time
divMinutes.innerHTML = formatTime(minutesSet);

//SETTING timer configuration (parameters)
let interval;
let msCounter = 1000;//1000
let secondsCounter = secondsSet;
let minutesCounter = minutesSet;
let startInterval = true;// To disable the start btn, (avoid to start interval without delete first the previous)
let currentSession = 'work-time';

function startTimer() {
    if (startInterval) {
        startBtn.style.display = 'none';
        divInfo.style.display = 'none';
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
        //validation btn end excercise (pause when ending exercise-time)
        if (minutesCounter == 0 && secondsCounter == 0 && currentSession === 'exercise-time'){
        // if (secondsCounter == 0 && currentSession === 'exercise-time'){
            pauseTimer();
            pauseBtn.style.display = 'none';    
            startBtn.style.display = 'none';
            resetBtn.style.display = 'none';
        }
        if (secondsCounter == -1 && minutesCounter == 0) {
            //validation (switch schedule)
            if(currentSession ==='work-time'){
                currentSession ='exercise-time';
                divExercises.style.display = 'block';
                endExerciseBtn.style.display = 'block';
                showExcercise();
                secondsCounter = secondsSet+1;//delay
                minutesCounter = minutesSet2;
                body.style.backgroundColor = 'rgb(67, 213, 218)';
                titleTimer.innerHTML = 'Exercise Time';
                divMinutes.innerHTML = `${formatTime(minutesSet2)}`;
                divSeconds.innerHTML = '00';
            }else{
                currentSession = 'work-time';
                divExercises.style.display = 'none';
                endExerciseBtn.style.display = 'none';
                secondsCounter = secondsSet+1;//delay
                minutesCounter = minutesSet;
                body.style.backgroundColor = 'rgb(71, 204, 142)';
                titleTimer.innerHTML = 'Work Time';
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
    //set default (html elements)
    divInfo.style.display = 'block';
    startBtn.style.display = 'block';
    resetBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    divExercises.style.display = 'none';
    endExerciseBtn.style.display = 'none';
    body.style.backgroundColor = 'rgb(71, 204, 142)';
    titleTimer.innerHTML = 'Work Time';
    divMinutes.innerHTML = `${formatTime(minutesSet)}`;
    divSeconds.innerHTML = '00';
    //set default (script parameters)
    startInterval = true;// to able startTimer()
    msCounter = 1000;
    secondsCounter = secondsSet;
    minutesCounter = minutesSet;
    currentSession = 'work-time';
}

function pauseTimer() {
    if (!startInterval) {
        clearInterval(interval);
        startInterval = true;// to able startTimer()
        startBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    }
}

function endEcercise(){
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'block';   
    resetTimer();
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
let listExercises =[];// to sae the request
let excercisesTempString;//variable to read what are in LS
let data;
let actualExercise = 0;// to go throught the array (index)
let actualExerciseLS = {number: '0'};// to save the number of the actual exercise in LS
let offset = 0;//to new request
// fetch('https://api.api-ninjas.com/v1/exercises?type=stretching&offset=20'// to obtain the next list as a seacrh browser we vary the last number

function requestExercises(){
    let exercisePerformedLs = localStorage.getItem('actualExerciseLS');
    console.log('exercisePerformed', exercisePerformedLs);
    if (!exercisePerformedLs){//enter if there is no variable in LS
        console.log('entering 1st cicle');
        //if(actualExerciseLS.number === '0'){
            requestApi()
        //}
        return;
    }
    actualExerciseLS = JSON.parse(exercisePerformedLs);
    if (actualExerciseLS < offset+10){
        //to do

    }
}

requestExercises();// when load page

function requestApi(){
    let l ='https://api.api-ninjas.com/v1/exercises?type=stretching';
            fetch(l+`&offset=${offset}`,{
                method: 'GET',
                headers: {'X-Api-Key': 'j1AKczm+K6sdLu/F1QUhEw==XyymCozQErXeuzGs'},
                contentType: 'application/json',
            })
            .then((response) => response.json())
            .then(dataJsObj => {
                listExercises = dataJsObj;// saving request in an array
                excercisesTempString = localStorage.getItem('listExercisesLS');
                data = [];//temp variable to save the request
                if (excercisesTempString){//if there are something
                    // data = JSON.parse(excercisesTempString);
                    data = excercisesTempString;
                };
                data.push(dataJsObj);
                if (actualExercise === 0){
                    localStorage.setItem('listExercisesLS',JSON.stringify(data));
                };
                console.log(listExercises);
            })
            .catch(error => console.log(error))
};

function showExcercise(){
    showExcerciseDiv();
    console.log('excercise number',actualExercise); 
    if (actualExercise === 9){
        actualExercise = 0;
        localStorage.setItem('listExercisesLS',JSON.stringify(data));
        //to do, validation when the function call again getExercises()
        //may be saving the number 'actualExercise' in LS and excercise
        // validate with this two elements
        getExercises();
        return;
    }
    actualExercise++;
    offset += 10;
}

function showExcerciseDiv() {
    actualExerciseLS.number = actualExercise;
    localStorage.setItem('actualExerciseLS',JSON.stringify(actualExerciseLS));
    console.log(localStorage.getItem('actualExerciseLS'));
    nameExercise.innerText = listExercises[actualExercise].name;
    difficultyExercise.innerText = listExercises[actualExercise].difficulty;
    descriptionExercise.innerText = listExercises[actualExercise].instructions;
}