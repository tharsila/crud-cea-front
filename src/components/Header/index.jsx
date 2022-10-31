import React from 'react'
import './styles.css'
const Header = () => {
  return (
    <div className="bgHeader">
      <header>
        <nav>
          <ul>
            <li>CEA - CRUD</li>
            <div className="navItem">
              <li>Painel de Usuários</li>
              <li>Painel de Produtos</li>
              <li>Cadastrar Usuário</li>
              <li>Cadastrar Produto</li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header