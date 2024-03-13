console.log("script.js");

let elementFather = document.querySelector('#divFather');
let element_child = document.querySelectorAll('.childElement');
// Number of children in 'elementFather'
let childNumber = elementFather.children.length;

function remove(){
    console.log(childNumber);
    if (childNumber>0){
        //console.log(elementFather);
        //console.log(element_child);
        elementFather.removeChild(elementFather.children[0]);
        childNumber--;
        //console.log(childNumber);
    }
    else{
        alert('O elemento pai não tem filhos.')
    }
}

//Some USEFULL METHODS
// suppouse we have a father element 'elementFather'
// to remove the 1st child
//elementFather.removeChild(elementFather.firstElementChild)
// to remove the last child
//elementFather.removeChild(elementFather.lastChild);
//elementFather.removeChild(element_child);
//to get the last child
//elementFather.lastChild