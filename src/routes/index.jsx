import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateUsers from '../pages/CreateUsers'
import CreateProducts from '../pages/CreateProducts'
import Users from '../pages/Users'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/create-users' element={<CreateUsers />}/>
      <Route path='/create-products' element={<CreateProducts />}/>
    </Routes>
  )
}

export default AppRoutes