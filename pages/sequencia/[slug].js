import api from 'lib/api'

import Layout from 'components/layout'
import Card from 'components/card'
import Tag from 'components/tag'

export default function SequencePage({ sequence }) {
  return (
    <Layout title={sequence.name}>
      <div
        className="max-w-screen-md"
        dangerouslySetInnerHTML={{ __html: sequence.description }}
      />
      <div className="-mt-2 mb-2">
        {sequence.tags.map((tag) => (
          <Tag key={'tag-' + tag.id} tag={tag} />
        ))}
      </div>
      <div className="flex flex-wrap">
        {sequence.asanas.map(({ tagline, asana, variation }, idx) => (
          <Card
            key={`${idx}-${(variation || asana).id}`}
            pose={variation || asana}
            title={variation ? asana.name : asana.name}
            subtitle={variation ? variation.name : null}
            tagline={tagline}
          />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const sequences = await api.listSequences()
  return {
    paths: sequences.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const sequence = await api.getSequenceBySlug(slug)
  return {
    props: { sequence },
  }
}
