import React from 'react'
import './styles.css'

const Button = ({text, handleOnClick}) => {
  return (
    <div className="btnAction">
      <a onClick={handleOnClick}>{text}</a>
    </div>
  )
}

export default Button