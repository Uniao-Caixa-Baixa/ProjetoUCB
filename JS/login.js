import { UserManager } from "./users.js";

let formulario = document.querySelector('form');


if (UserManager.isLogged) {
    window.location.href = '../pages/dashboard.html'
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let mensagem
    let nome = formulario.elements.nome.value;
    let senha = formulario.elements.senha.value;

    let user = UserManager.findUser(nome)
    if (user) {
        if (user['senha'] == senha){
            mensagem = `${user['nome']}, seja bem-vindo!`;
            UserManager.logar(user)
            window.location.href = '../pages/dashboard.html'
        }else{
            mensagem = 'Senha incorreta! Tente novamente'
            formulario.elements.senha.value = ''
        }
    } else {
        mensagem = 'Usuário não existe'
        formulario.elements.nome.value = ''
        formulario.elements.senha.value = ''
    }

    window.alert(mensagem)

})