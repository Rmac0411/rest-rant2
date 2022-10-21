//require node modules
const express = require('express')

//initialize app object
const app = express()

//homepage route
app.get('/', function(req,res){
    res.send("hello world")
})

//listen for connections
app.listen(3002)