console.log("script.js");

let list = document.querySelector('ul');
let itemList =document.querySelectorAll('ul li');

console.log(list);
console.log(itemList);

function addIdClass(){
    list.setAttribute('class','list mt-14');
    console.log(list);
    l = list.childElementCount;
    console.log(l)
    for (let i=0; i<l; i++){
        list.children[i].setAttribute('class','elementLi');
    }
}