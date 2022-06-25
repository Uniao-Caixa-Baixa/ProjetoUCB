const arrayGames = JSON.parse(sessionStorage.arrayGames);
let filtro = document.querySelectorAll('select');
let zeraLista = document.querySelector('#lista');


mostraJogos(arrayGames)

filtro[0].addEventListener('click', function(){
    let filtroEstilo = filtro[0].value;
    zeraLista.innerText = '';
    if(filtroEstilo == 'Estilo'){
        mostraJogos(arrayGames)
    }else{
        mostraJogosEstilo(arrayGames, filtroEstilo)
    }
})

filtro[1].addEventListener('click', function(){
    let filtroPreco = filtro[1].value;
    zeraLista.innerText = '';
    if(filtroPreco == 'Preco'){
        mostraJogos(arrayGames)
    }else if (filtroPreco == 'Gratuitos'){
        mostraJogosGratuitos(arrayGames);
    }else if(filtroPreco == 'Pagos'){
        mostraJogosPagos(arrayGames);
    }
})


function mostraJogos(array){
    array.forEach(function(el){
        const li = document.createElement('li');
        li.innerText = `Nome: ${el.nome} - Estilo: ${el.estilo} - R$: ${el.preco}`;
        const listaJogos = document.querySelector('#lista');
        listaJogos.append(li);
    });
}

function mostraJogosEstilo(array, filtro){
    array.forEach(function(el){
        if(el.estilo == filtro){
            const li = document.createElement('li');
            li.innerText = `Nome: ${el.nome} - Estilo: ${el.estilo} - R$: ${el.preco}`;
        
            const listaJogos = document.querySelector('#lista');
            listaJogos.append(li);
        }

    });
}

function mostraJogosGratuitos(array){
    array.forEach(function(el){
        if(el.preco == '0.00'){
            const li = document.createElement('li');
            li.innerText = `Nome: ${el.nome} - Estilo: ${el.estilo} - R$: ${el.preco}`;
        
            const listaJogos = document.querySelector('#lista');
            listaJogos.append(li);
        }
    });
}

 
function mostraJogosPagos(array){
    array.forEach(function(el){
        if(el.preco != '0.00'){
            const li = document.createElement('li');
            li.innerText = `Nome: ${el.nome} - Estilo: ${el.estilo} - R$: ${el.preco}`;
        
            const listaJogos = document.querySelector('#lista');
            listaJogos.append(li);
        }
    });
}