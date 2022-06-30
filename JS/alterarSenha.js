
const form = document.querySelector('#alterarSenha');

let arrayUser = JSON.parse(sessionStorage.arrayUser);
let currentUser = JSON.parse(sessionStorage.currentUser);

let alteraSenha = 0;

form.addEventListener('submit', function(e){
    e.preventDefault();
    const email = form.elements.email.value;
    let senha = form.elements.senha.value;
    let senha2 = form.elements.senha2.value;

    if (!verificaEmail(email)){
        form.elements.email.value = '';
        window.alert('Não encontramos nenhuma conta com esse email, primeiramente faça seu registro!')
    }else if (!verificaSenha(senha, senha2)){
        form.elements.senha.value = '';
        form.elements.senha2.value = '';
        window.alert('As senhas não combinam! Digite novamente...')
    }else{
        let currentUserIndex = findUserIndex(currentUser)
        arrayUser[currentUserIndex]['senha'] = senha
        currentUser['senha'] = senha
        
        sessionStorage.arrayUser = JSON.stringify(arrayUser);
        sessionStorage.currentUser = JSON.stringify(currentUser);
        form.elements.email.value = '';
        form.elements.senha.value = '';
        form.elements.senha2.value = '';
        window.alert('Senha alterada com sucesso!')
    
    }
})

function verificaSenha(senha1, senha2){
    if (senha1 == senha2) {
        return true
    }else{
        return false
    }
}

function verificaEmail(email){
    let valido = false
    arrayUser.forEach(user => {
        if (user['email'] == email){
            valido = true
        }
    });
    return valido
}

function findUserIndex(user){
    let userIndex = null
    arrayUser.forEach((el, index) => {
        if (el['nome'] == user['nome']){
            userIndex = index
            
        }
    });
    return userIndex
}