import { useEffect, useState } from 'react'
import { ApiService } from '../../../services/ApiService'

export const useIndex = () => {
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

  return { 
    name,
    email, 
    password,
    users,
    registerUser,
    setName,
    setEmail,
    setPassword,
    setUsers
  }

}