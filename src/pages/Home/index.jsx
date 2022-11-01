import React from 'react'
import Title from '../../components/Title'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { useIndex } from '../../hooks/pages/Products/useIndex'
import './styles.css'

const Home = () => {
  const { products, showProduct, deleteProduct } = useIndex()
  return (
    <>
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
                <td>{product.image}</td>
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