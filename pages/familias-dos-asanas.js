import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'

export default function Asana({ families }) {
  return (
    <Layout title="Famílias das posturas">
      <ul className="list-disc pl-5">
        {families.map((family) => (
          <li key={family.id}>
            <Link href={`/familia/${family.slug}`}>
              <a className="font-semibold">{family.name}:</a>
            </Link>{' '}
            {family.translation}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const families = await api.fetch('families')
  return {
    props: { families },
    revalidate: 10,
  }
}
