import React from 'react'
import Title from '../../components/Title'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import './styles.css'

const Home = () => {
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
            <tr>
              <td>1</td>
              <td>Celular 2022</td>
              <td>R$ 5000</td>
              <td>https://imagem.com</td>
              <td className='tableAction'>
                <span><FaPencilAlt /></span>
                <span><FaTrashAlt /></span>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celular 2022</td>
              <td>R$ 5000</td>
              <td>https://imagem.com</td>
              <td className='tableAction'>
                <span><FaPencilAlt /></span>
                <span><FaTrashAlt /></span>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celular 2022</td>
              <td>R$ 5000</td>
              <td>https://imagem.com</td>
              <td className='tableAction'>
                <span><FaPencilAlt /></span>
                <span><FaTrashAlt /></span>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Celular 2022</td>
              <td>R$ 5000</td>
              <td>https://imagem.com</td>
              <td className='tableAction'>
                <span><FaPencilAlt /></span>
                <span><FaTrashAlt /></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home