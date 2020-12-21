import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import session, { useLogged } from 'lib/session'

export default function Layout({ title, subtitle, children }) {
  const router = useRouter()
  const isLogged = useLogged()
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-3 bg-gray-50 border-b-4 border-gray-100">
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
          {' • '}
          <Link href="/movimentos-articulares">
            <a>Movimentos articulares</a>
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
          <header className="mt-0 bg-gray-50 border-b-2 border-gray-100">
            <h1 className="text-3xl md:text-4xl">
              {title}
              {subtitle && (
                <span className="block text-xl text-gray-500 mt-2 leading-snug">
                  {subtitle}
                </span>
              )}
            </h1>
          </header>
        )}
        {children}
      </article>
      <footer className="flex justify-center py-4 px-6 bg-gray-50 border-gray-100 border-t-4">
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
