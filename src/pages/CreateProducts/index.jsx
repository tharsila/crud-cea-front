import React from 'react'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import '../CreateUsers/styles.css'

const CreateProducts = () => {
  return (
    <>
      <Title text='Cadastrar Produto'/>
      <main>
        <div className="formContainer">
          <form >
            <Input 
              type='text' 
              text='Nome' 
              name='productName' 
              placeholder='Digite um nome...'
            />
            <Input 
              type='number' 
              text='Preço' 
              name='Price' 
              placeholder='Digite um preço...'
            />
            <Input 
              type='text' 
              text='Imagem' 
              name='image' 
              placeholder='Envie uma imagem (url)...'
            />
            <Button text='Cadastrar' />
          </form>
        </div>
      </main>
    </>
  )
}

export default CreateProducts