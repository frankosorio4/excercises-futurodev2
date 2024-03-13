console.log("script.js");

let classArray = document.getElementsByClassName('elements');
//nos da una lista con todos los elementos que tienen esa clase

function changeColor(){
    // console.log(classArray);
    // console.log(classArray.length)
    let l = classArray.length;
    for (let i = 0; i < l ; i++){
        classArray[i].style.color= 'blue';
    }
}