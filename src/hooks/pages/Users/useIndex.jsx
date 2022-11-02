import { useEffect, useState } from 'react'
import { ApiService } from '../../../services/ApiService'

export const useIndex = () => {
  const [userId, setUserId] = useState(null)
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

  const hideOrShowModal = (display) => {
    const modal = document.getElementById('modal')

    if (display) {
      modal.classList.remove('hide')
    }else {
      modal.classList.add('hide')
    }
  }

  const showUser = (user) => {
    console.log(user)
    setUserId(user.id)
    setName(user.name)
    setEmail(user.email)
    setPassword(user.password)
    hideOrShowModal(true)
  }

  const editUser = (userId) => {
    const updatedUser = {id: userId, name, email, password}
    ApiService.put('/users/' + userId, {
      name, email, password
    })
    .then(() => {
      console.log('atualizado com sucesso')
      setUsers(oldUsers => oldUsers.map((u) => u.id === updatedUser.id ? (u = updatedUser) : u))
      hideOrShowModal(false)
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
    userId,
    setName,
    setEmail,
    setPassword,
    setUsers,
    showUser,
    editUser,
    deleteUser
  }

}