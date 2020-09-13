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
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
      <div className="flex flex-wrap">
        {sequence.asanas.map(({ id, description, asana, variation }) => {
          const picture = variation
            ? `/variations/${variation.id}.png`
            : `/${asana.slug}.png`
          const link = variation
            ? `/asana/${variation.asana.slug}/${variation.slug}`
            : `/asana/${asana.slug}`
          return (
            <Card
              key={id}
              picture={picture}
              link={link}
              title={variation ? variation.title : asana.name}
              subtitle={variation ? variation.asana.name : null}
              tagline={description}
            />
          )
        })}
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
  const result = await api.getSequenceBySlug(slug)
  const asanas = await result.asanas.map((item) => {
    const asana = item.variation ? null : api.getAsana(item.id)
    const variation = item.variation ? api.getVariation(item.variation) : null
    return { ...item, asana, variation }
  })
  const tags = await result.tags.map((tag) => api.getTag(tag))
  const sequence = { ...result, tags, asanas }
  return {
    props: { sequence },
  }
}
