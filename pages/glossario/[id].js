import upperFirst from 'lodash/upperFirst'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function GlossaryWord({ word, asanas }) {
  return (
    <Layout
      title={upperFirst(word?.word)}
      subtitle={upperFirst(word?.translation)}
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
  const words = await api.listGlossary()
  return {
    paths: words.map((w) => ({ params: { id: String(w.id) } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const word = api.getWord(id)
  const asanas = api.listAsanas({ word: word?.id })
  return {
    props: { word, asanas },
  }
}
