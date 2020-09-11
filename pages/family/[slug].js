import { useRouter } from 'next/router'
import kebabCase from 'lodash/kebabCase'
import filter from 'lodash/filter'
import find from 'lodash/find'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

import allAsanas from 'data/asanas.js'
import families from 'data/families.js'

export default function Asana() {
  const router = useRouter()
  const { slug } = router.query
  const family = find(families, (f) => kebabCase(f.name) === slug)
  if (!family) {
    return <h1>Não encontrado</h1>
  }

  const asanas = filter(allAsanas, (asana) => asana.family === family.name)
  return (
    <Layout title={family.name} subtitle={family.meaning}>
      <div className="md:flex">
        <AsanaList asanas={asanas} />
      </div>
    </Layout>
  )
}
