import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex justify-between p-3 border-gray-100 border-t-4">
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' • '}
        <Link href="/quem-somos">
          <a>Quem somos</a>
        </Link>
        {' • '}
        <a href="mailto:gustavoguichard@gmail.com">Contato</a>
      </div>
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
  )
}
