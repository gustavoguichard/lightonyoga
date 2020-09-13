import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'

export default function SequencePage({ sequences }) {
  return (
    <Layout title="Sequências">
      <ul className="list-disc">
        {sequences.map((sequence) => (
          <li key={sequence.id}>
            <Link href="/sequencia/[slug]" as={`/sequencia/${sequence.slug}`}>
              <a>{sequence.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const sequences = await api.listSequences()
  return {
    props: { sequences },
  }
}
