let formulario = document.querySelector('form');
console.log(formulario);
const converteArrayUser = JSON.parse(sessionStorage.arrayUser); 

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = formulario.elements.nome.value;
    const senha = formulario.elements.senha.value;

    converteArrayUser.forEach(function(){
        if (nome.value == converteArrayUser['nome']){
            alert('Esse usuário existe!')
        }
    });

})