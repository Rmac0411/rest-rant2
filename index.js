//require node modules
require('dotenv').config()
const express = require('express')
//initialize app object
const app = express()

//homepage route
app.get('/', function(req,res){
    res.send("hello world")
})

//wildcard route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//listen for connections
app.listen(process.env.PORT)