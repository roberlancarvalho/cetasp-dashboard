var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.port || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

var Users = require('./')

app.use('/users', Users)

app.listen(port, () => {
    console.log("O servidor está rodando na porta: " + port)
})