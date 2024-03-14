console.log("script.js");

let list = document.querySelector('.list');
console.log(list);
//console.log(list.lastElementChild)

// removing class of the last element
function removeClass(){
    let lastElement = list.lastElementChild;
    console.log(lastElement);
    lastElement.removeAttribute('class');
    console.log(list);
}

// removing class of All elements.
function removeClass2(){
    let l = list.children.length;
    console.log(l);
    for(let i = 0; i < l; i++){
        list.children[i].removeAttribute('class');
    }
}

// if we want to remove element classes, one by one.
let i = 1;
let l = list.children.length;
function removeClass3(){
    console.log(l);
    if(i <= l){
        list.children[l-i].removeAttribute('class');
        --l;
        console.log(l);
    }
}