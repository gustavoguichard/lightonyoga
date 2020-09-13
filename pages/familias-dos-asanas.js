import sortBy from 'lodash/sortBy'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function Asana({ families }) {
  return (
    <Layout title="Famílias das posturas">
      <ul className="list-disc">
        {families.map((family) => (
          <li key={family.id}>
            <Link href="/familia/[slug]" as={`/familia/${family.slug}`}>
              <a className="font-semibold">{family.name}:</a>
            </Link>{' '}
            {family.meaning}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const result = await api.listFamilies()
  const families = sortBy(result, 'name')
  return {
    props: { families },
  }
}
