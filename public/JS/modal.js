const close_buttons = document.querySelectorAll('.modal>button')
const modals = document.querySelectorAll('.modal')

close_buttons.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        modals[index].style.display = 'none'
    })
})