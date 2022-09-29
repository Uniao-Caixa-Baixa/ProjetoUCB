const express = require('express');
const { resolve } = require('path');

const port = 3000
const app = express()

app.set('views', resolve('./views'))
app.set('view engine', 'ejs')

app.use(express.static(resolve('./public')))

app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`)
})