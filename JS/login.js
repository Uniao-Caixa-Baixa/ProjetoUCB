let formulario = document.querySelector('form');
let arrayLogin = JSON.parse(sessionStorage.arrayLogin)
const converteArrayUser = JSON.parse(sessionStorage.arrayUser); 
const linkInserc = document.getElementById('inserc')
const linkAlteraDados = document.getElementById('alteraDados')

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let verificaLogin = 0;
    let mensagem
    let nome = formulario.elements.nome.value;
    let senha = formulario.elements.senha.value;
  

    while (verificaLogin<converteArrayUser.length){
        if (nome == converteArrayUser[verificaLogin]['nome'] || nome == converteArrayUser[verificaLogin]['email']){
            if (senha == converteArrayUser[verificaLogin]['senha']){
                mensagem = "Bem-vindo"
                linkInserc.style.display = 'flex'
                linkAlteraDados.style.display ='flex'
                arrayLogin.push({
                    "nome": nome,
                    "senha": senha
                })
            }else {
                mensagem = 'Senha incorreta! Tente novamente'
            }
        }else{
            mensagem = 'O usuário não existe!'
        }
        
        verificaLogin++;

    }
    sessionStorage.arrayLogin = JSON.stringify(arrayLogin)

    window.alert(mensagem)
    

})