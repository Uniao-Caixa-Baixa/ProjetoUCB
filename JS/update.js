import { UserManager } from "./users.js"

let arrayUser = UserManager.arrayUser
var currentUser = UserManager.currentUser

let checkUpdate = document.getElementById('update')
let formDados = document.getElementById('formDados')

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
    }

    if(checkSenha.checked){
        divSenha.style.display = 'flex'
    }
})

formDados.addEventListener('submit', function(e){
    e.preventDefault()

    let novoNome = formDados.elements.novoNome.value 
    let novaSenha = formDados.elements.novaSenha.value
    let currentUserIndex = UserManager.currentUserIndex

    if (novoNome != ""){
        arrayUser[currentUserIndex]['nome'] = novoNome
        currentUser['nome'] = novoNome
    }
    if (novaSenha != ""){
        arrayUser[currentUserIndex]['senha'] = novaSenha
        currentUser['senha'] = novaSenha
    }
    

    sessionStorage.currentUser = JSON.stringify(currentUser)
    sessionStorage.arrayUser =  JSON.stringify(arrayUser)
    formDados.elements.novoNome.value = ''
    formDados.elements.novaSenha.value = ''
    window.alert('Dados alterados com sucesso!')
})