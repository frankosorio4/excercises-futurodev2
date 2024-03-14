console.log("script.js");

let elements = document.querySelectorAll('.listToModify')


function modifyStyle(){
    //console.log(elements);
    let l = elements.length;
    for (let i = 0; i < l; i++){
        elements[i].style.backgroundColor = 'rgb(185, 32, 32)';
        elements[i].style.color = 'white';
        elements[i].style.padding ='5px';
        elements[i].style.fontWeight = '600';
        elements[i].style.borderRadius = '5px';
    }
}

