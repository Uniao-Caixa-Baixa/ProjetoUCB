const configPC = []


let formulario  = document.querySelector('form')


formulario.addEventListener('submit', function(e){
    e.preventDefault()

    let processador         = formulario.elements.processadores.value
    let ram                 = formulario.elements.ram.value
    let armazenamento       = formulario.elements.armazenamento.value
    let placaGrafica        = formulario.elements.placaVideo.value

    configPC.push({
        "processador": processador,
        "ram": ram,
        "armazenamento": armazenamento,
        "placaGrafica": placaGrafica,
   
    })

    sessionStorage.configPC = JSON.stringify(configPC)
    window.location = '/jogos';
});

