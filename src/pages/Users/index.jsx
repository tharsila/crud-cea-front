import React from 'react'
import Title from '../../components/Title'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import '../Home/styles.css'

const Users = () => {
  return (
    <>
      <Title text='Painel de Usuários' />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Teste</td>
              <td>teste@email.com</td>
              <td className='tableAction'>
                <span><FaPencilAlt /></span>
                <span><FaTrashAlt /></span>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Teste</td>
              <td>teste@email.com</td>
              <td className='tableAction'>
                <span><FaPencilAlt /></span>
                <span><FaTrashAlt /></span>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Teste</td>
              <td>teste@email.com</td>
              <td className='tableAction'>
                <span><FaPencilAlt /></span>
                <span><FaTrashAlt /></span>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Teste</td>
              <td>teste@email.com</td>
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

export default Users