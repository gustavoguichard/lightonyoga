import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ title, subtitle, children }) {
  return (
    <>
      <article className="max-w-screen-xl px-6 py-2">
        <Head>
          <title>Light On Yoga</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {title && (
          <header className="mt-0">
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
      <footer className="flex justify-between py-4 px-6 bg-gray-100 border-gray-300 border-t-2">
        <p className="mb-0">
          <Link href="/">
            <a>Light On Yoga App</a>
          </Link>
          {' • '}
          <Link href="/glossario">
            <a>Glossário</a>
          </Link>
        </p>
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
