console.log('script-timer1.js')

let divMinutos = document.getElementById('divMinutos');
let divSegundos = document.getElementById('divSegundos');
// let divMs = document.getElementById('divMs');
let iniciarBtn = document.getElementById('iniciarBtn');
let body = document.querySelector('body');
let titleTimer = document.getElementById('titleTimer');

//to vary the duration of the intervals of time
let segundosSet = 10;//defaul 60
let minutosSet = 1;//default 25
divMinutos.innerHTML = formatTime(minutosSet);

//configuration of default timer
let interval;
let msCounter = 1000;//1000
let segundosCounter = segundosSet;
let minutosCounter = minutosSet;
let startInterval = true;// To allow start only start once the interval and avoid to start again without pause first
let currentSession = 'task';

function startTimer() {
    if (startInterval) {
        startInterval = false;
        updateTimer();
    }
}

function updateTimer() {
    if (currentSession === 'task') {
        interval = setInterval(timer1, 10);
    }
    if (currentSession === 'brake-excercise'){
        //console.log('timer2 called');
        if (confirm("The task time is gone. Do you want to perfom the exercise?")) {
            console.log('calling timer 2');
            body.style.backgroundColor = 'rgb(188, 223, 243)';
            titleTimer.innerHTML = 'Excercise Timer';
            segundosSet = 10;//defaul 60
            minutosSet = 2;// Inicial 5
            divMinutos.innerHTML = formatTime(minutosSet);
            msCounter = 1000;//1000
            segundosCounter = segundosSet;
            minutosCounter = minutosSet;
            interval = setInterval(timer2, 10)
        }else{
            resetTimer();
        }
    }
}

function timer1() {
    msCounter -= 10;
    if (msCounter === 0) {
        msCounter = 1000;
        segundosCounter--;
        if (segundosCounter == -1 && minutosCounter == 0) {
            resetTimer();
            currentSession = 'brake-excercise';
            updateTimer();
            return;
        }
        divSegundos.innerHTML = formatTime(segundosCounter);
    }
    if (segundosCounter === -1) {
        segundosCounter = segundosSet;
    }
    if (segundosCounter === segundosSet) {
        minutosCounter--;
        segundosCounter--;
        divMinutos.innerHTML = formatTime(minutosCounter);
        divSegundos.innerHTML = formatTime(segundosCounter);
    }
}

function timer2() {
    msCounter -= 10;
    if (msCounter === 0) {
        msCounter = 1000;
        segundosCounter--;
        if (segundosCounter == -1 && minutosCounter == 0) {
            resetTimer();
            currentSession = 'task';
            updateTimer();
            return;
        }
        divSegundos.innerHTML = formatTime(segundosCounter);
    }
    if (segundosCounter === -1) {
        segundosCounter = segundosSet;
    }
    if (segundosCounter === segundosSet) {
        minutosCounter--;
        segundosCounter--;
        divMinutos.innerHTML = formatTime(minutosCounter);
        divSegundos.innerHTML = formatTime(segundosCounter);
    }
}

function pauseTimer() {
    if (!startInterval) {
        clearInterval(interval);
        startInterval = true;
        iniciarBtn.innerHTML = 'Continuar';
    }
}

function resetTimer() {
    clearInterval(interval);
    currentSession = 'task';
    body.style.backgroundColor = 'rgb(204, 121, 12)';
    titleTimer.innerHTML = 'Task Timer';
    startInterval = true;
    iniciarBtn.innerHTML = 'Iniciar';
    //divTimer
    divMinutos.innerHTML = `${formatTime(minutosSet)}`;
    divSegundos.innerHTML = '00';
    //parameters
    msCounter = 1000;
    segundosCounter = segundosSet;
    minutosCounter = minutosSet;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMs(time) {
    return time < 100 ? `0${time}`.padStart(3, "0") : time;
}
