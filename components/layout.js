import Head from 'next/head'

import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ pageTitle, title, subtitle, children }) {
  return (
    <>
      <Header />
      <article className="max-w-screen-xl pt-0 px-6 py-2">
        <Head>
          <title>{title ? `${title} | ` : ''}Luz no Yoga</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        {title && (
          <header className="mt-0 py-4 bg-gray-50 border-b-2 border-gray-100">
            <h1 className="text-2xl md:text-3xl text-gray-800">
              {pageTitle || title}
              {subtitle && (
                <span className="block text-xl text-gray-500 mt-1 leading-snug">
                  {subtitle}
                </span>
              )}
            </h1>
          </header>
        )}
        {children}
      </article>
      <Footer />
    </>
  )
}
