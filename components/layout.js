import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import session, { useLogged } from 'lib/session'

export default function Layout({ title, subtitle, children }) {
  const router = useRouter()
  const isLogged = useLogged()
  return (
    <>
      <div className="flex justify-between p-3 bg-gray-100 border-b-2 border-gray-300">
        <p className="mb-0">
          <Link href="/">
            <a>Home</a>
          </Link>
          {' • '}
          <Link href="/lista-de-asanas">
            <a>
              Lista de <em>Asanas</em>
            </a>
          </Link>
          {' • '}
          <Link href="/familias-dos-asanas">
            <a>
              Famílias dos <em>Asanas</em>
            </a>
          </Link>
          {' • '}
          <Link href="/glossario">
            <a>Glossário</a>
          </Link>
        </p>
        <a
          className="self-end"
          href={isLogged ? '#' : '/entrar'}
          onClick={(ev) => {
            if (isLogged) {
              ev.preventDefault()
              session.logout(router)
            }
          }}
        >
          {isLogged ? 'Sair' : 'Login'}
        </a>
      </div>
      <article className="max-w-screen-xl pt-0 px-6 py-2">
        <Head>
          <title>Light On Yoga</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {title && (
          <header className="mt-0 bg-gray-100 border-b-2">
            <h1>
              {title}
              {subtitle && (
                <span className="block text-xl text-gray-600 mt-2 leading-snug">
                  {subtitle}
                </span>
              )}
            </h1>
          </header>
        )}
        {children}
      </article>
      <footer className="flex justify-center py-4 px-6 bg-gray-100 border-gray-300 border-t-2">
        <a
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <img
            className="mb-0"
            src="/creative-commons.png"
            alt="Creative Commons Attribution"
          />
        </a>
      </footer>
    </>
  )
}
