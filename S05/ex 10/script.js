// Adicione mais estilos, melhore a experiência do usuário com animações simples, adicione validações com JavaScript, etc.


function mostrarDiv(targetId){
    var target = document.getElementById(targetId);
    target.style.display = (target.style.display === 'none' || target.style.display === '') ? 'block' : 'none';
}
