import {UserManager} from "./users.js";

const currentUser = UserManager.currentUser
const arrayUser = UserManager.arrayUser

const form = document.querySelector('#registro')

if (UserManager.isLogged) {
    window.location.href = '/dashboard'
}

const tipoUsuario = 'COMUM';

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = form.elements.user.value;
    const email = form.elements.email.value;
    let senha = form.elements.senha.value;
    let senha2 = form.elements.senha2.value;

    if (UserManager.nomeExiste(nome)){
        form.elements.user.value = '';
        window.alert('Nome de usuário já está em uso! Tente outro nome')
    }else if (UserManager.emailExiste(email)){
        form.elements.email.value = '';
        window.alert('Email já está em uso! Utilize outro')
    }else if (!verificaSenha(senha, senha2)){
        form.elements.senha.value = '';
        form.elements.senha2.value = '';
        window.alert('As senhas não combinam! Digite novamente...')
    }else{
        arrayUser.push({
            "nome": nome,
            "email": email,
            "senha": senha,
            "usuario": tipoUsuario

        });
        
        sessionStorage.arrayUser = JSON.stringify(arrayUser);

        form.elements.user.value = '';
        form.elements.email.value = '';
        form.elements.senha.value = '';
        form.elements.senha2.value = '';
        window.alert('Conta criada com sucesso!')
    
    }
})

function verificaSenha(senha1, senha2){
    if (senha1 == senha2) {
        return true
    }else{
        return false
    }
}