import cookies from 'js-cookie'

const login = (router) => {
  cookies.set('LOY-user', true)
  router.push('/')
}

const logout = (router) => {
  cookies.remove('LOY-user')
  router.push('/')
}

const isLogged = () => !!cookies.get('LOY-user')

export default { login, logout, isLogged }
