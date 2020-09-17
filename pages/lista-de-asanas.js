import sortBy from 'lodash/sortBy'

import api from 'lib/api'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function AllAsanas({ asanas }) {
  return (
    <Layout title="Lista de Asanas" subtitle="Por ordem alfabética">
      <div className="md:flex">
        <AsanaList hideTitle asanas={asanas} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const result = await api.listAsanas()
  const asanas = sortBy(result, 'name')
  return {
    props: { asanas },
  }
}
