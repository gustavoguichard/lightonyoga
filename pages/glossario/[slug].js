import upperFirst from 'lodash/upperFirst'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function GlossaryWord({ word, asanas }) {
  return (
    <Layout
      title={
        <>
          {upperFirst(word?.name)}
          <span className="ml-3 text-lg text-gray-600">
            <span className="text-sm mr-2">/</span>
            {upperFirst(word?.translation)}
            <span className="text-sm ml-2">/</span>
          </span>
        </>
      }
    >
      <p className="text-xs mb-0">
        Ir para o{' '}
        <Link href="/glossario">
          <a>Glossário</a>
        </Link>
      </p>
      <div className="md:flex">
        <AsanaList asanas={asanas} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const words = await api.fetch('words')
  return {
    paths: words.map((w) => ({ params: { slug: w.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const word = await api.fetch('words', slug)
  const { asanas } = word
  return {
    props: { word, asanas },
  }
}
