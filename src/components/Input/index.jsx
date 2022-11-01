import React from 'react'
import './styles.css'

const Input = ({type, text, name, placeholder, handleOnChange, value}) => {
  return (
    <div className='formGroup'>
      <label htmlFor={name}>{text}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        name={name}
        id={name}
        value={value} 
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Input