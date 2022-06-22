let formulario = document.querySelector('form');
const converteArrayUser = JSON.parse(sessionStorage.arrayUser); 


formulario.addEventListener('submit', function(e){
    let verificaLogin = 0;
    e.preventDefault();
    let nome = formulario.elements.nome.value;
    let senha = formulario.elements.senha.value;
  

    while (verificaLogin<converteArrayUser.length){
        if (nome == converteArrayUser[verificaLogin]['nome'] || nome == converteArrayUser[verificaLogin]['email']){
            if (senha == converteArrayUser[verificaLogin]['senha']){
                window.alert('Bem vindo!')
            }else {
                window.alert('Senha incorreta! Tente novamente')
            }
        }else{
            window.alert('O usuário não existe!')
        }
        verificaLogin++;
    }
    

})