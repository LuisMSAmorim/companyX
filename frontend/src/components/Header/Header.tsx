import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { HeaderContainer } from './styles'

export function Header() {
  const [userIsLogged, setUserIsLogged] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    token ? setUserIsLogged(true) : setUserIsLogged(false)
  }, [])

  function handleLogout() {
    localStorage.removeItem('token')
    setUserIsLogged(false)
    navigate('/login')
  }

  return (
    <HeaderContainer>
      <h1>CompanyX</h1>
      {userIsLogged ? (
        <a onClick={handleLogout}>Logout</a>
      ) : (
        <a href="/login">Login</a>
      )}
    </HeaderContainer>
  )
}
