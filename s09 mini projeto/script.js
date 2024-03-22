console.log('script.js')

let divMinutos = document.getElementById('divMinutos');
let divSegundos = document.getElementById('divSegundos');
let divMs = document.getElementById('divMs');
let iniciarBtn = document.getElementById('iniciarBtn');

let interval;
let ms = 1000;
let segundos = 10;// cambiar a 60
let minutos = 12;// Inicial time
let iniciarInterval = true;// To allow start only start once the interval and avoid to start again without pause first


function startTimer() {
    if(iniciarInterval){
        iniciarInterval = false;
        interval = setInterval(updateTimer, 10)
    }
}

function updateTimer(){
    ms -= 10;
    //console.log(ms);
    divMs.innerHTML = formatMs(ms);
    if (ms === 0){
        ms = 1000;
        segundos--;
        // console.log(segundos);
        divSegundos.innerHTML = formatTime(segundos);
    }
    if (segundos === 10){
        minutos--;
        segundos--;
        divSegundos.innerHTML = formatTime(segundos);
        divMinutos.innerHTML = formatTime(minutos);
    }
    if (segundos === -1){
        segundos = 10;
        //segundos--;
    }
}

function pauseTimer(){
    if (!iniciarInterval){
        clearInterval(interval);
        iniciarInterval = true;
        iniciarBtn.innerHTML = 'Continuar';
    }
}

function resetTimer(){
    clearInterval(interval);
    iniciarInterval = true;
    iniciarBtn.innerHTML = 'Iniciar';
    divMinutos.innerHTML = '12';
    divSegundos.innerHTML = '00';
    divMs.innerHTML = '000';
    ms = 1000;
    segundos = 10;
    minutos = 12;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMs(time) {
    return time < 100 ? `0${time}`.padStart(3, "0") : time;
    // if (time < 100){
        //     return `0${time}`.padStart(3, "0");
        // }
        // time;
}