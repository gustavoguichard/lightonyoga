import { useState, useEffect } from 'react'
import api from 'lib/api'
import sample from 'lodash/sample'
import shuffle from 'lodash/shuffle'
import startCase from 'lodash/startCase'
import take from 'lodash/take'
import Link from 'next/link'

import Layout from 'components/layout'
import MainSearch from 'components/main-search'
import AsanaCard from 'components/asana-card'
import VariationCard from 'components/variation-card'

export default function Home({ asanas, tags, variations, words }) {
  const postures = [...asanas, ...variations]
  const [list, setList] = useState([])
  const [word, setWord] = useState()
  useEffect(() => {
    setList(take(shuffle(postures), 4))
    setWord(sample(words))
  }, [])
  return (
    <Layout>
      <div className="flex mt-8 flex-col items-center">
        <MainSearch asanas={asanas} tags={tags} />
        <h4 className="text-sm font-semibold text-gray-600 self-start px-4 mb-0">
          Conheça novas posturas:
        </h4>
        <div className="flex flex-wrap w-full">
          {list.map((asana) => {
            const isVariation = !!asana.asana
            return isVariation ? (
              <VariationCard key={asana.id + asana.name} variation={asana} />
            ) : (
              <AsanaCard key={asana.id + asana.name} asana={asana} />
            )
          })}
        </div>
        <Link href="/lista-de-asanas">
          <a className="text-sm font-semibold self-start pl-4 mt-0 mb-8">
            Ver mais
          </a>
        </Link>
        <div className="md:flex">
          {word && (
            <aside className="md:w-5/12">
              <h5 className="text-sm font-semibold text-gray-600">
                Aprenda uma nova expressão em Sânscrito:
              </h5>
              <blockquote className="border-gray-200 text-gray-700 mb-0 bg-white">
                <p className="mb-0">
                  <Link href={`/glossario/${word.slug}`}>
                    <a className="text-semibold">
                      <em>{startCase(word.name)}</em>
                    </a>
                  </Link>
                  : {word.translation}
                </p>
                <Link href="/glossario">
                  <a className="text-sm">ver mais no glossário</a>
                </Link>
              </blockquote>
            </aside>
          )}
          <main className="md:w-7/12 md:ml-8">
            <blockquote>
              Eu desenvolvi os props para que as pessoas possam se beneficiar.
              Milhares estão se beneficiando e continuarão se beneficiando
              deles. Deus alguma vez registrou uma patente para sua criação?
              Então que direito eu, um mero mortal, tenho para fazer isso?{' '}
              <i>&minus; B.K.S. Iyengar</i>
            </blockquote>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const asanas = await api.fetch('asanas')
  const variations = await api.fetch('variations')
  const tags = await api.fetch('tags')
  const words = await api.fetch('words')
  return {
    props: { asanas, tags, variations, words },
    revalidate: 10,
  }
}
