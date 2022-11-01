import React from 'react'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useIndex } from '../../hooks/pages/Products/useIndex'
import '../CreateUsers/styles.css'

const CreateProducts = () => {
  const {
    name,
    price, 
    image,
    registerProduct,
    setName,
    setPrice,
    setImage,
  } = useIndex()
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
              value={name}
              handleOnChange={((e) => setName(e.target.value))}
            />
            <Input 
              type='number' 
              text='Preço' 
              name='Price' 
              placeholder='Digite um preço...'
              value={price}
              handleOnChange={((e) => setPrice(e.target.value))}
            />
            <Input 
              type='text' 
              text='Imagem' 
              name='image' 
              placeholder='Envie uma imagem (url)...'
              value={image}
              handleOnChange={((e) => setImage(e.target.value))}
            />
            <Button text='Cadastrar' handleOnClick={registerProduct} />
          </form>
        </div>
      </main>
    </>
  )
}

export default CreateProducts