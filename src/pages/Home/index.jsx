import React from 'react'
import Title from '../../components/Title'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { useIndex } from '../../hooks/pages/Products/useIndex'
import Modal from '../../components/Modal'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './styles.css'

const Home = () => {
  const {
    productId, 
    name, 
    price, 
    image, 
    products,
    setName,
    setPrice,
    setImage,
    showProduct,
    editProduct,
    deleteProduct 
  } = useIndex()
  return (
    <>
      <Modal>
        <form>
          <Input 
            type='text' 
            text='Nome' 
            placeholder='Digite um nome...'
            name={name}
            value={name}
            handleOnChange={((e) => setName(e.target.value))}
          />
          <Input 
            type='number' 
            text='Preço' 
            placeholder='Digite um preço...'
            name={price}
            value={price}
            handleOnChange={((e) => setPrice(e.target.value))}
          />
          <Input 
            type='text' 
            text='Imagem' 
            placeholder='Envie uma imagem (url)...'
            name={image}
            value={image}
            handleOnChange={((e) => setImage(e.target.value))}
          />
          <Button text='Editar' handleOnClick={() => editProduct(productId)} />
          {/* <button onClick={() => editProduct(productId)}>editar</button> */}
        </form>
      </Modal>
      <Title text='Painel de Produtos' />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Produto</th>
              <th>Imagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.image} alt="imagem do produto"/></td>
                <td className='tableAction'>
                  <span><FaPencilAlt onClick={() => showProduct(product)}/></span>
                  <span><FaTrashAlt onClick={() => deleteProduct(product)}/></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home