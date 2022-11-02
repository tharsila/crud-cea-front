import { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes'
import Header from './components/Header'
import { AuthContext } from './contexts/AuthContext'

function App() {
  const { authenticated } = useContext(AuthContext)
  return (
    <>
    {authenticated ? <Header /> : null}
      <AppRoutes />
      <ToastContainer />
    </>
  )
}

export default App
