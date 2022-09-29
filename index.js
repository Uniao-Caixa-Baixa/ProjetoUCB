const express = require('express');
const { resolve } = require('path');

const port = 3000
const app = express()

app.set('views', resolve('./views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    res.render('pages/login')
})

app.get('/registro', (req, res)=>{
    res.render('pages/registro')
})

app.get('/dashboard', (req, res)=>{
    res.render('pages/dashboard')
})

app.get('/alterarSenha', (req, res)=>{
    res.render('pages/alterarSenha')
})

app.get('/alterarCargo', (req, res)=>{
    res.render('pages/alterarCargo')
})

app.get('/insercaoJogos', (req, res)=>{
    res.render('pages/insercaoJogos')
})

app.get('/jogos', (req, res)=>{
    res.render('pages/jogos')
})

app.get('/insercaoComp', (req, res)=>{
    res.render('pages/updates/insercaoComp')
})

app.get('/update', (req, res)=>{
    res.render('pages/updates/update')
})

app.get('/sobre', (req, res)=>{
    res.render('pages/sobre')
})

app.get('/suporte', (req, res)=>{
    res.render('pages/suporte')
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`)
})