const arrayGames = JSON.parse(sessionStorage.arrayGames);
let filtro = document.querySelectorAll('select');
let zeraLista = document.querySelector('#listaJogos');


mostraJogos(arrayGames)

filtro[0].addEventListener('click', function(){
    let filtroEstilo = filtro[0].value;
    zeraLista.innerText = '';
    let jogosMostrados
    if(filtroEstilo == 'Estilo'){
        jogosMostrados = arrayGames
    }else{
        console.log('estilo selecionado')
        jogosMostrados = arrayGames.filter(filtraEstilo(filtroEstilo))
    }
    mostraJogos(jogosMostrados)
})

filtro[1].addEventListener('click', function(){
    let filtroPreco = filtro[1].value;
    zeraLista.innerText = '';
    let jogosMostrados
    if(filtroPreco == 'Preco'){
        jogosMostrados = arrayGames
    }else if (filtroPreco == 'Gratuitos'){
        jogosMostrados = arrayGames.filter(filtraGratuito)
    }else if(filtroPreco == 'Pagos'){
        jogosMostrados = arrayGames.filter(filtraPago)
    }
    mostraJogos(jogosMostrados)
})


function mostraJogos(array){
    array.forEach(function(el){
        const li = document.createElement('li');
        li.innerText = `Nome: ${el.nome} - Estilo: ${el.estilo} - R$: ${el.preco}`;
        const listaJogos = document.querySelector('#listaJogos');
        listaJogos.append(li);
    });
}

function filtraEstilo(filtro){
    return (el) => el.estilo == filtro
}

function filtraGratuito(el){
    return el.preco == '0.00'
}

function filtraPago(el){
    return el.preco != '0.00'
}