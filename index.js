(async ()=>{
    const database = require('./db')
    const User = require('./models/User')
    await database.sync()
})()
const User = require('./models/User')
const { Op } = require("sequelize");

const express = require('express');
const methodOverride = require('method-override')
const { resolve } = require('path');

const port = 3000
const app = express()

app.set('views', resolve('./views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({'extended':true}))
app.use(methodOverride('_method'))

app.use(express.static('public'))

var currentUser

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    if (currentUser){
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
    if(user && user.senha == senha){
        currentUser = user
        res.redirect('/dashboard')
    }else{
        res.redirect('/login')
    }
    
})

app.get('/registro', (req, res)=>{
    if (currentUser){
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
    if(user === null && senha == senhaConfirm){
        const new_user = await User.create({
            nome: nome,
            email: email,
            senha: senha
        })
        res.redirect('/login')
    }else{
        res.redirect('/registro')
    }
})

app.get('/dashboard', (req, res)=>{
    if (!currentUser){
        res.redirect('/login')
    }else{
        res.render('pages/dashboard', { currentUser })    
    }
})

app.get('/sair', (req, res)=>{
    currentUser = undefined    
    res.redirect('/')
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

app.get('/user/update', (req, res)=>{
    if (!currentUser){
        res.redirect('/login')
    }else{   
        res.render('pages/updates/update', { currentUser })
    }
})
app.put('/user/update', async (req, res)=>{
    if (currentUser){
        const { novoNome, novaSenha } = req.body
        currentUser.nome = novoNome
        currentUser.senha = novaSenha
        await currentUser.save()
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