var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = express.env.PORT || 5000

app.use(bodyParser.json())

