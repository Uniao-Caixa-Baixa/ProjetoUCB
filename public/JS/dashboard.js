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

tab_btns.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        showTab(index)
    })
})

showTab(0)