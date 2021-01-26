import Link from 'next/link'

import Img from 'components/img'

export default function Footer() {
  return (
    <div className="flex justify-center border-gray-100 border-t-4 ">
      <footer className="flex w-full max-w-screen-2xl justify-between p-3 text-sm text-gray-500">
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          {' • '}
          <Link href="/quem-somos">
            <a>Quem somos</a>
          </Link>
          {' • '}
          <a href="mailto:contato@luznoyoga.com.br" target="_blank">
            Contato
          </a>
        </div>
        <a
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <Img
            className="mb-0"
            src="/creative-commons.png"
            alt="Creative Commons Attribution"
          />
        </a>
      </footer>
    </div>
  )
}
