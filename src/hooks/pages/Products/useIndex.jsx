import { useEffect, useState } from 'react'
import{ toast } from 'react-toastify';
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
      name,
      price,
      image
    }
    ApiService.post('/products', product)
    .then(() => {
      toast.success('Produto cadastrado com sucesso!')
      cleanForm()
      setProducts(prevProducts => [...prevProducts, product])
    })
    .catch((error) => {
      toast.error(error.response?.data.message)
    })
  }

  const cleanForm = () => {
    setName('')
    setPrice('')
    setImage('')
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
      toast.success('Produto atualizado com sucesso!')
      setProducts(oldProducts => oldProducts.map((p) => p.id === updatedProduct.id ? (p = updatedProduct) : p))
      hideOrShowModal(false)
    })
    .catch((error) => {
      toast.error(error.response?.data.message)
    })

    console.log(updatedProduct)
  }

  const deleteProduct = (product) => {
    ApiService.delete('/products/' + product.id)
    .then(() => {
      toast.success('Produto removido com sucesso!')
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== product.id))
    })
    .catch((error) => {
      toast.error(error.response?.data.message)
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
