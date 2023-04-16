export const getProducts = async () => {
  const response = await fetch('http://localhost:3000/products')
  const data = await response.json()

  return data
}

export const getProductById = async (id) => {
  const response = await fetch(`http://localhost:3000/products/${id}`)
  const data = await response.json()

  return data
}