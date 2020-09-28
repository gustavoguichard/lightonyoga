import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import map from 'lodash/map'
import intersection from 'lodash/intersection'

import api from 'lib/api'

import Layout from 'components/layout'
import Tag from 'components/tag'
import AsanaList from 'components/asana-list'
import VariationsList from 'components/variations-list'

const changedSearch = (allAsanas, allVariations, allTags, setLoading, setList, setSearch) => async (query) => {
  setLoading(true)
  const asanasIds = query.asanas?.split(',').map((n) => Number(n)) || []
  const tagsIds = query.tags?.split(',').map((n) => Number(n)) || []
  const asanas = allAsanas.filter(a => asanasIds.includes(a.id))
  const tags = allTags.filter((t) => tagsIds.includes(t.id))
  const variations = allVariations.filter((v) => intersection(tagsIds, v.tag_ids).length)
  setSearch({ asanas, tags })
  const list = asanas.length
  ? asanas.reduce((obj, asana) => {
    obj[`Variações de ${asana.name}`] = variations.filter(v => v.asana.id === asana.id)
    console.log(asana.id, allVariations, tagsIds)
    return obj
  }, {})
  : { Variações: variations }
  setList(list)
  setLoading(false)
}

export default function Search({ asanas, variations, tags }) {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  const [search, setSearch] = useState({})
  const handleChange = changedSearch(asanas, variations, tags, setLoading, setList, setSearch)

  const router = useRouter()

  useEffect(() => {
    handleChange(router.query)
  }, [router.query])

  return (
    <Layout title="Busca">
      {loading ? (
        'Carregando...'
      ) : (
        <div className="md:flex md:flex-col">
          <div>
            <h4>Resultados para:</h4>
            {search.tags?.map((tag) => (
              <Tag key={tag.name + tag.id} tag={tag} />
            ))}
            {!!search.asanas?.length && (
              <AsanaList hideTitle asanas={search.asanas} />
            )}
          </div>
          {!!search.tags?.length &&
            map(list, (variations, name) => (
              <div className="w-full" key={name}>
                <h3>{name}</h3>
                {variations.length ? (
                  <VariationsList variations={variations} />
                ) : (
                  'Nada encontrado'
                )}
              </div>
            ))}
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const asanas = await api.fetch('asanas')
  const variations = await api.fetch('variations')
  const tags = await api.fetch('tags')
  return {
    props: { asanas, variations, tags },
    revalidate: 10,
  }
}
