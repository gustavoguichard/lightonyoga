import upperFirst from 'lodash/upperFirst'

import api from 'lib/api'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function AnatomyMovement({ movement, asanas }) {
  return (
    <Layout
      title={upperFirst(movement?.description)}
      subtitle="Movimento articular"
    >
      <div className="md:flex">
        <AsanaList asanas={asanas} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const movements = await api.listMovements()
  return {
    paths: movements.map((f) => ({ params: { id: String(f.id) } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const movement = await api.getMovement(id)
  const asanas = await api.listAsanas({ movement: movement?.id })
  return {
    props: { movement, asanas },
  }
}
