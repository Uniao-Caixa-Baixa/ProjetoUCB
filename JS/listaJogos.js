const arrayGames = JSON.parse(sessionStorage.arrayGames);

arrayGames.forEach(function(el){
    const li = document.createElement('li');
    li.innerText = `Nome: ${el.nome} - Estilo: ${el.estilo} - R$: ${el.preco}`;

    const listaJogos = document.querySelector('#lista');
    listaJogos.append(li);
});