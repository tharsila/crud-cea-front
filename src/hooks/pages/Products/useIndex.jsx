import { useEffect, useState } from 'react'
import { ApiService } from '../../../services/ApiService'

export const useIndex = () => {
  const [productId, setProductId] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [products, setProducts] = useState([])

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

  const hideOrShowModal = (display) => {
    const modal = document.getElementById('modal')
    if (display) {
      modal.classList.remove('hide')
    } else {
      modal.classList.add('hide')
    }
  }

  const showProduct = (product) => {
    setProductId(product.id)
    setName(product.name)
    setPrice(product.price)
    setImage(product.image)
    hideOrShowModal(true)
  }

  const editProduct = (productId) => {
    const updatedProduct = {id: productId, name, price, image}
    ApiService.put('/products/' + productId, {
      name,
      price,
      image
    })
    .then(() => {
      console.log('atualizado com sucesso')
      setProducts(oldProducts => oldProducts.map((p) => p.id === updatedProduct.id ? (p = updatedProduct) : p))
      hideOrShowModal(false)
    })
    .catch((error) => {
      console.error(error)
    })

    console.log(updatedProduct)
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
    productId,
    name,
    price, 
    image,
    products,
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
