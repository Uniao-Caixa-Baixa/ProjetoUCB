let formulario = document.querySelector('form');
const converteArrayUser = JSON.parse(sessionStorage.arrayUser); 

let verificaLogin = 0;

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let nome = formulario.elements.nome.value;
    let senha = formulario.elements.senha.value;
  

    while (verificaLogin<converteArrayUser.length){
        if (nome == converteArrayUser[verificaLogin]['nome'] || nome == converteArrayUser[verificaLogin]['email']){
            if (senha == converteArrayUser[verificaLogin]['senha']){
                window.alert('o usuário existe!')
            }else {
                window.alert('Esse usuário não existe! Volte para a página de registro.')
            }
        }
        verificaLogin++;
    }
    

})