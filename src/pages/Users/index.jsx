import React from 'react'
import Title from '../../components/Title'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { useIndex } from '../../hooks/pages/Users/useIndex'
import '../Home/styles.css'

const Users = () => {
  const{ users, showUser, deleteUser } = useIndex()

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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className='tableAction'>
                  <span><FaPencilAlt onClick={() => showUser(user)} /></span>
                  <span><FaTrashAlt onClick={() => deleteUser(user)}/></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Users