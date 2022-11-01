import { useEffect, useState } from 'react'
import { ApiService } from '../../../services/ApiService'

export const useIndex = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(false)

  useEffect(() => {
    ApiService.get('/users')
    .then((response) => {
      setUsers(response.data)
    })
  }, [])
  
  const registerUser = (e) => {
    e.preventDefault()
    const user = {
      id: Math.random(),
      name,
      email,
      password
    }

    ApiService.post('/users', user)
    .then(() => {
      console.log('cadastrado com sucesso')
      setUsers(prevUsers => [...prevUsers, user])
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const showUser = (user) => {
    console.log(user)
    user.name
    user.email
    user.password
    setSelectedUser(true)
  }

  const editUser = (id) => {
    const updatedUser = {id, name, email, password}
    ApiService.put('/users/' + id, {
      name, email, password
    })
    .then(() => {
      console.log('atualizado com sucesso')
      setUsers(oldUsers => oldUsers.map((u) => u.id === updatedUser.id ? (u = updatedUser) : u))
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const deleteUser = (user) => {
    console.log(user)
    ApiService.delete('/users/' + user.id)
    .then(() => {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id))
      console.log("deletou")
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return { 
    name,
    email, 
    password,
    users,
    registerUser,
    setName,
    setEmail,
    setPassword,
    setUsers,
    showUser,
    editUser,
    deleteUser
  }

}