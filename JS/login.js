let formulario = document.querySelector('form');
let arrayLogin = JSON.parse(sessionStorage.arrayLogin)
const converteArrayUser = JSON.parse(sessionStorage.arrayUser); 
const linkInserc = document.getElementById('inserc')
const linkAlteraDados = document.getElementById('alteraDados')
const linkInsercGames = document.getElementById('isercGames')
const linkAlteraCargos = document.getElementById('alteraCargo')

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let verificaLogin = 0;
    let mensagem
    let nome = formulario.elements.nome.value;
    let senha = formulario.elements.senha.value;
  

    while (verificaLogin<converteArrayUser.length){
        if (nome == converteArrayUser[verificaLogin]['nome'] || nome == converteArrayUser[verificaLogin]['email']){
            if (senha == converteArrayUser[verificaLogin]['senha']){
                mensagem = ` ${nome}, seja bem-vindo!`
                if(converteArrayUser[verificaLogin]['usuario'] == 'COMUM'){
                    linkInserc.style.display = 'flex'
                    linkAlteraDados.style.display ='flex'
                    arrayLogin.push({
                        "nome": nome,
                        "senha": senha
                    })
                    break;
                }else{
                    linkInsercGames.style.display = 'flex'
                    linkAlteraCargos.style.display ='flex'
                    arrayLogin.push({
                        "nome": nome,
                        "senha": senha
                    })
                    break;
                }
            }else {
                mensagem = 'Senha incorreta! Tente novamente'
                break;
            }
        }else{
            mensagem = 'O usuário não existe!'
        }
        
        verificaLogin++;

    }
    sessionStorage.arrayLogin = JSON.stringify(arrayLogin)

    window.alert(mensagem)
    

})