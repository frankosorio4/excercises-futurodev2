console.log("script.js");

let list = document.querySelector('.list');
console.log(list);
//console.log(list.lastElementChild)

function modifyStyle(){
    let lastElement = list.lastElementChild;
    console.log(lastElement);
    lastElement.removeAttribute('class');
    console.log(list);
}

// if we want to remover several elements, one by one, we can do the proccess follow in the ex 6 with a loop