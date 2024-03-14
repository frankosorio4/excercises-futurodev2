console.log("script.js");

let list2 = document.getElementById('list2');
console.log(list2);

function addClass(){
    list2.setAttribute('class','list');
    //console.log(list2);
    let l = list2.children.length;
    //console.log(l);
    for (let i = 0; i < l; i++){
        list2.children[i].setAttribute('class','elementLi');
    }
    console.log(list2);
}