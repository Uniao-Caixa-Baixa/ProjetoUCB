const arrayUser = JSON.parse(sessionStorage.arrayUser);

arrayUser.forEach(function(el){
    const li = document.createElement('li');
    li.innerText = `Nome: ${el.nome} - Email: ${el.email}`;

    const listaUsuarios = document.querySelector('#lista');
    listaUsuarios.append(li);
});