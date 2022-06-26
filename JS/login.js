let formulario = document.querySelector('form');
const converteArrayUser = JSON.parse(sessionStorage.arrayUser); 
const linkComp = document.getElementById('linkComp')

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let verificaLogin = 0;
    let mensagem
    let nome = formulario.elements.nome.value;
    let senha = formulario.elements.senha.value;
  

    while (verificaLogin<converteArrayUser.length){
        if (nome == converteArrayUser[verificaLogin]['nome'] || nome == converteArrayUser[verificaLogin]['email']){
            if (senha == converteArrayUser[verificaLogin]['senha']){
                mensagem = "Bem-vindo"
            }else {
                mensagem = 'Senha incorreta! Tente novamente'
            }
        }else{
            mensagem = 'O usuário não existe!'
        }
        linkComp.style.display = 'flex'
        verificaLogin++;

    }
    window.alert(mensagem)
    

})