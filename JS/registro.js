
const form = document.querySelector('#registro')

let arrayUser = JSON.parse(sessionStorage.arrayUser);

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = form.elements.user.value;
    const email = form.elements.email.value;
    let senha = form.elements.senha.value;
    let senha2 = form.elements.senha2.value;

    if (!verificaNome(nome)){
        form.elements.user.value = '';
        window.alert('Nome de usuário já está em uso! Tente outro nome')
    }else if (!verificaEmail(email)){
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
            "senha": senha
        });
        
        sessionStorage.arrayUser = JSON.stringify(arrayUser);

        form.elements.user.value = '';
        form.elements.email.value = '';
        form.elements.senha.value = '';
        form.elements.senha2.value = '';
    
    }
})

function verificaSenha(senha1, senha2){
    if (senha1 == senha2) {
        return true
    }else{
        return false
    }
}

function verificaNome(nome){
    let valido = true
    arrayUser.forEach(user => {
        if (user['nome'] == nome){
            valido = false
        }
    });
    return valido
}

function verificaEmail(email){
    let valido = true
    arrayUser.forEach(user => {
        if (user['email'] == email){
            valido = false
        }
    });
    return valido
}