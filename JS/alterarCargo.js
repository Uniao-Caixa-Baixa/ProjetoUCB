import { UserManager } from "./users.js";

const form = document.querySelector('form');
let arrayUser = UserManager.arrayUser
let alteraCargo = 0;

form.addEventListener('submit', function(e){
    e.preventDefault()

    const email = form.elements.email.value

    if (!UserManager.emailExiste(email)){
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