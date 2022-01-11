import * as React from 'react'
import { useRouter } from 'next/router'
import reactToString from 'react-to-string'

import { SITE_TITLE, SITE_URL } from 'lib/constants'
import { join } from 'lib/utils'

import SEO from 'components/seo'
import Header from 'components/header'
import Skeleton from 'components/skeleton'

const Footer = React.lazy(() => import('components/footer'))

export default function Layout({ pageTitle, title, subtitle, seo, children }) {
  const { asPath } = useRouter()
  const url = `${SITE_URL}${asPath}`

  const headTitle = join([reactToString(pageTitle || title), SITE_TITLE], ' | ')
  return (
    <>
      <SEO
        title={headTitle}
        {...{ ...seo, openGraph: { ...seo?.openGraph, url } }}
      />
      <Header />
      <div className="flex flex-col items-center w-full grow">
        <article className="flex flex-col w-full px-6 py-2 pt-0 grow align-center max-w-screen-2xl">
          {title && (
            <header className="py-4 mt-0 border-b-2 border-gray-100 bg-gray-50">
              <h1 className="text-2xl text-gray-800 md:text-3xl">
                {title}
                {subtitle && (
                  <span className="block mt-1 text-xl leading-snug text-gray-500">
                    {subtitle}
                  </span>
                )}
              </h1>
            </header>
          )}
          {children}
        </article>
      </div>
      <React.Suspense fallback={<Skeleton />}>
        <Footer />
      </React.Suspense>
    </>
  )
}
