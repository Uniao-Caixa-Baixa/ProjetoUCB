let formulario = document.querySelector('form');
const converteArrayUser = JSON.parse(sessionStorage.arrayUser); 

let verificaLogin = 0;

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let nome = formulario.elements.nome.value;
    let senha = formulario.elements.senha.value;
  

    while (verificaLogin<converteArrayUser.length){
        if (nome == converteArrayUser[verificaLogin]['nome']){
            if (senha == converteArrayUser[verificaLogin]['senha']){
                alert('o usuário existe!')
            }
        }
        verificaLogin++;
    }
    

})