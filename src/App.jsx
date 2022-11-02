import { useContext } from 'react'
import AppRoutes from './routes'
import Header from './components/Header'
import { AuthContext } from './contexts/AuthContext'

function App() {
  const { authenticated } = useContext(AuthContext)
  return (
    <>
    {authenticated ? <Header /> : null}
      
      <AppRoutes />
    </>
  )
}

export default App
