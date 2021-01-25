import { useRouter } from 'next/router'
import reactToString from 'react-to-string'

import { SITE_TITLE, SITE_URL } from 'lib/constants'
import { join } from 'lib/utils'

import SEO from 'components/seo'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ pageTitle, title, subtitle, seo, children }) {
  const { asPath } = useRouter()
  const url = `${SITE_URL}${asPath}`

  const headTitle = join([reactToString(pageTitle || title), SITE_TITLE], ' | ')
  return (
    <>
      <SEO title={headTitle} {...{ ...seo, openGraph: { ...seo?.openGraph, url } }} />
      <Header />
      <article className="flex-grow max-w-screen-xl pt-0 px-6 py-2">
        {title && (
          <header className="mt-0 py-4 bg-gray-50 border-b-2 border-gray-100">
            <h1 className="text-2xl md:text-3xl text-gray-800">
              {title}
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
