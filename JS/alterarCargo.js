const form = document.querySelector('form');
let arrayUser = JSON.parse(sessionStorage.arrayUser);
let alteraCargo = 0;

form.addEventListener('submit', function(e){
    e.preventDefault()

    const email = form.elements.email.value

    if (verificaEmail(email)){
        form.elements.email.value = '';
        window.alert('O usuário não foi encotrado!')
    }else{
        while(alteraCargo<arrayUser.length){
            if (email == arrayUser[alteraCargo]['email']){
                arrayUser[alteraCargo]['usuario'] = 'ADMINISTRADOR'
                sessionStorage.arrayUser = JSON.stringify(arrayUser);
                form.elements.email.value = '';
                window.alert('Cargo alterado com sucesso!')
                break;
            }  
            alteraCargo++;
        };
    }


});


function verificaEmail(email){
    let valido = true
    arrayUser.forEach(user => {
        if (user['email'] == email){
            valido = false
        }
    });
    return valido
}