const bcrypt = require("bcrypt");

const {registerUser, isUserAlreadyExist, getProducts, getProductsById} = require('../model/db')

exports.registerCustomers = async (req, res) => {
  const {name, email, password} = req.body
  
  const userAlreadyExists = await isUserAlreadyExist(email)
  if(userAlreadyExists) return res.json({error: "User already exist"})

  const hashPassword = async (password, saltRounds) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds)
      const hash = await bcrypt.hash(password, salt)

      return hash
    } catch (err) {
      console.log(err)
    }
  }

  const hashedPassword = await hashPassword(password, 10)

  const customer = await registerUser(name, email, hashedPassword)

  req.session.user = customer

  res.json(req.session.user)
}

exports.getProducts = async (req, res) => {
  const products = await getProducts()

  res.json(products)
}

exports.getProductsById = async (req, res) => {
  const id = Number(req.params.id)

  const product = await getProductsById(id)

  res.json(product)
}