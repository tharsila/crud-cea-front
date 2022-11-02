import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import './styles.css'
const Header = () => {
  const { authenticated, logout } = useContext(AuthContext)

  return (
    <div className="bgHeader">
      <header>
        <nav>
          <ul>
            <li> <NavLink to='/'>CEA - CRUD</NavLink></li>
            <div className="navItem">
              <li> <NavLink to='/'>Painel de Produtos</NavLink> </li>
              <li> <NavLink to='/users'>Painel de Usuários</NavLink> </li>
              <li> <NavLink to='/create-products'>Cadastrar Produto</NavLink> </li>
              <li> <NavLink to='/create-users'>Cadastrar Usuários</NavLink> </li>
              {authenticated ? <li> <a href='/login' onClick={logout}>Sair</a></li> : null}
              
            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header