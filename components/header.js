import Link from 'next/link'
// import { useRouter } from 'next/router'

// import session, { useLogged } from 'lib/session'

export default function Header() {
  // const router = useRouter()
  // const isLogged = useLogged()
  return (
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
        <Link href="/conheca-os-props">
          <a>
            Conheça os <em>Props</em>
          </a>
        </Link>
        {' • '}
        <Link href="/movimentos-articulares">
          <a>Movimentos articulares</a>
        </Link>
      </p>
      {/* <a
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
      </a> */}
    </div>
  )
}
