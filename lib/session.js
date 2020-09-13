import { useState, useEffect } from 'react'
import cookies from 'js-cookie'

const login = (router) => {
  cookies.set('LOY-user', true)
  router.push('/')
}

const logout = (router) => {
  cookies.remove('LOY-user')
  router.push('/')
}

export const useLogged = () => {
  const [logged, setLogged] = useState(false)
  useEffect(() => {
    if (!!cookies.get('LOY-user')) {
      setLogged(true)
    }
  }, [])

  return logged
}

export default { login, logout }
