const arrayGames = JSON.parse(sessionStorage.arrayGames);
let filtro = document.querySelectorAll('select');
let zeraLista = document.querySelector('#listaJogos');
let jogosMostrados = arrayGames

mostraJogos(arrayGames)

filtro.forEach(function(el){
    el.addEventListener('change', atualizaLista)
})

function atualizaLista(){
    // Filtro de estilo
    let filtroEstilo = filtro[0].value;
    zeraLista.innerText = '';
    let jogosMostrados = arrayGames
    if(filtroEstilo != 'Estilo'){
        jogosMostrados = jogosMostrados.filter(filtraEstilo(filtroEstilo))
    }

    // Filtro de preco
    let filtroPreco = filtro[1].value;
    if(filtroPreco == 'Preco'){
        jogosMostrados = jogosMostrados
    }else if (filtroPreco == 'Gratuitos'){
        jogosMostrados = jogosMostrados.filter(filtraGratuito)
    }else if(filtroPreco == 'Pagos'){
        jogosMostrados = jogosMostrados.filter(filtraPago)
    }
    mostraJogos(jogosMostrados)
}

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
    return el.preco == '0'
}

function filtraPago(el){
    return el.preco != '0'
}