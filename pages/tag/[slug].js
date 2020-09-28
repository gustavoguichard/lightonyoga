import upperFirst from 'lodash/upperFirst'

import api from 'lib/api'

import Layout from 'components/layout'
import VariationsList from 'components/variations-list'

export default function Asana({ tag, variations }) {
  return (
    <Layout subtitle={upperFirst(tag?.category)} title={tag?.name}>
      <div className="md:flex w-full">
        <VariationsList variations={variations} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const tags = await api.fetch('tags')
  return {
    paths: tags.map((f) => ({ params: { slug: f.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const tag = await api.fetch('tags', slug)
  const { variations } = tag
  return {
    props: { tag, variations },
  }
}
