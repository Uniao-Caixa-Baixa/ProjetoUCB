let formulario = document.querySelector('form');
let arrayLogin = JSON.parse(sessionStorage.arrayLogin)
const converteArrayUser = JSON.parse(sessionStorage.arrayUser); 
const linkInserc = document.getElementById('inserc')
const linkAlteraDados = document.getElementById('alteraDados')
const linkInsercGames = document.getElementById('isercGames')
const linkAlteraCargos = document.getElementById('alteraCargo')

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
    sessionStorage.arrayLogin = JSON.stringify(arrayLogin)

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
    if(user['usuario'] == 'COMUM'){
        linkInserc.style.display = 'flex'
        linkAlteraDados.style.display = 'flex'
    }else{
        linkInsercGames.style.display = 'flex'
        linkAlteraCargos.style.display ='flex'
    }
    arrayLogin.push(user)
    sessionStorage.arrayLogin = JSON.stringify(arrayLogin)
}