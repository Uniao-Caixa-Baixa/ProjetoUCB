
const form = document.querySelector('#registro')

let arrayUser = JSON.parse(sessionStorage.arrayUser);

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = form.elements.user.value;
    const email = form.elements.email.value;
    let senha = form.elements.senha.value;
    let senha2 = form.elements.senha2.value;

    arrayUser.push({
        "nome": nome,
        "email": email,
        "senha": senha,
        "senha2": senha2
    });

    sessionStorage.arrayUser = JSON.stringify(arrayUser);

    form.elements.user.value = '';
    form.elements.email.value = '';
    form.elements.senha.value = '';
    form.elements.senha2.value = '';

    if (senha != senha2){
        e.preventDefault();
        form.elements.senha.value = '';
        form.elements.senha2.value = '';
        window.alert('As senhas não combinam! Digite novamente...')
    }
})