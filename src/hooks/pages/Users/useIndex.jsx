import { useEffect, useState } from 'react'
import{ toast } from 'react-toastify';
import { ApiService } from '../../../services/ApiService'

export const useIndex = () => {
  const [userId, setUserId] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])

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
     toast.success('Usuário cadastrado com sucesso!')
      setUsers(prevUsers => [...prevUsers, user])
      cleanForm()
    })
    .catch((error) => {
      toast.error(error.response?.data.message)
    })
  }

  const cleanForm = () => {
    setName('')
    setEmail('')
    setPassword('')
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
      toast.success('Usuário atualizado com sucesso!')
      setUsers(oldUsers => oldUsers.map((u) => u.id === updatedUser.id ? (u = updatedUser) : u))
      hideOrShowModal(false)
    })
    .catch((error) => {
      toast.error(error.response?.data.message)
    })
  }

  const deleteUser = (user) => {
    console.log(user)
    ApiService.delete('/users/' + user.id)
    .then(() => {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id))
      toast.success('Usuário removido com sucesso!')
    })
    .catch((error) => {
      toast.error(error.response?.data.message)
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