import React from 'react'
import './styles.css'

const Button = ({text, handleOnClick}) => {
  return (
    <div className="btnAction">
      <button onClick={handleOnClick}>{text}</button>
    </div>
  )
}

export default Button