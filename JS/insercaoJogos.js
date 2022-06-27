let arrayGames = JSON.parse(sessionStorage.arrayGames)
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    let nome = form.elements.nome.value;
    let estilo = form.elements.estilo.value;
    let preco = form.elements.preco.value;

    if (!verificaNome(nome)){
        form.elements.nome.value = '';
        window.alert('Este jogo já está cadastrado em nossa base de dados!')
    }else if(estilo == 'Estilo'){
        window.alert('Insira um estilo para o jogo!')
    }else{       
        arrayGames.push({
            "nome": nome,
            "estilo": estilo,
            "preco": preco
        });
        sessionStorage.arrayGames = JSON.stringify(arrayGames);
        window.alert('Jogo cadastrado com sucesso!')
    }
});


function verificaNome(jogo){
    let valido = true
    arrayGames.forEach(nome => {
        if (nome['nome'] == jogo){
            valido = false
        }
    });
    return valido
}