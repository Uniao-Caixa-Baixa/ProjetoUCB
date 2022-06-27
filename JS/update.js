let checkUpdate = document.getElementById('update')
let formDados = document.getElementById('formDados')
let arrayUser = JSON.parse(sessionStorage.arrayUser)
let arrayLogin = JSON.parse(sessionStorage.arrayLogin)

let alteraNome = 0
let alteraSenha = 0


let divNome = document.getElementById('divNome')
let divSenha = document.getElementById('divSenha')

checkUpdate.addEventListener('submit', function(e){
    e.preventDefault()

    checkUpdate.style.display = 'none'

    formDados.style.display = 'flex'

    let checkNome = document.getElementById('checkNome')
    let checkSenha = document.getElementById('checkSenha')

    if(checkNome.checked){
        divNome.style.display = 'flex'
        if(checkNome.checked && checkSenha.checked){
            divNome.style.display = 'flex'
            divSenha.style.display = 'flex'
        }
    }else if (checkSenha){
        divSenha.style.display = 'flex'
    }
})

formDados.addEventListener('submit', function(e){
    e.preventDefault()

    let novoNome = formDados.elements.novoNome.value 
    let novaSenha = formDados.elements.novaSenha.value

    arrayUser.push({
        "nome": novoNome,
        "senha": novaSenha
    })


    while(alteraNome<arrayUser.length){
        if(arrayLogin[0]['nome'] == arrayUser[alteraNome]['email']){
            arrayUser[alteraNome]['nome'] = arrayLogin[1]['nome']
        }
        console.log('entrou')
        alteraNome++
    }while(alteraSenha<arrayUser.length){
        if(arrayLogin[0]['senha'] == arrayUser[alteraSenha]['senha']){
            arrayUser[alteraSenha]['senha'] = arrayLogin[1]['senha']
        }
        alteraSenha++
    }

    sessionStorage.arrayLogin = JSON.stringify(arrayLogin)
    sessionStorage.arrayUser =  JSON.stringify(arrayUser)
    formDados.elements.novoNome.value = ''
    formDados.elements.novaSenha.value = ''
    window.alert('Dados alterados com sucesso!')
    
})