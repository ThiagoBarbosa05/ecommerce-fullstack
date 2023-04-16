const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const registerUser = async (name, email, password) => {
  const registeredUser = await prisma.customers.create({
    data: {
      email,
      password,
      name
    }
  })

  return registeredUser
}

const isUserAlreadyExist = async (email) => {
  const userAlreadyExists = await prisma.customers.findUnique({
    where: { email: email },
  });

  return userAlreadyExists;
};

const getProducts = async () => {
  const products = await prisma.products.findMany()

  return products
}

const getProductsById = async (id) => {
  const product = await prisma.products.findFirst({
    where: {
      id
    }
  })

  return product
}

module.exports = {
  registerUser,
  isUserAlreadyExist,
  getProducts,
  getProductsById
}