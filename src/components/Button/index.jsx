import React from 'react'
import './styles.css'

const Button = ({text}) => {
  return (
    <div className="btnAction">
      <button>{text}</button>
    </div>
  )
}

export default Button