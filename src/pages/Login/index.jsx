import React, { useState, useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'
import { AuthContext } from '../../contexts/AuthContext'
import '../../pages/Home/styles.css'

const Login = () => {
  const {login, loading } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [show, setShow] = useState(false) eye password

  const handleSubmit = (e) => {
    login(email, password)
  }

  return (
    <>
      <Title text='Login'/>
      <main>
        <div className="formContainer">
          <form>
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
            <Button text='Entrar' handleOnClick={handleSubmit} />
          </form>
        </div>
      </main>
    </>
  )
}

export default Login