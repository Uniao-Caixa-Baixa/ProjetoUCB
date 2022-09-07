import { UserManager } from "./users.js"

var currentUser = UserManager.currentUser
const sairBtn = document.querySelector('#sairBtn')
const dashboard = document.querySelector('#dashboard')
const admDivs = document.querySelectorAll(".adm")
const redirect = document.querySelector('#redirect-login')

if (!UserManager.isLogged) {
    redirect.style.display = 'flex'
}else{
    dashboard.style.display = 'flex'
    if(currentUser['usuario'] == 'ADMINISTRADOR'){
        admDivs.forEach(el => el.style.display = 'flex')
}
}

sairBtn.addEventListener('click', () => {
    currentUser = {}
    sessionStorage.currentUser = JSON.stringify(currentUser)
    window.location.href = '../index.html'
})