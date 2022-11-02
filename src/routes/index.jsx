import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import CreateUsers from '../pages/CreateUsers'
import CreateProducts from '../pages/CreateProducts'
import Users from '../pages/Users'
import Header from '../components/Header'
import Login from '../pages/Login'
import { AuthContext } from '../contexts/AuthContext'

const AppRoutes = () => {
  const { authenticated } = useContext(AuthContext);
  
  const Private = ({children}) => {
  
    if (!authenticated) {
      return <Navigate to='/login'/>
    }
  
    return children
  }

  const IsLogged = ({children}) => {

    if (authenticated) {
      return <Navigate to='/'/>
    }
  
    return children
  }

  return (
    <Routes>
      <Route path='/' element={<Private><Home /></Private>}/>
      <Route path='/home' element={<Private><Home /></Private>}/>
      <Route path='/users' element={<Private><Users /></Private>}/>
      <Route path='/create-users' element={<Private><CreateUsers /></Private>}/>
      <Route path='/create-products' element={<Private><CreateProducts /></Private>}/>
      <Route path='/login' element={<IsLogged><Login /></IsLogged>}/>
    </Routes>

  )
}

export default AppRoutes