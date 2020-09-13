import { useRouter } from 'next/router'
import { useFormState } from 'react-use-form-state'

import session from 'lib/session'

export default function Login() {
  const router = useRouter()
  const [, { email, password }] = useFormState()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    session.login(router)
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col py-6 px-8 mb-12 bg-gray-200 border-2 border-gray-300 rounded-lg">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <p>
            <label for="email">E-mail</label>
            <input {...email('email')} />
          </p>
          <p>
            <label for="password">Senha</label>
            <input {...password('password')} />
          </p>
          <button className="self-stretch p-4 text-xl mt-6 mx-2 text-center bg-blue-600">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
