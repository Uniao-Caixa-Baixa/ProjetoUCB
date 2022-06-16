const arrayUser = JSON.parse(sessionStorage.arrayUser);

arrayUserforEach(function(el){
    const li = document.createElement('li');
    li.innerText = `Nome ${el.user} - Email: ${el.email}`;

    const listaUsuarios = document.querySelector('#lista');
    listaUsuarios.append(li);
});