const arrayProcessadores    = JSON.parse(sessionStorage.processadores)
const arrayPlacasGraficas   = JSON.parse(sessionStorage.placaGrafica)

let processadores = document.querySelector('#processadores')

let placasGraficas = document.querySelector('#placaVideo')

carregaComponentes(arrayProcessadores, processadores)

carregaComponentes(arrayPlacasGraficas, placasGraficas)





function carregaComponentes(arrayComponentes, componente){
    arrayComponentes.forEach(function(el){
        const opcoes = document.createElement('option')
        opcoes.innerText = `${el.descricao}`
        componente.append(opcoes)
    
    })
}