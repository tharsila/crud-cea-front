import React from 'react'
import './styles.css'

const Modal = ({children}) => {
  const closeModal = () => {
    const modal = document.getElementById('modal')
    modal.classList.add('hide')
  }

  return (
    <div id='modal' className='hide'>
      <div className='fade' onClick={closeModal}></div>
      <div className='modal'>
        <h2>Editar Produto</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal