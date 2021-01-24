import upperFirst from 'lodash/upperFirst'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'

export default function Glossary({ words }) {
  return (
    <Layout
      title="Glossário"
      subtitle="Algumas traduções de palavras em Sânscrito"
    >
      <div className="md:flex">
        <ul className="list-disc">
          {words.map(({ id, name, slug, translation }) => (
            <li key={id} className="mt-0">
              <Link href={`/glossario/${slug}`}>
                <a className="text-italic font-semibold">{upperFirst(name)}:</a>
              </Link>{' '}
              {translation}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const words = await api.fetch('words')
  return {
    props: { words },
    revalidate: 10,
  }
}
