import upperFirst from 'lodash/upperFirst'
import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function AnatomyMovement({ movement, asanas }) {
  return (
    <Layout title={upperFirst(movement?.name)} subtitle="Movimento articular">
      <p className="text-xs mb-0">
        Ver os{' '}
        <Link href="/movimentos-articulares">
          <a>principais movimentos articulares</a>
        </Link>
      </p>
      <div className="md:flex">
        <AsanaList asanas={asanas} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const movements = await api.fetch('movements')
  return {
    paths: movements.map((m) => ({ params: { slug: m.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const movement = await api.fetch('movements',slug)
  const { asanas } = movement
  return {
    props: { movement, asanas },
    revalidate: 10,
  }
}
