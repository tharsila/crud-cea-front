import{ createContext, useEffect, useState } from "react";
import{ toast } from 'react-toastify';
import{ useNavigate } from 'react-router-dom';
import{ ApiService } from '../services/ApiService';


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);


  useEffect(() => {
    const getUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (getUser && token ) {
      setUser(JSON.parse(getUser));
      ApiService.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, [])

  const login = (email, password) => {
    ApiService.post('/login', { email, password })
    .then((response) => {
      const userLogged = response.data.user;
      const token = response.data.token;
      ApiService.defaults.headers.Authorization = `Bearer ${token}`;
      if (userLogged && token !== undefined) {
        localStorage.setItem('user', JSON.stringify(userLogged));
        localStorage.setItem('token', JSON.stringify(token));
        setUser(userLogged);
        navigate('/');
      }
    })
    .catch((error) => {
      toast.error(error.response?.data.message)
    })
  }

  const logout = (e) => {
    e.preventDefault()
    console.log('logout');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    ApiService.defaults.headers.Authorization = null;
    setUser(null);
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}