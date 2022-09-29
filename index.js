const express = require('express')
const path = require('path');

const port = 3000
const app = express()

app.set('views', path.resolve('./views'))
app.set('view engine', 'ejs')

app.listen(port, ()=>{
    console.log(`Server running on port ${port}...`)
})