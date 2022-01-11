import Link from 'next/link'

import Img from 'next/image'

export default function Footer() {
  return (
    <div className="flex justify-center border-t-4 border-gray-100 ">
      <footer className="flex justify-between w-full p-3 text-sm text-gray-500 max-w-screen-2xl">
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          {' • '}
          <Link href="/quem-somos">
            <a>Quem somos</a>
          </Link>
          {' • '}
          <a
            rel="noreferrer"
            href="mailto:contato@luznoyoga.com.br"
            target="_blank"
          >
            Contato
          </a>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <Img
            className="mb-0"
            width={80}
            height={28}
            src="/creative-commons.png"
            alt="Creative Commons Attribution"
          />
        </a>
      </footer>
    </div>
  )
}
