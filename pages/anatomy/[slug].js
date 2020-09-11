import { useRouter } from 'next/router'
import upperFirst from 'lodash/upperFirst'
import filter from 'lodash/filter'
import find from 'lodash/find'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

import allAsanas from 'data/asanas.js'
import anatomy from 'data/anatomy.js'

export default function Asana() {
  const router = useRouter()
  const { slug } = router.query
  const movement = find(anatomy, (f) => String(f.id) === slug)
  if (!movement) {
    return <h1>Não encontrado</h1>
  }

  const asanas = filter(allAsanas, (asana) =>
    asana.anatomyMovements.includes(movement.id),
  )
  return (
    <Layout title={upperFirst(movement.description)}>
      <div className="md:flex">
        <AsanaList asanas={asanas} />
      </div>
    </Layout>
  )
}
