import first from 'lodash/first'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import upperFirst from 'lodash/upperFirst'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'

export default function Glossary({ count, words }) {
  return (
    <Layout title="Glossário Sânscrito" subtitle={`${count} verbetes do Yoga`}>
      <div className="flex flex-wrap">
        {map(words, (items, letter) => (
          <div key={letter} className="mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3>{letter}</h3>
            <ul className="list-disc pl-5 pr-4 py-0 mb-0 sm:mb-8">
              {map(items, ({ id, name, slug, translation }) => (
                <li key={id} className="mt-0">
                  <Link href={`/glossario/${slug}`}>
                    <a className="text-italic font-semibold">
                      {upperFirst(name)}:
                    </a>
                  </Link>{' '}
                  {translation}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const result = await api.fetch('words')
  const words = groupBy(result, (w) => first(upperFirst(w.name)))
  return {
    props: { count: result.length, words },
    revalidate: 10,
  }
}
