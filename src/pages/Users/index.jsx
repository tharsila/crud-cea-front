import React from 'react'
import Title from '../../components/Title'
import Modal from '../../components/Modal'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { useIndex } from '../../hooks/pages/Users/useIndex'
import '../Home/styles.css'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Users = () => {
  const{
    userId,
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    editUser,
    users, 
    showUser, 
    deleteUser 
  } = useIndex()

  return (
    <>
      <Modal>
      <form >
          <Input 
            type='text' 
            text='Nome' 
            name='username' 
            placeholder='Digite um nome...'
            value={name}
            handleOnChange={((e) => setName(e.target.value))}
          />
          <Input 
            type='email' 
            text='Email' 
            name='email' 
            placeholder='Digite um email...'
            value={email}
            handleOnChange={((e) => setEmail(e.target.value))}
          />
          <Input
            type='password' 
            text='Senha' 
            name='password' 
            placeholder='Digite uma senha...'
            value={password}
            handleOnChange={((e) => setPassword(e.target.value))}
          />
          <Button text='Cadastrar' handleOnClick={() => editUser(userId)} />
        </form>
      </Modal>
      <Title text='Painel de Usuários' />
      <div className="tableContainer">
        {users?.length ? (
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
        ) : 'Não há usuários cadastrados.'}
        
      </div>
    </>
  )
}

export default Users