console.log('script.js')

let divMinutos = document.getElementById('divMinutos');
let divSegundos = document.getElementById('divSegundos');
let divMs = document.getElementById('divMs');

let interval;
let ms = 1000;
let segundos = 10;
let minutos = 12;//25 minutos
let flag1 = 0;
// let flag2 = 0;

function startTimer() {
    if(flag1 === 0){
        flag1 = 1;
        interval = setInterval(updateTimer, 10)
    }
}

function updateTimer(){
    ms -= 10;
    console.log(ms);
    divMs.innerHTML = formatMs(ms);
    if (segundos === 10){
        minutos--;
        segundos--;
        divSegundos.innerHTML = formatTime(segundos);
        divMinutos.innerHTML = formatTime(minutos);
    }
    if (ms === 0){
        ms = 1000;
        segundos--;
        // console.log(segundos);
        divSegundos.innerHTML = formatTime(segundos);
    }
    if (segundos === -1){
        segundos = 10;
        //segundos--;
    }
}

function pauseTimer(){
    clearInterval(interval);
    flag1 = 0;
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