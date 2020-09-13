import Link from 'next/link'
import kebabCase from 'lodash/kebabCase'
import map from 'lodash/map'

import api from 'lib/api'

import Layout from 'components/layout'
import MainContent from 'components/main-content'
import HealthyVariations from 'components/healthy-variations'
import VariationPage from 'components/variation-page'

export default function Asana({
  asana,
  variation,
  variations,
  family,
  movements,
  sanscritWords,
}) {
  if (!asana) {
    return 'Loading...'
  }
  return variation ? (
    <VariationPage variation={variation} />
  ) : (
    <Layout title={asana.name} subtitle={asana.meaning}>
      <MainContent
        videos={asana.videos}
        picture={`/${asana.slug}.png`}
        cardContent={
          <dl className="p-4 pb-0 mb-4">
            <dt>Tradução</dt>
            <dd>
              {map(sanscritWords, (item) => (
                <CategoryLink
                  key={item.id}
                  prefix="glossario"
                  id={kebabCase(item.word)}
                  description={`${item.word} = ${item.translation}`}
                />
              ))}
            </dd>
            <dt>Classificação</dt>
            <dd>
              <Link
                href="/family/[slug]"
                as={`/family/${kebabCase(family.name)}`}
              >
                <a>
                  {family.meaning} (<i>{family.name}</i>)
                </a>
              </Link>
            </dd>
            <dt>Principais movimentos articulares</dt>
            <dd>
              {map(movements, (mov) => (
                <CategoryLink key={mov.id} prefix="movement" {...mov} />
              ))}
            </dd>
          </dl>
        }
      >
        {asana.introduction && <p className="text-xl">{asana.introduction}</p>}
        <Actions big name="Preparação" actions={asana.actions?.setup} />
        <Actions
          big
          name="Entrando na postura"
          actions={asana.actions?.entering}
        />
        <h3>Na postura</h3>
        <Actions name="Pés e pernas" actions={asana.actions?.legs} />
        <Actions name="Coxa, pelve e abdômen" actions={asana.actions?.core} />
        <Actions name="Costas, tronco e peito" actions={asana.actions?.trunk} />
        <Actions name="Ombros, braços e mãos" actions={asana.actions?.arms} />
        <Actions name="Pescoço e cabeça" actions={asana.actions?.head} />
        <Actions name="Ações amplas" actions={asana.actions?.all} />
        <Actions
          big
          name="Saindo da postura"
          actions={asana.actions?.leaving}
        />
      </MainContent>
      <hr />
      <h2>Saúde da postura</h2>
      <List title="Benefícios" items={asana.health?.benefits} />
      <List title="Cuidados" items={asana.health?.caution} />
      <List title="Contra-indicações" items={asana.health?.contraindications} />
      <HealthyVariations asanaId={asana.id} variations={variations} />
      {asana.curiosities && (
        <>
          <hr />
          <h2>Curiosidades</h2>
          <div
            className="max-w-screen-md"
            dangerouslySetInnerHTML={{ __html: asana.curiosities }}
          />
        </>
      )}
    </Layout>
  )
}

const List = ({ items, title }) =>
  items?.length ? (
    <div>
      <h3>{title}</h3>
      <ul className="list-disc">
        {items.map((item, i) => (
          <li key={`item-${title}-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  ) : null

const CategoryLink = ({ description, prefix, id }) => (
  <Link href={`/${prefix}/[slug]`} as={`/${prefix}/${id}`}>
    <a className="mr-2">{description};</a>
  </Link>
)

const Actions = ({ name, big, actions }) =>
  actions ? (
    <>
      {big ? <h3>{name}</h3> : <h4>{name}</h4>}
      <div dangerouslySetInnerHTML={{ __html: actions }} />
    </>
  ) : null

export async function getStaticPaths() {
  const asanas = await api.listAsanas()
  return {
    paths: asanas.map((asana) => ({ params: { slug: [asana.slug] } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const [asanaSlug, variationSlug] = slug
  const asana = await api.getAsanaBySlug(asanaSlug)
  const variations = await api.listVariations({ asanaId: asana.id })
  const variation = variationSlug
    ? await api.getVariationBySlug(variationSlug)
    : null
  const family = await api.getFamily(asana?.familyId)
  const movements = await api.listMovements(asana.movements)
  const sanscritWords = await api.listGlossary(asana.sanscritWords)
  return {
    props: { family, asana, variation, variations, movements, sanscritWords },
  }
}
