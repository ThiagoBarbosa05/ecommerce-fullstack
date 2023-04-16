const registerRouter = require('express').Router()
const {registerCustomers} = require('../controllers/passport')


registerRouter.post("/sign-up", registerCustomers)

module.exports = registerRouter