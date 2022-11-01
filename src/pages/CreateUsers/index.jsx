import React, { useState } from 'react'
import './styles.css'

import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { useIndex } from '../../hooks/pages/Users/useIndex'

const CreateUsers = () => {
  const { 
    name,
    email, 
    password,
    registerUser,
    setName,
    setEmail,
    setPassword,
  } = useIndex()
  
  return (
    <>
      <Title text='Cadastrar Usuários'/>
      <main>
        <div className="formContainer">
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
            <Button text='Cadastrar' handleOnClick={registerUser} />
          </form>

        </div>
      </main>
    </>
  )
}

export default CreateUsers