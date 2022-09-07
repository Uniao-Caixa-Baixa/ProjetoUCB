import { UserManager } from "./users.js";

let currentUser = UserManager.currentUser
const converteArrayUser = UserManager.arrayUser

let formulario = document.querySelector('form');
const linkInserc = document.getElementById('inserc')
const linkAlteraDados = document.getElementById('alteraDados')
const linkInsercGames = document.getElementById('isercGames')
const linkAlteraCargos = document.getElementById('alteraCargo')

if (JSON.stringify(currentUser) != '{}') {
    window.location.href = '../pages/dashboard.html'
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let mensagem
    let nome = formulario.elements.nome.value;
    let senha = formulario.elements.senha.value;

    let user = findUser(nome)
    if (user) {
        if (user['senha'] == senha){
            mensagem = `${user['nome']}, seja bem-vindo!`;
            logar(user)
        }else{
            mensagem = 'Senha incorreta! Tente novamente'
            formulario.elements.senha.value = ''
        }
    } else {
        mensagem = 'Usuário não existe'
        formulario.elements.nome.value = ''
        formulario.elements.senha.value = ''
    }
    sessionStorage.currentUser = JSON.stringify(currentUser)

    window.alert(mensagem)

})

function findUser(nome){
    let user = null
    converteArrayUser.forEach(el => {
        if (el['nome'] == nome || el['email'] == nome){
            user = el
        }
    });
    return user
}

function logar(user){
    currentUser = user
    sessionStorage.currentUser = JSON.stringify(currentUser)
    window.location.href = '../pages/dashboard.html'
}