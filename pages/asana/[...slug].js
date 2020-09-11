import { useRouter } from 'next/router'
import Link from 'next/link'
import kebabCase from 'lodash/kebabCase'
import map from 'lodash/map'
import filter from 'lodash/filter'
import find from 'lodash/find'

import Layout from 'components/layout'

import asanas from 'data/asanas.js'
import anatomy from 'data/anatomy.js'
import families from 'data/families.js'

export default function Asana() {
  const router = useRouter()
  const { slug } = router.query
  if (!slug) {
    return <h1>Carregando...</h1>
  }
  const mainAsana = slug[0]
  const variation = slug.length > 1
  const asana = variation
    ? null
    : find(asanas, (posture) => kebabCase(posture.name) === mainAsana)

  if (!asana) {
    return <h1>Não encontrado</h1>
  }

  const family = find(families, (f) => f.name === asana.family)
  const movements = filter(anatomy, (mov) =>
    asana.anatomyMovements.includes(mov.id),
  )
  return (
    <Layout title={asana.name} subtitle={asana.meaning}>
      <div className="md:flex justify-between items-start">
        <div className="md:order-2 md:w-5/12 block bg-gray-200 border-gray-300 border-2 py-2 px-3">
          <img
            className="max-w-full border-2 border-gray-500"
            src="/trikonasana.png"
            alt="Trikonasana"
          />
          <dl>
            <dt>Tradução</dt>
            <dd dangerouslySetInnerHTML={{ __html: asana.translation }}></dd>
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
                <Movement key={mov.id} {...mov} />
              ))}
            </dd>
          </dl>
        </div>
        <main className="md:w-7/12 md:mr-8">
          <h2>Ações</h2>
          <Actions
            big
            name="Entrando na postura"
            actions={asana.actions?.entering}
          />
          <h3>Na postura</h3>
          <Actions name="Pés e pernas" actions={asana.actions?.legs} />
          <Actions name="Coxa, pelve e abdômen" actions={asana.actions?.core} />
          <Actions
            name="Costas, tronco e peito"
            actions={asana.actions?.trunk}
          />
          <Actions name="Ombros, braços e mãos" actions={asana.actions?.arms} />
          <Actions name="Pescoço e cabeça" actions={asana.actions?.head} />
          <Actions name="Ações amplas" actions={asana.actions?.all} />
          <Actions
            big
            name="Saindo da postura"
            actions={asana.actions?.leaving}
          />
        </main>
      </div>
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

const Movement = ({ description, id }) => (
  <Link href="/anatomy/[slug]" as={`/anatomy/${id}`}>
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
