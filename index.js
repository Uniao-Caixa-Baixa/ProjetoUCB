(async ()=>{
    const database = require('./db')
    const User = require('./models/User')
    const Game = require('./models/Game')
    await database.sync()
})()

const User = require('./models/User')
const Game = require('./models/Game')
const { Op } = require("sequelize");

const express = require('express');
const session = require('express-session')
const methodOverride = require('method-override')
const { resolve } = require('path');

const port = 3000
const app = express()

// Configuração ejs
app.set('views', resolve('./views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({'extended':true}))
app.use(methodOverride('_method'))

app.use(express.static('public'))

app.use(session({secret: "mysecretkey"}))

// Configuração para exibir pop-ups
app.use((req, res, next)=>{
    res.locals.message = req.session.message
    res.locals.currentUser = req.session.currentUser
    delete req.session.message
    next()
})

var currentUser

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    if (req.session.currentUser){
        res.redirect('/dashboard')
    }else{
        res.render('pages/login')
    }
})

app.post('/login', async (req, res)=>{
    const {nome, senha} = req.body

    const user = await User.findOne({where:{
        [Op.or]: [{nome: nome}, {email: nome}]
    }})
    if(!user){
        req.session.message = "Usuário não encontrado! Tente novamente"
        res.redirect('/login')
    }else if(senha != user.senha){
        req.session.message = "Senha incorreta! Tente novamente"
        res.redirect('/login')
    }else{
        req.session.currentUser = user
        res.redirect('/dashboard')
    }
    
})

app.get('/registro', (req, res)=>{
    if (req.session.currentUser){
        res.redirect('/dashboard')
    }else{
        res.render('pages/registro')
    }
})

app.post('/registro', async (req, res)=>{
    const {nome, email, senha, senhaConfirm} = req.body

    const user = await User.findOne({where:{
        [Op.or]: [{nome: nome},{email: email}]
    }})
    if(user){
        req.session.message = "Já existe um usuário com esse nome ou email! Tente outro"
        res.redirect('/registro')
    }else if(senha != senhaConfirm){
        req.session.message = "As senhas não combinam! Tente novamente"
        res.redirect('/registro')
    }else{
        const new_user = await User.create({
            nome: nome,
            email: email,
            senha: senha
        })
        res.redirect('/login')
    }
})

app.get('/dashboard', (req, res)=>{
    if (!req.session.currentUser){
        res.redirect('/login')
    }else{
        currentUser = req.session.currentUser
        res.render('pages/dashboard', { currentUser })    
    }
})

app.get('/sair', (req, res)=>{
    req.session.currentUser = undefined   
    res.redirect('/')
})

app.get('/alterarSenha', (req, res)=>{
    res.render('pages/alterarSenha')
})

app.put('/alterarSenha', async (req, res)=>{
    const {email, senha, senhaConfirm} = req.body
    const user = await User.findOne({where:{
        email: email
    }})
    if (user && senha == senhaConfirm){
        user.senha = senha
        await user.save()
        res.redirect('/login')
    }else{
        res.redirect('/alterarSenha')
    }
})

app.get('/alterarCargo', (req, res)=>{
    res.render('pages/alterarCargo')
})

app.get('/insercaoJogos', (req, res)=>{
    res.render('pages/insercaoJogos')
})

app.post('/insercaoJogos', async (req, res)=>{
    const { nome, preco, tier } = req.body

    const game = await Game.findOne({where:{
        nome: nome
    }})

    if (!game){
        const new_game = await Game.create({
            nome: nome,
            preco: preco,
            tier: tier
        })
        res.redirect('/jogos')
    }else{
        req.session.message = 'Esse jogo já existe! Por favor insira outro'
        res.redirect('/insercaoJogos')
    }
})

app.get('/jogos', async (req, res)=>{
    const jogos = await Game.findAll()
    res.render('pages/jogos', { jogos })
})

app.get('/insercaoComp', (req, res)=>{
    res.render('pages/updates/insercaoComp')
})

app.get('/user/update', (req, res)=>{
    if (!req.session.currentUser){
        res.redirect('/login')
    }else{
        currentUser = req.session.currentUser
        res.render('pages/updates/update', { currentUser })
    }
})
app.put('/user/update', async (req, res)=>{
    if (req.session.currentUser){
        const { novoNome, novaSenha } = req.body
        var user = await User.findByPk(req.session.currentUser.id)
        user.nome = novoNome
        user.senha = novaSenha
        await user.save()
        req.session.currentUser = user
        res.redirect('/dashboard')
    }
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