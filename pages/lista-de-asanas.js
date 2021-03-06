import api from 'lib/api'
import sample from 'lodash/sample'

import Layout from 'components/layout'
import AsanaList from 'components/asana-list'

export default function AllAsanas({ asanas }) {
  const sampleAsana = sample(asanas)
  return (
    <Layout
      title="Lista de Asanas"
      subtitle="Por ordem alfabética"
      seo={{
        description:
          'Biblioteca de Asanas por ordem alfabética. Aqui você encontra as posturas clássicas e pode clicar em cada uma para aprender informações, ações, variações e curiosidades.',
        openGraph: {
          images: [
            {
              url: sampleAsana?.picture,
              width: 600,
              height: 450,
              alt: sampleAsana?.name,
            },
          ],
        },
      }}
    >
      <div className="md:flex">
        <AsanaList hideTitle asanas={asanas} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const asanas = await api.fetch('asanas')
  return {
    props: { asanas },
    revalidate: 10,
  }
}
