import kebabCase from 'lodash/kebabCase'
import sortBy from 'lodash/sortBy'
import upperFirst from 'lodash/upperFirst'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'

export default function GlossaryWord({ words }) {
  return (
    <Layout
      title="Glossário"
      subtitle="Algumas traduções de palavras em Sânscrito"
    >
      <div className="md:flex">
        <ul className="list-disc">
          {words.map(({ id, word, translation }) => (
            <li key={id} className="mt-0">
              <Link href="/glossario/[id]" as={`/glossario/${kebabCase(word)}`}>
                <a className="text-italic font-semibold">{upperFirst(word)}:</a>
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
  const result = await api.listGlossary()
  const words = sortBy(result, 'word')
  return {
    props: { words },
  }
}
