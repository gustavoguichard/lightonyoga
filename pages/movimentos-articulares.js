import map from 'lodash/map'
import groupBy from 'lodash/groupBy'
import upperFirst from 'lodash/upperFirst'
import reduce from 'lodash/reduce'
import sortBy from 'lodash/sortBy'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'

export default function Asana({ movements }) {
  return (
    <Layout title="Principais movimentos articulares">
      <div className="flex flex-wrap">
        {map(movements, (collection, joint) => (
          <div key={joint} className="mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3>{joint}</h3>
            <ul className="list-disc">
              {map(collection, ({ id, name, slug }) => (
                <li key={id}>
                  <Link
                    href="/anatomia/[slug]"
                    as={`/anatomia/${slug}`}
                  >
                    <a className="font-semibold">{upperFirst(name)}</a>
                  </Link>
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
  const result = await api.listMovements()
  const grouped = groupBy(result, 'joint')
  const movements = reduce(
    grouped,
    (result, collection, key) => {
      result[key] = sortBy(collection, 'name')
      return result
    },
    {},
  )
  return {
    props: { movements },
  }
}
