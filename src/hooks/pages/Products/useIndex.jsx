import { useEffect, useState } from 'react'
import { ApiService } from '../../../services/ApiService'

export const useIndex = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState(false)

  useEffect(() => {
    ApiService.get('/products')
    .then((response) => {
      setProducts(response.data)
    })
  }, [])
  
  const registerProduct = (e) => {
    e.preventDefault()
    const product = {
      id: Math.random(),
      name,
      price,
      image
    }
    ApiService.post('/products', product)
    .then(() => {
      console.log('cadastrado com sucesso')
      setProducts(prevProducts => [...prevProducts, product])
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const showProduct = (product) => {
    console.log(product)
    product.name
    product.price
    product.image
    setProductSelected(true)
  }

  const editProduct = (id) => {
    const updatedProduct = {id, name, price, image}
    ApiService.put('/products/' + id, {
      name,
      price,
      image
    })
    .then(() => {
      console.log('atualizado com sucesso')
      setProducts(oldProducts => oldProducts.map((p) => p.id === updatedProduct.id ? (p = updatedProduct) : p))
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const deleteProduct = (product) => {
    console.log(product)
    ApiService.delete('/products/' + product.id)
    .then(() => {
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== product.id))
      console.log("deletou")
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return { 
    name,
    price, 
    image,
    products,
    productSelected,
    registerProduct,
    setName,
    setPrice,
    setImage,
    setProducts,
    showProduct,
    editProduct,
    deleteProduct
  }

}
