let formulario = document.querySelector('form');


formulario.addEventListener('submit', function(e){
    e.preventDefault()
    window.location = 'pages/jogos.html';
});