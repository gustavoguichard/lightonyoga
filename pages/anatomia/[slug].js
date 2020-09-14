import kebabCase from 'lodash/kebabCase'
import upperFirst from 'lodash/upperFirst'

import api from 'lib/api'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function AnatomyMovement({ movement, asanas }) {
  return (
    <Layout title={upperFirst(movement?.name)} subtitle="Movimento articular">
      <div className="md:flex">
        <AsanaList asanas={asanas} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const movements = await api.listMovements()
  return {
    paths: movements.map((m) => ({ params: { slug: kebabCase(m.name) } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const movement = await api.getMovementBySlug(slug)
  const asanas = await api.listAsanas({ movement: movement?.id })
  return {
    props: { movement, asanas },
  }
}
