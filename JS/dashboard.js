import { UserManager } from "./users.js"

var currentUser = UserManager.currentUser
const sairBtn = document.querySelector('#sairBtn')
const dashboard = document.querySelector('#dashboard')
const adms = document.querySelectorAll(".adm")
const redirect = document.querySelector('#redirect-login')

const tabs = document.querySelectorAll('.tab-content')
const tab_btns = document.querySelectorAll('.tab-btn')

const showTab = (tab_index)=>{
    tabs.forEach((tab)=>{
        tab.style.display = 'none'
    })

    tabs[tab_index].style.display = 'flex'
}


if (!UserManager.isLogged) {
    redirect.style.display = 'flex'
}else{
    dashboard.style.display = 'flex'
    if(currentUser['usuario'] == 'ADMINISTRADOR'){
        adms.forEach(el => el.style.display = 'flex')
    }
    showTab(0)

}

tab_btns.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        showTab(index)
    })
})

sairBtn.addEventListener('click', () => {
    UserManager.deslogar()
    window.location.href = '../index.html'
})