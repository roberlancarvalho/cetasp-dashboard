const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("nodejs_login1", "root1", "", {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30
    }
})