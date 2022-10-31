import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
const Header = () => {
  return (
    <div className="bgHeader">
      <header>
        <nav>
          <ul>
            <li>CEA - CRUD</li>
            <div className="navItem">
              <li> <NavLink to='/home'>Painel de Produtos</NavLink> </li>
              <li> <NavLink to='/users'>Painel de Usuários</NavLink> </li>
              <li> <NavLink to='/create-products'>Cadastrar Produto</NavLink> </li>
              <li> <NavLink to='/create-users'>Cadastrar Usuários</NavLink> </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header