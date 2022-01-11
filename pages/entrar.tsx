import * as React from 'react'
import { useRouter } from 'next/router'
import { useFormState } from 'react-use-form-state'

import session from 'lib/session'

export default function Login() {
  const router = useRouter()
  const [{ values }, { email, password }] = useFormState()

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (values?.password === 'gurujibks') {
      session.login(router)
    } else {
      router.push('/')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col px-8 py-6 mb-12 border border-gray-200 rounded-lg bg-gray-50">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <p>
            <label htmlFor="email">E-mail</label>
            <br />
            <input className="p-4 text-lg" {...email('email')} />
          </p>
          <p>
            <label htmlFor="password">Senha</label>
            <br />
            <input className="p-4 text-lg" {...password('password')} />
          </p>
          <button className="self-stretch p-4 mx-2 mt-6 text-xl text-center bg-blue-600">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
