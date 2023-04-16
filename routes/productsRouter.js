const productsRouter = require('express').Router()
const {getProducts, getProductsById} = require('../controllers/index')


productsRouter.get('/products', getProducts)

productsRouter.get('/products/:id', getProductsById)

module.exports = productsRouter