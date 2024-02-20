console.log("exercise.js");
//--------------------------Age------------------------------
let btnAge = document.getElementById("btnAge");
let inputAge = document.getElementById("inputAge");
let ageAnswer = document.getElementById("answerAge");

btnAge.addEventListener("click", function (event) {
    event.preventDefault();
    age();
});

function age() {
    // console.log("entro")
    // event.preventDefault();
    let a = Number(inputAge.value);
    //console.log(a);
    if (a >= 18) {
        ageAnswer.innerText = 'You are of legal age.';
    }
    else {
        ageAnswer.innerText = 'You are NOT of legal age.';
    }
}

// ------------------------2 Number + - --------------------------

let btnNumber = document.getElementById("btnNumber");
let inputNumber = document.getElementById("inputNumber");
let answerNumber = document.getElementById("answerNumber");

btnNumber.addEventListener("click", function (event) {
    event.preventDefault();
    number();
});

function number() {
    let n = Number(inputNumber.value);
    //console.log(n);
    if (n < 0) {
        answerNumber.innerText = 'The number is negative.';
    }
    else if (n == 0) {
        answerNumber.innerText = 'The number is zero.';
    }
    else {
        answerNumber.innerText = 'The number is positive.';
    }
}

//--------------------------3 leap year-----------------------

let btnYear = document.getElementById("btnYear");
let inputYear = document.getElementById("inputYear");
let answerYear = document.getElementById("answerYear");

btnYear.addEventListener("click", function (event) {
    event.preventDefault();
    leapYear();
});

function leapYear() {
    let y = Number(inputYear.value);
    //console.log(y);
    s = y.toString();
    if (s.includes(".")) {
        window.alert("You need to introduce a integer number.")
        return
    }
    if (y % 400 === 0) {
        answerYear.innerText = `${y} is a leap year.`;
    }
    else if (y % 4 === 0 && y % 100 != 0) {
        answerYear.innerText = `${y} is a leap year.`;
    }
    else {
        answerYear.innerText = `${y} is NOT a leap year.`;
    }
}

//------------------ 4 odd-even---------------------------

let btnOe = document.getElementById("btnOe");
let inputOe = document.getElementById("inputOe");
let answerOe = document.getElementById("answerOe");

btnOe.addEventListener("click", function (event) {
    event.preventDefault();
    oddEven();
});

function oddEven() {
    let n = Number(inputOe.value);
    //console.log(n);
    s = n.toString();
    if (s.includes(".")) {
        window.alert("You need to introduce a integer number.")
        return
    }
    if (n % 2 === 0) {
        answerOe.innerText = `${n} is an EVEN number.`;
    }
    else {
        answerOe.innerText = `${n} is an ODD number.`;
    }
}

//------------------ 5 grades---------------------------

let btnGrade = document.getElementById("btnGrade");
let inputGrade = document.getElementById("inputGrade");
let answerGrade = document.getElementById("answerGrade");

btnGrade.addEventListener("click", function (event) {
    event.preventDefault();
    grade();
});

function grade() {
    let g = Number(inputGrade.value);
    //console.log(g);
    if (g < 5) {
        answerGrade.innerText = `The student is failed.`;
    }
    else if (g >= 5 && g < 7) {
        answerGrade.innerText = `The student has the opportunity to do remedial.`;
    }
    else {
        answerGrade.innerText = `The student approved.`;
    }
}

//------------------6 largest number----------------------------

let btnLarge = document.getElementById("btnLarge");
let inputLarge1 = document.getElementById("inputLarge1");
let inputLarge2 = document.getElementById("inputLarge2");
let inputLarge3 = document.getElementById("inputLarge3");
let answerLarge = document.getElementById("answerLarge");

btnLarge.addEventListener("click", function (event) {
    event.preventDefault();
    largest();
});

function largest() {
    let n1 = Number(inputLarge1.value);
    let n2 = Number(inputLarge2.value);
    let n3 = Number(inputLarge3.value);
    //console.log(n1);
    let N = [n1, n2, n3];
    let L = n1;
    for (i of N) {
        for (j of N) {
            if (j > i) {
                L = j;
            }
        }
    }
    answerLarge.innerText = `The largest number is ${L}.`;
}

//-------------------7 odd even year------------------

let btnOey = document.getElementById("btnOey");
let inputOey = document.getElementById("inputOey");
let answerOey = document.getElementById("answerOey");

btnOey.addEventListener("click", function (event) {
    event.preventDefault();
    oddEveny();
});

function oddEveny() {
    let y = Number(inputOey.value);
    //console.log(n);
    s = y.toString();
    if (s.includes(".")) {
        window.alert("You need to introduce a integer number.")
        return
    }
    if (y % 2 === 0) {
        answerOey.innerText = `${y} is EVEN.`;
    }
    else {
        answerOey.innerText = `${y} is ODD.`;
    }
}

// ------------------9 week's day--------------

let btnDay = document.getElementById("btnDay");
let inputDay = document.getElementById("inputDay");
let answerDay = document.getElementById("answerDay");

btnDay.addEventListener("click", function (event) {
    event.preventDefault();
    weekDay();
});

function weekDay() {
    let d = inputDay.value;
    //console.log(d);
    //s = d.toString();
    if (s.includes(".") || Number(d) < 1 || Number(d) > 7) {
        window.alert("You need to introduce a integer number between 1 and 7.")
        return
    }
    switch (d) {
        case "1":
            answerDay.innerText = `Monday`;
            break;
        case "2":
            answerDay.innerText = `Tueday`;
            break;
        case "3":
            answerDay.innerText = `Wenesday`;
            break;
        case "4":
            answerDay.innerText = `Thursday`;
            break;
        case "5":
            answerDay.innerText = `Friday`;
            break;
        case "6":
            answerDay.innerText = `Saturday`;
            break;
        case "7":
            answerDay.innerText = `Sunday`;
            break;
    }
}

// ------------------10 Vowels and consonants--------------

let btnLetter = document.getElementById("btnLetter");
let inputLetter = document.getElementById("inputLetter");
let answerLetter = document.getElementById("answerLetter");

btnLetter.addEventListener("click", function (event) {
    event.preventDefault();
    vowCons();
});

function isLetter(letter) {
    return letter.match(/[a-zA-Z]/);
}

function vowCons() {
    let l = inputLetter.value;
    //console.log(d);
    //s = d.toString();
    if (isLetter(l)) {
        switch (l.toLowerCase()) {
            case "a":
                answerLetter.innerText = `The letter is a Vowel.`;
                break;
            case "e":
                answerLetter.innerText = `The letter is a Vowel.`;
                break;
            case "i":
                answerLetter.innerText = `The letter is a Vowel.`;
                break;
            case "o":
                answerLetter.innerText = `The letter is a Vowel.`;
                break;
            case "u":
                answerLetter.innerText = `The letter is a Vowel.`;
                break;
            default:
                answerLetter.innerText = `The letter is a Consonant.`;
                break;
        }
    } else {
        window.alert("The character is not a letter of the english alphabet.")
    }
}

// ------------------11 Number to month--------------

let btnMonth = document.getElementById("btnMonth");
let inputMonth = document.getElementById("inputMonth");
let answerMonth = document.getElementById("answerMonth");

btnMonth.addEventListener("click", function (event) {
    event.preventDefault();
    numberMonth();
});

function numberMonth() {
    let m = inputMonth.value;
    //console.log(d);
    //s = d.toString();
    if (m.includes(".") || Number(m) < 1 || Number(m) > 12) {
        window.alert("You need to introduce a integer number between 1 and 12.")
        return
    }
    switch (m) {
        case "1":
            answerMonth.innerText = `The corresponding month is January.`;
            break;
        case "2":
            answerMonth.innerText = `The corresponding month is  February.`;
            break;
        case "3":
            answerMonth.innerText = `The corresponding month is March.`;
            break;
        case "4":
            answerMonth.innerText = `The corresponding month is April.`;
            break;
        case "5":
            answerMonth.innerText = `The corresponding month is May.`;
            break;
        case "6":
            answerMonth.innerText = `The corresponding month is  June.`;
            break;
        case "7":
            answerMonth.innerText = `The corresponding month is July.`;
            break;
        case "8":
            answerMonth.innerText = `The corresponding month is August.`;
            break;
        case "9":
            answerMonth.innerText = `The corresponding month is September.`;
            break;
        case "10":
            answerMonth.innerText = `The corresponding month is October.`;
            break;
        case "11":
            answerMonth.innerText = `The corresponding month is November.`;
            break;
        case "12":
            answerMonth.innerText = `The corresponding month is December.`;
            break;
    }
}