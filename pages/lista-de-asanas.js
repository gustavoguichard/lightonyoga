import api from 'lib/api'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function AllAsanas({ asanas }) {
  return (
    <Layout title="Lista de Asanas" subtitle="Por ordem alfabética">
      <div className="md:flex">
        <AsanaList asanas={asanas} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const asanas = await api.listAsanas()
  return {
    props: { asanas },
  }
}