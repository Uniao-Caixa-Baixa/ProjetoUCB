
let checkForm = document.getElementById('checkForm')

let formComp = document.getElementById('formComp')
let divProc = document.getElementById('divProc')
let divPlacaM = document.getElementById('divPlacaMae')
let divPlacaVideo = document.getElementById('divPlacaVideo')


let arrayComps = JSON.parse(sessionStorage.arrayComps)

checkForm.addEventListener('submit', function(e){
    e.preventDefault()

    checkForm.style.display = 'none'

    formComp.style.display = 'flex'

    let checkProc = document.getElementById('checkProc')
    let checkPlacaMae = document.getElementById('checkPlacaMae')
    let checkPlacaVideo = document.getElementById('checkPlacaVideo')


    if(checkPlacaMae.checked){
        divPlacaM.style.display = 'flex'
    }

    if(checkProc.checked){
        divProc.style.display = 'flex'
    }

    if(checkPlacaVideo.checked){
        divPlacaVideo.style.display = 'flex'
    }
    
})

formComp.addEventListener('submit', function(e){
    e.preventDefault()

    let processador = formComp.elements.proc.value
    let placaMae = formComp.elements.placaMae.value
    let placaVideo = formComp.elements.placaVideo.value


    arrayComps.push({
        "processador": processador,
        "placa-mãe": placaMae,
        "placa de vídeo": placaVideo
    })

    sessionStorage.arrayComps = JSON.stringify(arrayComps)

    formComp.elements.proc.value = ''
    formComp.elements.placaMae.value = ''
    formComp.elements.placaVideo.value = ''

    window.alert('Os componentes foram enviados para revisão!')
})


