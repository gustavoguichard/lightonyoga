import Head from 'next/head'

import Header from 'components/header'

export default function Layout({ title, subtitle, children }) {
  return (
    <>
      <Header />
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
