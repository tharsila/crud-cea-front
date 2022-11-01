import React from 'react'
import './styles.css'

import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'

const CreateUsers = () => {
  return (
    <>
      <Title text='Criar Usuários'/>
      <main>
        <div className="formContainer">
          <form >
            <Input 
              type='text' 
              text='Nome' 
              name='username' 
              placeholder='Digite um nome...'
            />
            <Input 
              type='email' 
              text='Email' 
              name='email' 
              placeholder='Digite um email...'
            />
            <Input 
              type='password' 
              text='Senha' 
              name='password' 
              placeholder='Digite uma senha...'
            />
            <Button text='Criar' />
          </form>

        </div>
      </main>
    </>
  )
}

export default CreateUsers