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
        <header className="mt-0">
          <h1>
            {title}
            {subtitle && (
              <span className="block text-xl text-gray-600 mt-2">
                {subtitle}
              </span>
            )}
          </h1>
        </header>
        {children}
      </article>
      <footer className="py-4 px-6 bg-gray-100 border-gray-300 border-t-2">
        <Link href="/">
          <a>Light On Yoga App</a>
        </Link>
      </footer>
    </>
  )
}
