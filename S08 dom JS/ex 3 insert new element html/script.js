console.log("script.js");

let divFather = document.getElementById('divFather');

let l=0;
function introduce(){
    l = ++l;
    if (l < 5){
       console.log(l);
    // creating a new HTML element 
    let pChild = document.createElement('p');
    //Giving  some style to the element
    pChild.style.backgroundColor = 'lightgreen';
    pChild.style.padding = '10px';
    pChild.style.marginTop = '10px';
    pChild.style.border ='none';
    pChild.style.borderRadius = '5px';
    //saving some text in a variable
    let textChild = document.createTextNode('Este e o texto do novo elemento HTML <p>');
    //saving the text in the HTML element
    pChild.append(textChild);
    divFather.appendChild(pChild); 
    }
}