import Link from 'next/link'

import api from 'lib/api'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function Asana({ family, asanas }) {
  return (
    <Layout title={family?.name} subtitle={family?.meaning}>
      <p className="text-xs mb-0">
        Ver todas as{' '}
        <Link href="/familias-dos-asanas">
          <a>Famílias dos Asanas</a>
        </Link>
      </p>
      <div className="md:flex">
        <AsanaList asanas={asanas} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const families = await api.listFamilies()
  return {
    paths: families.map((f) => ({ params: { slug: f.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const family = await api.getFamilyBySlug(slug)
  const asanas = await api.listAsanas({ family: family?.id })
  return {
    props: { family, asanas },
  }
}
