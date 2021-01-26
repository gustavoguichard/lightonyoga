import Link from 'next/link'

export default function Header() {
  return (
    <div className="w-full flex justify-center bg-gray-50 border-b-4 border-gray-100">
      <div className="flex flex-col align-start w-full max-w-screen-2xl md:flex-row p-3">
        <p className="mb-0 text-sm text-gray-500">
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
            <a>Glossário Sânscrito</a>
          </Link>
          {' • '}
          <Link href="/lista-de-props">
            <a>
              Lista de <em>Props</em>
            </a>
          </Link>
          {' • '}
          <Link href="/movimentos-articulares">
            <a>Movimentos articulares</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
