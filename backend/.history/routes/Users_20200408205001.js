const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        created: today
    }

    User.findOnde({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        
    })
})