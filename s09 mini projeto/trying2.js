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
let secondsSet = 10;//defaul 60. Range 1-60 sec work-time
let minutesSet = 1;//default 25. Range 1-60 min work-time
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

function updateTimer() {
    msCounter -= 10;
    if (msCounter === 0) {
        msCounter = 1000;
        secondsCounter--;
        if (secondsCounter != -1) {
            divSeconds.innerHTML = formatTime(secondsCounter);
        }
        //validation btn end excercise (pause when ending exercise-time)
        if (minutesCounter == 0 && secondsCounter == 0 && currentSession === 'exercise-time') {
            // if (secondsCounter == 0 && currentSession === 'exercise-time'){
            pauseTimer();
            pauseBtn.style.display = 'none';
            startBtn.style.display = 'none';
            resetBtn.style.display = 'none';
            endExerciseBtn.style.display = 'block';
        }
        if (secondsCounter == -1 && minutesCounter == 0) {
            //validation (switch schedule)
            if (currentSession === 'work-time') {
                currentSession = 'exercise-time';
                divExercises.style.display = 'block';
                //endExerciseBtn.style.display = 'block';
                showExcercise();
                secondsCounter = secondsSet + 1;//delay
                minutesCounter = minutesSet2;
                body.style.backgroundColor = 'rgb(67, 213, 218)';
                titleTimer.innerHTML = 'Exercise Time';
                divMinutes.innerHTML = `${formatTime(minutesSet2)}`;
                divSeconds.innerHTML = '00';
            } else {
                currentSession = 'work-time';
                divExercises.style.display = 'none';
                endExerciseBtn.style.display = 'none';
                secondsCounter = secondsSet + 1;//delay
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

function endEcercise() {
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'block';
    if (actualExercise === 9) {
        //clean LS
        localStorage.clear(); console.log('local store cleared');
        //updating parameters js and LS
        actualExercise = 0;
        actualExerciseLS = { number: '0' };
        localStorage.setItem('actualExerciseLS', JSON.stringify(actualExerciseLS));
        offset += 10;
        offsetLS.number = offset;
        console.log('offset', offset);
        localStorage.setItem('offsetLS', JSON.stringify(offsetLS));
        console.log('offset LS', localStorage.getItem('offsetLS'));
        //making new request
        requestExercises();
        resetTimer();
        return;
    }
    actualExercise++;
    actualExerciseLS.number =actualExercise;
    localStorage.setItem('actualExerciseLS', JSON.stringify(actualExerciseLS));
    resetTimer();
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMs(time) {
    return time < 100 ? `0${time}`.padStart(3, "0") : time;
}


//-----------------------------------------------------------------------------
//--------------------- REQUEST API -------------------------------------------
//-----------------------------------------------------------------------------

const nameExercise = document.getElementById('nameExercise');
const difficultyExercise = document.getElementById('difficultyExercise');
const descriptionExercise = document.getElementById('descriptionExercise');
let listExercises = [];// to sae the request
let excercisesTempString;//variable to read what are in LS
// let data;
let actualExercise = 0;// to go throught the array (index)
let actualExerciseLS = { number: '0' };// to save actual exercise number in LS
let offset = 0;//to count the request. it begins in 0 (0,10,20,30,...),(offset += 10)
let offsetLS = { number: '0' };// saving the offset value in LS
// fetch('https://api.api-ninjas.com/v1/exercises?type=stretching&offset=10'// to obtain the next list, every list 10 items 

function requestExercises() {
    let exercisePerformedLS = localStorage.getItem('actualExerciseLS');
    console.log('1-0 stage, OBTAINIG LS', exercisePerformedLS);
    //1-1 stage, 1st run. anything in LS
    if (!exercisePerformedLS) {
        console.log('1-1 request, 1st run. anything in LS');//delete
        if (offset === 150){//need improve
            offset =0;
        };
        requestApi();
        return;
    }
    //1-2 stage, data in LS, after other cycles
    if (JSON.parse(exercisePerformedLS).number == 0) {
        //obtainig value offset of LS
        console.log('1-2 request, data in LS');
        if (localStorage.getItem('offsetLS')) {
            offsetLS = JSON.parse(localStorage.getItem('offsetLS'));
            offset = offsetLS.number;
            console.log('offset', offset);
            console.log('excercise to perform', actualExercise);
        }
        requestApi();
        return;
    }
    console.log('1-3 Stage, when reaload page');//delete
    //1-3 Stage, when reaload page (updating from LS)
    actualExerciseLS = JSON.parse(exercisePerformedLS);
    actualExercise = actualExerciseLS.number;
    console.log('excercise to perform', actualExercise);
    listExercises = JSON.parse(localStorage.getItem('listExercisesLS'));
    console.log('listExercises', listExercises);
    if (localStorage.getItem('offsetLS')) {
        offsetLS = JSON.parse(localStorage.getItem('offsetLS'));
        offset = offsetLS.number;
        console.log('offset', offset);
    }
}

requestExercises();// when the page id load

function requestApi() {
    fetch('https://api.api-ninjas.com/v1/exercises?type=stretching' + `&offset=${offset}`, {
        method: 'GET',
        headers: { 'X-Api-Key': 'j1AKczm+K6sdLu/F1QUhEw==XyymCozQErXeuzGs' },
        contentType: 'application/json',
    })
        .then((response) => response.json())
        .then(responseApiJsObj => {
            listExercises = responseApiJsObj;// saving request in an array
            console.log('listExercises Api', listExercises)
            localStorage.setItem('listExercisesLS', JSON.stringify(responseApiJsObj));
        })
        .catch(error => console.log(error))
};

function showExcercise() {
    nameExercise.innerText = listExercises[actualExercise].name + ' ' + actualExercise;//borrar ultima parte
    difficultyExercise.innerText = listExercises[actualExercise].difficulty;
    descriptionExercise.innerText = listExercises[actualExercise].instructions;
    //updating parameters js and LS
    actualExerciseLS.number = actualExercise;
    console.log('excercise actual parameter', actualExercise);//delete
    localStorage.setItem('actualExerciseLS', JSON.stringify(actualExerciseLS));
    console.log('excercise number in LS', localStorage.getItem('actualExerciseLS'));//delete
}